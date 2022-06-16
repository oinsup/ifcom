$(document).ready(function () {
    //탭스크롤
    $('.scrollLink .linkList li a').on({
        "click": function () {
            let idx = $(this).closest('li').index();
            $(this).closest('li').addClass('active').siblings('li').removeClass('active')
            $('html,body').animate({ scrollTop: $(this).closest('.scrollLink').siblings('.section').eq(idx).offset().top - $('#gnb').outerHeight() })
        }
    })

    //top버튼
    $('.btnTop').on({
        "click": function () {
            $('html,body').animate({ scrollTop: 0 })
        }
    })

    //모바일 메뉴버튼
    $('.btnMenu').on({
        "click": function () {
            if ($(window).outerWidth() < 1280) {
                if ($('body').scrollTop() === 0) {
                    $('#header').toggleClass('active')
                }
                $('#gnb').toggleClass('active');
                $(this).toggleClass('active');
            }
        }
    })

    //모바일 2뎁스 토글
    $('#gnb .dep1 > li > a').on({
        "click": function () {
            $(this).closest('li').toggleClass('active').siblings('li').removeClass('active');
        }
    })
    //탭

    $('.tabList li').on({
        "click": function () {
            let idx = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
        }
    })

    // 철도자산관리
    // accordions
    $(".accoArea .accordions .accoLabel").on('click', function (e) {
        if ($(this).closest("li").hasClass("active")) {
            $(this).closest("li").removeClass("active").find(".accoCont").stop().slideUp(300);
        } else {
            $(this).closest("li").siblings("li").removeClass("active").children(".accoCont").stop().slideUp(300);
            $(this).closest("li").addClass("active").find(".accoCont").stop().slideDown(300);
        }
    });//


    // swiper
    //자산개발사업 안내
    var Slider01 = new Swiper(".tempVisual", {
        slidesPerView: '1',
        loop: true,
        autoplay: false,
        navigation: {
            nextEl: '.tempVisual .btnScroll .swiper-next',
            prevEl: '.tempVisual .btnScroll .swiper-prev'
        },
    });

    $('html,body').on({
        "scroll": function () {
            console.log($(this).scrollTop())
            if ($(this).scrollTop() === 0) {
                if ($('#gnb').hasClass('active')) {
                    $('#header').addClass('active');
                } else {
                    $('#header').removeClass('active');
                }
            } else {
                $('#header').addClass('active')
            }
        }
    })
    $('.btnPopClose').on({
        "click": function () {
            $(this).closest('.popup').remove();
            $('.dimmed').remove();
        }
    });
})

$(window).on({
    "resize": function () {
        if ($(window).outerWidth() >= 1280) {
            if ($('html,body').scrollTop() === 0) {
                $('#header').removeClass('active');
            } else {
                $('#header').addClass('active');
            }
            $('#gnb').removeClass('active');
            $('.btnMenu').removeClass('active')
        }
    }
})