$(function () {
  const body = "body";
  const etcItem = ".etc-item";
  const item = ".item";
  const text = ".text";
  const viewMore = ".view";
  const slider = $(".recommend-item");
  const bar = $(".progress");
  let speed = 3000;
  const newItemList = $('.new-pagination li');
  const recommendBtn = $('.recommend-button')


  //etc 영역
  $(etcItem).mouseenter(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "2.5");
      $(this).siblings().css("flex-grow", "0.5");
      $(this).find(text).addClass("active");
      $(this).find(viewMore).stop().toggle();
    }
  });

  $(etcItem).mouseleave(function () {
    if ($(body).hasClass("pc")) {
      $(this).css("flex-grow", "1");
      $(this).siblings().css("flex-grow", "1");
      $(this).find(text).removeClass("active");
      $(this).find(viewMore).stop().toggle();
    }
  });


  //슬라이더 페이지네이션
  // 슬라이드가 변할 때마다 바 너비 업데이트
  slider.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
    let curr;
    let total = slick.slideCount; 
    let width = (curr / total) * 100; 

    if (typeof nextSlide !== 'undefined') {
      curr = nextSlide + 1;
    } else {
      curr = 1;
    }

    bar.css('width', width + '%');
  });


  //슬라이더
  slider.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true, 
    pauseOnFocus: false,  
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  });

  recommendBtn.click(function(){
    recommendBtn.removeClass("active");
    $(this).addClass("active");
  });


  // 신제품 스와이퍼
  let swiper = new Swiper(".myswiper", {
    spaceBetween: 30,
    effect: "fade",
      pagination: $('body').hasClass('mo') ? {
        el: ".new-pagination",
        clickable: true,
      } : false,
          fadeEffect: {
      crossFade: true
    },
   on: {
      init: function() {
        newItemList.eq(0).addClass('active');
      },
      slideChange: function() {
        // 슬라이드가 바뀔 때마다 실행되게
        const activeIndex = this.realIndex;
        
        newItemList.removeClass('active');
        newItemList.eq(activeIndex).addClass('active');
      }
    }
  });

  newItemList.on('click', function () {
    let idx = $(this).index();
    swiper.slideTo(idx);
  });
});