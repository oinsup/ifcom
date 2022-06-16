// modal.js
// ver 1.3
jQuery(function($){

  // $('body').on('keyup', function(e){
  //   if(e.key === "Escape") {
  //     lay_pop_close();
  //   }
  // });

  var bgCloseAni;

  var bgOpen = function(){
    clearTimeout(bgCloseAni);
    var $popbg = $('#jq_modal_bg');
    $('#jq_modal_bg').removeClass('jq_modal_bg_close');

    if($popbg.length == 0){
      $('body').prepend('<div id="jq_modal_bg"></div>');
    }else{
      $popbg.css('display','block');
    }
  }

  var bgClose = function(){
    $('#jq_modal_bg').addClass('jq_modal_bg_close');

    bgCloseAni = setTimeout(function(){
      $('#jq_modal_bg').removeClass('jq_modal_bg_close');
      $('#jq_modal_bg').css('display','none');
      $('#jq_modal_bg').unbind();
      $('html').attr('style','');
    },300);
  }


  lay_pop_close = function(elm){
    var $obj;

    if(elm){
      if(typeof(elm) == 'string'){
        $obj = $(elm);
      }else{
        $obj = elm;
      }
    }else{
      $obj = $('.jq_modal');
    }

    $obj.removeClass('modal_open').addClass('modal_close');

    $carea = $('*[jq-carea='+$obj.data('jqModalarea')+']');
    $carea.focus();

    var activeModal = $('.jq_modal_wrap:visible');
    if(activeModal.length <= 1){
      bgClose();
    }

    setTimeout(function(){
      $obj.removeClass('modal_close');
      $obj.closest('.jq_modal_wrap').css('display','none');
      $obj.unbind();
    },300);
  }

    //lay_pop_open(object, button , close action)
    lay_pop_open = function(obj,t,bgclose){
      // if(bgclose != false) bgclose = false;
      bgclose = false;
      var $t = t; //회귀
      var $obj = obj; //mdoal
      var $bgClose = bgclose; //배경클릭시 모달 닫기기능 활성화 여부 true: 활성, false: 비활성

      if(!$obj){
        //$obj없을경우, href or jq_target 에 있는 정보를 사용함
        //target object
        $obj = $($t.attr('href'));
        //링크 사용한하고 jq_target으로 사용
        if($obj.length == 0)  $obj = $($t.attr('jq-target'));
      }

      if(typeof($obj) === 'string'){
        $obj = $(obj);
      }

      //modal없을때
      if($obj.length == 0) {
        console.error(obj+' 를 찾을수 없음');
        return false;
      }

      if($t){
        var $carea = $t.attr('id');

        $carea = new Date();
        $carea = $carea.getTime();
        $t.attr('jq-carea',$carea);
        $obj.data('jq-modalarea',$carea);
      } 

      //modal default setting
      $obj.data('jqModalBgclose', $bgClose);

      //현재 활성화된 modal
      var activeModal = $('.jq_modal_wrap:visible');
      var activeIdx;
      if(activeModal.length > 0){
        activeIdx = activeModal.css('z-index');
      }

      //background add
      bgOpen();

      isCreate = $obj.data('jq-modal') == 'create' ? true : false;
        
      if(!isCreate){
        $obj.data('jq-modal','create');
        $('body').prepend($obj);
        $obj.wrap('<div class="jq_modal_wrap"><div><div>');
        $obj.css('display','block');
        $obj.addClass('modal_open jq_modal');

        $obj.closest('.jq_modal_wrap').css('z-index',activeIdx + 1);

        //modal에서 포커스 나갔을때 event add
        modalFocusOutClose($obj);
      }else{
        pobj = $obj.closest('.jq_modal_wrap');
        pobj.css('display','block');
        $obj.data('jq-modalarea',$carea);
        $obj.removeClass('modal_close');
        $obj.addClass('modal_open');

        $obj.closest('.jq_modal_wrap').css('z-index',activeIdx + 1);
      }

      $obj.find('.slick-slider').resize();
      
      if($bgClose)
      {
        //배경클릭시 모달 닫기
        $('.jq_modal_wrap').click(function(){
            lay_pop_close();
        });
      }


      $obj.click(function(e){
        e.stopPropagation();
      });
        
      $('html').css({overflow: 'hidden'});

      $obj.attr('tabindex', '0');
      $obj.focus();
      $obj.focusout(function(){
          $obj.removeAttr('tabindex');
      });
    }

    //포커스가 나갈때 모달창 닫기
    var modalFocusOutClose = function($obj){
      var btn = $obj.find('button[jq-action=closeModalFocus]'),
          btns;
      var modal ={
        config: $obj.data()
      }

      //btn 생성
      if(btn.length < 1){
        btn = $('<button type="button" class="laymodal-focusclose" jq-action="closeModalFocus">');
        $obj.after(btn);
        $obj.before(btn.clone());
        btns = $obj.closest('.jq_modal_wrap').find('button[jq-action=closeModalFocus]');
      }

      if(modal.config.jqModalBgclose){
        btns.focusin(function(){
          lay_pop_close($(this).closest('.jq_modal_wrap').find('.jq_modal'));
        });
      }else{
        btns.focusin(function(){
          $obj.attr('tabindex','0').focus();
        });
      }
    }


    lay_pop_width = function(obj, width){
      $(obj).css('width', width);
    }


	$('*[jq-action="modal"]').click(function(e){
    e.preventDefault();
    lay_pop_open('',$(this));
  });

	$('*[jq-action="closeModal"]').click(function(e){
    e.preventDefault();
    lay_pop_close($(this).closest('.jq_modal'));
  });
});


