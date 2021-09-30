new Swiper('.page__slider-body', {
   //Количетсво слайдов для показа
   slidesPerView: 1.06,
   //Отсуп между слайдами 
   spaceBetween: 0,
   //Количество скипнутых слайдов
   slidesPerGroup: 1,
   //Активный слайд по центру
   centeredSlides: true,
   //Бесканечность
   loop: true,
   //Количество дублирющих слайдов 
   loopedSlides: 0,
   //Скорость
   speed: 300,
   // Свободный режим
   freeMode: false,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   //},
   pagination: {
      el: '.pagination-slider',
      //Булеты
      clickable: true,

   },
   grabCursor: true,
   // Управление клавиатурой
   keyboard: {
      // Включить \ Выключить
      enebled: true,
      //Включение когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      //pageUp, pageDown 
      pageUpDown: true,
   },
});



//================================================================================================
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu,.header__up,.header__menu-follow').toggleClass('_active');
      $('body').toggleClass('_lock')
   });
   $('.footer__agreements-checkbox,.footer__agreements-checkbox-arrow').click(function (event) {
      $('.footer__agreements-checkbox-arrow').toggleClass('_checked');
   });
});

function headerRomeveActive() {
   $('body').removeClass('_lock');
   $('.header__burger,.header__menu,.header__up,.header__menu-follow').removeClass('_active');
}

//Слушаелей событий размера окна

$(window).resize(function (event) {
   const windowInnerWidth = window.innerWidth;
   const windowInnerHeight = window.innerHeight;
   if (windowInnerWidth > 767) {
      if ($('body').hasClass('_lock')) {
         headerRomeveActive()
      }
   }
});

//Размер шапки при сколье
function HeaderResize(wst, el, property) {//65 + 35 * (i / 100)
   const scrollPath = 100 - wst;
   if (window.innerWidth < 550) {
      if (scrollPath >= 0) {
         el.style[property] = (45 + 25 * (scrollPath / 100)) + 'px';
      } else {
         el.style[property] = 45 + 'px';
      }
   } else if (window.innerWidth < 767) {
      if (scrollPath >= 0) {
         el.style[property] = (55 + 35 * (scrollPath / 100)) + 'px';
      } else {
         el.style[property] = 55 + 'px';
      }
   } else {
      if (scrollPath >= 0) {
         el.style[property] = (65 + 35 * (scrollPath / 100)) + 'px';
      } else {
         el.style[property] = 65 + 'px';
      }
   }
}
//Анимация логотиа
function scrollAnim(wst, min, max, element, getscroll, property) {
   const scrollPath = getscroll - wst;
   const el = document.querySelector(element);
   if (scrollPath >= 0) {
      const addSize = max - min;
      el.style[property] = (min + addSize * (scrollPath / getscroll)) + 'px';
   } else {
      el.style[property] = min + 'px';
   }
}
//Cобытие скролл window 
$(window).scroll(function () {
   const windowScrollTop = window.pageYOffset;
   if (window.innerWidth <= 550) {
      scrollAnim(windowScrollTop, 65, 60, '.header__down', 100, 'height');
      scrollAnim(windowScrollTop, 31, 35, '.header__logo', 100, 'fontSize');
   } if (window.innerWidth <= 767) {
      scrollAnim(windowScrollTop, 65, 80, '.header__down', 100, 'height');
      scrollAnim(windowScrollTop, 65, 80, '.header__up', 100, 'top');
      scrollAnim(windowScrollTop, 31, 40, '.header__logo', 100, 'fontSize');
   } else {
      scrollAnim(windowScrollTop, 65, 100, '.header__down', 100, 'height');
      scrollAnim(windowScrollTop, 31, 50, '.header__logo', 100, 'fontSize');
   }
});


function ibg() {
   let ibg = document.querySelectorAll("._ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});



//footerSelectedOption
let ListSelected = document.getElementById('langInFooterForm');

let footerSelectedOption = document.querySelectorAll('#footerSelectedOption');
console.log(footerSelectedOption);

footerListSelected(footerSelectedOption);

let sad = Array.from(footerSelectedOption);
console.log(sad);


function footerListSelected(arrayOption) {
   for (let j = 0; j < arrayOption.length; j++) {
      const OptinonHtml = arrayOption[j];
      let elContent = OptinonHtml.innerHtml;
      //console.log(elContent);
   }
}

// Анимация поeвления при скролле

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffSet = offset(animItem).top;
         const animeStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animeStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animeStart;
         }
         if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}

//================================== Dynamic adapt =================================e======

class DynamicAdapt { constructor(e) { this.type = e } init() { this.оbjects = [], this.daClassname = "_dynamic_adapt_", this.nodes = [...document.querySelectorAll("[data-da]")], this.nodes.forEach((e => { const t = e.dataset.da.trim().split(","), a = {}; a.element = e, a.parent = e.parentNode, a.destination = document.querySelector(`${t[0].trim()}`), a.breakpoint = t[1] ? t[1].trim() : "767", a.place = t[2] ? t[2].trim() : "last", a.index = this.indexInParent(a.parent, a.element), this.оbjects.push(a) })), this.arraySort(this.оbjects), this.mediaQueries = this.оbjects.map((({ breakpoint: e }) => `(${this.type}-width: ${e}px),${e}`)).filter(((e, t, a) => a.indexOf(e) === t)), this.mediaQueries.forEach((e => { const t = e.split(","), a = window.matchMedia(t[0]), i = t[1], s = this.оbjects.filter((({ breakpoint: e }) => e === i)); a.addEventListener("change", (() => { this.mediaHandler(a, s) })), this.mediaHandler(a, s) })) } mediaHandler(e, t) { e.matches ? t.forEach((e => { e.index = this.indexInParent(e.parent, e.element), this.moveTo(e.place, e.element, e.destination) })) : t.forEach((({ parent: e, element: t, index: a }) => { t.classList.contains(this.daClassname) && this.moveBack(e, t, a) })) } moveTo(e, t, a) { t.classList.add(this.daClassname), "last" === e || e >= a.children.length ? a.append(t) : "first" !== e ? a.children[e].before(t) : a.prepend(t) } moveBack(e, t, a) { t.classList.remove(this.daClassname), void 0 !== e.children[a] ? e.children[a].before(t) : e.append(t) } indexInParent(e, t) { return [...e.children].indexOf(t) } arraySort(e) { "min" === this.type ? e.sort(((e, t) => e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? -1 : "last" === e.place || "first" === t.place ? 1 : e.place - t.place : e.breakpoint - t.breakpoint)) : e.sort(((e, t) => e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? 1 : "last" === e.place || "first" === t.place ? -1 : t.place - e.place : t.breakpoint - e.breakpoint)) } }

//================================== SPOOLlER =================================e======

"use strict"; const spollersArray = document.querySelectorAll("[data-spollers]"); if (spollersArray.length > 0) { const e = Array.from(spollersArray).filter((function (e, t, s) { return !e.dataset.spollers.split(",")[0] })); e.length > 0 && s(e); const t = Array.from(spollersArray).filter((function (e, t, s) { return e.dataset.spollers.split(",")[0] })); if (t.length > 0) { const e = []; t.forEach((t => { const s = {}, r = t.dataset.spollers.split(","); s.value = r[0], s.type = r[1] ? r[1].trim() : "max", s.item = t, e.push(s) })); let r = e.map((function (e) { return "(" + e.type + "-width:" + e.value + "px)," + e.value + "," + e.type })); r = r.filter((function (e, t, s) { return s.indexOf(e) === t })), r.forEach((t => { const r = t.split(","), o = r[1], i = r[2], l = window.matchMedia(r[0]), n = e.filter((function (e) { if (e.value === o && e.type === i) return !0 })); l.addListener((function () { s(n, l) })), s(n, l) })) } function s(e, t = !1) { e.forEach((e => { e = t ? e.item : e, t.matches || !t ? (e.classList.add("_init"), r(e), e.addEventListener("click", o)) : (e.classList.remove("_init"), r(e, !1), e.removeEventListener("click", o)) })) } function r(e, t = !0) { const s = e.querySelectorAll("[data-spoller]"); s.length > 0 && s.forEach((e => { t ? (e.removeAttribute("tabindex"), e.classList.contains("_active") || (e.nextElementSibling.hidden = !0)) : (e.setAttribute("tabindex", -1), e.nextElementSibling.hidden = !1) })) } function o(e) { const t = e.target; if (t.hasAttribute("data-spoller") || t.closest("[data-spoller]")) { const s = t.hasAttribute("data-spoller") ? t : t.closest("[data-spoller]"), r = s.closest("[data-spollers]"), o = !!r.hasAttribute("data-one-spoller"); r.querySelectorAll("._slide").length || (o && !s.classList.contains("_active") && i(r), s.classList.toggle("_active"), _slideToggle(s.nextElementSibling, 500)), e.preventDefault() } } function i(e) { const t = e.querySelector("[data-spoller]._active"); t && (t.classList.remove("_active"), _slideUp(t.nextElementSibling, 500)) } } let _slideUp = (e, t = 500) => { e.classList.contains("_slide") || (e.classList.add("_slide"), e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout((() => { e.hidden = !0, e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide") }), t)) }, _slideDown = (e, t = 500) => { if (!e.classList.contains("_slide")) { e.classList.add("_slide"), e.hidden && (e.hidden = !1); let s = e.offsetHeight; e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = s + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((() => { e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide") }), t) } }, _slideToggle = (e, t = 500) => e.hidden ? _slideDown(e, t) : _slideUp(e, t);
