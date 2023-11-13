'use strict'

function mainSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.reviewr__slider', {
        // spaceBetween: 10,

        pagination: {
          el: '.reviewer__slider-pagination',
          type: 'fraction',
          clickable: true,
        },

        scrollbar: {
          el: '.main-screen__slider-scrollbar',
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.reviewr__slider', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {
          el: '.reviewer__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>'
          },
        },
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

mainSlider()
