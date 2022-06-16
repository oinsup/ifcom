jQuery(function($){
  var btn = $('#js__mapSearch'); //지도검색 button
  var map = $('.main-map-cont'); //지도
  var searchFrm = $('.map-search'); //검색폼
  var visual = $('.main-visual');
  
  var maincont = $('.main-container'); /////////// ❌❌❌❌❌❌❌❌❌❌



  //검색폼열기
  var searchFrmOpen = function(){
    searchFrm.css('display','block');
    searchFrm.addClass('open-ani');
  }

  //검색폼닫기
  var searchFrmClose = function(){
    searchFrm.addClass('close-ani');
    setTimeout(function(){
      searchFrm.removeClass('close-ani open-ani');
      searchFrm.css('display','none');

      //지도의 모든 패널 닫음
      $('.js__search-notext').hide();
      $('.js__search-nodata').hide();
      $('.js__search-result').hide();

    },300);
  }

  var mapOpen = function(){
    map.css('height',$(window).height() - ($('.lay-gnb-wrap').outerHeight() + 50));
    setTimeout(function(){
      searchFrmOpen();
    },300);
  }

  var mapClose = function(){
    map.css('height',700);
    searchFrmClose();
    $('html').animate({
      scrollTop : 0
    },300);
  }

  //상단이미지 줄이기
  var visualClose = function(){
    openTop = $('.lay-hedaer-top').outerHeight();
    visual.css('margin-top', -402);

    $('html').animate({
      scrollTop : openTop
    },300);
  }

  //상단이미지 늘리기(원래크기로)
  var visualOpen = function(){
    visual.css('margin-top', 0);
  }

  var toggleCont = function(){
   $('.main-quickbar-left > button').on('click',function(){
    
    var type = $(this).data('type');

    if(type == 'map' && btn.hasClass('_locked')){
      if(!btn.hasClass('active')){
        visualClose();
        mapOpen();
        btn.addClass('active');
      }else{
        visualOpen();
        mapClose();
        btn.removeClass('active');
        // workstatusAni();
      }
    }

    $('.main-quickbar-left > button').removeClass('_locked');
    $(this).addClass('_locked');
    
    if(type === 'work'){
      visualClose();
      $('.main-map').hide();
      $('.workstatus').show();
      workstatusAni();
    }else if(type == 'map'){
      $('.main-map').show();
      $('.workstatus').hide();
    }

    
   });
  }

  //검색 클릭 이벤트 생성
  // var searchTrigger = function(){
  //   // if(!btn.hasClass('_locked')) return false;
  //   btn.on('click',function(){
  //     if(!btn.hasClass('active')){
  //       visualClose();
  //       mapOpen();
  //       btn.addClass('active');
  //     }else{
  //       visualOpen();
  //       mapClose();
  //       btn.removeClass('active');
  //     }
  //   });
  // }

  //이건 일단 놔둬보자 쓸지도 몰라!!!! 아마도!
  var scrollBg = function(){
   var bg = $('.main-visual .__bg');
   $(window).on('scroll',function(){
     console.log('a');
   });
  }


  var init = function(){
    // searchTrigger();
    toggleCont();
  }

  init();
  
});




//지도검색
jQuery(function($){

  var frm = $('.map-search-frm');
  var searchText = frm.find('.__text');

  var searchClear = function(){
    $('.js__search-notext').hide();
    $('.js__search-nodata').hide();
    $('.js__search-result').hide();
  }
  
  var search = function(){
    $('.map-search-frm .__btn-search').on('click',function(){
      var val = searchText.val(); //검색어
      searchClear();
      if(!val){
        $('.js__search-notext').show();
      }else if(val !== '신장동'){
        $('.js__search-nodata').show();
      }else{
        $('.js__search-result').show();
      }
    });
  }

  var addMethodSeelct = function(){
    frm.find('.__selector input').on('change',function(){
      var t =frm.find('.__selector input:checked').val();
      if(t == 'number'){
        searchText.attr('placeholder',"찾는 위치의 주소를 입력하세요. (예. 신장동 38-1)");
      }else if(t == 'road'){
        searchText.attr('placeholder',"찾는 위치의 주소를 입력하세요. (예. 도움6로 11)");
      }
    });
  }

  var mapsetting = function(){
    var settingElm = $('.map-setting');
    var btn = $('.js__mapsetting');
    var closeBtn = $('.map-setting__header button');

    btn.on('click',function(){
      settingElm.show();

      fncTest();

      $(this).addClass('active');

      setTimeout(function(){
        settingElm.addClass('setting-open');
      },10);
    });

    // fncTest = function(){
    //   console.log('a');
    // }

    function fncTest(){
      console.log('a');
    }

    closeBtn.on('click', function(){
      settingElm.removeClass('setting-open');
      setTimeout(function(){
        settingElm.hide();
      },300);
    });

    //스크롤
    scrollBindJq($('.map-setting__lsit'));

    var list = $('.map-setting__lsit-list');
    list.find('> li > strong').on('click', function(){
      var pobj = $(this).parent();
      var tobj = pobj.find('> ul');

      if(!pobj.hasClass('active')){
        pobj.addClass("active");
        tobj.show();
      }else{
        pobj.removeClass("active");
        tobj.hide();
      }
      
    });
  }

  mapsetting();

  var resultTrigger = function(){
    $('.map-search-result button').on('click',function(){
      $('.map-maker').show();
      $('.js__search-result').hide();
    });
  }

  var searchTextDel = function(){
    searchText.on('input',function(){
      var val = $(this).val();
      if(val){
        frm.find('.__textbox').addClass('-istext');
      }else{
        frm.find('.__textbox').removeClass('-istext');
      }
    });

    frm.find('.__btn-textdel').on('click', function(){
      searchText.val('');
      searchText.focus();
      frm.find('.__textbox').removeClass('-istext');
    });
  }

  var init = function(){
    search();
    addMethodSeelct();
    resultTrigger();
    searchTextDel();
  }

  init();
});

jQuery(function(){
  var workstatus = $('.workstatus-status');
  var maxCount;

  var workstatusinit = function(){
    var item = $('.workstatus-status__item');
    maxCount = workstatus.data('maxTotal');
    item.each(function(){
      var obj = $(this);
      var num = obj.find('.__counter').data('total');
      var bar = obj.find('.__bar');
      var dots = obj.find('.__dots');
      var numBox = bar.find('.__counter');

      //현재 갯수
      bar.css('width',getWidth(obj));
      numBox.text(num);

      if(num == 0){
        numBox.addClass("ct_zero");
      }

      //dot생성
      for(var i =0; i < maxCount; i++){
        var dotElm = $('<span class="__dot"></span>');
        if( i < num ) dotElm.addClass('none');
        dots.find('div').append(dotElm);
      }
    });
  }

  var getWidth = function(obj,labelWidth){
    var obj = obj;
    var num = obj.find('.__counter').data('total');
    return 'calc((100% - '+ labelWidth +'px)/'+ maxCount +'*'+ num +' - (100% - '+ labelWidth +'px)/'+ maxCount +'/2 + 11px + '+ labelWidth +'px)';
  }

  //그래프 업 애니메이션
  workstatusAni = function(){
    var item = $('.workstatus-status__item');
    var sec = 1000 * 1;
    var labelWidth = item.eq(0).find('strong').outerWidth();

    item.each(function(){
      var obj = $(this);
      var bar = obj.find('.__bar');
      var width = getWidth(obj,labelWidth);
      var num = obj.find('.__counter').data('total');

      bar.css('width',labelWidth);
      bar.css('transition','');

      setTimeout(function(){
        bar.css('width',width);
        bar.css({
          'transition': 'all '+ sec/1000/maxCount*num + 's',
        });
      },10);
    });
  }

  var workstatusStart = function(){
    workstatusinit();
  }

  workstatusStart();
});


//context menu
jQuery(function(){
  var ctxmenu = $('#map-contextmenu');
  $('.main-map-cont').on('contextmenu', function(e){
    e.preventDefault();
    var x = e.offsetX;
    var y = e.offsetY;

    ctxmenu.hide();

    ctxmenu.css({
      left: x + 10,
      top: y - 10
    });
    
    ctxmenu.show();
    
  });

  $('.main-map-cont').on('mousedown', function(e){
    if(ctxmenu.css('display') == 'block' && (e.button == 0 || e.button == 1)){
      ctxmenu.addClass('contextmneu-hide');
      setTimeout(function(){
        ctxmenu.removeClass('contextmneu-hide');
        ctxmenu.hide();
      },300);
    }
  });
});

