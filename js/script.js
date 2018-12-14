$('.bigslide').slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear'
});

$('.news-slide').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.instagram-slide').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

const scrollTop = $('.scrollTop');
const header = $('.header_bottom');

$(window).scroll(() => {
  let topPos = $(this).scrollTop();
  if (topPos > 200) {
    $(scrollTop).css('opacity', '1');
    $(header).addClass('header_fixed');
  } else {
    $(scrollTop).css('opacity', '0');
    $(header).removeClass('header_fixed');
  }
});

$(scrollTop).click(() => {
  $('html, body').animate(
    {
      scrollTop: 0
    },
    800
  );
});
