jQuery(function($){
  inputFile = $('input[class*=cs-file]');

  var fileTrigger = function(){
    inputFile.each(function(){
      var file = $(this);
      var fileID = file.attr('id');
      var label = $('[for=' + fileID + ']');
      var objWrap = file.closest('.cs-file-wrap');
      
      objWrap.find('.js__filename').html(file.attr('placeholder'));
      
      file.on('change',function(){
        var fileName = $(this).val().split('\\');

        fileName = fileName[fileName.length-1];
        objWrap.find('.js__filename').html(fileName);

        if(!fileName){
          objWrap.find('.js__filename').html(file.attr('placeholder'));
        }
      });
    });
  }

  var init = function(){
    if(inputFile.length < 1) return false;
    fileTrigger();
  }

  init();
});