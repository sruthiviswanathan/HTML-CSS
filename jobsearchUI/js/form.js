var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function viewlogin() {
    var x = document.getElementById("signup");
    var y = document.getElementById("login");
    var z = document.getElementById("signupadmin");
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  }
  
  function viewsignup() {
    var y = document.getElementById("signup");
    var x = document.getElementById("login");
    var z = document.getElementById("signupadmin");
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";
  
  }
  function viewsignupasadmin() {
    var y = document.getElementById("signup");
    var x = document.getElementById("login");
    var z = document.getElementById("signupadmin");
    y.style.display = "none";
    x.style.display = "none";
    z.style.display = "block";
  
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }  