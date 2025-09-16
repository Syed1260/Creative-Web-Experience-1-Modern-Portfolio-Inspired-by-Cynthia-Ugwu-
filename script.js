const scroll = new LocomotiveScroll({
    el: document.querySelector('.cynthia'),
    smooth: true
});

var timeout;

function firstpageanim() {
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    })

        .to(".boundingelem", {
            y: 0,
            ease: "expo.inOut",
            duration: 2,
            delay: -1,
            stagger: 0.2
        })

        .from(".mainfooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: "expo.inOut"
        });
}



function circleThinAnimation() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (details) {
        clearTimeout(timeout)
        xscale = gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, details.clientY - yprev);

        xprev = details.clientX
        yprev = details.clientY

        circlemousefollow(xscale, yscale)
        setTimeout(function () {
            timeout = document.querySelector(".minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`

        }, 100)
    })
}

circleThinAnimation()

function circlemousefollow(xscale, yscale) {
    window.addEventListener("mousemove", function (details) {
        document.querySelector(".minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`
    })
}
circlemousefollow()
firstpageanim()


document.querySelectorAll(".element1").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});