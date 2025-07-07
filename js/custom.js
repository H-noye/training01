$(function () {
    let tl = gsap.timeline();

    tl.from({}, {})
    tl.from('#main_intro .slg h2', { y: 140, opacity: 0 })
    tl.from('#main_intro .slg p', { y: 140, opacity: 0 })
    tl.from('#main_intro .slg .lnk', { y: 140, opacity: 0 })

    $('#full_wrap').fullpage({
        fixedElements: '#header , .side_lnk , .to_top',
        paddingTop: '80px',
        anchors: ['intro', 'store', 'banner', 'solution', 'promotion', 'story', 'event', 'customer'],
        css3: false,

        afterLoad: function (o, d, dr) {
            if (d !== 1) {
                $('.to_top').addClass('on')
            }
        },

        onLeave: function (o, d, dr) {
            if (d === 1) {
                tl.restart();
            }

            $('.side_lnk li').removeClass('on');
            $('.side_lnk li').eq(d - 1).addClass('on')

            if (d == 1) {
                $('.to_top').removeClass('on')
            }

            if (d == 2 || d == 4 || d == 6 || d == 7 || d == 8) {
                $('#header').addClass('on')
            } else {
                $('#header').removeClass('on')
            }
        },


    });


    const main_solution_slide = new Swiper('.main_solution_slide', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
    });

    $('#promotion_movie').YTPlayer({
        videoURL: 'https://youtu.be/neNsNfxl2cs',
        containment: '#main_promotion',
        showControls: false,
        autoPlay: false,
        playOnlyIfVisible: true,
    });

    let sw = true;
    $('#main_promotion .cont button').on('click', function () {

        $(this).toggleClass('on');

        if (sw) {
            $('#promotion_movie').YTPPause();
        } else {
            $('#promotion_movie').YTPPlay();
        }

        sw = !sw

    })
});

$(function () {
    $('#main_story .tap_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('#main_story .tap_menu li button').removeClass('on')
        $(this).addClass('on')
        $('#main_story .tap_content .itm').removeClass('on')
        $('#main_story .tap_content .itm').eq(idx).addClass('on')
    })

    const mian_story_slide01 = new Swiper('.mian_story_slide01', {
        loop: true,
        slidesPerView: "3",
        spaceBetween: 30,

        navigation: {
            nextEl: '#main_story .inner .itm01 .arrows .next',
            prevEl: '#main_story .inner .itm01 .arrows .prev',
        },
    })

    const mian_story_slide02 = new Swiper('.mian_story_slide02', {
        loop: true,
        slidesPerView: "3",
        spaceBetween: 30,

        navigation: {
            nextEl: '#main_story .inner .itm02 .arrows .next',
            prevEl: '#main_story .inner .itm02 .arrows .prev',
        },
    })

    const mian_story_slide03 = new Swiper('.mian_story_slide03', {
        loop: true,
        slidesPerView: "3",
        spaceBetween: 30,

        navigation: {
            nextEl: '#main_story .inner .itm03 .arrows .next',
            prevEl: '#main_story .inner .itm03 .arrows .prev',
        },
    })
});

$(function () {
    const mian_event_slide01 = new Swiper('.mian_event_slide01', {
        loop: true,
        direction: 'vertical',
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    })

    const mian_event_slide02 = new Swiper('.mian_event_slide02', {
        loop: true,
        direction: 'vertical',
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    })
})