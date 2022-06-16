jQuery(function($){
  var memberSummary = function(){
    $('.lay-member-summary .summary-col > a').each(function(){
      var link = $(this);
      var pobj = link.parent('.summary-col');
      var pop = link.next('.summary-info');
      var setTime;

      link.on('mouseenter',function(){
        clearTimeout(setTime);
        pobj.removeClass('active');  
        pop.removeClass('slideUp slideDown');

        pobj.addClass('active');
        pop.addClass('slideDown');
      });

      pobj.on('mouseleave',function(){
        pop.addClass('slideUp');
        
        setTime = setTimeout(function(){
          pobj.removeClass('active');  
          pop.removeClass('slideUp slideDown');
        },300);
      });
    });
  }

  var working = function(){

    var workingObj = $('.js__working');
    if(workingObj.length < 1) return false;
    
    var elm = '';
    elm += '<div style="font-size:30px;font-weight:100;text-align: center;padding:60px 0;">';
    elm += 'Working <span style="width:10px;display:inline-block"></span> ';
    elm += '<span class="working"></span> ';
    elm += '<span class="working"></span> ';
    elm += '<span class="working"></span> ';
    elm += '<span class="working"></span> ';
    elm += '</div>';

    workingObj.html(elm);
  }

  var init = function(){
    memberSummary();
    working();
  }

  init();

  scrollBindJq = function(obj){
    obj.mCustomScrollbar({
      theme:"dark",
      scrollInertia:100,
      axis: 'y',
      mouseWheel: {
        // enable: false,
        preventDefault: true,
      }
    });
  }

  scrollBindJq($('.js__table-scroll'));
  
  
});

function scrollBind(obj){
  jQuery(function($){
    scrollBindJq(obj);
  });
}


function pageLoader(){
  var loader = '<div class="page-loader"><div><div class="page-loader-loding"></div> <div class="pager-loader-alert">국토이용정보통합플랫폼</div></div></div>';
  $('body').prepend(loader);
  $('body').css('overflow','hidden');
}

function pageLoaderComplete(){
  $('.page-loader').remove();
  $('body').css('overflow','');
}