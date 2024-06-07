$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 4,
    smoothWheel: true,
    smoothTouch: false,
    direction: "vertical",
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  gsap.to(".hero-txt", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: -200,
    opacity: 0,
  });

  gsap.to(".mining-img-wrapper", {
    scrollTrigger: {
      trigger: ".mining-img-wrapper",
      start: "top 45%",
      end: "bottom 250px",
      pin: true,
      scrub: true,
    //   markers: true,
    },
  });

  gsap.set(".line", {
    yPercent: 100
  })

  gsap.to(".line", {
    scrollTrigger: {
        trigger: ".mining-txt-wrapper",
        toggleActions: "restart pause reverse pause",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: .09,
    ease: "Expo.easeInOut"
  })

});
