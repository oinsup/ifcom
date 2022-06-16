$(document).ready(function () {
    $('#gnb .dep1 li, #header .bg').on({
        "mouseover": function () {
            $("#header").addClass('hover');
        }
    })
    $("#header").on({
        "mouseout": function () {
            $(this).removeClass('hover');
        }
    })

    let video01 = document.getElementById('videoPause01');
    let video02 = document.getElementById('videoPause02');
    let video03 = document.getElementById('videoPause03');


    stopVideo = () => {
        video01.pause();
        video01.currentTime = 0;
        video02.pause();
        video02.currentTime = 0;
        video03.pause();
        video03.currentTime = 0;
    }

    $('.btnPopClose').on({
        "click": function () {
            $(this).closest('.popup').hide();
            $("#dimmed,.dimmed").hide();
            stopVideo();
        }
    })

    $('.cardArea .item:first-child .thumb').on({
        "click": function () {
            $('.popup.fir,.dimmed').show();
        }
    })

    $('.cardArea .item:nth-child(2) .thumb').on({
        "click": function () {
            $('.popup.sec,.dimmed').show();
        }
    })

    $('.cardArea .item:nth-child(3) .thumb').on({
        "click": function () {
            $('.popup.thr,.dimmed').show();
        }
    })

    let aosRefresh = () => {
        AOS.refresh();
    }

    $('.tabList > li').on({
        "click": function () {
            let idx = $(this).index();
            if (!$(this).hasClass("active")) {
                $(".aos-init").removeClass("aos-animate");
                setTimeout(function () {
                    $(".aos-init").addClass("aos-animate");
                    aosRefresh();
                },100)
            } 

            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
            $('.sec03').find('.secCont').eq(idx).addClass('active').siblings('.secCont').removeClass('active');
            $('.sec04').find('.secCont').eq(idx).addClass('active').siblings('.secCont').removeClass('active');

            //로그인페이지
            $(this).closest('.tabNav').siblings('.tableArea').eq(idx).addClass('active').siblings('.tableArea').removeClass('active');

        }
    })


    $('.btnTop').on({
        "click": function () {
            $('html,body').animate({ scrollTop: 0 }, 500)
        }
    });
    $(document).on('click', '.btnSitemap', function () {
        $('#header').toggleClass('active');
    });

    // gnb 2뎁스 보이기/숨기기
    $(document).on('click', '#gnb .mobile .dep1 > li', function () {
        if ($(this).find("ul").length > 0) {
            $(this).toggleClass('active').children('.dep2').stop().slideToggle(200);
            $(this).siblings('li').removeClass('active').children('.dep2').stop().slideUp(200);
        }
    })

    var swiper3 = new Swiper('.swiper3', {
        slidesPerView: 1,
        loop: true,

        observer: true,
        observeParents: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

    if (window.matchMedia('(max-width: 767px)').matches) {
        if ($('.visionArea .wordGroup .word').length) {
            $('.visionArea .wordGroup .word').each(function (idx) {
                if (idx == 0) {
                    setTimeout(() => {
                        $(this).addClass('active01');
                    }, 500);
                } else if (idx == 1) {
                    setTimeout(() => {
                        $(this).addClass('active02');
                    }, 1500);
                } else if (idx == 2) {
                    setTimeout(() => {
                        $(this).addClass('active03');
                    }, 2500);
                } else if (idx == 3) {
                    setTimeout(() => {
                        $(this).addClass('active04');
                    }, 3500);
                };
            })
        }
    };

    $('.swiper .cont .inputInnerBox input').on({
        "focus": function () {
            $(this).closest('.inputInnerBox').addClass('focus');
            $(this).on({
                "blur": function () {
                    $(this).closest('.inputInnerBox').removeClass('focus');
                }
            })
        }
    });

    $('.navScroll a, .countArea a').click(function () {
        var targetBox = $(this).attr('href'),
            targetBoxOffset = $(targetBox).offset().top - 50;
        $('body, html').animate({ scrollTop: targetBoxOffset }, 500);
    });

    // navScrollBox 토글
    $(document).on('click', '.navScrollBox > a', function () {
        $(this).closest('.navScrollBox').toggleClass('active');
    });
    $(document).on('click', '.navScrollBox ul li', function () {
        $(this).closest('.navScrollBox').removeClass('active');
    });

    // 메인 마켓플레이스 slide 클릭시 해당 tab이동
    var currentTab = window.location.hash;

    console.log(currentTab);

    if (currentTab == "#tab1") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(1)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(0).addClass('active');
            $('.sec03').find('.secCont').eq(0).addClass('active');
            $('.sec04').find('.secCont').eq(0).addClass('active');

        } else if (currentTab == "#tab2") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(2)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(1).addClass('active');
            $('.sec03').find('.secCont').eq(1).addClass('active');
            $('.sec04').find('.secCont').eq(1).addClass('active');

        } else if (currentTab == "#tab3") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(3)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(2).addClass('active');
            $('.sec03').find('.secCont').eq(2).addClass('active');
            $('.sec04').find('.secCont').eq(2).addClass('active');

        } else if (currentTab == "#tab4") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(4)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(3).addClass('active');
            $('.sec03').find('.secCont').eq(3).addClass('active');
            $('.sec04').find('.secCont').eq(3).addClass('active');

        } else if (currentTab == "#tab5") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(5)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(4).addClass('active');
            $('.sec03').find('.secCont').eq(4).addClass('active');
            $('.sec04').find('.secCont').eq(4).addClass('active');

        } else if (currentTab == "#tab6") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(6)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(5).addClass('active');
            $('.sec03').find('.secCont').eq(5).addClass('active');
            $('.sec04').find('.secCont').eq(5).addClass('active');

        } else if (currentTab == "#tab7") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(7)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(6).addClass('active');
            $('.sec03').find('.secCont').eq(6).addClass('active');
            $('.sec04').find('.secCont').eq(6).addClass('active');

        } else if (currentTab == "#tab8") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(8)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(7).addClass('active');
            $('.sec03').find('.secCont').eq(7).addClass('active');
            $('.sec04').find('.secCont').eq(7).addClass('active');

        } else if (currentTab == "#tab9") {
            $(".tabList > li").removeClass("active");
            $(".tabList > li:nth-child(9)").addClass("active");

            $(".tabCont, .sec03 .secCont, .sec04 .secCont").removeClass("active");
            $('.tabCont').eq(8).addClass('active');
            $('.sec03').find('.secCont').eq(8).addClass('active');
            $('.sec04').find('.secCont').eq(8).addClass('active');

        }

    // 로그인페이지
    
    // join

    $(".join").on("click", function(){
        $(".popup.type02").addClass("active");
    })
    $(".popup.type02 .close").on("click", function(){
        $(this).closest(".popup").removeClass("active");
    })

    // web 아이디/비밀번호찾기
    $(".findAll").on("click", function(){
        $(".popup.type03").addClass("active");
    })
    $(".popup.type03 .close").on("click", function(){
        $(this).closest(".popup").removeClass("active");
    })


})

