let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "img/visibility-4.png";
  } else {
    password.type = "password";
    eyeicon.src = "img/visibility-off-3.png";
  }
};

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "hello" && password === "1234") {
    alert("Login Successful!");
    window.location.href = "Main.html";
  } else {
    alert("Login Failed. Please check your Username and Password.");
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
