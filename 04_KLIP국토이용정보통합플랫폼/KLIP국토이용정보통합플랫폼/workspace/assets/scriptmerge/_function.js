jQuery(function($){
  

  //클립보드 복사
  urlCopy = function(text){
      $('body').append('<input type="text" id="clip_hidden_text" value="'+text+'" style="position:absolute;opacity:0;">');
      $('#clip_hidden_text').select();

      var successful = document.execCommand('copy');

      $('#clip_hidden_text').remove();

      if(!successful){
          return false;
      }else{
          return true;
      }
  }
});

function openPop(url,wname,width,height,event){
    event.preventDefault();
    var left = screen.availWidth/2 - width/2;
    if(height == 'auto'){
        var top = 30;
        height = screen.availHeight-130;
    }else{
        var top = screen.availHeight/2 - height/2;
    }
    var wopen = window.open(url,wname,'width='+width+', height='+height+',top='+top+',left='+left+',scrollbars,resizable=no');
}


function getBytes(str){
    var cnt = 0;
    for(var i =0; i<str.length;i++) {
        cnt += (str.charCodeAt(i) >128) ? 2 : 1;
    }
    return cnt;
}

function substrCut(str, lengthInBytes) {
    var resultStr = '';
    var startInChars = 0;
    var startInBytes = 0;

    for (bytePos = 0; bytePos < startInBytes; startInChars++) {
        ch = str.charCodeAt(startInChars);
        if(isNaN(ch)){
            break;
        }
        bytePos += (ch < 128) ? 1 : 2;
    }

    end = startInChars + lengthInBytes;

    for (n = startInChars; startInChars < end; n++) {
        ch = str.charCodeAt(n);
        if(str[n]==undefined) {
            break;	        	
        }
        end -= (ch < 128) ? 1 : 2;

        resultStr += str[n];
    }

    return resultStr;
}

function numberFormat(inputNumber) {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }