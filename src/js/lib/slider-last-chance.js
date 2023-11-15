'use strict'

function mainSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.last-chance__slider', {
        spaceBetween: 10,
        slidesPerView: 1,

        pagination: {
          el: '.last-chance__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            var titles = ['Стулья', 'Диваны', 'Кресла']
            return '<span class="' + className + '">' + titles[index] + '</span>'
          },
        },

        scrollbar: {
          el: '.last-chance__slider-pagination',
          // hide: true,
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.last-chance__slider', {
        slidesPerView: 1,
        breakpoints: {
          425: {
            pagination: {
              el: '.last-chance__slider-pagination',
              type: 'bullets',
              clickable: true,
              renderBullet: function (index, className) {
                var titles = ['Стулья', 'Диваны', 'Кресла']
                return '<span class="' + className + '">' + titles[index] + '</span>'
              },
            },
          },
        },
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

mainSlider()
