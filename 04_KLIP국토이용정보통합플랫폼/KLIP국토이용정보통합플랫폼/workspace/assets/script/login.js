jQuery(function($){
  var navGroup = $('.login-nav .__group');

  var navGroupHover = function(){
    var ogActive;
    navGroup.on('mouseenter focusin',function(){
      ogActive = navGroup.find('.active');
      navGroup.find('a').removeClass('active');
    });
    navGroup.on('mouseleave',function(){
      if(ogActive) ogActive.addClass('active');
    });
  }

  var accordionItem = $('.js__agg-list');
  var accordion = function(){
    accordionItem.find('button').on('click',function(e){
      e.preventDefault();
      var obj = $(this);
      var pobj = obj.parent('.__item');

      if(!pobj.hasClass('active')){
        accordionItem.find('.__item').removeClass('active');
        accordionItem.find('.__item > div').stop().slideUp();

        pobj.addClass('active');
        pobj.find('>div').stop().slideDown();
      }else{
        pobj.removeClass('active');
        pobj.find('>div').stop().slideUp();
      }

    });
  }

  var jumpLink = function(){
    $('.lay-container').attr('id','laycontent');
    $('.login-nav').attr('id','laygnb');

    $('.lay-sitejump > a').on('click',function(){
      tobj = $($(this).attr('href'));
      tobj.attr('tabindex','0');
      tobj.on('focusout', function(){
        tobj.removeAttr('tabindex');
      });
    });
  }

  var init = function(){
    navGroupHover();

    if(accordionItem.length > 0){
      accordion();
    }

    jumpLink();
  }

  init();
});