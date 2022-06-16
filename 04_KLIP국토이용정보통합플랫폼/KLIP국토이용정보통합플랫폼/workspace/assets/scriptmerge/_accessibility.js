//_accessibility.
jQuery(function($){
  $('.lay-sitejump a').on('click',function(){
    var targetText = $(this).attr('href');
    var target = $($(this).attr('href'));

    if(targetText == '#laycontent'){
      if($('.main-visual').length > 0){
        target = $('.main-visual');
      }else{
        target = $('.container');
      }
    }
    
    target.attr('tabindex', '0').focus();
    target.on('focusout',function(){
      target.removeAttr('tabindex');
    });
  });
});