var lay_pop_open = function(obj,t,bgclose){
  jQuery(function($){
    lay_pop_open(obj,t,bgclose);
  });
}

var lay_pop_close = function(){
  jQuery(function($){
    lay_pop_close();
  });
}

var lay_pop_width = function(obj, width){
  jQuery(function($){
    lay_pop_width(obj, width);
  });
}

jQuery(function($){
    //modal 창이 넘칠 경우 인데 이럴 경 우가 있나??
    var exresize = function(){
        obj = $('.laypop-webview-gallery').closest('.laypop');
        
        obj.css('width','1200px');
        $(window).resize(function(){
            a = $(window).width()-60;
            obj.css({width: a});
        });
    }

    var init = function(){
        if($('.laypop-webview-gallery').length > 0){
            exresize();
        }
    }

    // init();
});



//드래그모달
modaldrag = function(elm){
  jQuery(function(){
    function getzindex(){
      var maxIdx = 0;
      var allobj = $('.js__modaldrag:visible');
      allobj.each(function(idx,modalobj){
        var modalobj = $(modalobj);
        var zidx = Number(modalobj.css('z-index'));
        if(maxIdx < zidx) maxIdx = zidx;
      });
      return maxIdx;
    }

    var drage = false;
    var obj = $(elm);
    var objWidth = obj.outerWidth();
    var objHeight = obj.outerHeight();
    var wHeight;
    var wWidth;
    var header = obj.find('.laymodal-header');

    var getWindowSize = function(){
      wHeight = $(window).height();
      wWidth = $(window).width();
      console.log('a');
    }

    $(window).on('resize', function(){
      getWindowSize();
    });
    // getWindowSize();

    obj.addClass('js__modaldrag');

    obj.css('z-index', getzindex()+1);

    //처음좌표
    var originX;
    var originY;

    //클릭시좌표
    var clickX;
    var clickY;

    header.on('mousedown',function(e){
      originX = obj.offset().left;
      originY = obj.offset().top;
      clickX = e.clientX;
      clickY = e.clientY;

      obj.css('z-index', getzindex()+1);

      $(window).on('mousemove',function(e){
          moveX = originX + (e.clientX - clickX);
          moveY = originY + (e.clientY - clickY);
          // if(moveX < 0 || moveX > wWidth - objWidth) return false;
          // if(moveY < $(window).scrollTop() || moveY + objHeight >  $(window).scrollTop() + $(window).height()) return false;
          obj.css({
            left: moveX,
            top: moveY
          });
      });
    });

    

    $(window).on('mouseup',function(){
      $(window).off('mousemove');
      drage = false;
    });
  });
}

lay_pop_open_darge = function(elm, opt, button){
  jQuery(function(){
    var obj = $(elm); // modal
    var btn = $(button); // click button
    var btnxy = btn.offset();
    var objLeft;
    var objRight;

    var option = {
      width: 700, // 가로
      height: 400, // 높이
      left: 0, // 클릭한 버튼에서의 left 10px; , 버튼 좌 상단의 좌표기준
      top: btn.outerHeight() + 10, // 클릭한 버튼에서의 top 10px;
      center: false  // true 일때 가운데로 맞춤
    }

    $.extend(option, opt);

    $('body').prepend(obj);
    // console.log(obj);

    objContent = obj.find('.laymodal-content > div');
    objContent.css({
      height: option.height,
      overflowY: 'auto'
    });

    if(!option.center){
      objLeft = btnxy.left + option.left;
      objRight = btnxy.top + option.top;
    }else{
      objLeft = $(window).width()/2 - option.width/2;
      objRight = $(window).height()/2 - obj.height()/2 + $(window).scrollTop();
    }

    obj.css({
      display: 'block',
      position: 'absolute',
      zIndex: 2000,
      left: objLeft,
      top: objRight,
      transition: 'none',
      width: option.width
    });

    modaldrag(obj);
  });
}

lay_pop_close_darge = function(elm){
  jQuery(function($){
    obj = $(elm);
    obj.hide();
  });
}