jQuery(function(){
  var contextElm = $('#map-contextmenu2');
  var closeBtn = contextElm.find('.contextmenu-close');
  var contextElmText = '#map-contextmenu2 a';
  var degree = 360 / ($('#map-contextmenu2 a').length);
  var tgap = 30;
  var itemWidth; // 각 메뉴 width
  var mapBody = $('.main-map-cont');
  var height = 60;

  //menu mouse over
  $(contextElmText).on('mouseover', function(){
    var w = $(this).find('span span').outerWidth();
    itemWidth = itemWidth ? itemWidth : $(this).outerWidth();
    $(this).css({
      // width: w + itemWidth,
      zIndex : 210
    });

    if($(this).hasClass('left-menu')){
      $(this).find('> span').css({
        left: w * -1
      });
    }else{
      $(this).find('> span').css({
        right: w * -1
      });
    }
  });

  $(contextElmText).on('mouseleave', function(){
    $(this).css({
      zIndex: 99
    });

    if($(this).hasClass('left-menu')){
      $(this).find('> span').css({
        left: 0
      });
    }else{
      $(this).find('> span').css({
        right: 0
      });
    }
    
  });

  var menusetTime = [];
  contexntMenuOpen = function(x, y, btn){

    closeBtn.show();
    if(btn === false) closeBtn.hide();

    $('#map-contextmenu2').css({
      left: x - 25,
      top: y - 25
    });

    $('#map-contextmenu2').addClass('open');
    setTimeout(function(){
      $(contextElmText).show();
    },100);
    setTimeout(function(){
      contexntMenuUnfold();
    },150);
  }

  //메뉴 펼치기
  function contexntMenuUnfold(){
    var menu = $(contextElmText);
    $('#map-contextmenu2').addClass('aniing');
    menu.each(function(idx){
      var objW = 0;
      var link = $(this);

      if(degree*idx > 180){
        $(this).addClass('left-menu');
      }

      var y = height * Math.sin(((degree*idx)-90)*(Math.PI / 180)) + height;
      var x = height * Math.cos(((degree*idx)-90)*(Math.PI / 180));

      menusetTime[idx] = setTimeout(function(){
                            link.css({
                              top: y,
                              left: x,
                              transform: 'scale(1)'
                            });
                          }, tgap*idx);
    });

    setTimeout(function(){
      $('#map-contextmenu2').removeClass('aniing');
    }, tgap*($(contextElmText).length + 1));
  }

  // 닫기
  contexntMenuClose = function(){
    contexntMenufold();
    clearTimeout(foldmenu);
    var foldmenu = setTimeout(function(){
                      $(contextElmText).hide();
                      $('#map-contextmenu2').removeClass('open').trigger('classChange');
                    }, tgap * ($(contextElmText).length + 1) + height);
  }

  // 메뉴 접기
  function contexntMenufold(){
    var menu = $(contextElmText);
    menu = $(menu.get().reverse());

    for(var i = 0; i < menusetTime.length; i++){
      clearTimeout(menusetTime[i]);
    }
    menu.each(function(idx){
      var link = $(this);
      setTimeout(function(){
        link.css({
          top: height,
          left: 0,
          transform: 'scale(0)'
        });
      }, tgap*idx);
    });
  }

  //open
  mapBody.on('contextmenu',function(e){
    e.preventDefault();
    if(e.target !== e.currentTarget) return false;
    var x = e.offsetX;
    var y = e.offsetY;

    if(contextElm.hasClass('open')) {
      contexntMenuClose();

      contextElm.on('classChange',function(){
        setTimeout(function(){
          contexntMenuOpen(x,y);
          contextElm.off();
        },50);
      });

      return false;
    }

    if(!contextElm.hasClass('aniing')) {
      contexntMenuOpen(x, y);
    }
    
  });

  //close
  mapBody.on('mousedown', function(e){
    if(e.target !== e.currentTarget) return false;
    if((e.button == 0 || e.button == 1)){
      if(!contextElm.hasClass('aniing')) contexntMenuClose();
    }
  });

  contextElm.find('.contextmenu-close').click(function(){
    contexntMenuClose();
  });

  // contexntMenuOpen(600, 150, false);
});


//contextmneu 닫기
function contexntMenuClose(){
	jQuery(function(){
		contexntMenuClose();
	});
}

//contextmneu 열기
function contexntMenuOpen(x,y,btn){
  jQuery(function(){
    contexntMenuOpen(x,y,btn);
  });
}


