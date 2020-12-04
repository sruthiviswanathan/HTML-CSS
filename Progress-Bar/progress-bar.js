const progressInd = document.getElementById('progress-indicator');
let i = 20;

function updateProgressIndicator(value) {
  console.log(value);  
  progressInd.style.width = value + '%';
}

function progressValue () {
    setInterval(() => {
      if (i < 100) {
       console.log(i);
       i = i+10;
       updateProgressIndicator(i);
      }
    }, 3000);
}

progressValue();
