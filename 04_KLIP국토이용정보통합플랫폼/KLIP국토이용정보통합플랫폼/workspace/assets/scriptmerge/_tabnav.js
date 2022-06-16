jQuery(function($){
  var tabNavs = $('.js__tabNav');

  //초기에 보여질 tavnav content  calss active 추가
  var tabNavInit = function(obj){
    var className = obj.data('tabnav');
    $('*[class*='+ className +']').eq(0).addClass('active');
  }

  var tabNavBtn = function(btn){
    var obj = btn.parent();
    obj.parent().find('li').removeClass('active');
    obj.addClass('active');
  }

  var tabNav = function(){
    tabNavs.each(function(){
      tabNavInit($(this));

      var tabName = $(this).data('tabnav');
      $(this).find('button, a').on('click',function(){
        tabNavBtn($(this));
        var idx = $(this).data('idx');
        var className = 'js__tabNav_' + tabName;

        $('*[class *=' + className + ']').removeClass('active');
        $('.' + className + idx).addClass('active');
      });
    });
  }

  var init = function(){
    if(tabNavs.length < 1) return false;

    tabNavs.find('button, a').on('click',function(e){
      e.preventDefault();
    });
    
    // tabNavInit();
    tabNav();
  }

  init();
});