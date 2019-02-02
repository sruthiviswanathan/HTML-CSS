function openNav() {
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidenav").style.width = "0";
}

  function viewlogin() {
    var x = document.getElementById("signup");
    var y = document.getElementById("login");
    x.style.display = "none";
    y.style.display = "block";
    y.classList.add('button');
  }
  
  function viewsignup() {
    var y = document.getElementById("signup");
    var x = document.getElementById("login");
    y.style.display = "block";
    x.style.display = "none";

  }
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }