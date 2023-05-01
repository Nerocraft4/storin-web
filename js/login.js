var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "user" && password == "pass"){
    window.location = "home.html"; // Redirecting to other page.
    return false;
  }
  else{
    const wrongp = document.getElementById("wrongp");
    wrongp.innerHTML = "Wrong username or password. Try again."
  }
}
