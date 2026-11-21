
      (function () {
        var SUPABASE_URL = 'https://kduyohpsdmgvorejbwjl.supabase.co';
        var SUPABASE_KEY = 'sb_publishable_cf0MR94grkTgocc5axUd5A_7tYFMATn';
        var form = document.getElementById('revForm');
        if (!form) return;
        var starBtns = [].slice.call(document.querySelectorAll('#revStars [data-star]'));
        var nameInput = document.getElementById('revName');
        var textInput = document.getElementById('revText');
        var errorEl = document.getElementById('revError');
        var hintEl = document.getElementById('revRatingHint');
        var listEl = document.getElementById('revList');
        var successEl = document.getElementById('revSuccess');
        var emptyEl = document.getElementById('revEmpty');
        var avgNum = document.getElementById('revAvgNum');
        var avgStars = document.getElementById('revAvgStars');
        var avgText = document.getElementById('revAvgText');
        var loadingEl = document.getElementById('revLoading');
        var loadErrorEl = document.getElementById('revLoadError');
        var submitBtn = document.getElementById('revSubmitBtn');
        var labels = ['', '1 star · Poor', '2 stars · Fair', '3 stars · Good', '4 stars · Great', '5 stars · Excellent'];
        var rating = 0;
        var reviews = [];
        var submitting = false;

        function supabaseHeaders(extra) {
          var h = { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY };
          if (extra) { for (var k in extra) h[k] = extra[k]; }
          return h;
        }
        function formatDate(iso) {
          if (!iso) return '';
          var d = new Date(iso);
          if (isNaN(d.getTime())) return '';
          try {
            return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
          } catch (e) {
            return d.toLocaleDateString();
          }
        }
        function starRow(el, filled) {
          el.textContent = '';
          for (var i = 1; i <= 5; i++) {
            var s = document.createElement('span');
            if (i > filled) s.className = 'off';
            s.textContent = '★';
            el.appendChild(s);
          }
        }
        function paintStars() {
          starBtns.forEach(function (b) {
            var v = parseInt(b.getAttribute('data-star'), 10);
            b.classList.toggle('on', v <= rating);
            b.setAttribute('aria-checked', String(v === rating));
          });
          hintEl.textContent = rating ? labels[rating] : 'Tap a star to rate your trip.';
        }
        starBtns.forEach(function (b) {
          b.addEventListener('click', function () {
            rating = parseInt(b.getAttribute('data-star'), 10);
            errorEl.textContent = '';
            paintStars();
          });
        });

        function renderReviews() {
          listEl.querySelectorAll('.rev-item').forEach(function (n) { n.remove(); });
          emptyEl.hidden = reviews.length > 0;
          if (!reviews.length) {
            avgNum.textContent = '–';
            starRow(avgStars, 0);
            avgText.textContent = 'No reviews posted here yet. Yours could be the first one below.';
            return;
          }
          var sum = reviews.reduce(function (a, r) { return a + (Number(r.rating) || 0); }, 0);
          var avg = sum / reviews.length;
          avgNum.textContent = avg.toFixed(1);
          starRow(avgStars, Math.round(avg));
          avgText.textContent = avg.toFixed(1) + ' out of 5 · ' + reviews.length + (reviews.length === 1 ? ' review' : ' reviews');
          reviews.forEach(function (r) {
            var rRating = Number(r.rating) || 0;
            var rText = r.review != null ? r.review : (r.text || '');
            var rDate = formatDate(r.created_at);
            var item = document.createElement('article');
            item.className = 'rev-item';
            var top = document.createElement('div');
            top.className = 'top';
            var stars = document.createElement('span');
            stars.className = 'stars';
            stars.setAttribute('aria-label', rRating + ' out of 5 stars');
            for (var i = 1; i <= 5; i++) {
              var s = document.createElement('span');
              if (i > rRating) s.className = 'off';
              s.textContent = '★';
              stars.appendChild(s);
            }
            var name = document.createElement('span');
            name.className = 'name';
            name.textContent = r.name || '';
            top.appendChild(stars);
            top.appendChild(name);
            if (rDate) {
              var dateEl = document.createElement('span');
              dateEl.className = 'date';
              dateEl.textContent = rDate;
              top.appendChild(dateEl);
            }
            var text = document.createElement('p');
            text.className = 'text';
            text.textContent = rText;
            item.appendChild(top);
            item.appendChild(text);
            listEl.appendChild(item);
          });
        }

        function loadReviews() {
          if (loadingEl) loadingEl.hidden = false;
          if (loadErrorEl) loadErrorEl.hidden = true;
          var url = SUPABASE_URL + '/rest/v1/reviews?select=id,name,rating,review,created_at&approved=eq.true&order=created_at.desc';
          fetch(url, { method: 'GET', headers: supabaseHeaders() })
            .then(function (res) {
              if (!res.ok) throw new Error('Load failed: ' + res.status);
              return res.json();
            })
            .then(function (data) {
              reviews = Array.isArray(data) ? data : [];
              if (loadingEl) loadingEl.hidden = true;
              renderReviews();
            })
            .catch(function () {
              reviews = [];
              if (loadingEl) loadingEl.hidden = true;
              if (loadErrorEl) loadErrorEl.hidden = false;
              /* Keep the honest empty state visible and the form usable on error. */
              renderReviews();
              if (loadErrorEl) loadErrorEl.hidden = false;
            });
        }

        form.addEventListener('submit', function (e) {
          e.preventDefault();
          if (submitting) return;
          var name = nameInput.value.trim();
          var text = textInput.value.trim();
          if (!rating) { errorEl.textContent = 'Please tap the stars to pick a rating first.'; starBtns[0].focus(); return; }
          if (!name) { errorEl.textContent = 'Please add your name.'; nameInput.focus(); return; }
          if (!text) { errorEl.textContent = 'Please write a short review.'; textInput.focus(); return; }
          if (rating < 1 || rating > 5) { errorEl.textContent = 'Please pick a rating between 1 and 5 stars.'; starBtns[0].focus(); return; }
          errorEl.textContent = '';
          if (successEl) successEl.textContent = '';
          submitting = true;
          if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Saving your review…'; }
          var payload = { name: name, rating: rating, review: text, approved: true };
          fetch(SUPABASE_URL + '/rest/v1/reviews', {
            method: 'POST',
            headers: supabaseHeaders({ 'Content-Type': 'application/json', 'Prefer': 'return=minimal' }),
            body: JSON.stringify(payload)
          })
            .then(function (res) {
              if (!res.ok) throw new Error('Save failed: ' + res.status);
              /* Auto-approved: show it on the page straight away. */
              reviews.unshift({ name: name, rating: rating, review: text, created_at: new Date().toISOString() });
              renderReviews();
              if (successEl) successEl.textContent = 'Thank you, ' + name + '! Your review is live on this page now. Other travellers can see it straight away.';
              hintEl.textContent = 'Review saved and live on this page now.';
              nameInput.value = '';
              textInput.value = '';
              rating = 0;
              paintStars();
            })
            .catch(function () {
              errorEl.textContent = 'Sorry, we could not save your review just now. We could not reach the reviews service. Your review is still in the form above, please check your connection and try again.';
              if (successEl) successEl.textContent = '';
            })
            .then(function () {
              submitting = false;
              if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Save your review'; }
            });
        });

        paintStars();
        renderReviews();
        loadReviews();
      })();
    