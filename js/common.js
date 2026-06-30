$(function () {
  const body = "body";
  let viewportH, viewportW;
  const gnb = "#canon-gnb";
  const mainMenu = ".depth1";
  const subMenu = ".depth2-container";
  const depth2 = ".depth2 > li > a";
  const depth3 = ".depth3";
  const siteMapBtn = ".sitemap-btn";
  const closeBtn = ".btn-close";
  const siteMap = ".mo-gnb-sitemap";
  let speed = 300;
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2-wrap";
  const blankAnchor = "a[href='#']"
  const fsBtn = ".fs-btn"
  const fsList = ".fs-site-wrap"


  //  반응형 구현
  rwd();
  $(window).resize(function () {
    rwd();
  });


  // 서브메뉴 오픈
  $(mainMenu).mouseenter(function () {
    $(this).find(subMenu).show();
  });
  $(mainMenu).mouseleave(function () {
    $(this).find(subMenu).hide();
  });


  // 카테고리 hover시 컬러 변경
  $(mainMenu).mouseenter(function () {
    $(mainMenu).find(">a").removeClass("point");
    $(this).find(">a").addClass("point");
  });

  $(mainMenu).mouseleave(function () {
    $(mainMenu).find(">a").removeClass("point");
    $(depth2).removeClass("hover_line");
  });


  // 푸터 패밀리사이트 오픈
  $(fsBtn).click(function () {
    $(fsList).toggle();
  });


  // 모바일 메뉴 펼치기/접기
  $(smMainMenu).click(function (e) {
    if ($(body).hasClass("mo")) {
      e.preventDefault(); 
      $(this).parent().siblings().find(smSubMenu).stop().slideUp(300);
      $(this).next().stop().slideToggle(300);
    }
  });

  $(siteMapBtn).click(function () {
    if ($(body).hasClass("mo")) {
      $(body).addClass("fixed");
      $(siteMap).addClass("on");
    } else {
      $(body).addClass("fixed");
      $(siteMap).show();
    }
  });

  $(closeBtn).click(function () {
    if ($(body).hasClass("mo")) {
      $(body).removeClass("fixed");
      $(siteMap).removeClass("on");
    } else {
      $(body).removeClass("fixed");
      $(siteMap).hide();
    }
  });


  // 임시링크 실행 막기
  $(blankAnchor).click(function (e) {
    e.preventDefault();
  });


  // 사용자 함수
  function rwd() {
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;

    if (viewportW < 768) {
      $(body).removeClass("tb pc").addClass("mo");
    } else if (viewportW >= 768 && viewportW < 1280) {
      $(body).removeClass("mo pc").addClass("tb");
    } else {
      $(body).removeClass("mo tb").addClass("pc");
    }
    $(siteMap).attr("style", "");
  }
  
  
  // 부드러운 스크롤 기본 사용
  const lenis = new Lenis();
  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);  
});