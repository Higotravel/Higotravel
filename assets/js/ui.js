
      (function () {
        /* duplicate ticker track for a seamless loop */
        var track = document.getElementById('tickerTrack');
        if (track) track.innerHTML += track.innerHTML;

        /* scroll reveal */
        var rvEls = document.querySelectorAll('.rv');
        if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
          }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
          rvEls.forEach(function (el) { io.observe(el); });
        } else {
          rvEls.forEach(function (el) { el.classList.add('in'); });
        }

        /* gallery filter + lightbox */
        var chips = [].slice.call(document.querySelectorAll('#gchips [data-filter]'));
        var items = [].slice.call(document.querySelectorAll('#grid .gitem'));
        var countEl = document.getElementById('galCount');
        var currentFilter = 'all';
        function visibleItems() { return items.filter(function (it) { return !it.hidden; }); }
        function applyFilter(f) {
          currentFilter = f;
          chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.getAttribute('data-filter') === f)); });
          items.forEach(function (it) { it.hidden = !(f === 'all' || it.getAttribute('data-cat') === f); });
          var n = visibleItems().length;
          if (countEl) countEl.textContent = n + (n === 1 ? ' photo' : ' photos') + (f === 'all' ? ' from real HiGo trips. Tap one to enlarge.' : ' in this place. Tap one to enlarge.');
        }
        chips.forEach(function (c) { c.addEventListener('click', function () { applyFilter(c.getAttribute('data-filter')); }); });
        document.querySelectorAll('[data-filter-jump]').forEach(function (b) {
          b.addEventListener('click', function () {
            var f = b.getAttribute('data-filter-jump');
            if (window.HIGO_PAGE === 'gallery') { applyFilter(f); }
            else if (window.goToPage) { window.goToPage('gallery', { filter: f }); }
          });
        });
        applyFilter('all');
        (function () {
          var f = null;
          try { f = new URLSearchParams(location.search).get('filter') || (location.hash.match(/filter=([a-z]+)/i) || [])[1]; } catch (e) {}
          if (f && document.querySelector('#gchips [data-filter="' + f + '"]')) applyFilter(f);
        })();

        var lb = document.getElementById('lightbox');
        if (lb) {
        var lbImg = document.getElementById('lbImg');
        var lbCap = document.getElementById('lbCap');
        var lbSub = document.getElementById('lbSub');
        var lbCount = document.getElementById('lbCount');
        var idx = 0, lastFocus = null;
        function show(i) {
          var vis = visibleItems(); if (!vis.length) return;
          idx = (i + vis.length) % vis.length;
          var it = vis[idx], img = it.querySelector('img');
          lbImg.src = img.src; lbImg.alt = img.alt;
          lbCap.textContent = it.getAttribute('data-cap') || img.alt;
          lbSub.textContent = it.getAttribute('data-sub') || '';
          lbCount.textContent = (idx + 1) + ' / ' + vis.length;
        }
        function openLb(it) {
          lastFocus = document.activeElement;
          lb.hidden = false;
          document.body.style.overflow = 'hidden';
          show(visibleItems().indexOf(it));
          document.getElementById('lbClose').focus();
        }
        function closeLb() {
          lb.hidden = true;
          document.body.style.overflow = '';
          if (lastFocus && lastFocus.focus) lastFocus.focus();
        }
        items.forEach(function (it) { it.addEventListener('click', function () { openLb(it); }); });
        document.getElementById('lbClose').addEventListener('click', closeLb);
        document.getElementById('lbPrev').addEventListener('click', function () { show(idx - 1); });
        document.getElementById('lbNext').addEventListener('click', function () { show(idx + 1); });
        lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
        document.addEventListener('keydown', function (e) {
          if (lb.hidden) return;
          if (e.key === 'Escape') closeLb();
          else if (e.key === 'ArrowLeft') show(idx - 1);
          else if (e.key === 'ArrowRight') show(idx + 1);
        });
        var tx = null;
        lb.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; }, { passive: true });
        lb.addEventListener('touchend', function (e) {
          if (tx === null) return;
          var dx = e.changedTouches[0].clientX - tx; tx = null;
          if (Math.abs(dx) > 48) show(idx + (dx < 0 ? 1 : -1));
        }, { passive: true });
        }
      })();
    