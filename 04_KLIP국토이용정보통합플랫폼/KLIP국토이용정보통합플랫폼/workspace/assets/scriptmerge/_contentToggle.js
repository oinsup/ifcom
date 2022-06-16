function isClass(obj, className){
  var classList = obj.className.split(' ');
  var className = className;

  if(classList.indexOf(className) == -1){
    return false
  }else{
    return true;
  }
}

function contentToggle(obj,target, ani){
  var obj = obj,
      target = document.querySelector('[data-toggle='+ target +']');
  
  if(!isClass(obj,'active')){
    obj.classList.add('active');
    target.classList.add('active');

    if(ani == 'slide') $(target).stop().slideDown(300);
  }else{
    obj.classList.remove('active');
    target.classList.remove('active');
    if(ani == 'slide') $(target).stop().slideUp(300);
  }


  // if(ani = 'slide'){
    
  // }
}