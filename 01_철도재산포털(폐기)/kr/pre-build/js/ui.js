$(document).ready(function(){

    //header
    $('#gnb>ul>li').on({
        'mouseenter focusin': function (){
            $("#header").addClass("active");
            $(this).addClass('active').siblings('li').removeClass('active');
            // $('#header .gnb03').hide();
            // $('#header .gnb01').show();
        },
    });

    $('#header').on({
        'mouseleave focusout': function (){
            $("#header").removeClass("active");
            $("#gnb>ul>li").removeClass("active");
            //$('.menu').hide();
            // $('#header .gnb01').hide();
        },
    })

    // $('#header .dep03').on({
    //     'mouseenter focusin': function (){
    //         $('#header .gnb01').hide();
    //         $('#header .gnb03').show();
    //     },
    // });
    //
    // $('#header').on({
    //     'mouseleave focusout': function (){
    //         $(this).children('.menu').hide();
    //         $('#header .gnb03').hide();
    //     },
    // })
    //
    // $('#gnb').on({
    //     'mouseenter focusin': function (){
    //         $("#header").addClass("active")
    //     },
    // });
    //
    // $('#header').on({
    //     'mouseleave focusout': function (){
    //         $("#header").removeClass("active")
    //     },
    // })

    //mainswiper
    var Slider01 = new Swiper(".mainVisual", {
        slidesPerView: '1',
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.mainVisual .btnScroll .swiper-next',
          prevEl: '.mainVisual .btnScroll .swiper-prev'
        },
        pagination:{
            el:".swiper-pagination",
            clickable : true,
        },
    });

    //tabmenu 
    $('.tabs li a').on({
        'click': function (){
            tabIndex = $(this).parent().index()
            $(this).parent().addClass("active").siblings().removeClass("active")
            $("section").eq(tabIndex).addClass("active").siblings().removeClass("active")
        }
    });

    /* roll-controll 슬라이드 멈추기 및 재생 */
    $(".mainPage .roll-controll button").on({
        "click": function(){
            if ( $(this).hasClass('main-roll-pause') ) {
                $(this).removeClass('main-roll-pause').addClass('main-roll-play');
                Slider01.autoplay.stop();
            }else{
                $(this).removeClass('main-roll-play').addClass('main-roll-pause');
                Slider01.autoplay.start();
            }
        }
    });

    /*모바일 dep2 */
    $('.dep1>li > p').on({
        "click": function (e) {
            if ($(this).next('.dep2').length) {
                e.preventDefault();
            }
            $(this).next('.dep2').slideToggle('fast');
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').find('.dep2').slideUp('fast');

        }
    });

    /*모바일 dep3 */
    $('.dep2>li > p').on({
        "click": function (e) {
            if ($(this).next('.dep3').length) {
                e.preventDefault();
            }
            $(this).next('.dep3').slideToggle('fast');
            $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').find('.dep3').slideUp('fast');

        }
    });

    /* 모바일 gnb */
    $('.mobile .btnMenu').on({
        'click':function(){
            $('body').css({"overflow":"hidden"});
            $('.moGnb').addClass('active');
        }
    });
    $('.moGnb .btnClose').on({
        'click':function(){
            $('body').css({"overflow":"visible"});
            $('.moGnb').removeClass('active');
        }
    });

    //법령 및 자료실 hover효과
    $('.statuteWrap>ul>li>a').on({
        'mouseenter focusin': function (){
            $(this).parent().addClass("active").siblings().removeClass("active");
        },
    });
    $('.statuteWrap>ul>li').on({
        'mouseleave focusout': function (){
            $(this).removeClass("active");
        },
    });

    //mobile lnb 
    $('.dropDown > li, .dropDowndep02 > li').click(function(){
        if(!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).find('ul').slideDown(300);         
        } else {                                   
            $(this).removeClass('active');
            $(this).find('ul').slideUp(300);
        }
    });

    $('button.winPop').on({
        'click': function (){
            window.open('철도유휴부지-철도유휴부지활동사업-팝업.html','팝업창','width=1200, height=960, left=0, top=0');
        },
    });

    //모바일 GNB scrollbar
    $(".moGnb .cont").mCustomScrollbar({
        theme:"minimal-dark"
    });

});// doc

