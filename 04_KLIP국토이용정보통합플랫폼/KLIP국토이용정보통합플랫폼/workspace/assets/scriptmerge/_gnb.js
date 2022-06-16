jQuery(function($){
  var gnbWrap = $('.lay-gnb');
  var gnb = $('.lay-gnb-content');
  var header = $('.lay-hedaer');
  var gnb1depth = gnb.find('.active[class*=gnb-depth]');
  var gnb2depth = gnb.find('ul ul .active');
  
  var gnbHover = function(){
    gnb.on('mouseenter focusin',function(){
      header.addClass('gnb-open');
    });
  }

  var gnbLeave = function(){
    gnbWrap.on('mouseleave focusout',function(){
      gnb.find('.gnb-depth1').removeClass('active');
      header.removeClass('gnb-open');
    });
  }
  
  var gnbActive = function(){
    gnb.find('a').on('mouseenter focusin',function(){
      gnb.find('li').removeClass('active');
      $(this).closest('li').addClass('active');
      $(this).closest('[class*=gnb-depth]').addClass('active');
    });

    gnb.find('>ul>li>a').on('touchstart', function(e){
      e.preventDefault();
      if(!header.hasClass('gnb-open')){
        header.addClass('gnb-open');
      }else{
        header.removeClass('gnb-open');
      }
    });
  }

  var init = function(){
    gnbHover();
    gnbLeave();
    gnbActive();
  }

  init();
});