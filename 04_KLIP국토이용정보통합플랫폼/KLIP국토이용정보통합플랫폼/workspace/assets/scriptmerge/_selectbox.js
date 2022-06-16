//_selectbox
jQuery(function($){
  var selectinit = function(){
    
    $('.cs-select').each(function(){
      var height = $(this).find('> button').outerHeight();
      var len = $(this).find('ul > li').length;
      var top = height*len*-1-10;

      $(this).find('ul').css('top', top);
      $(this).find('ul').data('top', top);
    });
  }

  var createSelectBox = function(){
    var select = $('.js__cs-select');

    select.each(function(){
      var item = $(this);
      var title = item.find('option:selected').html();
      var selectHtml = '';
      var selected = item.find('option:selected').index();
      var exclass = item.data('class') ? item.data('class') : '';
      var id = item.attr('id');

      if(!title){
        title = select.fine('option').eq(0).html();
      }

      selectHtml += '<div class="cs-select ' + exclass + '" data-id="'+ id +'">';
      selectHtml += '<button type="button">' + title + '</button>';
      selectHtml += '<div>';
      selectHtml += '<ul>';

      item.find('option').each(function(idx){
        if(idx == selected){
          selectHtml += '<li class="active"><button>' + $(this).html() + '</button></li>';
        }else{
          selectHtml += '<li><button>' + $(this).html() + '</button></li>';
        }
      });

      selectHtml += '</ul>';
      selectHtml += '</div>';
      selectHtml += '</div>';

      item.after(selectHtml);

    });
  }

  var selectFold = function(){
    $('.cs-select').removeClass('active');
    $('.cs-select').each(function(){
      $(this).find('ul').css('top', $(this).find('ul').data('top'));
    });
  }

  var selectBox = function(){
    $('body').on('click',function(){
      selectFold();
    });

    $('.cs-select').on('click',function(e){
      e.preventDefault();
      e.stopPropagation();
    });

    $('.cs-select > button').on('click',function(){
      var parent = $(this).parent('div');
      
      

      if(!parent.hasClass('active')){
        selectFold();

        $(this).parent('div').addClass('active');
        parent.find('ul').css('top',0);
      }else{
        $(this).parent('div').removeClass('active');
        parent.find('ul').css('top',parent.find('ul').data('top'));
      }
    });
  }

  var selectBoxChange = function(){
    $('.cs-select li button').on('click',function(e){
      e.preventDefault();
      var item = $(this).closest('.cs-select');
      var idx = $(this).parent().index();
      var select = $('#'+item.data('id'));

      select.val(select.find('option').eq(idx).val());

      item.find('> button').html($(this).text());
      selectFold();
      $(this).parent().addClass('active');
      
      item.removeClass('active');
    
    });
  }

  var init = function(){
    //셀렉트박스 생성
    createSelectBox();

    selectinit();

    //이벤트생성
    selectBox(); //셀레트박스 눌렀을때
    selectBoxChange(); //셀러트박스 OPTION 누렀을때
  }

  init();
});