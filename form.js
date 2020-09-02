function validate() {
  var usrname = document.getElementById("user_name").value;
  var pwd = document.getElementById("pwd").value;
  var pwd2 = document.getElementById("pwd2").value;
  var email = document.getElementById("email").value;
  var pass = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{16}$/;

  if (usrname =="" ) {
      alert("Please write a username");
      return false;
  }
  if (pwd =="" ) {
      alert("Please write a password");
      return false;
  }
  if (pwd2 =="" ) {
      alert("Please confirm your pasword");
      return false;
  }
  if (email =="" ) {
      alert("Please write your email");
      return false;
  }
  if (usrname.length <8) {
      alert("username should be more than 8 characters");
      return false;
  }
  if (pass.test(pwd) == false){
      alert("Please enter a strong password: 16 char, 1 lowercase letter, 1 upper case letter, min 1 digit");
      return false;
  }
  if (pwd!=pwd2){
      alert("Please enter a strong password: 16 char, 1 lowercase letter, 1 upper case letter, min 1 digit");
      return false;
  }
  alert("Successfully submitted");

  return true;

  
}