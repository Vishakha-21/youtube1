 gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





 function cursereffect(){
    var page1contain = document.querySelector("#page1-contain")
 var cursor = document.querySelector("#cursor")
page1contain.addEventListener("mousemove", function(dets){
             gsap.to("#cursor",{
             x:dets.x,
             y:dets.y
        })
})
page1contain.addEventListener("mouseenter",function(){
    gsap.to("#cursor", {scale: 1, opacity: 1})
})
page1contain.addEventListener("mouseleave",function(){
    gsap.to("#cursor", {scale: 0, opacity: 0})
           
})

 }
 cursereffect()

 function page2animation(){
      gsap.from(".element h1",{
        y:150,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
          trigger:"#page2",
          scroller:"#main",
          start: "top 40%",
          end:"top 37%",
          scrub:2,
          //markers:true
        }
      })
 }
 page2animation()

 function page3animation(){
      gsap.from("#page3-contain h2",{
        y:150,
        stagger:0.2,
        duration:2,
        scrollTrigger:{
          trigger:"#page3",
          scroller:"#main",
          start: "top 40%",
          end:"top 37%",
          scrub:2,
          //markers:true
        }
      })
 }
 page3animation()
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      }
    });

    var t1=gsap.timeline()
    t1.from("#loader h3",{
      x:40,
      opacity:0,
      duration:1,
      stagger:0.1

    })
    t1.to("#loader h3",{
      opacity:0,
      x:-40,
      stagger:0.1,
      duration:1
    })
    t1.to("#loader",{
      opacity:0
    })
    t1.to("#loader",{
      display:"none"
    })
    t1.from("#page1-contain h1 span",{
      y:100,
      opacity:0,
      stagger:0.2
    })