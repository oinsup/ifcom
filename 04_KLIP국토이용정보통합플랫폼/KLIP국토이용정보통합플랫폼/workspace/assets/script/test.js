jQuery(function($){
  var tables = $('table');

  var tablecolCheck = function(){
    tables.each(function(){
      var table = $(this);
      // console.log(table.find('colgroup col'));
      table.find('colgroup col').each(function(){
        var col = $(this);
        var colIdx = col.index();
        var txt = '';

        if(col.attr('class')){
          txt += '<span style="position:absolute;font-size:11px;margin-top:-13px;color:red;font-weight:bold;">';
          txt += col.attr('class').replace('width','');
          txt += '</span>';
        }

        if(table.find('thead').length > 0){
          table.find('thead tr > *').eq(colIdx).prepend(txt);
        }else{
          table.find('tbody tr > *').eq(colIdx).prepend(txt);
        }
        
      });
    });
  }

  tableThOutput = function(){
    //thead width 사이즈 출력 class="width100" 이런식으로 적용된것 100만 출력함
    console.log('a');
    if(tables.length > 0) tablecolCheck();
  }

  // init();
});