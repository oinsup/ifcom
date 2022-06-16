$(document).ready(function(){

    $(window).on('load', function(){
        //jqgrid cell 마우스 호버시 타이틀 삭제
        $('td, th').attr("title","");

    })
    
    //권한관리 페이지 01
    $(function () {
        var pageWidth = $("#list01").parent().width() - 72;
        $("#list01").jqGrid({
            beforeSelectRow: function (rowid, e) {
                var $myGrid = $(this),
                    i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                    cm = $myGrid.jqGrid('getGridParam', 'colModel');
                return (cm[i].name === 'cb');
            },
            datatype: "local",
            height: "auto",
            colNames:['권한 ID','권한명', '설명', '등록일','롤 정보'],
            colModel:[
                {name:'id01',index:'id01', width:(pageWidth*(30/100))},
                {name:'name01',index:'name01', width:(pageWidth*(20/100))}, 
                {name:'explan01',index:'explan01', width:(pageWidth*(10/100))},
                {name:'addDate01',index:'addDate01', width:(pageWidth*(10/100))},
                {name:'info01',index:'info01', width:(pageWidth*(30/100))},		
            ],
            hoverrows: false,
            multiselect: true,
            multiselectWidth: 70,
            caption: "권한관리"
        });
        var mydata01 = [
                {id01:"<a href='#' class='cRed'>ROLE_USER</a>",name01:"사용자1",explan01:"일반 사용자 권한을 지정하는 권한",addDate01:"18/07/01",info01:"<div class='btnArea center'><button class='btn h34'>롤 매핑</button></div>"},
                {id01:"<a href='#' class='cRed'>ROLE_ANONYMOUS</a>",name01:"모든 사용자",explan01:"모든 사용자 권한 사용자를 설정하는 권한",addDate01:"18/07/01",info01:"<div class='btnArea center'><button class='btn h34'>롤 매핑</button></div>"},
                {id01:"<a href='#' class='cRed'>ROLE_ADMIN</a>",name01:"관리자",explan01:"모든 관리자 권한을 갖는 최상위 관리자 권한",addDate01:"18/07/01",info01:"<div class='btnArea center'><button class='btn h34'>롤 매핑</button></div>"}
                ];
        for(var i=0;i<=mydata01.length;i++)
            $("#list01").jqGrid('addRowData',i+1,mydata01[i]);
        
    });//func
        
    //권한관리 등록 페이지 02
    $(function () {
        $("#list02").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'name02',index:'name02', width: "auto"},
                {name:'value02',index:'value02', width: "auto"},
            ],
            hoverrows: false,
            caption: "권한관리등록 "
        });
        var mydata02 = [
                {name02:"<label for='i01'>권한코드<span class='essential'></span></label>",value02:"<div class='textArea'><input type='text' id='i01' value='ROLE_' style='width: 100%'></div>"},
                {name02:"<label for='i02'>권한명<span class='essential'></span></label>",value02:"<div class='textArea'><input type='text' id='i02' style='width: 100%'></div> "},
                {name02:"<label for='i03'>설명</label>",value02:"<div class='textArea'><input type='text' id='i03' style='width: 100%'></div> "},
                {name02:"<label for='i04'>등록일자</label>",value02:"<div class='textArea'><input type='text' id='i04' class='disabled' value='자동입력' disabled style='width: 100%'></div> "},
                ];
        for(var i=0;i<=mydata02.length;i++)
            $("#list02").jqGrid('addRowData',i+1,mydata02[i]);
    });//func

    //기관정보관리 페이지 03
    $(function () {
        $("#list03").jqGrid({
            beforeSelectRow: function (rowid, e) {
                var $myGrid = $(this),
                    i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                    cm = $myGrid.jqGrid('getGridParam', 'colModel');
                return (cm[i].name === 'cb');
            },
            datatype: "local",
            height: "auto",
            colNames:['번호','기관 ID', '기관명', '연계 수신일','롤 등록일','사용여부'],
            colModel:[
                {name:'num03',index:'num03', width: 70},
                {name:'id03',index:'id03',width: "auto"}, 
                {name:'name03',index:'name03', width: "auto"},
                {name:'date03',index:'date03', width: "auto"},
                {name:'addDate03',index:'addDate03', width: "auto"},		
                {name:'use03',index:'use03',width: "auto"},		
            ],
            hoverrows: false,
            multiselect: true,
            multiselectWidth: 70,
            caption: "기관정보관리"
        });
        var mydata03 = [
                {num03:"4",id03:"abc7fc",name03:"한국국토정보공사 본사",date03:"2021-07-07",addDate03:"2021-07-06",use03:"Y"},
                {num03:"3",id03:"abc7fc",name03:"한국국토정보공사 수원지사",date03:"2021-07-07",addDate03:"2021-07-06",use03:"Y"},
                {num03:"2",id03:"abc7fc",name03:"한국국토정보공사 강동송파지사",date03:"2021-07-07",addDate03:"2021-07-06",use03:"Y"},
                {num03:"1",id03:"abc7fc",name03:"한국국토정보공사 가평지사",date03:"2021-07-07",addDate03:"2021-07-06",use03:"Y"}
                ];
        for(var i=0;i<=mydata03.length;i++)
            $("#list03").jqGrid('addRowData',i+1,mydata03[i]);
    });//func

    //사용자관리 페이지 04
    $(function () {
        $("#list04").jqGrid({
            beforeSelectRow: function (rowid, e) {
                var $myGrid = $(this),
                    i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                    cm = $myGrid.jqGrid('getGridParam', 'colModel');
                return (cm[i].name === 'cb');
            },
            
            datatype: "local",
            height: "auto",
            colNames:['사용자ID','사용자이름', '이메일주소', '전화번호','등록일','회원가입 상태'],
            colModel:[
                {name:'id04',index:'id04', width: "auto"},
                {name:'name04',index:'name04', width: "auto"}, 
                {name:'email04',index:'email04', width: "auto"},
                {name:'tel04',index:'tel04', width: "auto"},
                {name:'addDate04',index:'addDate04', width: "auto"},		
                {name:'member04',index:'member04', width: "auto"},
            ],
            hoverrows: false,
            multiselect: true,
            multiselectWidth: 70,
            caption: "사용자관리"
        });
        var mydata04 = [
                {id04:"<a href='#' class='cRed'>multiuser1</ㅁ>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정2",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정3",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정4",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"},
                {id04:"<a href='#' class='cRed'>multiuser1</a>",name04:"관리사용다중계정1",email04:"multiuser1@wavus.co.kr",tel04:"1566-2059",addDate04:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",member04:"<p>회원가입<span class='verticalBar'>|</span><span class='cSky'>승인상태</span></p>"}
                
                ];
        for(var i=0;i<=mydata04.length;i++)
            $("#list04").jqGrid('addRowData',i+1,mydata04[i]);
    });//func

    //사용자관리 등록 페이지 05
    $(function () {
        $("#list05").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'name05',index:'name05', width: "auto"},
                {name:'value05',index:'value05', width: "auto"},
            ],
            hoverrows: false,
            caption: "사용자등록"
        });
        var mydata05 = [
                {name05:"<label for='i01'>사용자 ID<span class='essential'></span></label>",value05:"<div class='textArea'><input type='text' id='i01' class='gray wd300'><div class='btnArea'><button type='button' class='btn type03 gray'>중복확인</button></div></div>"},
                {name05:"<label for='i02'>사용자이름<span class='essential'></span></label>",value05:"<div class='textArea'><input type='text' id='i02' class='gray wd300'></div>"},    
                {name05:"<label for='p01'>비밀번호<span class='essential'></span></label>",value05:"<div class='textArea'><input type='password' id='p01' class='gray wd300'><p class='okPw blue'>사용가능한 비밀번호입니다.</p><p class='nonPw red'>사용 할 수 없는 비밀번호입니다.</p></div>"},    
                {name05:"<label for='p02'>비밀번호확인<span class='essential'></span></label>",value05:"<div class='textArea'><input type='password' id='p02' class='gray wd300'><p class='nonPw red'>비밀번호가 일치하지 않습니다.</p></div>"},    
                {name05:"<label for='s01'>전화번호</label>",value05:"<div class='textArea'><div class='select'><select name='' id='s01'><option value=''>02</option><option value=''>031</option></select></div><input type='text' id='' class='gray wd120'><input type='text' id='' class='gray wd120'></div>"},
                {name05:"<label for='i03'>이메일주소<span class='essential'></span></label>",value05:"<div class='textArea'><input type='text' id='i03' class='gray wd180'><div class='select wd180'><select name='' id=''><option value=''>직접 입력</option></select></div></div>"},
                {name05:"<label for='s02'>그룹아이디<span class='essential'></span></label>",value05:"<div class='textArea'><div class='select wd230'><select name='' id='s02'><option value=''>선택하세요</option></select></div></div>"},
                {name05:"<label for='s03'>회원가입상태<span class='essential'></span></label>",value05:"<div class='textArea'><div class='select wd230'><select name='' id='s03'><option value=''>선택하세요</option></select></div></div>"},
                {name05:"<label for='i04'>사용자 DN</label>",value05:"<div class='textArea'><input type='text' id='i04' class='gray' style='width: 100%;'></div>"},    
                {name05:"<label>권한설정</label>",value05:"<div class='textContainer sb' style='width: 68%;'><div class='textArea'><div class='viewBox'><ul style='height:160px'><li><span>사용자1</span></li><li><span>사용자2</span></li><li><span>관리자</span></li><li><span>관리자</span></li><li><span>관리자</span></li><li><span>관리자</span></li><li><span>관리자</span></li><li><span>관리자</span></li><li><span>관리자</span></li></ul></div></div><div class='textArea'><div class='btnArea type03'><button type='button' class='btn next'></button><button type='button' class='btn prev'></button></div></div><div class='textArea'><div class='viewBox'><ul style='height:160px'><li><span>관리자</span></li></ul></div></div></div>"},    ];
        for(var i=0;i<=mydata05.length;i++)
            $("#list05").jqGrid('addRowData',i+1,mydata05[i]);
    });//func

    //프로그램 관리 페이지 06
    $(function () {
        $("#list06").jqGrid({
            beforeSelectRow: function (rowid, e) {
                var $myGrid = $(this),
                    i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                    cm = $myGrid.jqGrid('getGridParam', 'colModel');
                return (cm[i].name === 'cb');
            },
            datatype: "local",
            height: "auto",
            colNames:['프로그램 파일명','프로그램명', '프로그램 URL', '프로그램 설명'],
            colModel:[
                {name:'file06',index:'file06', width: "auto"},
                {name:'name06',index:'name06', width: "auto"},
                {name:'url06',index:'url06', width: "auto"},
                {name:'explan06',index:'explan06', width: "auto"},
            ],
            hoverrows: false,
            multiselect: true,
            multiselectWidth: 70,
            caption: "사용자관리"
        });
        var mydata06 = [
                {file06:"<div class='txtEp sm'>dir</div>",name06:"디렉토리",url06:"<div class='txtEp lg'>/</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSUserManageAuth</div>",name06:"권한관리",url06:"<div class='txtEp lg'>/sec/ram/selectAuthorManageListPageasdasdfasfdfasdfsdfpagepagepagepagepagepagepagepagep</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'w>SYSUserManageRole</div>",name06:"롤관리",url06:"<div class='txtEp lg'>/sec/rmt/selectRoleManageListPageVwPageVwPageVwPageVwPageVwPageVwP</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSUserManageUser</div>",name06:"사용자관리",url06:"<div class='txtEp lg'>/uss/umt/selectUserManageListPageVWPageVWPageVWPageVWPageVWPageVw</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSUserManageLoginPoliSYSUserManageLoginPolilllllllllll</div>",name06:"로그인정책관리",url06:"<div class='txtEp lg'>/uat/uap/selectLoginPolicyListPageVPageVPageVPageVPageVPageVPageVPageV</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSUserManageProgram</div>",name06:"프로그램관리",url06:"<div class='txtEp lg'>/sym/prm/selectProgramManageListPagePagePagePagePagePagePagePagePag</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSMenuManageMenuTree</div>",name06:"메뉴관리(tree)",url06:"<div class='txtEp lg'>/sym/mnu/mpm/selectMenuListVw.do</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSMenuManageMenuList</div>",name06:"메뉴관리(list)",url06:"<div class='txtEp lg'>/sym/mnu/mpm/selectMenuManageListPagePagePagePagePagePagePagePage</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSMenuManageMenuCreatSYSMenuManageMenuuuuuuuuuuuuuuuuu</div>",name06:"메뉴생성관리",url06:"<div class='txtEp lg'>/sym/mnu/mpm/selectMenuCreateManageManageManageManageManageMan</div>",explan06:"프로그램 설명"},
                {file06:"<div class='txtEp sm'>SYSCodeManageCICode</div>",name06:"공통분류코드관리",url06:"<div class='txtEp lg'>/sym/ccm/ccc/selectCmmnCICodeManageManageManageManageManageMan</div>",explan06:"프로그램 설명"}
                ];
        for(var i=0;i<=mydata06.length;i++)
            $("#list06").jqGrid('addRowData',i+1,mydata06[i]);
    });//func

    //프로그램 등록 07
    $(function () {
        $("#list07").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'name07',index:'name07', width: "auto"},
                {name:'value07',index:'value07', width: "auto"},
            ],
            hoverrows: false,
            caption: "프로그램 등록 "
        });
        var mydata07 = [
                {name07:"<label for='i01'>프로그램파일명<span class='essential'></span></label>",value07:"<div class='textArea'><input type='text' id='i01'style='width: 100%'></div>"},
                {name07:"<label for='i02'>저장폴더<span class='essential'></span></label>",value07:"<div class='textArea'><input type='text' id='i02'style='width: 100%'></div> "},
                {name07:"<label for='i03'>프로그램명<span class='essential'></span></label>",value07:"<div class='textArea'><input type='text' id='i03' style='width: 100%'></div> "},
                {name07:"<label for='i04'>프로그램 URL<span class='essential'></span></label>",value07:"<div class='textArea'><input type='text' id='i04' style='width: 100%'></div> "},
                {name07:"<label for='t01'>프로그램 설명</label>",value07:"<div class='textContainer'><textarea id='t01' style='width: 100%; height: 234px;' placeholder='농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.'></textarea></div>"},
                ];
        for(var i=0;i<=mydata07.length;i++)
            $("#list07").jqGrid('addRowData',i+1,mydata07[i]);
    });//func

    //메뉴생성관리 08
    $(function () {
        $("#list08").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['권한코드','권한명', '권한 설명', '메뉴생성여부','메뉴생성'],
            colModel:[
                {name:'code08',index:'code08', width: "auto"},
                {name:'name08',index:'name08', width: "auto"}, 
                {name:'explan08',index:'explan08', width: "auto"},
                {name:'menu08',index:'menu08', width: "auto"},
                {name:'add08',index:'add08', width: "auto"},		
            ],
            hoverrows: false,
            caption: "메뉴생성관리"
        });
        var mydata08 = [ 
                {code08:"ROLE_ANONYMOUS",name08:"모든 사용자",explan08:"모든 사용자 권한 사용자를 설정하는 권한",menu08:"N",add08:"<div class='btnArea center'><button class='btn h34'>메뉴 생성</button></div>"},
                {code08:"IS_AUTHENTICATED_ANONUMOUSLY",name08:"<p>스프링시큐리티 내부사용</p><p>(롤부여 금지)</p>",explan08:"",menu08:"N",add08:"<div class='btnArea center'><button class='btn h34'>메뉴 생성</button></div>"},
                {code08:"IS_AUTHENTICATED_REMEMBERED",name08:"<p>스프링시큐리티 내부사용</p><p>(롤부여 금지)</p>",explan08:"",menu08:"N",add08:"<div class='btnArea center'><button class='btn h34'>메뉴 생성</button></div>"},
                {code08:"IS_AUTHENTICATED_FULLY",name08:"<p>스프링시큐리티 내부사용</p><p>(롤부여 금지)</p>",explan08:"",menu08:"N",add08:"<div class='btnArea center'><button class='btn h34'>메뉴 생성</button></div>"},
                {code08:"ROLE_USER",name08:"사용자1",explan08:"일반 사용자 권한을 지정하는 권한",menu08:"N",add08:"<div class='btnArea center'><button class='btn h34'>메뉴 생성</button></div>"},
                {code08:"ROLE_ADMIN",name08:"관리자",explan08:"모든 관리자 권한을 갖는 최상위 관리자 권한",menu08:"Y",add08:"<div class='btnArea center'><button class='btn h34'>메뉴 생성</button></div>"},
                
            ];
        for(var i=0;i<=mydata08.length;i++)
            $("#list08").jqGrid('addRowData',i+1,mydata08[i]);
    });//func

    //메뉴관리(tree) 09
    $(function () {
        $("#list09").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'name09',index:'name09', width: "auto"},
                {name:'value09',index:'value09', width: "auto"},
            ],
            hoverrows: false,
            caption: "메뉴관리(tree)"
        });
        var mydata09 = [
                {name09:"<label for='i01'>메뉴No<span class='essential'></span></label>",value09:"<div class='textArea'><input type='text' id='i01' style='width: 100%;'></div>"},
                {name09:"<label for='i02'>메뉴순서<span class='essential'></span></label>",value09:"<div class='textArea'><input type='text' id='i02' style='width: 100%;'></div>"},
                {name09:"<label for='i03'>메뉴명<span class='essential'></span></label>",value09:"<div class='textArea'><input type='text' id='i03' style='width: 100%;'></div>"},
                {name09:"<label for='i04'>상위메뉴No<span class='essential'></span></label>",value09:"<div class='textArea'><input type='text' id='i04' style='width: 100%;'><div class='btnArea'><button type='button' class='btn grayWide'>메뉴검색</button></div></div>"},
                {name09:"<label for='i05'>파일명<span class='essential'></span></label>",value09:"<div class='textArea'><input type='text' id='i05' style='width: 100%;'><div class='btnArea'><button type='button' class='btn grayWide'>파일명검색</button></div></div>"},
                {name09:"<label for='i06'>이미지명</label>",value09:"<div class='textArea'><input type='text' id='i06' style='width: 100%;'></div>"},
                {name09:"<label for='i07'>이미지URL</label>",value09:"<div class='textArea'><input type='text' id='i07' style='width: 100%;'></div>"},
                {name09:"<label for='i08'>메뉴설명</label>",value09:"<div class='textArea'><input type='text' id='i08' style='width: 100%;'></div>"},
                // {name09:"<label for='t01'>메뉴설명</label>",value09:"<div class='textContainer'><textarea id='t01' style='width: 100%; height: 202px;' placeholder='농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은 차기국회의 승인을 얻어야 한다.'></textarea></div>"},
                ];
        for(var i=0;i<=mydata09.length;i++)
            $("#list09").jqGrid('addRowData',i+1,mydata09[i]);
    });//func

    //공통코드관리 10
    $(function () {
        $("#list10").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['순번','분류코드 명', '공통코드 ID', '공통코드명','사용여부'],
            colModel:[
                {name:'num10',index:'num10', width: 70},
                {name:'name10',index:'name10', width: "auto"}, 
                {name:'id10',index:'id10', width: "auto"},
                {name:'code10',index:'code10', width: "auto"},
                {name:'use10',index:'use10', width: "auto"},		
            ],
            hoverrows: false,
            caption: "공통코드관리"
        });
        var mydata10 = [ 
                {num10:"1",name10:"전자정부 프레임워크 공통서비스",id10:"COM033",code10:"시스템로그구분",use10:"사용"},
                {num10:"2",name10:"전자정부 프레임워크 공통서비스",id10:"COM033",code10:"롤유형코드",use10:"사용"},
                {num10:"3",name10:"전자정부 프레임워크 공통서비스",id10:"COM033",code10:"비밀번호 힌트",use10:"사용"},
                {num10:"4",name10:"전자정부 프레임워크 공통서비스",id10:"COM033",code10:"성별구분",use10:"사용"},
                {num10:"5",name10:"전자정부 프레임워크 공통서비스",id10:"COM033",code10:"회원상태",use10:"사용"},
            ];
        for(var i=0;i<=mydata10.length;i++)
            $("#list10").jqGrid('addRowData',i+1,mydata10[i]);
    });//func

    //공통코드관리 등록 11
    $(function () {
        $("#list11").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'name11',index:'name11', width: "auto"},
                {name:'value11',index:'value11', width: "auto"},
            ],
            hoverrows: false,
            caption: "공통코드관리 등록"
        });
        var mydata11 = [
                {name11:"<label for='s01'>분류코드 명<span class='essential'></span></label>",value11:"<div class='textArea'><div class='select'><select name='' id='s01' class='type02'><option value=''>전자정부 프레임 워크 공통 서비스</option><option value=''>031</option></select></div></div>"},
                {name11:"<label for='i01'>공통코드 ID<span class='essential'></span></label>",value11:"<div class='textArea'><input type='text' id='i01' style='width: 100%;'></div>"},
                {name11:"<label for='i02'>공통코드명<span class='essential'></span></label>",value11:"<div class='textArea'><input type='text' id='i02' style='width: 100%;'></div>"},
                {name11:"<label for='t01'>공통코드 설명<span class='essential'></span></label>",value11:"<textarea id='t01' style='width: 100%; height: 102px;'></textarea>"},
                {name11:"<label for='i03'>사용여부<span class='essential'></span></label>",value11:"<div class='textArea'><input type='text' id='i03' style='width: 100%;' placeholder='YES'></div>"},
                ];
        for(var i=0;i<=mydata11.length;i++)
            $("#list11").jqGrid('addRowData',i+1,mydata11[i]);
    });//func

    //접속로그관리 12
    $(function () {
        $("#list12").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['순번','로그 ID', '발생일자', '로그유형','로그인 ID','로그인 IP','상세보기'],
            colModel:[
                {name:'num12',index:'num12', width: 70},
                {name:'id12',index:'id12', width: "auto"}, 
                {name:'date12',index:'date12',width: "auto"},
                {name:'log12',index:'log12', width: "auto"},
                {name:'logid12',index:'logid12', width: "auto"},
                {name:'logip12',index:'logip12', width: "auto"},		
                {name:'view12',index:'view12', width: "auto"},		
            ],
            hoverrows: false,
            caption: "접속로그관리"
        });
        var mydata12 = [ 
                {num12:"1",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"2",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"3",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"O",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"4",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"5",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"O",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"6",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"7",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"8",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"9",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"},
                {num12:"10",id12:"LOGIN_000000000000102",date12:"<p>2021-07-28<span class='slash'>/</span>16:39:21.085223</p>",log12:"I",logid12:"관리자계정1",logip12:"192.168.1.46",view12:"<div class='btnArea center'><button class='btn h34'>상세보기</button></div>"}
            ];
        for(var i=0;i<=mydata12.length;i++)
            $("#list12").jqGrid('addRowData',i+1,mydata12[i]);
    });//func

    // ----------------------- 서브페이지 ----------------------

    //공지사항 목록조회 13
    $(function () {
        $("#list13").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['번호', '제목', '등록일', '조회수'],
            colModel:[
                {name:'num13',index:'num13', width: "auto", align: 'center'},
                {name:'title13',index:'title13', align: 'left', width: "auto"}, 
                {name:'date13',index:'date13' ,width: "auto"},
                {name:'search13',index:'search13' ,width: "auto"}
	
            ],
            hoverrows: false,
            caption: "공지사항 목록조회"
        });
        var mydata13 = [ 
                {num13:"1",title13:"<a href='#'>공지사항 테스트 4<span class='clip'></span></a>",date13:"2021.01.04",search13:"0"},
                {num13:"2",title13:"<a href='#'>공지사항 테스트 3<span class='clip'></span></a>",date13:"2021.01.04",search13:"2"},
                {num13:"3",title13:"<a href='#'>공지사항 테스트 2<span class='clip'></span></a>",date13:"2021.01.04",search13:"1"},
                {num13:"4",title13:"<a href='#'>공지사항 테스트 1<span class='clip'></span></a>",date13:"2021.01.04",search13:"0"},
                {num13:"5",title13:"<a href='#'>LOGIN_000000000000102<span class='clip'></span></a>",date13:"2021.01.04",search13:"10"}
            ];
        for(var i=0;i<=mydata13.length;i++)
            $("#list13").jqGrid('addRowData',i+1,mydata13[i]);
    });//func

    //공지사항 등록 페이지 14
    $(function () {
        $("#list14").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'col14',index:'col14', width: "auto"},
                {name:'value14',index:'value14', width: "auto"},
            ],
            hoverrows: false,
            caption: "공지사항 등록"
        });
        var mydata14 = [
                {col14:"<label for='s01'>공지팝업</label>",value14:"<div class='textArea'><div class='select'><select name='' id='s01' style='width:230px;'><option value=''>선택</option><option value=''></option></select></div>"},
                {col14:"<label for=''>공지팝업일정</label>",value14:"<div class='calGroup'><input type='text' class='cal grayType' id=''><span class='hyphen'>~</span><input type='text' class='cal grayType' id=''></div>"},
                {col14:"<label for='i01'>제목</label>",value14:"<div class='textArea'><input type='text' id='i01'class='gray' style='width: 100%;' placeholder='제목을 입력하세요'></div>"},
                {col14:"<label for='t01'>내용</label>",value14:"<textarea id='t01' style='width: 100%; height: 333px;' placeholder='내용을 입력하세요'></textarea>"},
                {col14:"첨부파일",value14:"<div class='fileArea'><input type='file' id='fileSelect01'><p class='fileName'>선택된 파일 없음</p><label for='fileSelect01'>파일선택</label></div><div class='filelistArea'><ul><li><p><span class='clip'></span>(20150611)보도자료(국가공간정보체계구축및운용실태).hwp</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>제목없음.jpg</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>test.jpg</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>서비스 주요내용.hwp</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>서비스 주요내용.hwp</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li></ul></div><p class='cautionText'>※파일 첨부시 팝업차단 기능이 해제 되어야 합니다. 파일은 최대 5개의 파일이 업로드 가능합니다. (파일 한개당 최대 사용량 2MB)</p>"},
            ];
        for(var i=0;i<=mydata14.length;i++)
            $("#list14").jqGrid('addRowData',i+1,mydata14[i]);

        $(".fileArea input[type='file']").on('change',function(){
            $(this).siblings(".fileName").text($(this).val());
        });//change

        /*input 캘린더*/
        if ($('.cal').length) {
            $('.cal').datepicker({
                dateFormat: "yy-mm-dd",
                monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                dayNames: ['일요일' , '월요일' , '화요일' , '수요일' , '목요일' , '금요일' , '토요일'],
                showMonthAfterYear: true,
                changeYear:true,
                changeMonth:true,
                yearSuffix: "년",
                nextText:"다음달",
                prevText:"이전달"
            });
        }
    });//func

    //자료실 등록 페이지 15
    $(function () {
        $("#list15").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'col15',index:'col15', width: "auto"},
                {name:'value15',index:'value15', width: "auto"},
            ],
            hoverrows: false,
            caption: "faq 등록"
        });
        var mydata15 = [
                {col15:"<label for='i01'>제목</label>",value15:"<div class='textArea'><input type='text' id='i01'class='gray' style='width: 100%;' placeholder='제목을 입력하세요'></div>"},
                {col15:"<label for='t01'>내용</label>",value15:"<textarea id='t01' style='width: 100%; height: 483px;' placeholder='내용을 입력하세요'></textarea>"}
            ];
        for(var i=0;i<=mydata15.length;i++)
            $("#list15").jqGrid('addRowData',i+1,mydata15[i]);
    });//func

    //faq 목록조회 16
    $(function () {
        $("#list16").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['번호', '제목', '답변유형', '작성자', '부서', '등록일', '조회수'],
            colModel:[
                {name:'num16',index:'num16', width: "auto", align: 'center'},
                {name:'title16',index:'title16', align: 'left', width: "auto"}, 
                {name:'type16',index:'type16', width: "auto"}, 
                {name:'writer16',index:'writer16' ,width: "auto"},
                {name:'team16',index:'team16' ,width: "auto"},
                {name:'addDate16',index:'addDate16' ,width: "auto"},
                {name:'search16',index:'search16' ,width: "auto"},
	
            ],
            hoverrows: false,
            caption: "faq 목록조회"
        });
        var mydata16 = [ 
                {num16:"1",title16:"<a href='#'>공지사항 테스트 4<span class='clip'></span></a>",type16:"<p class='cNavy'>답변완료</p>",writer16:"웹마스터",team16:"토지정보과",addDate16:"2021-01-04",search16:"0"},
                {num16:"2",title16:"<a href='#'>공지사항 테스트 4<span class='clip'></span></a>",type16:"<p class='cRed'>답변대기</p>",writer16:"웹마스터",team16:"토지정보과",addDate16:"2021-01-04",search16:"2"},
                {num16:"3",title16:"<a href='#'>공지사항 테스트 4<span class='clip'></span></a>",type16:"<p class='cNavy'>답변완료</p>",writer16:"웹마스터",team16:"토지정보과",addDate16:"2021-01-04",search16:"1"},
                {num16:"4",title16:"<a href='#'>공지사항 테스트 4<span class='clip'></span></a>",type16:"<p class='cNavy'>답변완료</p>",writer16:"웹마스터",team16:"토지정보과",addDate16:"2021-01-04",search16:"0"},
                {num16:"5",title16:"<a href='#'>LOGIN_000000000000102<span class='clip'></span></a>",type16:"<p class='cNavy'>답변완료</p>",writer16:"웹마스터",team16:"토지정보과",addDate16:"2021-01-04",search16:"10"},
                
            ];
        for(var i=0;i<=mydata16.length;i++)
            $("#list16").jqGrid('addRowData',i+1,mydata16[i]);
    });//func

    //faq 등록 페이지 17
    $(function () {
        $("#list17").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'col17',index:'col17', width: "auto"},
                {name:'value17',index:'value17', width: "auto"},
            ],
            hoverrows: false,
            caption: "공지사항 등록"
        });
        var mydata17 = [
                {col17:"<label for='i01'>제목</label>",value17:"<div class='textArea'><input type='text' id='i01'class='gray' style='width: 100%;' placeholder='제목을 입력하세요'></div>"},
                {col17:"<label for='t01'>내용</label>",value17:"<textarea id='t01' style='width: 100%; height: 381px;' placeholder='내용을 입력하세요'></textarea>"},
                {col17:"첨부파일",value17:"<div class='fileArea'><input type='file' id='fileSelect01'><p class='fileName'>선택된 파일 없음</p><label for='fileSelect01'>파일선택</label></div><div class='filelistArea'><ul><li><p><span class='clip'></span>(20150611)보도자료(국가공간정보체계구축및운용실태).hwp</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>제목없음.jpg</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>test.jpg</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>서비스 주요내용.hwp</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li><li><p><span class='clip'></span>서비스 주요내용.hwp</p><div class='btnArea'><button type='button' class='btn delete'></button></div></li></ul></div><p class='cautionText'>※파일 첨부시 팝업차단 기능이 해제 되어야 합니다. 파일은 최대 5개의 파일이 업로드 가능합니다. (파일 한개당 최대 사용량 2MB)</p>"},
            ];
        for(var i=0;i<=mydata17.length;i++)
            $("#list17").jqGrid('addRowData',i+1,mydata17[i]);

        $(".fileArea input[type='file']").on('change',function(){
            $(this).siblings(".fileName").text($(this).val());
        });//change
    });//func
    
    //지적측량민원사례집 페이지 18
    $(function () {
        $("#list18").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'col18',index:'col18', width: "auto"},
                {name:'value18',index:'value18', width: "auto"},
            ],
            hoverrows: false,
            caption: "faq 등록"
        });
        var mydata18 = [
                {col18:"<label for='i01'>제목</label>",value18:"<div class='textArea'><input type='text' id='i01'class='gray' style='width: 100%;' placeholder='제목을 입력하세요'></div>"},
                {col18:"<label for='t01'>내용</label>",value18:"<textarea id='t01' style='width: 100%; height: 483px;' placeholder='내용을 입력하세요'></textarea>"}
            ];
        for(var i=0;i<=mydata18.length;i++)
            $("#list18").jqGrid('addRowData',i+1,mydata18[i]);
    });//func

    //자료실목록-관련 법률 및 규정 페이지 19
    $(function () {
        $("#list19").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['번호', '제목', '등록일', '조회수'],
            colModel:[
                {name:'num19',index:'num19', width: "auto", align: 'center'},
                {name:'title19',index:'title19', align: 'left', width: "auto"}, 
                {name:'date19',index:'date19' ,width: "auto"},
                {name:'search19',index:'search19' ,width: "auto"}
	
            ],
            hoverrows: false,
            caption: "관련 법률 및 규정"
        });
        var mydata19 = [ 
                {num19:"4",title19:"<a href='#'>민원 사무 처리에 관한 법률 시행령</a>",date19:"2021.01.04",search19:"500"},
                {num19:"3",title19:"<a href='#'>민원사무 처리에 관한 법률 시행규칙</a>",date19:"2021.01.04",search19:"758"},
                {num19:"2",title19:"<a href='#'>민원사무 처리에 관한 법률</a>",date19:"2021.01.04",search19:"630"},
                {num19:"1",title19:"<a href='#'>지적측량 민원업무 처리 지침</a>",date19:"2021.01.04",search19:"1,153"},
            ];
        for(var i=0;i<=mydata19.length;i++)
            $("#list19").jqGrid('addRowData',i+1,mydata19[i]);
    });//func

    //자료실등록-관련법률 및 규정 페이지 20
    $(function () {
        $("#list20").jqGrid({
            datatype: "local",
            height: "auto",
            colNames:['',''],
            colModel:[
                {name:'col20',index:'col20', width: "auto"},
                {name:'value20',index:'value20', width: "auto"},
            ],
            hoverrows: false,
            caption: "faq 등록"
        });
        var mydata20 = [
                {col20:"<label for='i01'>제목</label>",value20:"<div class='textArea'><input type='text' id='i01'class='gray' style='width: 100%;' placeholder='제목을 입력하세요'></div>"},
                {col20:"<label for='t01'>내용</label>",value20:"<textarea id='t01' style='width: 100%; height: 483px;' placeholder='내용을 입력하세요'></textarea>"}
            ];
        for(var i=0;i<=mydata20.length;i++)
            $("#list20").jqGrid('addRowData',i+1,mydata20[i]);
    });//func
    

});//doc
