jQuery(function($){
  modalFullJq = function(btn, type){
    var btn = $(btn);
    var ext = btn.data();
    var obj = btn.closest('.laymodal');
    var type = type;

    if(!ext.fullscreen){
      modalwindowFull(obj, btn, type);
    }else{
      modalZommOut(obj, btn, type);
    }
  }

  var originHeigth;

  //전체화면
  var modalwindowFull = function(obj, btn, type){

    var getNum = function(num){
      return Number(num.replaceAll(/[^(0-9)]/gi,''));
    }
    
    obj.css({
      width :'100%',
    });

    var modalHeader = obj.find('.laymodal-header');
    var modalContent = obj.find('.laymodal-content');
    var modalFooterHeight = obj.find('.laymodal-footer').length > 0 ? obj.find('.laymodal-footer').outerHeight() : 0;
    

    originHeigth = originHeigth ? originHeigth : obj.find('.laymodal-content').height();

    if(type == 'blueprint') {
      obj.find('.blueprint-preview').css('height',$(window).height() - 265);
    } else {
      obj.find('.laymodal-content').css('height',$(window).height() - (modalHeader.height() + getNum(modalContent.css('padding-top')) * 2 + 60 + 2 + modalFooterHeight));
    }

    btn.data('fullscreen','true');
    btn.removeClass('laymodal-reduce');
    btn.addClass('laymodal-full');
    btn.text('팝업크기 축소');
  }

  //축소
  var modalZommOut = function(obj, btn, type){
    obj.css({
      width : '',
    });

    btn = btn.parent().find('.laymodal-full');
    console.log(btn);

    if(type == 'blueprint'){
      obj.find('.blueprint-preview').css('height','');
    } else {
      obj.find('.laymodal-content').css('height',originHeigth);
    }

    btn.removeClass('laymodal-full');
    btn.addClass('laymodal-reduce');
    btn.data('fullscreen','');
    btn.text('전체 화면 보기');
  }

  modalFullCloseJq = function(btn){
    var btn = $(btn);
    var obj = btn.closest('.laymodal');

    modalZommOut(obj,btn);
    lay_pop_close(obj,btn);
  }

  scrollBind($('.blueprint-list'));
});

function modalFull(btn, type){
  jQuery(function($){
    modalFullJq(btn, type);
  });
}

function modalFullClose(btn, type){
  jQuery(function($){
    modalFullCloseJq(btn, type);
  });
}