$(document).ready(function(){

    /*lnb dep2 */
    $('.dep1>li>p').on({
        "click": function (e) {
            if ($(this).next('.dep2').length) {
                e.preventDefault();
            }
            $(this).next('.dep2').slideToggle('fast');
            $(this).closest('li').toggleClass('active').siblings('li').removeClass('active').find('.dep2').slideUp('fast');
        }
    });

     /*lnb dep2 */
    $('#lnb .dep2 li').on({
        "mouseenter": function (e) {
            $(this).addClass('active').siblings('li').removeClass('active');
        }
    });
    
    // selectBar on & off
    $(".selectBar > .btn").on('click',function(){
        $(this).closest(".selectBar").toggleClass("active");
    });//

    // searchBar on & off
    $(function(){
        $(".inputSearch").on('input',function(){
            if ($(".inputSearch").val() !== '') {
                $(this).closest(".searchBar").addClass("on")
            } else {
                $(this).closest(".searchBar").removeClass("on")
            }
        })
    });//

    $(".searchBar > .btn").on('mouseenter',function(){
        if ($(".searchBar").hasClass("on")) {
            $(this).closest(".searchBar").addClass("active");
        } else {
            $(this).closest(".searchBar").removeClass("active");
        }
    })


    $(".searchBar > .btn").on('mouseleave',function(){
        $(this).closest(".searchBar").removeClass("active");
    })
    
    /*input 캘린더*/
    if ($('.cal').length) {
        $('.cal').datepicker({
            dateFormat: "yy-mm-dd",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            dayNames: ['일요일' , '월요일' , '화요일' , '수요일' , '목요일' , '금요일' , '토요일'],
            showMonthAfterYear: true,
            changeYear:true,
            changeMonth:true,
            yearSuffix: "년",
            nextText:"다음달",
            prevText:"이전달"
        });
    }

    //bootstrap modal close
    $(".pop-close, .btn-close").on('click', function(){
        $(this).closest(".modal").modal('hide');
    })

    /* btnClose클릭시 팝업 및 얼럿창 닫힘 */
    $("#alertPop .btnArea button ").on({
        "click": function click() {
            $(this).closest('#alertPop').hide();
        }
    });
    $("#confirmPop .btnArea button ").on({
        "click": function click() {
            $(this).closest('#confirmPop ').hide();
        }
    });

    /* ---------메인---------- */
    // $('.btnToggle').on({
    //     'click': function (){
    //         $(this).toggleClass('active').parent('.mainCont').toggleClass('active').siblings('.mainSlide').toggleClass('active');
    //     }
    // });

    //서비스 준비중 tab focusin off
    $(".disable a").attr("tabindex","-1");

    //bigzone knowhow zone on & off
    $('.tabList li').on({
        'click': function (){
            var idx = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
            $(this).closest('.mainMenu').siblings('.boardArea').children('.boardCont').eq(idx).addClass('active').siblings('.boardCont').removeClass('active');
        }
    });

    $('.chartList li').on({
        'click': function (){
            var idx = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.chartList').siblings('.chartCont').eq(idx).addClass('active').siblings('.chartCont').removeClass('active');
        }
    });

    $('.mapClick .click').on({
        'mouseenter': function (){
            $(this).closest('a').text('지도');
        },
        'mouseleave': function (){
            $(this).closest('a').text('Click');
        }
    });

    $('.bdList li').on({
        'click': function (){
            var idx = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.bdList').siblings('.bdCont').eq(idx).addClass('active').siblings('.bdCont').removeClass('active');
        }
    });


    //mainswiper
    var bullet = ['01', '02', '03', '04'];
    var Slider01 = new Swiper(".mainSlide", {
        slidesPerView: '1',
        loop: true,
        autoplay: true,
        pagination:{
            el:".swiper-pagination",
            clickable : true,
            renderBullet: function (index, className) {
              return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
    });

     /* 게시판 슬라이드 */
    var mSlider01 = new Swiper('.mSlider01', {
        slidesPerView: '4',
        spaceBetween: 7,
        loop: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: "300px",
            draggable: true,
        },
        navigation: {
          nextEl: '.bdCont .btnScroll .swiper-next',
          prevEl: '.bdCont .btnScroll .swiper-prev'
        },
        observer: true,
          observeParents: true,
    });

    // knowhowzone popup on & off
    $(".infoList .list li").on('click',function(){
        popIdx = $(this).index();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").closest(".list").siblings(".knowHowCont").stop().hide();
        } else {
            $(this).addClass("active").siblings().removeClass("active").closest(".list").siblings(".knowHowCont").eq(popIdx).stop().show().siblings(".knowHowCont").stop().hide();
        }
    })
    
    // knowhowzone popup popClose off
    $(".contHead .popClose").on('click', function(){
        $(".list li").removeClass("active");
        $(this).closest(".knowHowCont").stop().hide().siblings(".list").children("li").removeClass("active");
    });

    // knowhowzone popup accordions
    $(".knowHowZone .accordionArea .accoLabel").on('click',function(){
        if ($(this).closest("li").hasClass("active")) {
            $(this).closest("li").removeClass("active").find(".accoCont").stop().slideUp(100);
        } else {
            $(this).closest("li").siblings("li").removeClass("active").children(".accoCont").stop().slideUp(100);
            $(this).closest("li").addClass("active").find(".accoCont").stop().slideDown(100);
        }
    });//

    // knowhowzone popup vowel on & off
    $(".guideBox li .btn").on('click', function(){
        $(this).closest("li").addClass("active").siblings("li").removeClass("active");
    });//

    //knowhowzone dictionary popup arcordions
    // $(".dictionaryCont .accoCont").hide();
    // $(".dictionaryCont .accoLabel").on("click", function(){
    //     $(".accoLabel").removeClass("active").siblings(".accoCont").slideUp(200);
    //     $(this).addClass("active").next(".accoCont").slideDown(200);
    // });//

    $(".dictionaryCont .accoLabel").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").siblings(".accoCont").removeClass("open");
            
        } else {
            $(this).addClass("active").siblings(".accoLabel").removeClass("active");
            $(this).next(".accoCont").addClass("open").siblings(".accoCont").removeClass("open");
        }
    });

    //지적측량 Graph custom select
    $(".unit .selectArea > a").on('click',function(){
        $(this).closest(".selectArea").stop().toggleClass("active");
        $(this).siblings("ul").stop().stop().slideToggle(100);
    });//click

    // 사업소식 팝업 on
    $(".newsBox>ul>li>a").on('click', function(e){
        e.preventDefault();
        newIdx=$(this).closest("li").index();
        $(this).closest("ul").siblings(".newsBoxPopup").eq(newIdx).addClass("active").siblings(".newsBoxPopup").removeClass("active");
    });
    //사업소식 팝업 off
    $(".newsBoxPopup .popHead .btn").on('click',function(){
        $(this).closest(".newsBoxPopup").removeClass("active");
    });

    //메인페이지 팝업
    $('.popup').draggable({
        cancel:'.popBody',
        containment: "window"
    });//drag

    $(".popup .popClose").on('click', function(){
        $(this).closest(".popup").addClass("hide");
    });//close

    
    /* ---------서브---------- */
    // faq목록조회 아코디언
    $(".sub02 .accoCont").hide();
    $(".sub02 .accoLabel").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").text("자세히").siblings(".accoCont").stop().slideUp(100);
        } else {
            $(this).addClass("active").text("닫기").siblings(".accoCont").stop().slideDown(100);
        }
    });

    // 공통서브메인 util
    $(".sub04 .timeArea .btn").on('mouseenter', function(){
        $(this).closest(".timeArea").addClass("active");
    });//
    $(".sub04 .timeArea .btn").on('mouseleave', function(){
        $(this).closest(".timeArea").removeClass("active");
    });//

});//doc
