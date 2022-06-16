jQuery(function($){
  function ConvertSystemSourcetoHtml(str){
		str = str.replace(/</g,"&lt;");
		str = str.replace(/>/g,"&gt;");
		str = str.replace(/\"/g,"&quot;");
    str = str.replace(/\'/g,"&#39;");
    // str += '\n';

    return str;
  }

  function codeGenerator(str,tabsize){
    var lines = str.split("\n");
    var linesTotal = lines.length;
    var temp = '';
    // console.log(lines);
    for(var i = 0; i < lines.length ; i++){
      temp += ConvertSystemSourcetoHtml(lines[i]).substring(tabsize);

      if(i != 0) temp += '\n';
    }

    return temp;
  }
  
  $('.ui_codeChage').each(function(){
    var $t = $(this).attr('value')
    // console.log();
    var tabsize = $(this).data('tabsize') ? $(this).data('tabsize') : 8;
    // codeGenerator($t);

    if($(this).attr('id') == 'textCounterTest'){
      // console.log(codeGenerator($t,tabsize));
    }

		$(this).after('<pre><code class="html javascript hljs">'+codeGenerator($t,tabsize)+'</code></pre>');
		$(this).remove();
  });
  
  var classCopy = function(){
    $('.class').click(function(){
      console.log('ㅋㅋㅋㅋ 편의성 향상');
    });
  }

  var tabSection = function(){
    //init
    var tabSectionContainer = $('.build-tabsection');

    tabSectionContainer.each(function(){
      $(this).find('.js__tab button').eq(0).addClass('active');
      $(this).find('.tab-section').eq(0).show();
    });
    

  
    $('.build-tabsection').find('.js__tab button').click(function(e){
      e.preventDefault();

      var tabBox = $(this).closest('.build-tabsection');
      var idx = $(this).data('section') - 1;

      tabBox.find('.js__tab button').removeClass('active');
      $(this).addClass('active');

      tabBox.find('.tab-section').hide();
      tabBox.find('.tab-section').eq(idx).show();
    });
  }

  var init = function(){
    //클레스명 눌렀을경우 해당 클래스 이름 복사
    classCopy();
    tabSection();
  }

  init();
});