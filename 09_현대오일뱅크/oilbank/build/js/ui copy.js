$(document).ready(function(){

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
        if($(this).closest("#contents").hasClass("active")) {
            $(this).attr("title","선택 해제").closest("#contents").removeClass("active");
        } else {
            $(this).attr("title","선택 됨").closest("#contents").addClass("active");
        }
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

    

    $(".popHead .btnArea .close").on('click', function(){
        $(this).closest(".popup").removeClass("show")
    })

})
