gsap.from('.anim-1', {
    stagger: 1,
    duration:1,
    ease:Back.easeOut.config(2), x:-600})


    // swiperjs

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });    

    //   locomotive
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });