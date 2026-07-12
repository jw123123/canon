$(function () {
  const body = $("body");
  const depth3Link = $(".sub-depth3 a");
  const pageNum = $(".pagination .page-num");
  const pageNumLink = $(".pagination .page-num a");
  const pageBtn = $(".pagination .page-prev a, .pagination .page-next a");
  const activeDepth3 = $(".depth2-list li.active > .sub-depth3");
  const cardList = $(".card-list");
  const productMain = $("#product-main");


  // depth3(LNB) 클릭 시 active 상태 변경
  depth3Link.on("click", function (e) {
    e.preventDefault();
    $(this).closest(".sub-depth3").find("a").removeClass("active");
    $(this).addClass("active");
  });


  // 페이지네이션 번호 클릭 시 active 상태 변경
  pageNumLink.on("click", function (e) {
    e.preventDefault();
    pageNum.removeClass("active");
    $(this).parent().addClass("active");
  });


  // 페이지네이션 이전/다음 버튼 : active를 한 칸씩 이동
  pageBtn.on("click", function (e) {
    e.preventDefault();
    let idx = pageNum.index(pageNum.filter(".active"));
    idx += $(this).parent().hasClass("page-next") ? 1 : -1;
    if (idx < 0 || idx >= pageNum.length) return;
    pageNum.removeClass("active").eq(idx).addClass("active");
  });


  // depth3 사이드바를 제품 그리드 좌측 상단에 정렬
  function alignDepth3() {
    if (!activeDepth3.length || !cardList.length || body.hasClass("mo") || !activeDepth3.is(":visible")) return;

    activeDepth3.css({ left: 0, top: 0 });
    const base = activeDepth3.offset();
    const targetLeft = productMain.offset().left + parseFloat(productMain.css("padding-left"));
    const targetTop = cardList.offset().top;

    activeDepth3.css({
      left: targetLeft - base.left + "px",
      top: targetTop - base.top + "px",
    });
  }

  alignDepth3();
  $(window).on("resize load", alignDepth3);
});
