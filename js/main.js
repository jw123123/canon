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

    if (typeof nextSlide !== 'undefined') {
      curr = nextSlide + 1;
    } else {
      curr = 1;
    }

    let total = slick.slideCount; 
    let width = (curr / total) * 100; 
    bar.css('width', width + '%');
  });


  // 2. 그 다음 슬라이더를 실행합니다.
  //슬라이더
  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,  // 마우스 올렸을 때 멈춤 해제
    pauseOnFocus: false,  // 클릭(포커스) 시 멈춤 해제
    pauseOnDotsHover: false,
    responsive: [ // 화면 크기가 변할 때(Responsive)
      {
        breakpoint: 767, // 특정 지점(Breakpoint)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1279, // 1279px화면 이하
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
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
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
   on: {
      init: function() {
        // 초기 로드 시 첫 번째 아이템에 active 추가
        newItemList.eq(0).addClass('active');
      },
      slideChange: function() {
        // 슬라이드가 바뀔 때마다 실행 (자동재생 연동)
        const activeIndex = this.realIndex;
        
        // 모든 li에서 active 제거하고 현재 인덱스만 추가
        newItemList.removeClass('active');
        newItemList.eq(activeIndex).addClass('active');
      }
    }
  });



  // 클릭 시
  newItemList.on('click', function () {
    let idx = $(this).index();
    swiper.slideTo(idx);
  });
  // newItemList.on('mouseleave', () => {
  //   // 마우스를 떼면 다시 자동 재생 시작
  //   swiper.autoplay.start();
  // }); 
});