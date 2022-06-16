

/** Call Custom Alert
 * @param	 type {String} : alert 타입 (success , fail, error)
 * 				 			(default : success)
 * @param 	 message {String} : 메시지 
 * @returns  fnCallback {Function} / void
 * @example  callAlert('fail', '이미 처리된 요청입니다.');
 * @example  callALert('success', '등록을 완료하였습니다.', function(){
 * 
 * 				location.reload();
 * 			 })
 */
function callAlert(type, message, fnCallback) {
	let _type = (type == ('fail' || 'error') ? 'alertNoresult' : 'alertCheck');
	var popupHTML = 
		  '<div id="alertPop">'
		+     '<div id="alertDimmed"></div>'
		+     '<div id="alertPopBox" class="popupBox ' + _type + '" style="width:322px; left:calc(50% - 161px); top:381px;">'
		+         '<div class="popupMain pos-r alertPopup">'
		+             '<div class="alertArea">'
		+                 '<strong class="hidden">' + stringFilter(message) + '</strong>'
		+                 '<p style="padding-left:15px; padding-right:15px;">' + stringFilter(message) + '</p>'
		+             '</div>'
		+             '<div class="btnArea">'
		+                 '<button type="button" class="blueType" style="width:100%">확인</button>'
		+             '</div>'
		+         '</div>'
		+     '</div>'
		+ '</div>';
		
	$('#wrap').append(popupHTML);
	
	$('#alertPop .popupBox .popupMain .btnArea .blueType').focus();
	$('#alertPop .popupBox .popupMain .btnArea .blueType').on('click', function(){
		$('#alertPop').remove();
		
		if(typeof fnCallback === 'function') {
			fnCallback();
		}
	});
	
	$('#alertPopBox').css('z-index', '121');
	
	$('#alertDimmed').css('position', 'fixed');
	$('#alertDimmed').css('z-index', '120');
	$('#alertDimmed').css('left','0');
	$('#alertDimmed').css('top','0');
	$('#alertDimmed').css('width','100%');
	$('#alertDimmed').css('height','100%');
	$('#alertDimmed').css('background','rgba(0, 0, 0, 0.75)');
	
	$('#alertDimmed').on('click', function(){
		$('#alertPop').remove();
		
		if(typeof fnCallback === 'function') {
			fnCallback();
		}
	})
}

/** Call Custom Confirm
 * @param 		  type {String}   : 타입 (insert, update, delete)
 * @param 	   message {String}	  : 메시지
 * @param 	fnCallback {Function} : 콜백 함수
 * @returns	callback
 * @example callConfirm('insert', '등록하시겠습니까?', function(){
 * 				~~~
 * 			})
 */
function callConfirm(type, title, message, fnCallback){
	let _type = (type == 'insert' ? 'alertCheck' : type == 'update' ? 'alertModify' : type == 'delete' ? 'alertDelete' : '');
	if(_type == '') {
		console.error('type error');
		return;
	}
	let hasTitle = (title != '');
	var popupHTML = 
		  '<div id="confirmPop">'
		+     '<div id="confirmDimmed"></div>'
		+     '<div id="confirmPopBox" class="popupBox ' + _type + '" style="width:322px; left:calc(50% - 161px); top:381px;">'
		+         '<div class="popupMain pos-r alertPopup">'
		+             '<div class="alertArea">';
	if(hasTitle) {
		popupHTML +=      '<strong>' + stringFilter(title) + '</strong>'
	} else {
		popupHTML +=      '<strong class="hidden">' + stringFilter(title) + '</strong>'
	}
	popupHTML +=		  '<p style="padding-left:15px; padding-right:15px;">' + stringFilter(message) + '</p>'
		+             '</div>'
		+             '<div class="btnArea">'
		+                 '<button type="button" class="lightGrayType">취소</button>'
		+                 '<button type="button" class="blueType">확인</button>'
		+             '</div>'
		+         '</div>'
		+     '</div>'
		+ '</div>';
	
	$('#wrap').append(popupHTML);
	
	$('#confirmPop .popupBox .popupMain .btnArea .blueType').focus();
	$('#confirmPop .popupBox .popupMain .btnArea .blueType').on('click', function(){
		$('#confirmPop').remove();
		fnCallback();
	});
	
	$('#confirmPop .popupBox .popupMain .btnArea .lightGrayType').on('click', function(){
		$('#confirmPop').remove();
	});
	
	$('#confirmPopBox').css('z-index', '111');
	
	$('#confirmDimmed').css('position', 'fixed');
	$('#confirmDimmed').css('z-index', '110');
	$('#confirmDimmed').css('left','0');
	$('#confirmDimmed').css('top','0');
	$('#confirmDimmed').css('width','100%');
	$('#confirmDimmed').css('height','100%');
	$('#confirmDimmed').css('background','rgba(0, 0, 0, 0.75)');
	
	$('#confirmDimmed').on('click', function(){
		$('#confirmPop').remove();
	})
}

function stringFilter(str){
	let resultStr = '';
	
	if(str==null){
		return null;
	}
	
	for (let i = 0; i < str.length; i++) {
		let c = str.charAt(i);
		switch (c) {
		case '<':
			resultStr += "&lt;"
			break;
		case '>':
			resultStr += "&gt;"
			break;
		case '&':
			resultStr += "&amp;"
			break;
		case '"':
			resultStr += "&quot;"
			break;
		case '\'':
			resultStr += "&apos;"
			break;	
		default:
			resultStr += c
			break;
		}
	}
	
	return resultStr;
}

