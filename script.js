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

  gsap.set(".line", {
    yPercent: 100,
  });

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

  gsap.to(".line", {
    scrollTrigger: {
      trigger: ".txt-one",
      start: "top top",
      end: "+=1500",
      pin: true,
      toggleActions: "restart pause reverse pause",
      markers: true
    },
    yPercent: 0,
    duration: 1.7,
    stagger: 0.09,
    ease: "Expo.easeInOut",
  });
  
  LottieScrollTrigger({
    target: '.scene-one',
    path: 'https://lottie.host/4716a4fa-952f-4e6b-b635-a801cb0cd60f/WILaX0swxJ.json',
    speed: "fast",
    scrub: 4,
    // markers: true,
  });

  gsap.to("body", {
    scrollTrigger: {
      trigger: ".scene-two",
      start: "top top",
      scrub: true,
    },
    background: "var(--dark-bluey)",
  });
  
  LottieScrollTrigger({
    target: '.scene-two',
    path: 'https://lottie.host/b60a2260-32b4-4b53-8bd0-b5040d12324b/eAH7C0xk3i.json',
    speed: "medium",
    scrub: 1,
    markers: true,
  });

  function LottieScrollTrigger(vars) {
    let playhead = { frame: vars.startFrameOffset || 0 },
      target = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
      st = {
        trigger: target,
        pin: true,
        start: "top top",
        end: speeds[vars.speed] || "+=1000",
        scrub: 1
      },
      ctx = gsap.context && gsap.context(),
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
          preserveAspectRatio: "xMidYMid slice"
        }
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
        frameAnimation.to(playhead, {
            frame: animation.totalFrames - 1 - (vars.endFrameOffset || 0),
            ease: "none",
            duration: frameAnimation.duration() || 1,
            onUpdate: () => {
              animation.goToAndStop(playhead.frame, true);
            }
          }, 0);
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
