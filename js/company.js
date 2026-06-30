$(function () {
  const body = $('body')
  let swiper;

  // 브랜드
  if(body.hasClass('pc')) {
    swiper = new Swiper(".worth-container", {
      direction: "vertical",
      slidesPerView: 1,
      mousewheel: {
        releaseOnEdges: true, 
        sensitivity: 1,      
      },
      speed: 800,
      observer: true,
      observeParents: true,
    });
  }

  // 위치안내
  new daum.roughmap.Lander({
		"timestamp" : "1778060542969",
		"key" : "nbm8rkgvef4",
		"mapWidth" : "850",
		"mapHeight" : "550"
	}).render();
});