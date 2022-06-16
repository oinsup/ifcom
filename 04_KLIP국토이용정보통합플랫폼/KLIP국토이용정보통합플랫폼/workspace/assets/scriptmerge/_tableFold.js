jQuery(function($){
  var table = $('.js__tableFold');

  var getHeight = function(obj,optRows){
    //사이즈설정
    var cellHeight = 0;
    var ct = Number(optRows);
    var rowspan = 0;
    var rowspanct = 0;
    obj.find('> table > thead > tr, > table > tbody > tr').each(function(){
      var cell = $(this).find(' > *:first-child');

      if(cell.attr('rowspan')){
        rowspan = Number(cell.attr('rowspan'));
        ct += rowspan - 2;
        rowspanct = 0;
      }
      
      if(rowspanct < rowspan){
        if(rowspanct == rowspan){
          rowspanct = 0;
          rowspan = 0;
        }

        rowspanct++;

        if(rowspanct != 1) {
          return true
        }
      }

      cellHeight += cell.outerHeight();

      ct--;
      if(ct == 0){
        return false;
      }
    });

    return cellHeight - 1;
  }
  
  var btnTrigger = function(btn, obj, optRows){
    var btn = btn;
    var obj = obj;
    var sct = $(window).scrollTop();

    if(!btn.hasClass('active')){
      btn.addClass('active');
      obj.animate({'height':obj.find('table').height()-2});
      $('html,body').animate({'scrollTop': sct},'',function(){
        obj.css('height','');
      });
    }else{
      btn.removeClass('active');
      var cellHeight = obj.find('tr > *').eq(0).outerHeight();
      obj.animate({'height':getHeight(obj, optRows)});
    }

    //btn text
    if(btn.hasClass('active')){
      btn.find('strong').html('접어두기')
    }else{
      btn.find('strong').html('전체보기')
    }
  }

  var tableHeight = function(obj){
    var obj = obj;
    var optRows = obj.data('rows') ? obj.data('rows') : 3;

    obj.wrap('<div class="js__tableFold-wrap"></div>');
    var btn = $('<button class="js__tableFold-btn"><span></span><strong>전체보기</strong></button>');
    obj.after(btn);

    btn.on('click',function(){
      btnTrigger($(this),obj,optRows);
    });

    obj.css('height',getHeight(obj, optRows));

    
  }

  var init = function(){
    if(table.length < 1) return false;
    table.each(function(){
      tableHeight($(this));
    });
  }

  bindTableFoldAc = function(){
    init();
  }
});


jQuery(window).load(function($) {
  bindTableFoldAc();
});