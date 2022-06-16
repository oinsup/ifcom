jQuery(function($){
  var target = $('.js__textCounter:not(.js__hastextCounter)');
  var counterElm = '<span class="textlengthCounter"><span class="textCount">0</span>/<span class="textMax">50</span>Bytes</span>';

  textCounter = function(){
    target = $('.js__textCounter:not(.js__hastextCounter)');
    target.each(function(){
      var input = $(this);
      var maxByte = input.data('maxbyte') ? input.data('maxbyte') : 20;
      var count = $(counterElm);
      input.addClass('js__hastextCounter');

      count.find('.textMax').html(numberFormat(maxByte));
      var textCount = count.find('.textCount');

      var text ='';

      //초기 글자수 체크
      textCount.html(numberFormat(getBytes($(this).val())));

      input.on('keyup keydown',function(){
        text = $(this).val();

        var bytes = getBytes(text);

        if(maxByte > bytes){
          textCount.html(numberFormat(bytes));
          count.find('.textCount').css('color','');
        }else{
          //글자수초가
          $(this).val(substrCut(text,maxByte));
          bytes = getBytes(text);
          textCount.html(numberFormat(bytes));
          count.find('.textCount').css('color','red');
        }
      });

      input.after(count);
    });
  }
  
  var init = function(){
    if(target.length < 1) return false;
    textCounter();
  }

  init();
});

function textCounter(){
  jQuery(function(){
    textCounter();   
  });
}