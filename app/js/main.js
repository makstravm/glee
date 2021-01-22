$(function () {

  $('.products-week__btn-card, .products-week__btn-wishlist').on('click', function () {
    $(this).toggleClass('products-week__btn--active')
  });

  $('.slider-top__slick').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.video-promo__link').fancybox({
  });

  // var mixerOne = mixitup('.products-week__inner');
  var mixerTwo = mixitup('.new-design__inner');


})