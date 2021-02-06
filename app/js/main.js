$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.product-detalis__tabs-link').on('click', function(e){
    e.preventDefault();
    $('.product-detalis__tabs-link').removeClass('product-detalis__tabs--active');
    $(this).addClass('product-detalis__tabs--active');
    $('.product-detalis__tabs-item').removeClass('product-detalis__tabs--active');
    $($(this).attr('href')).addClass('product-detalis__tabs--active');
  })

  $('.products-page').on('click', function () {
    $('.user-menu__link-bento, .products__inner').toggleClass('products--active');
  });

  $('.products__btn').on('click', function () {
    $(this).toggleClass('products__btn--active');
  });


  $('.product-detalis__input').styler();


  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.slider-top__slick').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.relate-products__slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,  
    infinite: false,
    appendArrows: $('.relate-products__arrows'),
    prevArrow: '<button type = "button" class = "relate-products__btn-prev"> <img src="images/icon/arrow-slick-left.svg" alt="arrow left"> </button>',
    nextArrow: '<button type = "button" class = "relate-products__btn-next"> <img src="images/icon/arrow-slick-right.svg" alt="arrow right"> </button>'
  });


  $('.recent-products__star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "6px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
  });

  $('.products__star, .product-detalis__star').rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
  });


  $(".filter-price__input").ionRangeSlider({
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text('$' + (data.from).toFixed(2));
      $('.filter-price__to').text('$' + (data.to).toFixed(2));
    },
    onChange: function (data) {
      $('.filter-price__from').text('$' + (data.from).toFixed(2));
      $('.filter-price__to').text('$' + (data.to).toFixed(2));
    }
  });

  
  $('.video-promo__link').fancybox({
  });

  
  var mixer1 = mixitup('.products-mix', {
    selectors: {
      control: '.products__filter-btn'
    }
  });

  var mixer2 = mixitup('.new-design__inner', {
    selectors: {
      control: '.new-design__filter-btn'
    }
  });

});


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:29.90115464489589, lng: -95.37658709709325},
    zoom: 8,
  });
}