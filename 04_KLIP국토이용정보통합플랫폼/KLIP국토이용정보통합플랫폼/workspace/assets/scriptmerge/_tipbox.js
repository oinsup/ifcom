jQuery(function($){
  var tipbox = $('.cs-box-tip');

  var tipboxInit = function(obj){
    var obj = obj;
    btn = $('<button type="button" class="tip-toggle-btn"></button>');
    
    obj.append(btn);

    btn.on('click',function(){
      obj.toggleClass('active');
    });
    // obj.appned('<button class="tip-toggle-btn"></button>');
  }
  
  var init = function(){
    if(tipbox.length < 1) return false;

    tipbox.each(function(){
      tipboxInit($(this));
    });
    
  }

  init();
});