jQuery(function(){
  var toggleBox = $('[data-togglesection]');
  var idx = 1;
  var first = true;
  var btnNext = $('.js__togglesection-next');
  var btnPrev = $('.js__togglesection-prev');
  var btnTemp = $('.js__togglesection-tempsave');
  var btnSubmit = $('.js__togglesection-submit');
  var tab = $('.js__tablocation');
  var totallength = $('.js__tablocation li').length;

  var sectionGo = function(nextidx){
    toggleBox.hide();
    var nextidx =  nextidx;

    if(nextidx > totallength-1){
      btnNext.hide();
      btnSubmit.show();
      idx = totallength;
    }else{
      btnNext.show();
      btnSubmit.hide();
    }

    if(nextidx <= 1){
      idx = 1;
      btnPrev.hide();
      btnTemp.hide();
    }else{
      btnPrev.show();
      btnTemp.show();
    }

    toggleBox.each(function(nextidx){
      if($(this).data('togglesection') == idx){
        $(this).show();
      }
    });

    if(!first){
      $(window).scrollTop(tab.offset().top);
    }

    first = false;

    tabToogle();
  }

  var tabToogle = function(){
    tab.find('li').removeClass('locked active');
    tab.find('li').eq(idx-1).addClass('locked');
    tab.find('li').each(function(liidx){
      $(this).addClass('active');
      if(liidx-1 == idx-2) return false;
    });
  }

  var btnTrigger = function(){
    $('.js__togglesection-prev').on('click',function(){
      idx--;
      sectionGo(idx);
    });
    $('.js__togglesection-next').on('click',function(){
      idx++;
      sectionGo(idx);
    });
  }

  var init = function(){
    if(toggleBox.length < 1) return false;
    sectionGo(idx);
    btnTrigger();
  }

  init();
});
