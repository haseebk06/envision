document.addEventListener("DOMContentLoaded", function () {
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

  gsap.set(".line", {
    yPercent: 100,
  });

  gsap.set(".connection", {
    height: 5,
  });

  gsap.to("body", {
    scrollTrigger: {
      trigger: ".scene-two",
      start: "top top",
      scrub: true,
    },
    background: "var(--dark-bluey)",
  });

  gsap.to("body", {
    scrollTrigger: {
      trigger: ".scene-four",
      start: "bottom 100px",
      scrub: true,
    },
    background: "var(--off-white)",
  });

  gsap.to("body", {
    scrollTrigger: {
      trigger: ".base-img-wapper",
      start: "top 90%",
      scrub: true,
    },
    background: "var(--dark-bluey)",
  });

  gsap.to(".hero-txt", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: -800,
    opacity: 0,
  });

  gsap.to(".txt-one .line", {
    scrollTrigger: {
      trigger: ".txt-one",
      start: "top top",
      end: "+=2600",
      pin: true,
      toggleActions: "restart none reverse none",
      // markers: true
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".txt-two .line", {
    scrollTrigger: {
      trigger: ".txt-two",
      start: "top 100px",
      end: "+=2000",
      pin: true,
      toggleActions: "restart none reverse none",
      // markers: true
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".txt-three .line", {
    scrollTrigger: {
      trigger: ".txt-three",
      start: "top 200px",
      end: "+=500",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".txt-four .line", {
    scrollTrigger: {
      trigger: ".txt-four",
      start: "top 200px",
      end: "+=400",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".con-one .line", {
    scrollTrigger: {
      trigger: ".con-one",
      start: "top 200px",
      end: "+=450",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".con-two .line", {
    scrollTrigger: {
      trigger: ".con-two",
      start: "top 200px",
      end: "+=450",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".con-three .line", {
    scrollTrigger: {
      trigger: ".con-three",
      start: "top 200px",
      end: "+=450",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  gsap.to(".con-four .line", {
    scrollTrigger: {
      trigger: ".con-four",
      start: "top 200px",
      end: "+=450",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  ScrollTrigger.create({
    trigger: ".base-img-wapper",
    start: "top -50px",
    end: "+=1500",
    pin: true,
  });

  gsap.to(".base-img-wrapper", {
    scrollTrigger: {
      trigger: ".base-img-wrapper",
      start: "top center",
      end: "+=200px",
      markers: true
    },
    opacity: 0.5
  })
  
  gsap.to(".txt-five .line", {
    scrollTrigger: {
      trigger: ".txt-five",
      start: "top 100px",
      end: "+=450",
      pin: true,
      toggleActions: "restart none reverse none",
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });

  LottieScrollTrigger({
    target: ".scene-one",
    path: "https://lottie.host/4716a4fa-952f-4e6b-b635-a801cb0cd60f/WILaX0swxJ.json",
    speed: "mediun",
    scrub: 4,
    // markers: true,
  });

  gsap.to(".connection", {
    scrollTrigger: {
      trigger: ".connection",
      start: "top 80%",
      end: "+=200",
      pin: true,
      scrub: 3,
      // markers: true
    },
    height: 310,
    ease: "Expo.easeIn",
  });

  // ScrollTrigger.create({
  //   trigger: ".connection",
  //   start: "top 100px",
  //   end: "+=1500",
  //   pin: true,
  //   // markers: true
  // })

  LottieScrollTrigger({
    target: ".scene-two",
    path: "https://lottie.host/b60a2260-32b4-4b53-8bd0-b5040d12324b/eAH7C0xk3i.json",
    speed: "slow",
    scrub: 4,
    // markers: true,
  });

  LottieScrollTrigger({
    target: ".scene-three",
    path: "https://lottie.host/976b0169-82ab-4118-9624-04075c170021/wS8cde9Gc5.json",
    start: "top center",
    speed: "slow",
    scrub: 4,
    // markers: true,
  });

  LottieScrollTrigger({
    target: ".scene-four",
    path: "https://lottie.host/21116ad4-df06-4b4c-ab21-fb567881962d/oSMtqw2UVp.json",
    speed: "slow",
    scrub: 4,
    // markers: true,
  });

  function LottieScrollTrigger(vars) {
    let playhead = { frame: vars.startFrameOffset || 0 },
      target = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=1500", medium: "+=1000", fast: "+=500" },
      st = {
        trigger: target,
        pin: true,
        start: "top top",
        end: speeds[vars.speed] || "+=1000",
        scrub: 1,
      },
      ctx = gsap.context && gsap.context(),
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
          preserveAspectRatio: "xMidYMid slice",
        },
      }),
      frameAnimation;
    for (let p in vars) {
      // let users override the ScrollTrigger defaults
      st[p] = vars[p];
    }
    frameAnimation = vars.timeline || gsap.timeline({ scrollTrigger: st });
    if (vars.timeline && !vars.timeline.vars.scrollTrigger) {
      // if the user passed in a timeline that didn't have a ScrollTrigger attached, create one.
      st.animation = frameAnimation;
      ScrollTrigger.create(st);
    }
    animation.addEventListener("DOMLoaded", function () {
      let createTween = function () {
        animation.goToAndStop(playhead.frame, true);
        frameAnimation.to(
          playhead,
          {
            frame: animation.totalFrames - 1 - (vars.endFrameOffset || 0),
            ease: "none",
            duration: frameAnimation.duration() || 1,
            onUpdate: () => {
              animation.goToAndStop(playhead.frame, true);
            },
          },
          0
        );
        return () => animation.destroy && animation.destroy();
      };
      ctx && ctx.add ? ctx.add(createTween) : createTween();
      // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    animation.frameAnimation = frameAnimation;
    return animation;
  }
});
