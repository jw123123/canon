$(function () {
  const body = $('body')
  let swiper;

  if(!body.hasClass('mo')) {
  swiper = new Swiper(".worth-container", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: {
      releaseOnEdges: true, // ⭐ 핵심: 슬라이드가 처음/끝일 때만 페이지 스크롤 허용
      sensitivity: 1,       // 휠 감도 (너무 빠르면 늘리세요)
    },
    speed: 800,             // 전환 속도를 조금 늦춰야 사용자가 멈춘 느낌을 받습니다.
    observer: true,
    observeParents: true,
  });
  }
});