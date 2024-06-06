document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scene 1: Scroll up 'Envision' text and fade in graphic
    gsap.to(".hero-txt", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: -200,
        opacity: 0
    });

    // Scene 2: Fade in the mine graphic and text
    gsap.to(".mine-graphic, .mine-text", {
        scrollTrigger: {
            trigger: ".sec-two",
            start: "top center",
            end: "bottom top",
            scrub: true
        },
        opacity: 1
    });

    // Scene 3: Colored dots overlay
    gsap.to(".colored-dots", {
        scrollTrigger: {
            trigger: ".sec-two",
            start: "top center",
            end: "bottom top",
            scrub: true
        },
        opacity: 1
    });

    // Scene 4: Grow line vertically
    gsap.to(".line", {
        scrollTrigger: {
            trigger: ".sec-three",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        scaleY: 1
    });

    // Darken background in sec-two while scrolling
    ScrollTrigger.create({
        trigger: ".sec-two",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress.toFixed(3);
            document.querySelector(".sec-two").style.background = `rgba(0, 75, 102, ${progress})`;
        }
    });
});
