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
    y: -500,
    opacity: 0,
  });

  gsap.to(".mining-img-wrapper", {
    scrollTrigger: {
      trigger: ".mining-img-wrapper",
      start: "top 350px",
      end: "+=500px 400px",
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  gsap.to(".sec-two", {
    scrollTrigger: {
      trigger: ".sec-two",
      start: "top 100px",
      end: "bottom 100px",
      pin: true,
      scrub: true,
      markers: true,
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

  LottieScrollTrigger({
    target: '.mining-img-wrapper',
    path: 'https://lottie.host/4716a4fa-952f-4e6b-b635-a801cb0cd60f/WILaX0swxJ.json',
    speed: "slow",
    start: "top 80%",
    end: "bottom +=-200px",
    once: true,
    scrub: true,
    // markers: true,
  });


  function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
      target = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
      st = { trigger: target, pin: true, start: "top top", end: speeds[vars.speed] || "+=1000", scrub: 5 },
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path
      });
    for (let p in vars) {
      st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
      gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st
      });
    });
  }

});
