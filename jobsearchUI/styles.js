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


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("reviewForm").submit();
    return false;
  }

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, z, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "" || z[0].value == "Select a Company:") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      z[0].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}


//////////////////////modal////////////////////////////////
function displaymodal() {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}