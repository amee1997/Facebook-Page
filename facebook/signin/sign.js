function checkUsername(){
  var e = document.getElementById('feedback');
  var user = document.getElementById('username');
  if(user.value.length<5){
    e.textContent='Username must be 5 character or more';

  }
  else{
    e.textContent='';
  }

}
