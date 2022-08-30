$(document).ready(function(){

    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('#lnb a, .btn, .elips, .elips02').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    });

    //lnb
    $("#lnb .dep01 li a").on('click', function(){
        $(this).addClass("active").closest("li").siblings("li").children("a").removeClass("active");
    })

    // search value
    $(function(){
        $(".searchArea input[type='text']").on('input', function(){
            if(!$(this).val() == '') {
                $(".btnArea .search").addClass("on");
            } else {
                $(".btnArea .search").removeClass("on");
            }
        })
    });

    // viewControl
    $(".viewControl .btnArea .grayRect").on('click', function(){
        let viewNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".viewList").eq(viewNum).addClass("active").siblings().removeClass("active")
    });

    // pagination
    $(".pagination a").on('click', function(e){
        e.preventDefault();
        $(this).addClass("active").siblings("a").removeClass("active")
        
    });

    // tablist
    $(".tabList li .btn").on('click', function(){
        let tabNum = $(this).closest("li").index();
        $(this).addClass("active").closest("li").siblings().children(".btn").removeClass("active");
        $(this).closest(".tabList").siblings(".tabCont").eq(tabNum).addClass("active").siblings(".tabCont").removeClass("active");
    })

    // popup draggable
    $('.popup > .inner').draggable({
        scroll : false,
		containment : 'document', //부모 요소 안에서만 이동 범위 제한
		handle : '.popHead', // drag 대상 안 특정 요소에 제한 (여러개 사용 가능)
    });//drag

    // statute draggable
    $('.popBasic').draggable({
        scroll : false,
		containment : 'document', //부모 요소 안에서만 이동 범위 제한
		handle : '.basicHead', // drag 대상 안 특정 요소에 제한 (여러개 사용 가능)
    });//drag

    //popup open bg overflow
    if ($(".popup").hasClass("active")) {
        $("body, html").css("overflow","hidden");
    } else {
        $("body, html").css("overflow-x","auto");
    }

    // popup open
    $(".popOpen").on('click', function(){
        
    });

    // popup close
    $(".popHead .popClose").on('click', function(){
        $(this).closest(".popup").removeClass("active");
        $("body, html").css("overflow-x","auto");
    });

    // basic popup close
    $(".outputArea .close").on('click', function(){
        $(this).closest(".outputArea").removeClass("active");
    });

    // basic popup close
    $(".popBasic02 .close").on('click', function(){
        $(this).closest(".popBasic02").removeClass("active");
    });

    // basic popup close
    $(".popbasicSub .close").on('click', function(){
        $(this).closest(".popbasicSub").removeClass("active");
    });

    // basic popup close
    $(".popBasic .basicHead .close").on('click', function(){
        $(this).closest(".popBasic").removeClass("active");
    });


    // ============ map 영역

    // map header
    $(".btn.switch").on('click', function(){
        $(this).toggleClass("active").closest(".mapHeader").toggleClass("active");
    })

    // btn toggle 형식 on
    $(".toggle").on('click', function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
        } else {
            $(this).addClass("on");
        }
    });

    //  btn toggle 형식 on
    $(".toggle02").on('click', function(){
        $(this).addClass("on").closest("li").siblings().children(".toggle02").removeClass("on");
    });

    // toggle off
    $(".control .save .close").on('click', function(){
        $(this).closest(".edit").children(".toggle").removeClass("on");
    });

    // toc acco
    $(".labelTitle .title").on('click', function(){
        $(this).closest(".label").toggleClass("active");
    })

    //toc on/off 
    $(".tocSwitch .label").on('click', function(){
        $(this).toggleClass("active").closest(".toc").toggleClass("active");
    })

    // location
    $(".location .dep01 > li > a").on('click', function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active").closest("li").siblings().children("a").removeClass("active")
        }
    })

    //slider 라이브러리(scalebar)
    $( function() {
        $( "#slider-vertical" ).slider({
          orientation: "vertical",
          range: "min",
          min: 0,
          step: 10,
          max: 100,
          value: 50,
          slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
            $(".scalePlus").on('click', function(){
                
            })
          }
        });
        $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
      });

    // toc dep02닫기
    $(".widgetClose").on('click', function(){
        $(this).closest(".toc").removeClass("active");
    })

    // toc dep02 > step1 button depth02
    $(".stepFunc .btn").on('click', function(){
        if($(this).next(".dep02").length > 0) {
            
            if($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active").closest("li").siblings().children(".btn").removeClass("active");
            }
        } else {
            
        }
    });

    // 기본팝업 tr on / off
    $(".table.trActive tr").on('click', function(){
        if($(this).closest("tr").hasClass("active")) {
            $(this).closest("tr").removeClass("active");
        } else {
            $(this).closest("tr").addClass("active").siblings().removeClass("active")
        }
    });

    // map header 
    $(".headerMenu .btn").on('click', function(){
        var firstClass = $(this).attr("class").split(" ")[0];
        $("."+firstClass+"Widget").toggleClass("active")

    });

    // 팝업 radio on/off
    $(".utilBox .radioArea input[type='radio']").on({
        "change": function(e) {
            var idx = $(this).closest('tr').index();
            if (idx === 0){
                $('.utilBox .searchArea').find('input').attr('disabled',false).closest("label").siblings(".btnArea").find(".search").removeClass("off");
                $('.utilBox .selectArea').find('select').attr('disabled',true)
            } else {
                $('.utilBox .searchArea').find('input').attr('disabled',true).closest("label").siblings(".btnArea").find(".search").addClass("off");
                $('.utilBox .selectArea').find('select').attr('disabled',false)
            }
        }
    })

    // 팝업 left 아코디언 lnb
    $(".acco ul li a").on('click', function(){
        if (!$(this).closest("li").hasClass("active")) {
            $(this).closest("li").addClass("active").children(".dep").stop().slideDown(100);
        } else {
            $(this).closest("li").removeClass("active").children(".dep").stop().slideUp(100);
        }
    });

    // 팝업 left 아코디언 lnb type02
    $(".acco02 > ul > li > a").on('click', function(){
        if (!$(this).closest("li").hasClass("active")) {
            $(this).closest("li").siblings().removeClass("active").children(".dep").stop().slideUp(100);
            $(this).closest("li").addClass("active").children(".dep").stop().slideDown(100);
        } else {
            $(this).closest("li").removeClass("active").children(".dep").stop().slideUp(100);
        }
    });

    // popup map layer on/off
    $(".layerArea .layerSwitch").on('click', function(){
        if($(this).hasClass("on")) {
            $(this).removeClass("on").closest(".layerArea").removeClass("on");
        } else {
            $(this).addClass("on").closest(".layerArea").addClass("on");
        }
    });

    // table 아코디언
    $(".accoLabel .label").on('click', function(){
        if ($(this).closest(".accoLabel").hasClass("active")) {
            $(this).closest(".accoLabel").removeClass("active").next(".accoCont").removeClass("open")
        } else {
            $(this).closest(".accoLabel").addClass("active").next(".accoCont").addClass("open").siblings(".accoCont").removeClass("open")
        }
    })

    // button change
    $(".btnArea .onChange").on('click', function(){
        $(this).text("일괄 분석 재실행").addClass("grayCircle").removeClass("navyCircle");
    });
    
    /* 서규영 추가 */
    /* file path */
    $('.viewBox input[type="file"]').change(function (){
        var path = $(this).val();
        $(this).closest('.viewBox').find('.filePath').text(path).attr("title",path);
    });
})
