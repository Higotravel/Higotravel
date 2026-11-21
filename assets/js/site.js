
      (function () {
        var WA = '971569436781';
        var IMG = {"airport": "assets/photos/0c489f4d-bfa4-4847-be39-1b1d592f37f7.jpg","logo": "assets/photos/higo-logo.jpg", "beach": "assets/photos/9941a29f-d9af-4658-be3a-9e257e54c3e7.jpg", "dragon": "assets/photos/dragon-bridge.jpg", "golden": "assets/photos/4e5222cb-923d-4e86-894b-812ccd883646.jpg", "goldenhd": "assets/photos/golden-bridge-hero.jpg", "hoian": "assets/photos/83ccefe5-2ef1-4b3b-a59e-96b54fb25670.jpg", "hoianhd": "assets/photos/hoian-lanterns.jpg", "voucher": "assets/photos/proviamed-voucher.jpg"};
        document.querySelectorAll('img[data-img]').forEach(function (im) { var k = im.getAttribute('data-img'); if (k === 'voucher') return; im.src = IMG[k]; });

        /* ---------------- languages: EN / TL / ES / VI / ZH / KO ---------------- */
        var LOCALES = { en:'en-GB', tl:'tl-PH', es:'es-ES', vi:'vi-VN', zh:'zh-CN', ko:'ko-KR' };
        var currentLang = 'en';
        var I18N = {
          en: { brandSub:"Da Nang, Vietnam · More Than a Trip, It's a Feeling of Home", langLabel:"Language", cdComing:"Christmas is coming", cdDays:"days", cdHrs:"hrs", cdMin:"min", cdSec:"sec", cdNote:"Until <strong>Christmas Day, Dec 25, 2026</strong> · Christmas Promo: Buy 1 Take 1, $250 for 2 (Regular $280)", promoChip:"Christmas Holiday Promo", heroTitle:"Da Nang for two.", heroBuy:"Buy 1,", heroTake:"Take 1.", heroLede:"Welcome to HiGo Travel in <strong>Da Nang, Vietnam</strong>. One price covers <strong>two people</strong> for 3 days and 2 nights: hotel, <strong>Ba Na Hills and Hoi An</strong>, and the Golden Bridge. Pick your date below and your booking is ready to send. Simple as that.", heroCta:"Pick a date & book", heroPriceStrong:"$250 for 2 · Christmas Promo", heroPriceSub:"3 days · 2 nights · $125 each · Regular $280", heroCard:"<strong>per person</strong> when you come as two.<br />Hotel, Ba Na Hills and Hoi An included.", strip1:"<b>Based in</b> Da Nang, Vietnam", strip2:"<b>Hotels + tours</b> booked for you", strip3:"<b>Also:</b> trips beyond Da Nang", strip4:"<b>Book direct</b> on WhatsApp", bookTitle:"Book in under a minute", bookFree:"No payment now · confirm on WhatsApp first", bookSub:"Choose your deal, pick a date, tell us how many are coming. Your WhatsApp message writes itself below, ready to send. Change anything and it updates instantly.", labelDeal:"1 · Choose your deal", labelDate:"2 · Pick your travel date", labelPax:"3 · How many travellers?", travellersWord:"travellers", paxHint:"We will point you to the best deal for your group size.", popular:"Popular:", labelHue:"Add the Hue tour? (optional)", previewLabel:"Your message, ready to send", fineNote:"Opens WhatsApp with everything filled in. Just tap send there, and HiGo Travel confirms availability with you before you pay anything.", dealKicker:"Christmas Holiday Promotion", dealTitle:"Two Christmas deals. Pick your group size.", extKicker:"Regular & Extended Stays · For Two", extTitle:"Stay longer: just $30 more per night", tourKicker:"The Signature Trip", tourTitle:"3 days and 2 nights: Ba Na Hills & Hoi An", datesKicker:"Key Dates", datesTitle:"Dates to know", stepsTitle:"Three steps, all on WhatsApp", faqKicker:"Good to Know", faqTitle:"Questions people ask", finalTitle:"Christmas in Da Nang, for the price of one.", aboutKicker:"About HiGo Travel", tabDeals:"Deals", tabTour:"Tour", tabDates:"Dates", tabFaq:"FAQ", tabMore:"More", qd1:"Sat Dec 19", qd2:"Wed Dec 23", qd3:"Christmas Day", qd4:"Sun Dec 27", qd5:"Sat Jan 2", optB1t1:"Buy 1 Take 1 · Christmas Promo · $250 for 2 people (3 days, 2 nights)", optFamily:"Family Deal · Christmas Promo · $450 for 4 people (3 days, 2 nights)", optExt3:"Regular · 3 days, 2 nights · $280 for 2 people", optExt4:"Extended Stay · 4 days, 3 nights · $310 for 2", optExt5:"Extended Stay · 5 days, 4 nights · $340 for 2", optExt6:"Extended Stay · 6 days, 5 nights · $370 for 2", optCustom:"Custom itinerary · priced for your group", optBeyond:"Trip beyond Da Nang · tell us where", optVoucher:"ProviaMed $300 gift voucher · claim", optHueNo:"No thanks, just the main tour", optHueYes:"Yes please, add Hue", tagMain:"Christmas Promo · Main Deal", tagFamily:"Christmas Promo · Family Deal", dealB1Title:"Buy 1 Take 1", dealB1For:"For couples, best friends, and travel buddies. Always 2 pax.", per125:"That is $125 each", per112:"That is $112.50 each", dealFamTitle:"$450 for 2, Get 2 More Free", dealFamFor:"For families and groups of four. Two pay, two come free.", btnBookDeal:"Book this deal · pick your date", btnBookFamily:"Book the family deal · pick your date", btnExt3:"Book 3 days · 2 nights (Regular)", btnExt4:"Book 4 days · 3 nights", btnExt5:"Book 5 days · 4 nights", btnExt6:"Book 6 days · 5 nights", extRegTitle:"Regular Stay for 2", extTitleCard:"Extended Stay for 2", sendDefault:"Send this booking on WhatsApp", sendFor:"Send booking for", sendSuffix:"on WhatsApp", chipTomorrow:"Christmas Day is tomorrow", chipDay:"1 day to Christmas", chipDays:"days to Christmas", chipToday:"It is Christmas Day", msgIntro:"Hi HiGo Travel! I would like to book a trip.", msgDeal:"Deal", msgStay:"Stay length", msgPrice:"Price", msgTotal:"total", msgPer:"per person", msgDate:"Travel date", msgEnd:"Trip ends", msgTrav:"Travellers", msgPerson:"person", msgPeople:"people", msgHue:"Add-on: Yes please, add the Hue tour. (Hue is an add-on, please confirm its price on WhatsApp.)", msgFlexible:"Not picked yet, I am flexible, please suggest dates", msgConfirm:"Please confirm availability and the next steps. Thank you!", msgDays:"days", msgNights:"nights", verdictPick:"You picked", verdictSend:"Send the booking and HiGo Travel will confirm the best price for your group." },
          tl: { brandSub:"Da Nang, Vietnam · Higit Pa sa Biyahe, Parang Nasa Bahay Ka", langLabel:"Wika", cdComing:"Malapit na ang Pasko", cdDays:"araw", cdHrs:"oras", cdMin:"min", cdSec:"seg", cdNote:"Hanggang <strong>Araw ng Pasko, Dis 25, 2026</strong> · Promo sa Pasko: Buy 1 Take 1, $250 para sa 2 (Regular $280)", promoChip:"Promo sa Pasko", heroTitle:"Da Nang para sa dalawa.", heroBuy:"Buy 1,", heroTake:"Take 1.", heroLede:"Maligayang pagdating sa HiGo Travel sa <strong>Da Nang, Vietnam</strong>. Isang presyo para sa <strong>dalawang tao</strong> sa loob ng 3 araw at 2 gabi: hotel, <strong>Ba Na Hills at Hoi An</strong>, at ang Golden Bridge. Pumili ng petsa sa ibaba at handa nang ipadala ang booking mo. Ganoon lang kadali.", heroCta:"Pumili ng petsa at mag-book", heroPriceStrong:"$250 para sa 2 · Promo sa Pasko", heroPriceSub:"3 araw · 2 gabi · $125 bawat isa · Regular $280", heroCard:"<strong>bawat tao</strong> kapag dalawa kayo.<br />Kasama ang hotel, Ba Na Hills at Hoi An.", strip1:"<b>Naka-base sa</b> Da Nang, Vietnam", strip2:"<b>Mga hotel + tour</b> kami ang magbu-book para sa iyo", strip3:"<b>Mayroon din:</b> mga biyahe sa labas ng Da Nang", strip4:"<b>Direktang mag-book</b> sa WhatsApp", bookTitle:"Mag-book sa loob ng isang minuto", bookFree:"Walang bayad muna · kumpirmahin muna sa WhatsApp", bookSub:"Piliin ang deal mo, pumili ng petsa, at sabihin kung ilan kayo. Awtomatikong mabubuo ang mensahe mo sa WhatsApp sa ibaba, handa nang ipadala.", labelDeal:"1 · Piliin ang deal mo", labelDate:"2 · Piliin ang petsa ng biyahe", labelPax:"3 · Ilan ang bibiyahe?", travellersWord:"manlalakbay", paxHint:"Ituturo namin ang pinakamagandang deal para sa laki ng grupo mo.", popular:"Sikat:", labelHue:"Idagdag ang Hue tour? (opsyonal)", previewLabel:"Ang mensahe mo, handa nang ipadala", fineNote:"Magbubukas ang WhatsApp na kumpleto na ang detalye. I-tap lang ang send doon, at kukumpirmahin ng HiGo Travel ang availability bago ka magbayad.", dealKicker:"Promosyon sa Pasko", dealTitle:"Dalawang deal sa Pasko. Piliin ang laki ng grupo mo.", extKicker:"Regular at Extended Stays · Para sa Dalawa", extTitle:"Manatili nang mas matagal: $30 lang bawat dagdag na gabi", tourKicker:"Ang Signature Trip", tourTitle:"3 araw at 2 gabi: Ba Na Hills at Hoi An", datesKicker:"Mahahalagang Petsa", datesTitle:"Mga petsang dapat malaman", stepsTitle:"Tatlong hakbang, lahat sa WhatsApp", faqKicker:"Mabuting Malaman", faqTitle:"Mga madalas itanong", finalTitle:"Pasko sa Da Nang, sa presyo ng isa.", aboutKicker:"Tungkol sa HiGo Travel", tabDeals:"Mga Deal", tabTour:"Tour", tabDates:"Mga Petsa", tabFaq:"FAQ", tabMore:"Iba Pa", qd1:"Sab Dis 19", qd2:"Miy Dis 23", qd3:"Araw ng Pasko", qd4:"Lin Dis 27", qd5:"Sab Ene 2", optB1t1:"Buy 1 Take 1 · Promo sa Pasko · $250 para sa 2 tao (3 araw, 2 gabi)", optFamily:"Family Deal · Promo sa Pasko · $450 para sa 4 na tao (3 araw, 2 gabi)", optExt3:"Regular · 3 araw, 2 gabi · $280 para sa 2 tao", optExt4:"Extended Stay · 4 na araw, 3 gabi · $310 para sa 2", optExt5:"Extended Stay · 5 araw, 4 na gabi · $340 para sa 2", optExt6:"Extended Stay · 6 na araw, 5 gabi · $370 para sa 2", optCustom:"Custom itinerary · presyo ayon sa grupo mo", optBeyond:"Biyahe sa labas ng Da Nang · sabihin kung saan", optVoucher:"ProviaMed $300 gift voucher · i-claim", optHueNo:"Hindi na, ang main tour lang", optHueYes:"Oo, idagdag ang Hue", tagMain:"Promo sa Pasko · Main Deal", tagFamily:"Promo sa Pasko · Family Deal", dealB1Title:"Buy 1 Take 1", dealB1For:"Para sa magkasintahan, matalik na kaibigan, at travel buddies. Laging 2 pax.", per125:"Iyon ay $125 bawat isa", per112:"Iyon ay $112.50 bawat isa", dealFamTitle:"$450 para sa 2, Libre ang 2 Pa", dealFamFor:"Para sa pamilya at grupo ng apat. Dalawa ang magbabayad, libre ang dalawa.", btnBookDeal:"I-book ang deal na ito · pumili ng petsa", btnBookFamily:"I-book ang family deal · pumili ng petsa", btnExt3:"Mag-book ng 3 araw · 2 gabi (Regular)", btnExt4:"Mag-book ng 4 na araw · 3 gabi", btnExt5:"Mag-book ng 5 araw · 4 na gabi", btnExt6:"Mag-book ng 6 na araw · 5 gabi", extRegTitle:"Regular Stay para sa 2", extTitleCard:"Extended Stay para sa 2", sendDefault:"Ipadala ang booking na ito sa WhatsApp", sendFor:"Ipadala ang booking para sa", sendSuffix:"sa WhatsApp", chipTomorrow:"Bukas na ang Araw ng Pasko", chipDay:"1 araw bago ang Pasko", chipDays:"araw bago ang Pasko", chipToday:"Araw ng Pasko na", msgIntro:"Kumusta HiGo Travel! Gusto kong mag-book ng biyahe.", msgDeal:"Deal", msgStay:"Haba ng stay", msgPrice:"Presyo", msgTotal:"kabuuan", msgPer:"bawat tao", msgDate:"Petsa ng biyahe", msgEnd:"Matatapos ang biyahe", msgTrav:"Manlalakbay", msgPerson:"tao", msgPeople:"tao", msgHue:"Add-on: Oo, idagdag ang Hue tour. (Add-on ang Hue, pakikumpirma ang presyo nito sa WhatsApp.)", msgFlexible:"Wala pang napili, flexible ako, magmungkahi ng petsa", msgConfirm:"Pakikumpirma ang availability at ang susunod na hakbang. Salamat!", msgDays:"araw", msgNights:"gabi", verdictPick:"Napili mo", verdictSend:"Ipadala ang booking at kukumpirmahin ng HiGo Travel ang pinakamagandang presyo para sa grupo mo." },
          es: { brandSub:"Da Nang, Vietnam · Más que un viaje, es sentirse en casa", langLabel:"Idioma", cdComing:"Se acerca la Navidad", cdDays:"días", cdHrs:"hrs", cdMin:"min", cdSec:"seg", cdNote:"Hasta el <strong>día de Navidad, 25 dic 2026</strong> · Promo de Navidad: Buy 1 Take 1, $250 para 2 (Regular $280)", promoChip:"Promo de Navidad", heroTitle:"Da Nang para dos.", heroBuy:"Compra 1,", heroTake:"Llévate 1.", heroLede:"Bienvenido a HiGo Travel en <strong>Da Nang, Vietnam</strong>. Un precio cubre a <strong>dos personas</strong> por 3 días y 2 noches: hotel, <strong>Ba Na Hills y Hoi An</strong>, y el Puente Dorado. Elige tu fecha abajo y tu reserva estará lista para enviar. Así de simple.", heroCta:"Elige fecha y reserva", heroPriceStrong:"$250 para 2 · Promo de Navidad", heroPriceSub:"3 días · 2 noches · $125 cada uno · Regular $280", heroCard:"<strong>por persona</strong> cuando vienen dos.<br />Hotel, Ba Na Hills y Hoi An incluidos.", strip1:"<b>Con base en</b> Da Nang, Vietnam", strip2:"<b>Hoteles + tours</b> reservados para ti", strip3:"<b>También:</b> viajes más allá de Da Nang", strip4:"<b>Reserva directa</b> por WhatsApp", bookTitle:"Reserva en menos de un minuto", bookFree:"Sin pago ahora · confirma primero por WhatsApp", bookSub:"Elige tu oferta, selecciona una fecha y dinos cuántos vienen. Tu mensaje de WhatsApp se escribe solo abajo, listo para enviar.", labelDeal:"1 · Elige tu oferta", labelDate:"2 · Elige tu fecha de viaje", labelPax:"3 · ¿Cuántos viajeros?", travellersWord:"viajeros", paxHint:"Te indicaremos la mejor oferta para el tamaño de tu grupo.", popular:"Popular:", labelHue:"¿Añadir el tour de Hue? (opcional)", previewLabel:"Tu mensaje, listo para enviar", fineNote:"Abre WhatsApp con todo completado. Solo toca enviar allí, y HiGo Travel confirma la disponibilidad contigo antes de que pagues.", dealKicker:"Promoción de Navidad", dealTitle:"Dos ofertas de Navidad. Elige el tamaño de tu grupo.", extKicker:"Estancias regulares y extendidas · Para dos", extTitle:"Quédate más tiempo: solo $30 más por noche", tourKicker:"El viaje insignia", tourTitle:"3 días y 2 noches: Ba Na Hills y Hoi An", datesKicker:"Fechas clave", datesTitle:"Fechas que debes conocer", stepsTitle:"Tres pasos, todo por WhatsApp", faqKicker:"Bueno saberlo", faqTitle:"Preguntas frecuentes", finalTitle:"Navidad en Da Nang, por el precio de uno.", aboutKicker:"Sobre HiGo Travel", tabDeals:"Ofertas", tabTour:"Tour", tabDates:"Fechas", tabFaq:"FAQ", tabMore:"Más", qd1:"sáb 19 dic", qd2:"mié 23 dic", qd3:"Día de Navidad", qd4:"dom 27 dic", qd5:"sáb 2 ene", optB1t1:"Buy 1 Take 1 · Promo de Navidad · $250 para 2 personas (3 días, 2 noches)", optFamily:"Oferta familiar · Promo de Navidad · $450 para 4 personas (3 días, 2 noches)", optExt3:"Regular · 3 días, 2 noches · $280 para 2 personas", optExt4:"Estancia extendida · 4 días, 3 noches · $310 para 2", optExt5:"Estancia extendida · 5 días, 4 noches · $340 para 2", optExt6:"Estancia extendida · 6 días, 5 noches · $370 para 2", optCustom:"Itinerario personalizado · precio para tu grupo", optBeyond:"Viaje más allá de Da Nang · dinos dónde", optVoucher:"Vale regalo ProviaMed $300 · reclamar", optHueNo:"No gracias, solo el tour principal", optHueYes:"Sí, añade Hue", tagMain:"Promo de Navidad · Oferta principal", tagFamily:"Promo de Navidad · Oferta familiar", dealB1Title:"Compra 1, Llévate 1", dealB1For:"Para parejas, mejores amigos y compañeros de viaje. Siempre 2 personas.", per125:"Son $125 cada uno", per112:"Son $112.50 cada uno", dealFamTitle:"$450 por 2, 2 más gratis", dealFamFor:"Para familias y grupos de cuatro. Dos pagan, dos viajan gratis.", btnBookDeal:"Reservar esta oferta · elige tu fecha", btnBookFamily:"Reservar la oferta familiar · elige tu fecha", btnExt3:"Reservar 3 días · 2 noches (Regular)", btnExt4:"Reservar 4 días · 3 noches", btnExt5:"Reservar 5 días · 4 noches", btnExt6:"Reservar 6 días · 5 noches", extRegTitle:"Estancia regular para 2", extTitleCard:"Estancia extendida para 2", sendDefault:"Enviar esta reserva por WhatsApp", sendFor:"Enviar reserva para el", sendSuffix:"por WhatsApp", chipTomorrow:"Mañana es Navidad", chipDay:"1 día para Navidad", chipDays:"días para Navidad", chipToday:"Es el día de Navidad", msgIntro:"¡Hola HiGo Travel! Quiero reservar un viaje.", msgDeal:"Oferta", msgStay:"Duración", msgPrice:"Precio", msgTotal:"total", msgPer:"por persona", msgDate:"Fecha de viaje", msgEnd:"Fin del viaje", msgTrav:"Viajeros", msgPerson:"persona", msgPeople:"personas", msgHue:"Extra: Sí, añade el tour de Hue. (Hue es un extra, confirmen su precio por WhatsApp.)", msgFlexible:"Aún no elegí, soy flexible, sugieran fechas", msgConfirm:"Por favor confirmen disponibilidad y los próximos pasos. ¡Gracias!", msgDays:"días", msgNights:"noches", verdictPick:"Elegiste", verdictSend:"Envía la reserva y HiGo Travel confirmará el mejor precio para tu grupo." },
          vi: { brandSub:"Đà Nẵng, Việt Nam · Hơn cả một chuyến đi, là cảm giác như ở nhà", langLabel:"Ngôn ngữ", cdComing:"Giáng Sinh sắp đến", cdDays:"ngày", cdHrs:"giờ", cdMin:"phút", cdSec:"giây", cdNote:"Đến <strong>Ngày Giáng Sinh, 25/12/2026</strong> · Khuyến mãi Giáng Sinh: Mua 1 Tặng 1, $250 cho 2 người (Giá thường $280)", promoChip:"Khuyến mãi Giáng Sinh", heroTitle:"Đà Nẵng cho hai người.", heroBuy:"Mua 1,", heroTake:"Tặng 1.", heroLede:"Chào mừng đến với HiGo Travel tại <strong>Đà Nẵng, Việt Nam</strong>. Một mức giá cho <strong>hai người</strong> trong 3 ngày 2 đêm: khách sạn, <strong>Bà Nà Hills và Hội An</strong>, và Cầu Vàng. Chọn ngày bên dưới và đặt tour của bạn đã sẵn sàng để gửi. Đơn giản vậy thôi.", heroCta:"Chọn ngày & đặt tour", heroPriceStrong:"$250 cho 2 · Khuyến mãi Giáng Sinh", heroPriceSub:"3 ngày · 2 đêm · $125 mỗi người · Giá thường $280", heroCard:"<strong>mỗi người</strong> khi đi hai người.<br />Đã bao gồm khách sạn, Bà Nà Hills và Hội An.", strip1:"<b>Có trụ sở tại</b> Đà Nẵng, Việt Nam", strip2:"<b>Khách sạn + tour</b> được đặt cho bạn", strip3:"<b>Ngoài ra:</b> các chuyến đi ngoài Đà Nẵng", strip4:"<b>Đặt trực tiếp</b> qua WhatsApp", bookTitle:"Đặt tour trong chưa đầy một phút", bookFree:"Chưa cần thanh toán · xác nhận trên WhatsApp trước", bookSub:"Chọn ưu đãi, chọn ngày, cho chúng tôi biết có bao nhiêu người. Tin nhắn WhatsApp của bạn sẽ tự điền bên dưới, sẵn sàng để gửi.", labelDeal:"1 · Chọn ưu đãi của bạn", labelDate:"2 · Chọn ngày đi", labelPax:"3 · Có bao nhiêu khách?", travellersWord:"khách", paxHint:"Chúng tôi sẽ gợi ý ưu đãi tốt nhất cho quy mô nhóm của bạn.", popular:"Phổ biến:", labelHue:"Thêm tour Huế? (tùy chọn)", previewLabel:"Tin nhắn của bạn, sẵn sàng để gửi", fineNote:"Mở WhatsApp với mọi thông tin đã điền sẵn. Chỉ cần nhấn gửi, HiGo Travel sẽ xác nhận tình trạng còn chỗ trước khi bạn thanh toán.", dealKicker:"Khuyến mãi Giáng Sinh", dealTitle:"Hai ưu đãi Giáng Sinh. Chọn quy mô nhóm của bạn.", extKicker:"Lưu trú thường & kéo dài · Cho hai người", extTitle:"Ở lâu hơn: chỉ thêm $30 mỗi đêm", tourKicker:"Chuyến đi đặc trưng", tourTitle:"3 ngày 2 đêm: Bà Nà Hills & Hội An", datesKicker:"Ngày quan trọng", datesTitle:"Những ngày cần biết", stepsTitle:"Ba bước, tất cả trên WhatsApp", faqKicker:"Điều cần biết", faqTitle:"Câu hỏi thường gặp", finalTitle:"Giáng Sinh ở Đà Nẵng, với giá của một người.", aboutKicker:"Về HiGo Travel", tabDeals:"Ưu đãi", tabTour:"Tour", tabDates:"Ngày", tabFaq:"FAQ", tabMore:"Thêm", qd1:"T7 19/12", qd2:"T4 23/12", qd3:"Ngày Giáng Sinh", qd4:"CN 27/12", qd5:"T7 02/01", optB1t1:"Mua 1 Tặng 1 · Khuyến mãi Giáng Sinh · $250 cho 2 người (3 ngày, 2 đêm)", optFamily:"Ưu đãi gia đình · Khuyến mãi Giáng Sinh · $450 cho 4 người (3 ngày, 2 đêm)", optExt3:"Thường · 3 ngày, 2 đêm · $280 cho 2 người", optExt4:"Lưu trú kéo dài · 4 ngày, 3 đêm · $310 cho 2", optExt5:"Lưu trú kéo dài · 5 ngày, 4 đêm · $340 cho 2", optExt6:"Lưu trú kéo dài · 6 ngày, 5 đêm · $370 cho 2", optCustom:"Lịch trình riêng · báo giá cho nhóm của bạn", optBeyond:"Chuyến đi ngoài Đà Nẵng · cho chúng tôi biết nơi đến", optVoucher:"Phiếu quà tặng ProviaMed $300 · nhận ngay", optHueNo:"Không, chỉ tour chính", optHueYes:"Có, thêm Huế", tagMain:"Khuyến mãi Giáng Sinh · Ưu đãi chính", tagFamily:"Khuyến mãi Giáng Sinh · Ưu đãi gia đình", dealB1Title:"Mua 1 Tặng 1", dealB1For:"Cho cặp đôi, bạn thân và bạn đồng hành. Luôn cho 2 khách.", per125:"Tức là $125 mỗi người", per112:"Tức là $112.50 mỗi người", dealFamTitle:"$450 cho 2, tặng thêm 2 miễn phí", dealFamFor:"Cho gia đình và nhóm bốn người. Hai người trả tiền, hai người đi miễn phí.", btnBookDeal:"Đặt ưu đãi này · chọn ngày", btnBookFamily:"Đặt ưu đãi gia đình · chọn ngày", btnExt3:"Đặt 3 ngày · 2 đêm (Thường)", btnExt4:"Đặt 4 ngày · 3 đêm", btnExt5:"Đặt 5 ngày · 4 đêm", btnExt6:"Đặt 6 ngày · 5 đêm", extRegTitle:"Lưu trú thường cho 2", extTitleCard:"Lưu trú kéo dài cho 2", sendDefault:"Gửi đặt tour này qua WhatsApp", sendFor:"Gửi đặt tour cho", sendSuffix:"qua WhatsApp", chipTomorrow:"Ngày mai là Giáng Sinh", chipDay:"Còn 1 ngày đến Giáng Sinh", chipDays:"ngày đến Giáng Sinh", chipToday:"Hôm nay là Giáng Sinh", msgIntro:"Xin chào HiGo Travel! Tôi muốn đặt một chuyến đi.", msgDeal:"Ưu đãi", msgStay:"Thời gian lưu trú", msgPrice:"Giá", msgTotal:"tổng", msgPer:"mỗi người", msgDate:"Ngày đi", msgEnd:"Kết thúc chuyến đi", msgTrav:"Số khách", msgPerson:"người", msgPeople:"người", msgHue:"Tùy chọn thêm: Có, thêm tour Huế. (Huế là tùy chọn thêm, vui lòng xác nhận giá qua WhatsApp.)", msgFlexible:"Chưa chọn, tôi linh hoạt, vui lòng gợi ý ngày", msgConfirm:"Vui lòng xác nhận tình trạng còn chỗ và các bước tiếp theo. Cảm ơn!", msgDays:"ngày", msgNights:"đêm", verdictPick:"Bạn đã chọn", verdictSend:"Gửi đặt tour và HiGo Travel sẽ xác nhận mức giá tốt nhất cho nhóm của bạn." },
          zh: { brandSub:"越南岘港 · 不只是旅行，更是家的感觉", langLabel:"语言", cdComing:"圣诞节即将到来", cdDays:"天", cdHrs:"小时", cdMin:"分", cdSec:"秒", cdNote:"至<strong>圣诞节，2026年12月25日</strong> · 圣诞促销：买1送1，2人 $250（原价 $280）", promoChip:"圣诞假期促销", heroTitle:"岘港双人游。", heroBuy:"买 1，", heroTake:"送 1。", heroLede:"欢迎来到位于<strong>越南岘港</strong>的 HiGo Travel。一个价格涵盖<strong>两人</strong>3天2晚：酒店、<strong>巴拿山和会安</strong>以及金桥。在下方选择日期，您的预订即可发送。就这么简单。", heroCta:"选择日期并预订", heroPriceStrong:"2人 $250 · 圣诞促销", heroPriceSub:"3天 · 2晚 · 每人 $125 · 原价 $280", heroCard:"两人同行时<strong>每人</strong>价格。<br />包含酒店、巴拿山和会安。", strip1:"<b>总部位于</b>越南岘港", strip2:"<b>酒店 + 旅游</b>为您预订", strip3:"<b>还提供：</b>岘港以外的旅行", strip4:"<b>直接预订</b>通过 WhatsApp", bookTitle:"一分钟内完成预订", bookFree:"现在无需付款 · 先在 WhatsApp 确认", bookSub:"选择您的优惠、日期，并告诉我们人数。您的 WhatsApp 消息会在下方自动生成，随时可发送。", labelDeal:"1 · 选择您的优惠", labelDate:"2 · 选择出行日期", labelPax:"3 · 有多少位旅客？", travellersWord:"旅客", paxHint:"我们会为您推荐最适合团队人数的优惠。", popular:"热门：", labelHue:"添加顺化之旅？（可选）", previewLabel:"您的消息，已准备好发送", fineNote:"打开 WhatsApp 时所有信息已填好。只需点击发送，HiGo Travel 会在您付款前确认是否有位。", dealKicker:"圣诞假期促销", dealTitle:"两个圣诞优惠。选择您的团队人数。", extKicker:"常规与延长住宿 · 双人", extTitle:"住得更久：每晚仅多 $30", tourKicker:"招牌之旅", tourTitle:"3天2晚：巴拿山与会安", datesKicker:"重要日期", datesTitle:"需要了解的日期", stepsTitle:"三步完成，全在 WhatsApp", faqKicker:"须知", faqTitle:"常见问题", finalTitle:"在岘港过圣诞，只需一人的价格。", aboutKicker:"关于 HiGo Travel", tabDeals:"优惠", tabTour:"旅游", tabDates:"日期", tabFaq:"问答", tabMore:"更多", qd1:"12月19日周六", qd2:"12月23日周三", qd3:"圣诞节", qd4:"12月27日周日", qd5:"1月2日周六", optB1t1:"买1送1 · 圣诞促销 · 2人 $250（3天2晚）", optFamily:"家庭优惠 · 圣诞促销 · 4人 $450（3天2晚）", optExt3:"常规 · 3天2晚 · 2人 $280", optExt4:"延长住宿 · 4天3晚 · 2人 $310", optExt5:"延长住宿 · 5天4晚 · 2人 $340", optExt6:"延长住宿 · 6天5晚 · 2人 $370", optCustom:"定制行程 · 按您的团队定价", optBeyond:"岘港以外的旅行 · 告诉我们去哪里", optVoucher:"ProviaMed $300 礼品券 · 领取", optHueNo:"不用，只参加主 tour", optHueYes:"是的，添加顺化", tagMain:"圣诞促销 · 主优惠", tagFamily:"圣诞促销 · 家庭优惠", dealB1Title:"买1送1", dealB1For:"适合情侣、好友和旅伴。固定2人。", per125:"即每人 $125", per112:"即每人 $112.50", dealFamTitle:"$450 两人价，再送2人免费", dealFamFor:"适合家庭和四人团。两人付费，两人免费。", btnBookDeal:"预订此优惠 · 选择日期", btnBookFamily:"预订家庭优惠 · 选择日期", btnExt3:"预订3天 · 2晚（常规）", btnExt4:"预订4天 · 3晚", btnExt5:"预订5天 · 4晚", btnExt6:"预订6天 · 5晚", extRegTitle:"双人常规住宿", extTitleCard:"双人延长住宿", sendDefault:"通过 WhatsApp 发送此预订", sendFor:"发送预订：", sendSuffix:"通过 WhatsApp", chipTomorrow:"明天就是圣诞节", chipDay:"距圣诞节1天", chipDays:"天后到圣诞节", chipToday:"今天是圣诞节", msgIntro:"您好 HiGo Travel！我想预订一次旅行。", msgDeal:"优惠", msgStay:"住宿时长", msgPrice:"价格", msgTotal:"总计", msgPer:"每人", msgDate:"出行日期", msgEnd:"行程结束", msgTrav:"旅客人数", msgPerson:"人", msgPeople:"人", msgHue:"附加项：是的，添加顺化之旅。（顺化为附加项，请通过 WhatsApp 确认价格。）", msgFlexible:"尚未选择，我时间灵活，请推荐日期", msgConfirm:"请确认是否有位及后续步骤。谢谢！", msgDays:"天", msgNights:"晚", verdictPick:"您已选择", verdictSend:"发送预订，HiGo Travel 将为您的团队确认最优惠价格。" },
          ko: { brandSub:"베트남 다낭 · 여행 그 이상, 집 같은 편안함", langLabel:"언어", cdComing:"크리스마스가 다가옵니다", cdDays:"일", cdHrs:"시간", cdMin:"분", cdSec:"초", cdNote:"<strong>크리스마스, 2026년 12월 25일</strong>까지 · 크리스마스 프로모션: 1+1, 2인 $250 (정상가 $280)", promoChip:"크리스마스 휴일 프로모션", heroTitle:"두 사람을 위한 다낭.", heroBuy:"1개 사면,", heroTake:"1개 무료.", heroLede:"<strong>베트남 다낭</strong>의 HiGo Travel에 오신 것을 환영합니다. 하나의 가격으로 <strong>두 사람</strong>이 3일 2박 동안 호텔, <strong>바나힐과 호이안</strong>, 골든 브리지를 즐길 수 있습니다. 아래에서 날짜를 선택하면 예약이 바로 전송 준비됩니다. 정말 간단합니다.", heroCta:"날짜 선택하고 예약하기", heroPriceStrong:"2인 $250 · 크리스마스 프로모션", heroPriceSub:"3일 · 2박 · 1인 $125 · 정상가 $280", heroCard:"두 명이 함께 오실 때 <strong>1인당</strong> 가격입니다.<br />호텔, 바나힐, 호이안 포함.", strip1:"<b>위치</b> 베트남 다낭", strip2:"<b>호텔 + 투어</b>를 대신 예약해 드립니다", strip3:"<b>또한:</b> 다낭 외 지역 여행", strip4:"WhatsApp으로 <b>직접 예약</b>", bookTitle:"1분 안에 예약하기", bookFree:"지금 결제 없음 · WhatsApp으로 먼저 확인", bookSub:"상품을 선택하고, 날짜를 고르고, 인원을 알려주세요. WhatsApp 메시지가 아래에 자동으로 작성되어 바로 보낼 수 있습니다.", labelDeal:"1 · 상품 선택", labelDate:"2 · 여행 날짜 선택", labelPax:"3 · 몇 명이 여행하나요?", travellersWord:"여행객", paxHint:"그룹 규모에 맞는 최적의 상품을 안내해 드립니다.", popular:"인기:", labelHue:"후에 투어 추가? (선택)", previewLabel:"보낼 준비가 된 메시지", fineNote:"WhatsApp이 모든 내용이 입력된 상태로 열립니다. 거기서 전송만 누르면 HiGo Travel이 결제 전에 가능 여부를 확인해 드립니다.", dealKicker:"크리스마스 휴일 프로모션", dealTitle:"두 가지 크리스마스 상품. 그룹 규모를 선택하세요.", extKicker:"일반 및 연장 숙박 · 2인용", extTitle:"더 오래 머무르기: 1박당 $30만 추가", tourKicker:"시그니처 여행", tourTitle:"3일 2박: 바나힐 & 호이안", datesKicker:"주요 날짜", datesTitle:"알아야 할 날짜", stepsTitle:"세 단계, 모두 WhatsApp으로", faqKicker:"알아두면 좋아요", faqTitle:"자주 묻는 질문", finalTitle:"한 사람 가격으로 다낭에서 크리스마스를.", aboutKicker:"HiGo Travel 소개", tabDeals:"상품", tabTour:"투어", tabDates:"날짜", tabFaq:"FAQ", tabMore:"더보기", qd1:"12월 19일 토", qd2:"12월 23일 수", qd3:"크리스마스", qd4:"12월 27일 일", qd5:"1월 2일 토", optB1t1:"1+1 · 크리스마스 프로모션 · 2인 $250 (3일 2박)", optFamily:"가족 상품 · 크리스마스 프로모션 · 4인 $450 (3일 2박)", optExt3:"일반 · 3일 2박 · 2인 $280", optExt4:"연장 숙박 · 4일 3박 · 2인 $310", optExt5:"연장 숙박 · 5일 4박 · 2인 $340", optExt6:"연장 숙박 · 6일 5박 · 2인 $370", optCustom:"맞춤 일정 · 그룹 맞춤 가격", optBeyond:"다낭 외 여행 · 목적지를 알려주세요", optVoucher:"ProviaMed $300 기프트 바우처 · 신청", optHueNo:"아니요, 메인 투어만", optHueYes:"네, 후에 추가해 주세요", tagMain:"크리스마스 프로모션 · 메인 상품", tagFamily:"크리스마스 프로모션 · 가족 상품", dealB1Title:"1+1", dealB1For:"커플, 절친, 여행 동반자를 위한 상품. 항상 2인.", per125:"1인당 $125입니다", per112:"1인당 $112.50입니다", dealFamTitle:"$450으로 2인, 2인 더 무료", dealFamFor:"가족과 4인 그룹을 위한 상품. 2명 결제, 2명 무료.", btnBookDeal:"이 상품 예약 · 날짜 선택", btnBookFamily:"가족 상품 예약 · 날짜 선택", btnExt3:"3일 · 2박 예약 (일반)", btnExt4:"4일 · 3박 예약", btnExt5:"5일 · 4박 예약", btnExt6:"6일 · 5박 예약", extRegTitle:"2인 일반 숙박", extTitleCard:"2인 연장 숙박", sendDefault:"WhatsApp으로 이 예약 보내기", sendFor:"예약 보내기:", sendSuffix:"WhatsApp으로", chipTomorrow:"내일이 크리스마스입니다", chipDay:"크리스마스까지 1일", chipDays:"일 후 크리스마스", chipToday:"오늘은 크리스마스입니다", msgIntro:"안녕하세요 HiGo Travel! 여행을 예약하고 싶습니다.", msgDeal:"상품", msgStay:"숙박 기간", msgPrice:"가격", msgTotal:"총액", msgPer:"1인당", msgDate:"여행 날짜", msgEnd:"여행 종료", msgTrav:"여행객", msgPerson:"명", msgPeople:"명", msgHue:"추가 옵션: 네, 후에 투어를 추가해 주세요. (후에는 추가 옵션이니 가격은 WhatsApp으로 확인해 주세요.)", msgFlexible:"아직 선택 안 함, 일정이 유연하니 날짜를 추천해 주세요", msgConfirm:"가능 여부와 다음 단계를 확인해 주세요. 감사합니다!", msgDays:"일", msgNights:"박", verdictPick:"선택하신 상품", verdictSend:"예약을 보내시면 HiGo Travel이 그룹에 맞는 최적 가격을 확인해 드립니다." }
        };
        var EXTRA = {
          en: { stepDeal:"Deal", stepWhen:"Date", stepSend:"Send", next:"Next", back:"Back", change:"Change", tabBook:"Book", tabInfo:"Info", subSteps:"How to book", subDates:"Key dates", subFaq:"FAQ", subAbout:"About", subVision:"Vision", subPartner:"Partner", priceDetails:"Price details & terms", grpMore:"More options", stayLen:"Length of stay", contactTitle:"Fine print", sumHue:"Add-on", sumYes:"Hue tour", stayBase:"Regular price · the Christmas Promo above is $250 for this same stay" },
          tl: { stepDeal:"Deal", stepWhen:"Petsa", stepSend:"Ipadala", next:"Susunod", back:"Balik", change:"Palitan", tabBook:"Mag-book", tabInfo:"Info", subSteps:"Paano mag-book", subDates:"Mahahalagang petsa", subFaq:"FAQ", subAbout:"Tungkol", subVision:"Bisyon", subPartner:"Katuwang", priceDetails:"Detalye ng presyo at tuntunin", grpMore:"Iba pang opsyon", stayLen:"Haba ng stay", contactTitle:"Maliliit na detalye", sumHue:"Add-on", sumYes:"Hue tour", stayBase:"" },
          es: { stepDeal:"Oferta", stepWhen:"Fecha", stepSend:"Enviar", next:"Siguiente", back:"Atrás", change:"Cambiar", tabBook:"Reservar", tabInfo:"Info", subSteps:"Cómo reservar", subDates:"Fechas clave", subFaq:"FAQ", subAbout:"Nosotros", subVision:"Visión", subPartner:"Socio", priceDetails:"Detalles de precio y condiciones", grpMore:"Más opciones", stayLen:"Duración de la estancia", contactTitle:"Letra pequeña", sumHue:"Extra", sumYes:"Tour de Hue", stayBase:"" },
          vi: { stepDeal:"Ưu đãi", stepWhen:"Ngày", stepSend:"Gửi", next:"Tiếp", back:"Quay lại", change:"Đổi", tabBook:"Đặt tour", tabInfo:"Thông tin", subSteps:"Cách đặt tour", subDates:"Ngày quan trọng", subFaq:"FAQ", subAbout:"Giới thiệu", subVision:"Tầm nhìn", subPartner:"Đối tác", priceDetails:"Chi tiết giá & điều khoản", grpMore:"Tùy chọn khác", stayLen:"Thời gian lưu trú", contactTitle:"Điều khoản chi tiết", sumHue:"Tùy chọn thêm", sumYes:"Tour Huế", stayBase:"" },
          zh: { stepDeal:"优惠", stepWhen:"日期", stepSend:"发送", next:"下一步", back:"返回", change:"更改", tabBook:"预订", tabInfo:"信息", subSteps:"如何预订", subDates:"重要日期", subFaq:"问答", subAbout:"关于", subVision:"愿景", subPartner:"合作", priceDetails:"价格详情与条款", grpMore:"更多选项", stayLen:"住宿时长", contactTitle:"细则", sumHue:"附加项", sumYes:"顺化之旅", stayBase:"" },
          ko: { stepDeal:"상품", stepWhen:"날짜", stepSend:"전송", next:"다음", back:"이전", change:"변경", tabBook:"예약", tabInfo:"정보", subSteps:"예약 방법", subDates:"주요 날짜", subFaq:"FAQ", subAbout:"소개", subVision:"비전", subPartner:"파트너", priceDetails:"가격 상세 및 약관", grpMore:"더 많은 옵션", stayLen:"숙박 기간", contactTitle:"유의사항", sumHue:"추가 옵션", sumYes:"후에 투어", stayBase:"" }
        };
        Object.keys(EXTRA).forEach(function (l) { for (var k in EXTRA[l]) I18N[l][k] = EXTRA[l][k]; });
        var NAVKEYS = {
          en: { tabHome:"Home", tabGallery:"Photos", tabReviews:"Reviews", tabBook:"Book" },
          tl: { tabHome:"Home", tabGallery:"Photos", tabReviews:"Reviews", tabBook:"Mag-book" },
          es: { tabHome:"Inicio", tabGallery:"Fotos", tabReviews:"Reseñas", tabBook:"Reservar" },
          vi: { tabHome:"Trang chủ", tabGallery:"Ảnh", tabReviews:"Đánh giá", tabBook:"Đặt tour" },
          zh: { tabHome:"首页", tabGallery:"相册", tabReviews:"评价", tabBook:"预订" },
          ko: { tabHome:"홈", tabGallery:"사진", tabReviews:"후기", tabBook:"예약" }
        };
        Object.keys(NAVKEYS).forEach(function (l) { for (var k in NAVKEYS[l]) I18N[l][k] = NAVKEYS[l][k]; });
        function T(k) { var d = I18N[currentLang] || I18N.en; return d[k] || I18N.en[k] || k; }

        function applyLang(lang) {
          if (!I18N[lang]) lang = 'en';
          currentLang = lang;
          try { localStorage.setItem('higoLang', lang); } catch (e) {}
          document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
          document.querySelectorAll('[data-i18n]').forEach(function (el) { var v = T(el.getAttribute('data-i18n')); if (v) el.textContent = v; });
          document.querySelectorAll('[data-i18n-html]').forEach(function (el) { var v = T(el.getAttribute('data-i18n-html')); if (v) el.innerHTML = v; });
          document.querySelectorAll('[data-opt]').forEach(function (el) { var v = T(el.getAttribute('data-opt')); if (v) el.textContent = v; });
          document.querySelectorAll('#langMenu button[data-lang]').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
          document.getElementById('langCode').textContent = lang === 'zh' ? '中文' : (lang === 'ko' ? '한국어' : lang.toUpperCase());
          document.getElementById('brandPlace').textContent = T('brandSub').split(' · ')[0];
          var _ss = document.getElementById('staySeg'); if (_ss) _ss.setAttribute('aria-label', T('stayLen'));
          if (_ss) renderStay();
          if (typeof updateBooking === 'function' && document.getElementById('bk-date')) updateBooking('lang');
          refreshChip();
        }

        /* ---------------- countdown to Christmas Day (UTC+7) ---------------- */
        var cdTarget = new Date('2026-12-25T00:00:00+07:00').getTime();
        var cdD = document.getElementById('cd-days'), cdH = document.getElementById('cd-hours'),
            cdM = document.getElementById('cd-minutes'), cdS = document.getElementById('cd-seconds');
        function pad(n) { return (n < 10 ? '0' : '') + n; }
        function tickCountdown() {
          if (!cdD || !cdH || !cdM || !cdS) return; /* countdown only exists on the Home page */
          var diff = cdTarget - Date.now();
          if (diff <= 0) { cdD.textContent = cdH.textContent = cdM.textContent = cdS.textContent = '00'; return; }
          var t = Math.floor(diff / 1000);
          cdD.textContent = pad(Math.floor(t / 86400));
          cdH.textContent = pad(Math.floor((t % 86400) / 3600));
          cdM.textContent = pad(Math.floor((t % 3600) / 60));
          cdS.textContent = pad(t % 60);
        }
        function refreshChip() {
          var chipEl = document.getElementById('xmasCount'); if (!chipEl) return;
          var diffMs = cdTarget - Date.now();
          if (diffMs <= 0) chipEl.textContent = T('chipToday');
          else { var dLeft = Math.floor(diffMs / 86400000); chipEl.textContent = dLeft === 0 ? T('chipTomorrow') : (dLeft === 1 ? T('chipDay') : dLeft + ' ' + T('chipDays')); }
        }
        tickCountdown(); setInterval(tickCountdown, 1000);

        /* ---------------- pages: Home / Deals / Tour / Gallery / Book / Reviews ----------------
           Separate pages with a shared header and nav. Only the active page is
           shown, and each page loads its own photos the first time it opens. */
        var PAGES = ['home', 'deals', 'tour', 'gallery', 'book', 'reviews'];
        var pageSections = [].slice.call(document.querySelectorAll('[data-page]'));
        var navBtns = [].slice.call(document.querySelectorAll('.nav [data-tab]'));
        var topBtns = [].slice.call(document.querySelectorAll('.toplinks [data-goto]'));
        var ANCHOR = { home:'home', deals:'deals', tour:'tour', gallery:'gallery', photos:'gallery', book:'book', reviews:'reviews', info:'tour', steps:'tour', dates:'tour', faq:'tour', destinations:'tour', more:'home', about:'home', vision:'home', places:'home', posters:'home', souvenirs:'home', partner:'deals', voucher:'deals' };
        var PAGE_TITLES = { home:'HiGo Travel · Da Nang — Christmas Buy 1 Take 1', deals:'Deals · HiGo Travel, Da Nang', tour:'The Tour · HiGo Travel, Da Nang', gallery:'Trip Photos · HiGo Travel, Da Nang', book:'Book Your Trip · HiGo Travel', reviews:'Guest Reviews · HiGo Travel' };
        var state = { page: 'home', step: 1 };
        var dayInit = false;
        function initDayOnce() { if (dayInit) return; dayInit = true; showDay('1'); }
        function lazyLoadPage(name) {
          pageSections.forEach(function (sec) {
            if (sec.getAttribute('data-page') !== name) return;
            sec.querySelectorAll('img[data-src]').forEach(function (im) { im.src = im.getAttribute('data-src'); im.removeAttribute('data-src'); });
            var v = sec.querySelector('img[data-img="voucher"]');
            if (v && !v.getAttribute('src')) v.src = IMG.voucher;
          });
          if (name === 'tour') initDayOnce();
        }
        function pushHash(name) { /* multi-page site: real URLs, no hash routing */ }
        function showPage(name, o) {
          o = o || {};
          if (PAGES.indexOf(name) < 0) name = 'home';
          var changed = name !== state.page;
          state.page = name;
          document.body.setAttribute('data-page', name);
          pageSections.forEach(function (pg) { pg.hidden = pg.getAttribute('data-page') !== name; });
          navBtns.forEach(function (b) { if (b.getAttribute('data-tab') === name) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
          topBtns.forEach(function (b) { if (b.getAttribute('data-goto') === name) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
          lazyLoadPage(name);
          if (name === 'book' && o.step) goStep(o.step, true);
          if (changed && o.push !== false) pushHash(name);
          document.title = PAGE_TITLES[name] || PAGE_TITLES.home;
          if (changed || o.top) window.scrollTo(0, 0);
        }
        function goToPage(name, o) {
          o = o || {};
          var map = { home: 'index.html', deals: 'deals.html', tour: 'tour.html', gallery: 'gallery.html', book: 'book.html', reviews: 'reviews.html' };
          var dest = map[name] || 'index.html';
          var q = [];
          if (o.deal) { try { sessionStorage.setItem('higoDeal', o.deal); } catch (e) {} q.push('deal=' + encodeURIComponent(o.deal)); }
          if (o.filter) q.push('filter=' + encodeURIComponent(o.filter));
          if (o.step) q.push('step=' + encodeURIComponent(o.step));
          location.href = dest + (q.length ? '?' + q.join('&') : '');
        }
        function showTab(name, o) { var m = { deals:'deals', tour:'tour', book:'book', info:'tour', more:'home', home:'home', gallery:'gallery', reviews:'reviews' }; goToPage(m[name] || 'home', o || {}); }
        window.goToPage = goToPage;
        navBtns.forEach(function (b) { b.addEventListener('click', function () { goToPage(b.getAttribute('data-tab'), { top: true }); }); });
        /* any "data-goto" control routes to its page; Book opens on the date step */
        document.querySelectorAll('[data-goto]').forEach(function (el) {
          el.addEventListener('click', function (e) {
            e.preventDefault();
            var t = el.getAttribute('data-goto');
            var dest = ANCHOR[t] || t;
            if (dest === 'book') goToPage('book', { step: 2 }); else goToPage(dest, { top: true });
          });
        });
        function pageFromHash() { var h = (location.hash || '').replace(/^#\/?/, '').split('?')[0]; return ANCHOR[h] || null; }

        /* wizard */
        var stepEls = [].slice.call(document.querySelectorAll('[data-step]'));
        var indLis = [].slice.call(document.querySelectorAll('#ind li'));
        function goStep(n, quiet) {
          n = Math.max(1, Math.min(3, n)); state.step = n;
          stepEls.forEach(function (s) { s.hidden = s.getAttribute('data-step') !== String(n); });
          indLis.forEach(function (li, i) {
            li.classList.toggle('cur', i + 1 === n);
            li.classList.toggle('done', i + 1 < n);
            var b = li.querySelector('button'); if (i + 1 === n) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
          });
          if (n === 3) renderSummary();
          if (!quiet) { var bk = document.getElementById('book'); if (bk) { var y2 = bk.getBoundingClientRect().top + window.pageYOffset - 70; window.scrollTo({top: Math.max(0, y2), behavior: 'smooth'}); } }
        }
        /* Advancing to Send (step 3) needs a date, or an explicit "I am flexible" tap.
           Never advance silently with no date picked. */
        function requestStep(n) {
          if (n === 3 && state.step !== 3) {
            var di = document.getElementById('bk-date');
            if (di && !di.value && !flexibleConfirmed) {
              if (state.step !== 2) goStep(2, true);
              var fp = document.getElementById('flexPrompt');
              if (fp) { fp.hidden = false; setTimeout(function () { fp.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 60); }
              return;
            }
          }
          goStep(n);
        }
        document.querySelectorAll('[data-step-btn]').forEach(function (b) { b.addEventListener('click', function () { requestStep(parseInt(b.getAttribute('data-step-btn'), 10)); }); });
        document.querySelectorAll('[data-next]').forEach(function (b) { b.addEventListener('click', function () { requestStep(parseInt(b.getAttribute('data-next'), 10)); }); });
        goStep(1, true);

        /* swipe dots for carousels */
        var dotSets = [];
        document.querySelectorAll('.snap[data-dots]').forEach(function (sn) {
          var kids = sn.children, d = document.createElement('div'); d.className = 'dots'; d.setAttribute('aria-hidden', 'true');
          for (var i = 0; i < kids.length; i++) d.appendChild(document.createElement('i'));
          sn.parentNode.insertBefore(d, sn.nextSibling);
          function upd() {
            var w = kids[0].getBoundingClientRect().width; if (!w) return;
            var i = Math.round(sn.scrollLeft / (w + 12)); i = Math.max(0, Math.min(kids.length - 1, i));
            [].forEach.call(d.children, function (x, j) { x.className = j === i ? 'on' : ''; });
          }
          sn.addEventListener('scroll', upd, { passive: true }); dotSets.push(upd); upd();
        });
        function updateDots() { dotSets.forEach(function (f) { f(); }); }
        window.updateDots = updateDots;

        /* ---------------- itinerary days ---------------- */
        var daysData = {
          '1': { title: 'Arrive in Da Nang', img: 'dragon', w: 1024, h: 681, alt: 'The Dragon Bridge lit up gold over the Han River at night in Da Nang', body: 'Land, check in to your hotel, and settle in. By evening the city is yours: the Han River lights up, the night markets open, and on weekend nights the Dragon Bridge breathes real fire over the water.', points: ['Hotel check-in arranged by HiGo', 'Evening walk along the Han River', 'Dragon Bridge and riverside night scene'] },
          '2': { title: 'Ba Na Hills and the Golden Bridge', img: 'goldenhd', w: 800, h: 599, alt: 'The Golden Bridge at Ba Na Hills held up by giant stone hands above the clouds', body: 'The big day. Ride the cable car up through the clouds to Ba Na Hills and walk the Golden Bridge, a golden walkway held in two giant stone hands, with the whole coastline spread out below you.', points: ['Ba Na Hills Tour included in the package', 'Walk the famous Golden Bridge', 'Cloud-level views over Da Nang and the sea'] },
          '3': { title: 'Hoi An Ancient Town', img: 'hoianhd', w: 1168, h: 784, alt: 'Lanterns glowing over a street in Hoi An old town at dusk', body: 'The Hoi An day: wander the Ancient Town, a UNESCO-listed trading port of lantern-lit streets, old merchant houses, and riverside cafes. It is included in the main tour, alongside Ba Na Hills.', points: ['Hoi An Ancient Town included in the main tour', 'Lantern streets and the Japanese Covered Bridge', 'Optional Hue tour available as an add-on'] }
        };
        var dayPanel = document.getElementById('dayPanel');
        var dayBtns = document.querySelectorAll('[data-day]');
        function showDay(key) {
          if (!dayPanel) return;
          var d = daysData[key]; dayPanel.innerHTML = '';
          var img = document.createElement('img'); img.src = IMG[d.img]; img.alt = d.alt; img.width = d.w || 720; img.height = d.h || 405; img.decoding = 'async';
          var copy = document.createElement('div'); copy.className = 'day-copy';
          var h = document.createElement('h3'); h.textContent = d.title;
          var p = document.createElement('p'); p.textContent = d.body;
          var ul = document.createElement('ul'); d.points.forEach(function (t) { var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
          copy.appendChild(h); copy.appendChild(p); copy.appendChild(ul);
          dayPanel.appendChild(img); dayPanel.appendChild(copy);
          dayBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-day') === key)); });
        }
        dayBtns.forEach(function (b) { b.addEventListener('click', function () { showDay(b.getAttribute('data-day')); }); });
        /* first day renders when the Tour page first opens (initDayOnce) */

        /* ---------------- booking data ---------------- */
        var DEALS = {
          b1t1:   { line: 'Buy 1 Take 1 · Christmas Promo, $250 for 2 people (3 days, 2 nights in Da Nang: hotel, Ba Na Hills and Hoi An)', days: 3, nights: 2, price: 250, per: 125 },
          family: { line: 'Family Deal · Christmas Promo, $450 for 4 people (3 days, 2 nights in Da Nang: hotel, Ba Na Hills and Hoi An)', days: 3, nights: 2, price: 450, per: 112.5 },
          ext3:   { line: 'Regular Stay, 3 days and 2 nights, $280 for 2 people ($140 each) in Da Nang: hotel, Ba Na Hills and Hoi An. This is the regular price; the Christmas Promo for the same stay is $250', days: 3, nights: 2, price: 280, per: 140, ext: true },
          ext4:   { line: 'Extended Stay, 4 days and 3 nights, $310 for 2 people ($155 each) in Da Nang: hotel, Ba Na Hills and Hoi An', days: 4, nights: 3, price: 310, per: 155, ext: true },
          ext5:   { line: 'Extended Stay, 5 days and 4 nights, $340 for 2 people ($170 each) in Da Nang: hotel, Ba Na Hills and Hoi An', days: 5, nights: 4, price: 340, per: 170, ext: true },
          ext6:   { line: 'Extended Stay, 6 days and 5 nights, $370 for 2 people ($185 each) in Da Nang: hotel, Ba Na Hills and Hoi An', days: 6, nights: 5, price: 370, per: 185, ext: true },
          custom: { line: 'Custom itinerary (priced for our group)' },
          beyond: { line: 'Trip beyond Da Nang (please help us plan it)' },
          voucher:{ line: 'Claim the $300 ProviaMed gift voucher (3 days, 2 nights in Da Nang, travel Dec 2026 to Feb 2027)', days: 3, nights: 2 }
        };
        function money(n) { return '$' + (n % 1 ? n.toFixed(2) : n); }

        /* ---------------- stay-length selector (Deals tab) ---------------- */
        var stayKey = 'ext3';
        var STAY_KEYS = ['ext3', 'ext4', 'ext5', 'ext6'];
        var staySeg = document.getElementById('staySeg');
        function renderStay() {
          if (!staySeg) return;
          var d = DEALS[stayKey], extraN = d.nights - 2;
          staySeg.innerHTML = '';
          STAY_KEYS.forEach(function (k) {
            var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-pressed', String(k === stayKey));
            b.innerHTML = DEALS[k].days + '<small>' + DEALS[k].nights + ' ' + T('msgNights') + '</small>';
            b.addEventListener('click', function () { stayKey = k; renderStay(); });
            staySeg.appendChild(b);
          });
          var en = currentLang === 'en';
          document.getElementById('stDays').textContent = d.days + ' ' + (en ? 'Days' : T('msgDays')) + ' · ' + d.nights + ' ' + (en ? 'Nights' : T('msgNights')) + (stayKey === 'ext3' ? (en ? ' · Regular' : '') : '');
          document.getElementById('stTotal').innerHTML = money(d.price) + ' <small>' + (en ? 'USD for 2' : 'USD · 2') + '</small>';
          document.getElementById('stPer').innerHTML = en ? 'That is <strong>' + money(d.per) + ' per person</strong> for 2 pax.' : '<strong>' + money(d.per) + '</strong> ' + T('msgPer');
          document.getElementById('stExtra').textContent = en ? (extraN === 0 ? T('stayBase') : 'Regular + ' + extraN + ' extra night' + (extraN > 1 ? 's' : '') + ' · +$' + (30 * extraN) + ' total') : (extraN ? '+$' + (30 * extraN) + ' ' + T('msgTotal') : '');
          var btn = document.getElementById('stBook'); btn.textContent = T('btnExt' + d.days);
        }
        var _stBook = document.getElementById('stBook'); if (_stBook) _stBook.addEventListener('click', function () { bookDeal(stayKey); });

        /* ---------------- booking form -> WhatsApp ---------------- */
        var dateInput = document.getElementById('bk-date');
        var hueEl = document.getElementById('bk-hue');
        var paxEl = document.getElementById('bk-pax');
        var verdictEl = document.getElementById('bk-verdict');
        var verdict2 = document.getElementById('bk-verdict2');
        var previewEl = document.getElementById('bk-preview');
        var sendEl = document.getElementById('bk-send');
        var floatEl = document.getElementById('wa-float');
        var sendLabel = document.getElementById('bk-send-label');
        var dateHint = document.getElementById('bk-date-hint');
        var radios = [].slice.call(document.querySelectorAll('input[name="deal"]'));
        var pax = 2, dealTouched = false, flexibleConfirmed = false, lastPriceNote = '';
        var flexPrompt = document.getElementById('flexPrompt');
        var hueSwitch = document.getElementById('bk-hue-switch');
        /* Plain pricing notes for group sizes the fixed package prices do not cover.
           Used in the on-screen verdict, the summary, and the WhatsApp message. */
        var PRICE_NOTES = {
          en: {
            solo250: 'Pricing note: I am travelling solo, but this is the $250 for 2 package, so the listed price is $250 total. Please confirm my booking on WhatsApp.',
            three250: 'Pricing note: We are 3 travellers. The $250 price covers 2 people, so please confirm the total price for 3 on WhatsApp.',
            solo450: 'Pricing note: I am travelling solo, but this is the $450 for 4 package, so the listed price is $450 total. Please confirm my booking on WhatsApp.',
            three450: 'Pricing note: We are 3 travellers. The $450 price covers 4 people, so please confirm the total price for 3 on WhatsApp.',
            soloPkg: 'Pricing note: I am travelling solo. This stay is priced for 2 people, so please confirm the total price for 1 on WhatsApp.',
            groupPkg: 'Pricing note: Our group size is different from the 2-person price shown, so please confirm the total price for our group on WhatsApp.',
            group450: 'Pricing note: Our group size is different from the 4-person price shown, so please confirm the total price for our group on WhatsApp.'
          },
          tl: { solo250: 'Tala sa presyo: Mag-isa akong bibiyahe, pero ito ang $250 para sa 2 package, kaya $250 ang kabuuang nakalistang presyo. Pakikumpirma ang booking ko sa WhatsApp.', three250: 'Tala sa presyo: 3 kaming bibiyahe. Ang $250 ay para sa 2 tao, kaya pakikumpirma ang kabuuang presyo para sa 3 sa WhatsApp.', solo450: 'Tala sa presyo: Mag-isa akong bibiyahe, pero ito ang $450 para sa 4 package, kaya $450 ang kabuuang nakalistang presyo. Pakikumpirma ang booking ko sa WhatsApp.', three450: 'Tala sa presyo: 3 kaming bibiyahe. Ang $450 ay para sa 4 na tao, kaya pakikumpirma ang kabuuang presyo para sa 3 sa WhatsApp.', soloPkg: 'Tala sa presyo: Mag-isa akong bibiyahe. Ang stay na ito ay presyo para sa 2 tao, kaya pakikumpirma ang kabuuang presyo para sa 1 sa WhatsApp.', groupPkg: 'Tala sa presyo: Iba ang laki ng grupo namin sa presyong pang-2 tao, kaya pakikumpirma ang kabuuang presyo para sa grupo namin sa WhatsApp.', group450: 'Tala sa presyo: Iba ang laki ng grupo namin sa presyong pang-4 na tao, kaya pakikumpirma ang kabuuang presyo para sa grupo namin sa WhatsApp.' },
          es: { solo250: 'Nota de precio: Viajo solo, pero este es el paquete de $250 para 2, así que el precio indicado es $250 en total. Confirmen mi reserva por WhatsApp.', three250: 'Nota de precio: Somos 3 viajeros. El precio de $250 cubre a 2 personas, así que confirmen el precio total para 3 por WhatsApp.', solo450: 'Nota de precio: Viajo solo, pero este es el paquete de $450 para 4, así que el precio indicado es $450 en total. Confirmen mi reserva por WhatsApp.', three450: 'Nota de precio: Somos 3 viajeros. El precio de $450 cubre a 4 personas, así que confirmen el precio total para 3 por WhatsApp.', soloPkg: 'Nota de precio: Viajo solo. Esta estancia tiene precio para 2 personas, así que confirmen el precio total para 1 por WhatsApp.', groupPkg: 'Nota de precio: Nuestro grupo no es de 2 personas, así que confirmen el precio total para nuestro grupo por WhatsApp.', group450: 'Nota de precio: Nuestro grupo no es de 4 personas, así que confirmen el precio total para nuestro grupo por WhatsApp.' },
          vi: { solo250: 'Ghi chú giá: Tôi đi một mình, nhưng đây là gói $250 cho 2 người, nên giá niêm yết là $250 tổng cộng. Vui lòng xác nhận đặt tour của tôi qua WhatsApp.', three250: 'Ghi chú giá: Chúng tôi có 3 khách. Giá $250 áp dụng cho 2 người, vui lòng xác nhận tổng giá cho 3 người qua WhatsApp.', solo450: 'Ghi chú giá: Tôi đi một mình, nhưng đây là gói $450 cho 4 người, nên giá niêm yết là $450 tổng cộng. Vui lòng xác nhận đặt tour của tôi qua WhatsApp.', three450: 'Ghi chú giá: Chúng tôi có 3 khách. Giá $450 áp dụng cho 4 người, vui lòng xác nhận tổng giá cho 3 người qua WhatsApp.', soloPkg: 'Ghi chú giá: Tôi đi một mình. Gói lưu trú này có giá cho 2 người, vui lòng xác nhận tổng giá cho 1 người qua WhatsApp.', groupPkg: 'Ghi chú giá: Quy mô nhóm của chúng tôi khác với giá cho 2 người, vui lòng xác nhận tổng giá cho nhóm qua WhatsApp.', group450: 'Ghi chú giá: Quy mô nhóm của chúng tôi khác với giá cho 4 người, vui lòng xác nhận tổng giá cho nhóm qua WhatsApp.' },
          zh: { solo250: '价格备注：我独自出行，但这是 $250 双人套餐，标价总计 $250。请通过 WhatsApp 确认我的预订。', three250: '价格备注：我们共 3 位旅客。$250 为 2 人价格，请通过 WhatsApp 确认 3 人总价。', solo450: '价格备注：我独自出行，但这是 $450 四人套餐，标价总计 $450。请通过 WhatsApp 确认我的预订。', three450: '价格备注：我们共 3 位旅客。$450 为 4 人价格，请通过 WhatsApp 确认 3 人总价。', soloPkg: '价格备注：我独自出行。此住宿为 2 人价格，请通过 WhatsApp 确认 1 人总价。', groupPkg: '价格备注：我们的人数与所示 2 人价格不同，请通过 WhatsApp 确认我们团队的总价。', group450: '价格备注：我们的人数与所示 4 人价格不同，请通过 WhatsApp 确认我们团队的总价。' },
          ko: { solo250: '가격 참고: 혼자 여행하지만 이 상품은 2인 $250 패키지라서 표시 가격은 총 $250입니다. WhatsApp으로 예약을 확인해 주세요.', three250: '가격 참고: 저희는 3명입니다. $250은 2인 가격이라서 3인 총가격을 WhatsApp으로 확인해 주세요.', solo450: '가격 참고: 혼자 여행하지만 이 상품은 4인 $450 패키지라서 표시 가격은 총 $450입니다. WhatsApp으로 예약을 확인해 주세요.', three450: '가격 참고: 저희는 3명입니다. $450은 4인 가격이라서 3인 총가격을 WhatsApp으로 확인해 주세요.', soloPkg: '가격 참고: 혼자 여행합니다. 이 숙박은 2인 가격이라서 1인 총가격을 WhatsApp으로 확인해 주세요.', groupPkg: '가격 참고: 저희 인원이 표시된 2인 가격과 달라서 그룹 총가격을 WhatsApp으로 확인해 주세요.', group450: '가격 참고: 저희 인원이 표시된 4인 가격과 달라서 그룹 총가격을 WhatsApp으로 확인해 주세요.' }
        };
        function priceNoteFor(dealKey, n) {
          var d = PRICE_NOTES[currentLang] || PRICE_NOTES.en;
          if (dealKey === 'b1t1') { if (n === 1) return d.solo250; if (n === 3) return d.three250; if (n !== 2) return d.groupPkg; }
          else if (dealKey === 'family') { if (n === 1) return d.solo450; if (n === 3) return d.three450; if (n !== 4) return d.group450; }
          else if (DEALS[dealKey] && DEALS[dealKey].price) { if (n === 1) return d.soloPkg; if (n !== 2) return d.groupPkg; }
          return '';
        }
        /* A new deal starts clean: no carried-over date, group size, or Hue add-on. */
        function resetBookingFields(dealKey) {
          if (!dateInput || !hueEl) return;
          dateInput.value = '';
          hueEl.checked = false;
          if (hueSwitch) hueSwitch.classList.remove('on');
          pax = dealKey === 'family' ? 4 : 2;
          flexibleConfirmed = false;
          dealTouched = false;
          if (flexPrompt) flexPrompt.hidden = true;
          syncQuickDates();
        }
        function getDeal() { for (var i = 0; i < radios.length; i++) if (radios[i].checked) return radios[i].value; return 'b1t1'; }
        function setDeal(k) { radios.forEach(function (r) { r.checked = r.value === k; }); }
        function dealText(k) { var r = document.querySelector('input[name="deal"][value="' + k + '"]'); var t = r && r.parentNode.querySelector('.t'); return t ? t.textContent : DEALS[k].line; }

        /* earliest date = today (local); hide popular dates that already passed */
        (function () {
          if (!dateInput) return;
          var n = new Date(), m = n.getFullYear() + '-' + pad(n.getMonth() + 1) + '-' + pad(n.getDate());
          if (m > dateInput.min) dateInput.min = m;
          document.querySelectorAll('[data-quick-date]').forEach(function (b) { if (b.getAttribute('data-quick-date') < dateInput.min) b.hidden = true; });
        })();

        function parseDateVal(val) {
          if (!val) return null; var p = val.split('-'); if (p.length !== 3) return null;
          var dt = new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
          return isNaN(dt.getTime()) ? null : dt;
        }
        function formatDateObj(dt) {
          if (!dt) return null;
          try { return new Intl.DateTimeFormat(LOCALES[currentLang] || 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(dt); }
          catch (e) { return dt.toDateString(); }
        }
        function syncQuickDates() {
          document.querySelectorAll('[data-quick-date]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-quick-date') === dateInput.value)); });
        }

        var lastNiceDate = null, lastNiceEnd = null;
        function updateBooking(source) {
          if (!dateInput || !paxEl || !verdictEl || !previewEl || !sendEl) return;
          var dealKey = getDeal();
          if (source === 'pax' && !dealTouched) {
            if (pax >= 4 && dealKey === 'b1t1') { dealKey = 'family'; setDeal('family'); }
            else if (pax <= 3 && dealKey === 'family') { dealKey = 'b1t1'; setDeal('b1t1'); }
          }
          if (source === 'deal') dealTouched = (dealKey === 'custom' || dealKey === 'beyond' || dealKey === 'voucher' || !!DEALS[dealKey].ext);

          paxEl.textContent = pax;
          if (hueSwitch) hueSwitch.classList.toggle('on', !!hueEl.checked);
          if (flexPrompt && dateInput.value) flexPrompt.hidden = true;
          lastPriceNote = priceNoteFor(dealKey, pax);
          var deal = DEALS[dealKey];
          document.getElementById('pickedTxt').textContent = dealText(dealKey);

          var arrival = parseDateVal(dateInput.value), niceDate = formatDateObj(arrival), endDate = null, niceEnd = null;
          if (arrival && deal.nights) { endDate = new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate() + deal.nights); niceEnd = formatDateObj(endDate); }
          lastNiceDate = niceDate; lastNiceEnd = niceEnd;
          if (currentLang === 'en') {
            if (niceDate && deal.days) dateHint.textContent = 'Arriving ' + niceDate + '. This stay runs ' + deal.days + ' days and ' + deal.nights + ' nights, ending ' + niceEnd + '.';
            else if (niceDate) dateHint.textContent = 'Arriving ' + niceDate + '.';
            else if (deal.days) dateHint.textContent = 'Tap the calendar and choose your arrival day. This stay runs ' + deal.days + ' days and ' + deal.nights + ' nights from there.';
            else dateHint.textContent = 'Tap the calendar and choose the day you want to arrive in Da Nang.';
          } else {
            if (niceDate && deal.days) dateHint.textContent = niceDate + ' · ' + deal.days + ' ' + T('msgDays') + ', ' + deal.nights + ' ' + T('msgNights') + (niceEnd ? ' · ' + niceEnd : '');
            else if (niceDate) dateHint.textContent = niceDate;
            else dateHint.textContent = T('labelDate');
          }
          syncQuickDates();

          var v;
          if (dealKey === 'ext3') {
            if (pax === 2) v = 'Regular price picked: <span class="amt">$280 total for 2</span> ($140 each), 3 days and 2 nights. Same stay as the Christmas Promo, at the regular rate.';
            else v = 'The Regular stay is priced for 2 at <span class="amt">$280 total</span> (3 days, 2 nights). <span class="amt">Send the booking</span> and HiGo Travel will price it for your group of ' + pax + '.';
          } else if (deal.ext) {
            if (pax === 2) v = 'Extended stay picked: <span class="amt">' + money(deal.price) + ' total for 2</span> (' + money(deal.per) + ' each), ' + deal.days + ' days and ' + deal.nights + ' nights. Built on the $280 Regular stay, each extra night is just +$30 for two.';
            else v = 'Extended stays are priced for 2 at <span class="amt">' + money(deal.price) + ' total</span> (' + deal.days + ' days, ' + deal.nights + ' nights). <span class="amt">Send the booking</span> and HiGo Travel will price it for your group of ' + pax + '.';
          } else if (dealKey === 'b1t1') {
            if (pax === 2) v = 'Perfect fit: <span class="amt">Christmas Promo, Buy 1 Take 1, $250 total</span> ($125 each), 3 days and 2 nights. Regular price for this stay is $280.';
            else if (pax <= 1) v = 'Travelling solo: this deal is the <span class="amt">$250 for 2 package</span>, so the price is <span class="amt">$250 total</span> for the package (3 days, 2 nights), even on your own. It is not $125 for one person. HiGo confirms your booking on WhatsApp.';
            else if (pax === 3) v = 'For 3 travellers: the <span class="amt">$250 price covers 2 people</span>. There is no fixed price for 3 on this deal, so <span class="amt">HiGo will confirm the total for 3 on WhatsApp</span> before you pay. That note is included in your WhatsApp message.';
            else v = 'Buy 1 Take 1 is priced for 2 at $250. For ' + pax + ' people the <span class="amt">Family Deal at $450 for 4</span> is the better Christmas Promo. <span class="amt">Send the booking</span> and HiGo Travel will confirm the best price for your group.';
          } else if (dealKey === 'family') {
            if (pax === 4) v = 'Best value: <span class="amt">Family Deal Christmas Promo, $450 total</span> ($112.50 each). Two of you travel free.';
            else if (pax <= 1) v = 'Travelling solo: this deal is the <span class="amt">$450 for 4 package</span>, so the price is <span class="amt">$450 total</span> for the package, even on your own. HiGo confirms your booking on WhatsApp.';
            else if (pax === 3) v = 'For 3 travellers: the Family Deal is <span class="amt">$450 for 4 people</span>. There is no fixed price for 3, so <span class="amt">HiGo will confirm the total for 3 on WhatsApp</span> before you pay. That note is included in your WhatsApp message.';
            else v = 'The Family Deal is priced for 4 at <span class="amt">$450 total</span> ($112.50 each). <span class="amt">Send the booking</span> and HiGo Travel will price it for your group of ' + pax + '.';
          } else if (dealKey === 'voucher') {
            v = 'ProviaMed voucher: <span class="amt">$300 toward 3 days and 2 nights</span> in Da Nang, for travel December 2026 to February 2027. Present the voucher when you book.';
          } else if (dealKey === 'custom') {
            v = 'Custom itinerary: <span class="amt">no fixed price</span>, it is quoted for your group on WhatsApp at an additional cost.';
          } else {
            v = 'Trip beyond Da Nang: <span class="amt">tell us where</span> in the WhatsApp chat and HiGo Travel will put a price together for your group of ' + pax + '.';
          }
          if (currentLang !== 'en' && !(dealKey === 'b1t1' && (pax === 1 || pax === 3))) {
            if (deal.price) v = T('verdictPick') + ': <span class="amt">' + money(deal.price) + ' ' + T('msgTotal') + '</span>' + (deal.per ? ' (' + money(deal.per) + ' ' + T('msgPer') + ')' : '') + (deal.days ? ', ' + deal.days + ' ' + T('msgDays') + ' · ' + deal.nights + ' ' + T('msgNights') + '.' : '.') + ' ' + T('verdictSend');
            else v = T('verdictSend');
          }
          verdictEl.innerHTML = v; verdict2.innerHTML = v;

          var lines = [T('msgIntro'), '', T('msgDeal') + ': ' + (currentLang === 'en' ? deal.line : dealText(dealKey))];
          if (deal.days) lines.push(T('msgStay') + ': ' + deal.days + ' ' + T('msgDays') + ', ' + deal.nights + ' ' + T('msgNights'));
          if (deal.price) {
            if (dealKey === 'b1t1' && pax === 1) lines.push(T('msgPrice') + ': ' + money(deal.price) + ' ' + T('msgTotal') + ' for the $250 for 2 package');
            else if (dealKey === 'b1t1' && pax === 3) lines.push(T('msgPrice') + ': $250 for 2, total for 3 to be confirmed on WhatsApp');
            else lines.push(T('msgPrice') + ': ' + money(deal.price) + ' ' + T('msgTotal') + (deal.per ? ' (' + money(deal.per) + ' ' + T('msgPer') + ')' : ''));
          }
          if (deal.ext && deal.days > 3 && currentLang === 'en') lines.push('Extended stay rate: built on the $280 Regular stay, +$30 per extra night for 2 people');
          lines.push(T('msgDate') + ': ' + (niceDate ? niceDate : T('msgFlexible')));
          if (niceDate && niceEnd) lines.push(T('msgEnd') + ': ' + niceEnd);
          lines.push(T('msgTrav') + ': ' + pax + ' ' + (pax === 1 ? T('msgPerson') : T('msgPeople')));
          if (lastPriceNote) lines.push(lastPriceNote);
          if (hueEl.checked) lines.push(T('msgHue'));
          lines.push(''); lines.push(T('msgConfirm'));
          var msg = lines.join('\n');
          previewEl.textContent = msg;
          var waHref = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
          sendEl.setAttribute('href', waHref);
          if (floatEl && source && source !== 'init') floatEl.setAttribute('href', waHref);
          sendLabel.textContent = T('sendDefault');
          if (state.step === 3) renderSummary();
        }
        window.updateBooking = updateBooking;

        function renderSummary() {
          var k = getDeal(), deal = DEALS[k], ul = document.getElementById('sum'); if (!ul) return; ul.innerHTML = '';
          function row(label, val, cls) { var li = document.createElement('li'); if (cls) li.className = cls; var s = document.createElement('span'); s.textContent = label; var b = document.createElement('b'); b.textContent = val; li.appendChild(s); li.appendChild(b); ul.appendChild(li); }
          row(T('msgDeal'), dealText(k), 'deal-line');
          row(T('msgDate'), lastNiceDate || T('msgFlexible'));
          if (lastNiceDate && lastNiceEnd) row(T('msgEnd'), lastNiceEnd);
          row(T('msgTrav'), pax + ' ' + (pax === 1 ? T('msgPerson') : T('msgPeople')));
          if (hueEl.checked) row(T('sumHue'), currentLang === 'en' ? 'Hue tour, price confirmed on WhatsApp' : T('sumYes'));
          if (deal.price) {
            if (k === 'b1t1' && pax === 3) row(T('msgPrice'), '$250 for 2, total for 3 to be confirmed on WhatsApp');
            else row(T('msgPrice'), money(deal.price) + ' ' + T('msgTotal'));
          }
          if (lastPriceNote) row(currentLang === 'en' ? 'Pricing' : T('msgPrice'), lastPriceNote, 'deal-line');
        }

        radios.forEach(function (r) { r.addEventListener('change', function () { resetBookingFields(r.value); updateBooking('deal'); }); });
        if (dateInput) dateInput.addEventListener('change', function () { if (dateInput.value) flexibleConfirmed = false; updateBooking('date'); });
        if (dateInput) dateInput.addEventListener('input', function () { updateBooking('date'); });
        if (hueEl) hueEl.addEventListener('change', function () { if (hueSwitch) hueSwitch.classList.toggle('on', !!hueEl.checked); updateBooking('hue'); });
        /* Big, easy calendar button: opens the native date picker directly. */
        var calBtn = document.getElementById('bk-cal-btn');
        if (calBtn) calBtn.addEventListener('click', function () {
          dateInput.focus();
          if (dateInput.showPicker) { try { dateInput.showPicker(); } catch (e) {} }
        });
        /* Flexible-dates prompt: only an explicit tap lets you continue with no date. */
        var flexPick = document.getElementById('flexPick');
        var flexYes = document.getElementById('flexYes');
        if (flexPick) flexPick.addEventListener('click', function () {
          if (flexPrompt) flexPrompt.hidden = true;
          dateInput.focus();
          if (dateInput.showPicker) { try { dateInput.showPicker(); } catch (e) {} }
        });
        if (flexYes) flexYes.addEventListener('click', function () {
          flexibleConfirmed = true;
          if (flexPrompt) flexPrompt.hidden = true;
          updateBooking('date');
          goStep(3);
        });
        var _bkMinus = document.getElementById('bk-minus'); if (_bkMinus) _bkMinus.addEventListener('click', function () { if (pax > 1) { pax--; updateBooking('pax'); } });
        var _bkPlus = document.getElementById('bk-plus'); if (_bkPlus) _bkPlus.addEventListener('click', function () { if (pax < 12) { pax++; updateBooking('pax'); } });
        document.querySelectorAll('[data-quick-date]').forEach(function (b) {
          b.addEventListener('click', function () { dateInput.value = b.getAttribute('data-quick-date'); updateBooking('date'); });
        });

        /* "Book this deal" buttons: preselect the deal and land on the date step.
           Every new deal starts clean: date, travellers and Hue are reset first,
           so nothing from a previous booking carries into this one. */
        function bookDeal(key) {
          if (DEALS[key]) { try { sessionStorage.setItem('higoDeal', key); } catch (e) {} }
          goToPage('book', { deal: key, step: 2 });
        }
        document.querySelectorAll('[data-book-deal]').forEach(function (btn) {
          btn.addEventListener('click', function () { bookDeal(btn.getAttribute('data-book-deal')); });
        });

        var langWrap = document.getElementById('langWrap'), langBtn = document.getElementById('langBtn'), langMenu = document.getElementById('langMenu');
        function setLangOpen(open) {
          langMenu.hidden = !open;
          langWrap.classList.toggle('open', open);
          langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        langBtn.addEventListener('click', function () { setLangOpen(langMenu.hidden); });
        langMenu.querySelectorAll('button[data-lang]').forEach(function (b) {
          b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); setLangOpen(false); langBtn.focus(); });
        });
        document.addEventListener('click', function (e) { if (!langMenu.hidden && !langWrap.contains(e.target)) setLangOpen(false); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !langMenu.hidden) { setLangOpen(false); langBtn.focus(); } });
        applyLang((function () { try { var _l = localStorage.getItem('higoLang'); return _l || 'en'; } catch (e) { return 'en'; } })());

        /* multi-page site: show this page's sections, no hash routing */
        showPage(window.HIGO_PAGE || 'home', { push: false });
        /* Book page: preselect a deal from ?deal= / #deal= / sessionStorage, land on the date step */
        (function () {
          if (window.HIGO_PAGE !== 'book') return;
          var q = null;
          try { q = sessionStorage.getItem('higoDeal'); if (q) sessionStorage.removeItem('higoDeal'); } catch (e) {}
          if (!q) { try { q = new URLSearchParams(location.search).get('deal') || (location.hash.match(/deal=([a-z0-9]+)/i) || [])[1]; } catch (e) {} }
          if (q && DEALS[q]) { setDeal(q); resetBookingFields(q); updateBooking('deal'); goStep(2, true); }
          else {
            updateBooking('init');
            var _st = null; try { _st = new URLSearchParams(location.search).get('step'); } catch (e) {}
            if (_st === '2') goStep(2, true);
          }
        })();
        refreshChip();

        /* ---------------- floating WhatsApp: drag it anywhere ---------------- */
        if (floatEl) {
          var dragging = false, dragMoved = false, suppressClick = false, sx = 0, sy = 0, bl = 0, bt = 0;
          function clampFloat(l, t) {
            var w = floatEl.offsetWidth, hh = floatEl.offsetHeight, m = 10, reserve = 96;
            return { left: Math.min(Math.max(l, m), Math.max(m, window.innerWidth - w - m)), top: Math.min(Math.max(t, m), Math.max(m, window.innerHeight - hh - reserve)) };
          }
          function placeFloat(l, t) { var p = clampFloat(l, t); floatEl.style.left = p.left + 'px'; floatEl.style.top = p.top + 'px'; floatEl.style.right = 'auto'; floatEl.style.bottom = 'auto'; }
          floatEl.addEventListener('pointerdown', function (e) {
            dragging = true; dragMoved = false; sx = e.clientX; sy = e.clientY;
            var r = floatEl.getBoundingClientRect(); bl = r.left; bt = r.top;
            try { floatEl.setPointerCapture(e.pointerId); } catch (err) {}
          });
          floatEl.addEventListener('pointermove', function (e) {
            if (!dragging) return;
            var dx = e.clientX - sx, dy = e.clientY - sy;
            if (!dragMoved && Math.abs(dx) + Math.abs(dy) < 6) return;
            dragMoved = true; placeFloat(bl + dx, bt + dy);
          });
          function endDrag() {
            if (!dragging) return; dragging = false;
            if (dragMoved) { suppressClick = true; setTimeout(function () { suppressClick = false; }, 0); }
            dragMoved = false;
          }
          floatEl.addEventListener('pointerup', endDrag);
          floatEl.addEventListener('pointercancel', endDrag);
          floatEl.addEventListener('click', function (e) { if (suppressClick) { e.preventDefault(); suppressClick = false; } });
          floatEl.addEventListener('dragstart', function (e) { e.preventDefault(); });
          window.addEventListener('resize', function () { if (floatEl.style.left) { var r = floatEl.getBoundingClientRect(); placeFloat(r.left, r.top); } });
        }
      })();
    