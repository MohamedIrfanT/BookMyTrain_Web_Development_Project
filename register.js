function validateForm() {
    var fullname = document.forms["loginForm"]["fullname"].value;
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    var cpassword = document.forms["loginForm"]["cpassword"].value;
    
    if (fullname == "") {
        alert("Please enter your name.");
        return false;
      }
    
    if (username == "") {
      alert("Please enter your username.");
      return false;
    }
    
    if (password == "") {
      alert("Please enter your password.");
      return false;
    }

    if (cpassword == "") {
        alert("Please re-enter your password.");
        return false;
      }
  }
  