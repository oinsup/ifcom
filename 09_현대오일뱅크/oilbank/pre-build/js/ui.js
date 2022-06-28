$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn').each(function(){
        let Tag = $(this);
        let attr = Tag.text();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    })

    //dashboard lnb
    $("#lnb .dep01 > li > a").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next(".dep02").stop().slideUp(300);
        }else {
            $(this).addClass("active").next(".dep02").stop().slideDown(300);
        }
    })

    $("#lnb .dep02 > li > a").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next(".dep03").stop().slideUp(300);
        } else {
            $(this).addClass("active").next(".dep03").stop().slideDown(300);
        }
    })

    $("#lnb .dep03 > li > a").on('click', function(){
        if ($(this).closest("li").hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $("#lnb .dep03 > li > a").removeClass("active");
            $(this).addClass("active");
        }
    })

    //dashboard wide&default
    $("#content .drawer").on('click', function(){
        swiper01.updateSize()

        if($(this).closest("#contents").hasClass("active")) {
            $(this).attr("title","선택 해제").closest("#contents").removeClass("active");
        } else {
            $(this).attr("title","선택 됨").closest("#contents").addClass("active");
        }
    })

    var swiper01 = new Swiper('.swiper01', {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        touchRatio: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })


    // map area
    $(".map map area").on('mouseenter', function(){
        area = $(this).attr("class")
        $(this).closest("map").siblings("img").attr("src", "../images/map/"+area+".svg")
    })

    // popup
    $(".map map area").on('click', function(){
        $(".location").addClass("show");
    })

    $(".seoul").on('click', function(){
        $(".location").addClass("show");
    })

    $("#myChartOil01").on('click', function(){
        $(".oil01").addClass("show");
    })

    $("#myChartCar01").on('click', function(){
        $(".car01").addClass("show");
    })

    $("#myChartCompany01").on('click', function(){
        $(".company01").addClass("show");
    })

    $(".popHead .btnArea .close").on('click', function(){
        $(this).closest(".popup").removeClass("show")
    })

})
