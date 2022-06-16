$(document).ready(function(){

    //남은시간 hover
    $('.timeMark').on("click", function () {
        $(this).parent().toggleClass("active");
	});

    //gnb
    $('#gnb a').on("mouseenter focusin",function(){
        if($('#header').hasClass('open')) {
            
        }else {
            $('header').addClass('open');
        }
    })
    $('.gnbWrap').on("mouseleave focusout", function(){
        $('#header').removeClass("open");
    })

    //swiper
    var mainSlider = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});

    /* roll-controll 슬라이드 멈추기 및 재생 */
    $('.mainPage .slideControl').on("click active", function(){
        if ($(this).hasClass('main-roll-pause')) {
            $(this).removeClass('main-roll-pause').addClass('main-roll-play');
            mainSlider.autoplay.stop();
        } else {
            $(this).removeClass('main-roll-play').addClass('main-roll-pause');
            mainSlider.autoplay.start();
        }//if
    });//

    // 검색창 text 입력시 닫기 버튼 활성화
    $(function(){
        $(".inputSearch").on('input',function(){
            if ($(".inputSearch").val()=='') {
                $(".btnReset").css({"display":"none"});
            } else {
                $(".btnReset").css({"display":"block"});
            }
        })
    });//

    // 검색창 닫기버튼 클릭시 text 초기화
    $(".btnReset").on('click',function(){
        $(".inputSearch").val('');
        $(".btnReset").css({"display":"none"});
    })

    /* 탭메뉴 클릭 */
    $('.tabContWrap .tabList>li').on({
        "click":function (){
        let idx = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
        }
    });

    /* datePicker */
    $(".cal").datepicker({
        dateFormat: "yy-mm-dd",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: "년"
    });

    /* 인풋 파일 텍스트 수정 */
    $('.fileArea input[type="file"]').on({
        'change': function change() {
          $(this).siblings('.fileName').css("color","#181818").text($(this).val());
          $(this).siblings('label').hide().siblings('.btnArea').show();
        }
    });

    /* 얼럿 팝업 닫기 */
    $('.alert .btnClose').on({
        "click": function () {
            $(this).closest('.alert').hide();
        }
    });

    //faq 아코디언 
    $('.accordionLabel > a').on("click", function () {
        $(this).parents('li').addClass('open').siblings().removeClass('open');
    });

    //문의하기 문의유형 버튼 
    $(".btnArea.type02 button").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    //업무캘린더 아코디언
    $('.txtOverflow').on("click", function () {
        $(this).parents('tr').toggleClass('open');
    });

})// doc
