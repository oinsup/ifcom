jQuery(function($){
  function gnbcheck(){
    if(typeof(gnbcate) === 'undefined') return false;
    var gnb = $('.lay-gnb');
    gnb.find('> ul > li').eq(gnbcate[0]-1).addClass('active');

    if(gnb.find('> ul > li').eq(gnbcate[0]-1).find('> ul').length > 0){
      gnb.find('> ul > li').eq(gnbcate[0]-1).find('> ul > li').eq(gnbcate[1]-1).addClass('active');
    }
  }

  function init(){
    gnbcheck();
  }

  init();
});