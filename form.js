//function validatePassword() {
  //  var newPassword = document.getElementById('pwd').value;
  //  var minNumberofChars = 6;
  //  var maxNumberofChars = 16;
  //  var regularExpression  = /[(^[a-zA-Z0-9!@#$%^&*])+?=.*[a-z]+?=.*[A-Z]+?=.*[0-9]]{6,16}$/;
  //  alert(newPassword);
  //  if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
  //      return alert("Wrong");
  //  }
  //  if(!regularExpression.test(newPassword)) {
  //      alert("password should contain atleast one number and one special character");
  //      return false;
  //  }
//}
//validatePassword();
  var username= document.getElementById('user_name').value;
  var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!regularExpression.test(username))
  {
  alert("Username is too short");
  }
