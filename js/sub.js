$(function () {
  const body = $("body");
  const subH2 = $(".sub-hd-lnb h2");
  const lnbBtn = $(".canon-lnb-btn");
  const subBg = $(".sub-hd-lnb");
  let pageTitle = "Consumer,Business,Event,Service,Support,Company";
  let lnb = $(".depth2-list");
  let lnbDepth3 = $(".sub-depth3");
  pageTitle = pageTitle.split(",");
  let bodyNum, mainNum, subNum;
  bodyNum = body.attr("class");
  bodyNum = bodyNum.split(" ");
  mainNum = bodyNum[0].slice(3, 4);
  subNum = bodyNum[0].slice(5, 6);
  let subEl = lnb.eq(mainNum).children().eq(subNum);


  // 페이지 타이틀 입력
  let aaa = subH2.text(pageTitle[mainNum]); 


  // LNB 화면에 표시(해상도에 따라)
  if (body.hasClass("mo")) {
    lnb.eq(mainNum).css("display", "none");
    subEl.find(".sub-depth3").css("display", "none");
  } else {
    lnb.eq(mainNum).css("display", "flex");
    subEl.find(".sub-depth3").css("display", "flex");
  }


  // 활성화되는 서브메뉴
  subEl.addClass("active");


  // 모바일 LNB Label 입력
  lnbBtn.text(subEl.text());


  // LNB 리스트 제어
  $(window).resize(function () {
    if (body.hasClass("mo")) {
      lnb.eq(mainNum).css("display", "none");
    } else {
      lnb.eq(mainNum).css("display", "flex");
    }
  });


  // LNB 제어
  lnbBtn.click(function () {
    lnb.eq(mainNum).toggle();
  });


  // 서브배경이미지 설정
  subBg.addClass(`bg${mainNum}-${subNum}`);
});