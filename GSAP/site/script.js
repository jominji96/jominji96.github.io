gsap.registerPlugin(ScrollTrigger);

//헤더 영역 에니메이션 처리
// const tl = gsap.timeline();
// tl.from(".slogan>h2",{
//   y:-50,
//   opacity:0,
//   druation:1
// })
// .from(".slogan>h1",{
//   y:-50,
//   opacity:0,
//   druation:1
// },"-=0.3")
// .from(".slogan>p",{
//   y:-50,
//   opacity:0,
//   druation:1
// },"-=0.3");
gsap.from(".slogan>h2, .slogan>h1, .slogan>p",{
  y:-50,
  opacity:0,
  duration:1,
  stagger:0.5
});

//어바웃 애니메이션 처리
gsap.from("#about",{
  y:100,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#about",
    start:"top 60%",
    end:"top 30%",
    scrub:true
  }
});

//라스터 애니메이션 처리(가로 스크롤)
const $ul = document.querySelector("#laster>ul");
// const dist = $ul.scrollWidth-window.innerWidth;   //첫번재 윈도우 화면을 뺀 나머지 이동해야 되는 위드값 구하기
const dist = $ul.scrollWidth-(window.innerWidth*0.7);
gsap.to($ul,{
    x:-(dist),
    ease:"none",
    scrollTrigger:{
      trigger:"#laster",
      start:"top top",
      end:"+="+dist,
      pin:true,
      scrub:true,
      markers:true
    }
  });

//컨택트 애니메이션 처리


gsap.from("#contact .title",{
  opacity:0.3,
  scale:0.5,
  duration:2,
  scrollTrigger:{
    trigger:"#contact",
    start:"top 50%"
  }
})
