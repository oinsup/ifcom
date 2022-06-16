//도면보기
jQuery(function($){
  blueprintFullJq = function(btn){
    var btn = $(btn);
    var ext = btn.data();
    var obj = btn.closest('.laymodal');

    if(!ext.fullscreen){
      blueprintFull(obj, btn);
    }else{
      blueprintZommOut(obj, btn);
    }
  }

  //전체화면
  var blueprintFull = function(obj, btn){
    obj.css({
      width :'100%',
    });

    obj.find('.blueprint-preview').css('height',$(window).height() - 345);

    btn.data('fullscreen','true');
    btn.text('팝업크기 축소');
  }

  //축소
  var blueprintZommOut = function(obj){
    btn = obj.find('.js__blueprintfull')

    obj.css({
      width : '',
    });

    obj.find('.blueprint-preview').css('height','');
    
    btn.data('fullscreen','');
    btn.text('전체 화면 보기');
  }

  blueprintCloseJq = function(btn){
    var btn = $(btn);
    var obj = btn.closest('.laymodal');
    
    blueprintZommOut(obj,btn);
    lay_pop_close(obj);
  }

  scrollBind($('.blueprint-list'));
});

function blueprintFull(btn){
  jQuery(function($){
    blueprintFullJq(btn);
  });
}

function blueprintClose(btn){
  jQuery(function($){
    blueprintCloseJq(btn);
  });
}