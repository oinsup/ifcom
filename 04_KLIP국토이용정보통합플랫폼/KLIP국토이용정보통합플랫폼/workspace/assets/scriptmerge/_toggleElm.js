//토글인데 토글이 안됨. ㅋㅋㅋㅋㅋ
//ver2.0을 마들때인듯함..
toggleElm = function(group,gidx,ac){
  var group = document.querySelectorAll('[data-group='+ group +']'),
      gidx = gidx ? gidx : 'all',
      ac = ac;

  group.forEach(function(obj,idx){
    data = obj.dataset;

    if(gidx == 'all'){
      obj.style.display = ac;
    }else if(data.idx == gidx){
      obj.style.display = ac;
    }
  });
}