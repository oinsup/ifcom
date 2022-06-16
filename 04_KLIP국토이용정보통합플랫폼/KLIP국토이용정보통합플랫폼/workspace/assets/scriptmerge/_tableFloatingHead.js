jQuery(function(){
  var floatingHeadObj = $('.js__floatingHead');

  //이게 먼지 정확히 모르겠어
  // var triggerScroll = function(obj){
  //   obj.scroll(function(){
  //     var head = $(this).find('thead');
  //     var ttop = $(this).scrollTop();
  //     head.css('top',ttop);
  //   });
  // }

  // scrollBind = function(obj){
  //   obj.mCustomScrollbar({
  //     theme:"dark",
  //     scrollInertia:100,
  //     axis: 'y',
  //     mouseWheel: {
  //       // enable: false,
  //       preventDefault: true,
  //     }
  //   });
  // }

  var init = function(){
    if(floatingHeadObj.length < 1) return false;

    floatingHeadObj.each(function(){
      var obj = $(this);
      var head = $(this).find('thead');
      var width = obj.find('colgroup');
      var widthSum = 0;
      var height = '250px';
      var minItem = obj.data('minitem') ? obj.data('minitem') : 6;
      var cellHeight = obj.data('cellHeight');
      var flHeader = '';
      var scroll = false;


      //높이값
      if(minItem){
        if(!cellHeight) cellHeight = obj.find('table tbody tr > *').eq(0).outerHeight();
        
        if(minItem < obj.find('table tbody tr').length){
          height = cellHeight * minItem + 'px';
          scroll = true;
        }else{
          height = '';
        }
      }

      //header 생성
      head.find('tr > *').each(function(){
        flHeader += '<div>' + $(this).html() + '</div>';
      });

      flheader = $('<div class="floating-tb-header">'+ flHeader +'</div>');
      obj.prepend(flheader);
      
      obj.find('table').wrap('<div class="js__floatingHead_wrap" style="height:'+ height +';overflow-y:auto">');

      //스크롤생성
      if(scroll == true) scrollBind(obj.find('.js__floatingHead_wrap'));

      //퍼센트로 들어갈 column
      var peridx = width.find('col:not([class*=width])').index();

      width.find('col').each(function(){
        var col = $(this);
        var idx = col.index();

        if(col.attr('class')){
          flheader.find('> *').eq(idx).addClass(col.attr('class'));
          widthSum += Number(col.attr('class').replace(/[^0-9]/g,''));
        }else{
          // flheader.find('> *').eq(idx).css('width','calc(100% - '+ widthSum +'px)');
        }
      });

      flheader.find('> *').eq(peridx).css('width','calc(100% - '+ (widthSum) +'px)');

      // triggerScroll(obj);
    });
  }

  window.onload = function(){
    init();
  };

  // init();

});