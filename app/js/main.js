$(function () {
  $('.top-slider__wrapper').slick({
    prevArrow: '<button class="top-slider__arrow top-slider__arrow--prev"><span class="sr-only">move to previous slide</span><svg><use xlink:href="images/sprites/sprite.svg#slider-left-arrow"></use></svg></button>',
    nextArrow: '<button class="top-slider__arrow top-slider__arrow--next"><span class="sr-only">Move to next slide</span><svg><use xlink:href="images/sprites/sprite.svg#slider-right-arrow"></use></svg></button>',
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('[data-fancybox="gallery"]').fancybox();

  $('.form__input--age').styler();

  $('.menu__link, .logo').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 90;

      $('body,html').animate({ scrollTop: top }, 1000);
  });

  'use strict'

  document.addEventListener("click", documentActions);

  function documentActions(e) {
		const targetElement = e.target;
    let burger = document.querySelector(".burger");
    let menuBody = document.querySelector(".menu");
		if (targetElement.classList.contains('burger')) {
			burger.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		} else {
      burger.classList.remove("_active");
			menuBody.classList.remove("_active");
    }
  }

  const headerElement = document.querySelector('.header');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
    } else {
      headerElement.classList.add('_scroll');
    }
  };
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);
})
