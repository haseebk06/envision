document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  mm.add("(min-width: 991px)", () => {
    const lenis = new Lenis({
      duration: 4,
      smoothWheel: true,
      smoothTouch: true,
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

    gsap.set(".connect", {
      height: 0,
    });

    gsap.set(".connect-two", {
      height: 0,
    });

    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".scene-two",
        start: "top top",
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
        end: "+=1500",
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
        start: "top 20%",
        end: "+=1200",
        scrub: true,
        pin: true
      },
      yPercent: 0,
      duration: 1.5,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".txt-four .line", {
      scrollTrigger: {
        trigger: ".txt-four",
        start: "top 30%",
        end: "+=1200",
        scrub: true,
        pin: true
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".con-one .line", {
      scrollTrigger: {
        trigger: ".con-one",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".con-two .line", {
      scrollTrigger: {
        trigger: ".con-two",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".con-three .line", {
      scrollTrigger: {
        trigger: ".con-three",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".con-four .line", {
      scrollTrigger: {
        trigger: ".con-four",
        start: "top top",
        end: "+=90%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".last-one .line", {
      scrollTrigger: {
        trigger: ".last-one",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".last-two .line", {
      scrollTrigger: {
        trigger: ".last-two",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        toggleActions: "restart none reverse none",
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".last-three .line", {
      scrollTrigger: {
        trigger: ".last-three",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".last-four .line", {
      scrollTrigger: {
        trigger: ".last-four",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".last-five .line", {
      scrollTrigger: {
        trigger: ".last-five",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    const tl_two = gsap.timeline({
      scrollTrigger: {
        trigger: ".base-img-wrapper",
        start: "top -20px",
        end: "+=3200px",
        pin: true,
        scrub: true,
      }
    })

    tl_two.to(".base-img-wrapper", {
      opacity: 0.3,
    }).to(".base-img-wrapper", { opacity: 0, delay: 1 }, 0.5);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt-five",
        start: "top center",
        end: "+=1000",
        scrub: true,
        // markers: true
      },
    })

    ScrollTrigger.create({
      trigger: ".txt-five",
      start: "top center",
      end: "+=1000",
      pin: true,
    })

    tl.to(".sec-one-wrapper .line", {
      yPercent: 0,
      duration: 1,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    }).to(".sec-one-wrapper .line-wrapper", { y: -300, scale: 1, duration: 1 }, 1)

    tl.to(".sec-two-wrapper .line", {
      yPercent: 0,
      duration: 1,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    }).to(".sec-two-wrapper .line-wrapper", { y: -200 })

    tl.to(".sec-three-wrapper .line", {
      yPercent: 0,
      duration: 1,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    }).to(".sec-two-wrapper .line-wrapper", { y: -100, scale: 1, duration: 1 }, 1)

    gsap.to(".txt-six .line", {
      scrollTrigger: {
        trigger: ".txt-six",
        start: "top 80%",
        end: "+=100",
        pin: true,
        scrub: 2,
      },
      yPercent: 0,
      duration: 1.7,
      stagger: 0.09,
      ease: "Expo.easeInOut",
    });

    gsap.to(".btn-wrapper", {
      scrollTrigger: {
        trigger: ".btn-wrapper",
        start: "top 80%",
        end: "+=100",
        toggleActions: "restart none reverse none",
      },
      opacity: 1,
      delay: 1,
    });

    gsap.to(".connect", {
      scrollTrigger: {
        trigger: ".connection",
        start: "top center",
        end: "+500",
        toggleActions: "restart none reverse none",
        // markers: true
      },
      height: "80vh",
      duration: 1.5,
    });

    ScrollTrigger.create({
      trigger: ".connection",
      start: "top 70%",
      end: "+=700",
      pin: true,
      // markers: true
    });

    gsap.to(".connect-two", {
      scrollTrigger: {
        trigger: ".connection-two",
        start: "top 20%",
        end: "+500",
        toggleActions: "restart none reverse none",
      },
      height: "170vh",
      duration: 2,
    });

    ScrollTrigger.create({
      trigger: ".scene-two",
      start: "top top",
      end: "+=1500",
      pin: ".connection",
    });

    gsap.to(".x-axis", {
      scrollTrigger: {
        trigger: ".x-axis",
        start: "top 70%",
        end: "+=2200",
        scrub: true,
        // markers: true,
      },
      width: "150vw",
    })

    ScrollTrigger.create({
      trigger: ".scene-three",
      start: "top center",
      end: "+=1000",
      pin: ".connection-two",
    });

    LottieScrollTrigger({
      target: ".scene-one",
      path: "https://lottie.host/4716a4fa-952f-4e6b-b635-a801cb0cd60f/WILaX0swxJ.json",
      speed: "mediun",
      scrub: 4,
      // markers: true,
    });

    const races = document.querySelector(".sc-sv-img-wrapper");
    console.log(races.offsetWidth);

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".scene-seven-wrapper",
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

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
      speed: "meduim",
      scrub: 4,
    });

    LottieScrollTrigger({
      target: ".scene-four",
      path: "https://lottie.host/21116ad4-df06-4b4c-ab21-fb567881962d/oSMtqw2UVp.json",
      speed: "extraSlow",
      scrub: 4,
      // markers: true,
    });

    LottieScrollTrigger({
      target: ".scene-five",
      path: "https://lottie.host/b5a27330-06d3-460d-ac7f-278b3e982263/PviNuyyT0k.json",
      speed: "medium",
      scrub: 4,
    }
  );

  gsap.to(".scene-five", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".scene-five",
      start: "top top",
      scrub: 4
    }
  });

    LottieScrollTrigger({
      target: ".scene-six-a",
      path: "https://lottie.host/0a4853f8-cfb4-42ef-865d-3258a6f97809/OZNlBafWaS.json",
      speed: "extraSlow",
      start: "top 15%",
      scrub: 4,
    });

    function LottieScrollTrigger(vars) {
      let playhead = { frame: vars.startFrameOffset || 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { extraSlow: "+=3000", slow: "+=1500", medium: "+=1000", fast: "+=500" },
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
});
