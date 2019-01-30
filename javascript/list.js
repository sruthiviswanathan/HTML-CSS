
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
} 

var listArray = localStorage.getItem('lists')? JSON.parse(localStorage.getItem('lists')) : [];
var contentArray = localStorage.getItem('contents')? JSON.parse(localStorage.getItem('contents')) : [];
var htmlList = document.getElementById("menu");

listArray.forEach(function(value){
    constructList(value);
  } );

  function constructList(text)
{
        var mydiv = document.getElementById("menu");
        var aTag = document.createElement('a');
        aTag.setAttribute('href',"#");
        aTag.innerHTML = text;
        mydiv.appendChild(aTag);
        var br = document.createElement("BR");
        mydiv.insertBefore(br,aTag);
}

function addNewElement() {
  
    var inputValue = document.getElementById("title").value;
    var contentValue = document.getElementById("content").value;

    if (inputValue === '' || contentValue === '') {
        alert("You must write something!");
      } else {
      
        n++;
        var mydiv = document.getElementById("menu");
        var aTag = document.createElement('a');
        aTag.setAttribute('href',contentValue);
        aTag.innerHTML = inputValue;
        mydiv.appendChild(aTag);
        aTag.setAttribute("id","ref"+ n);
        var br = document.createElement("BR");
        mydiv.insertBefore(br,aTag);

        // console.log(t);
        listArray.push(inputValue);
        contentArray.push(contentValue);
        localStorage.setItem('lists', JSON.stringify(listArray));
        localStorage.setItem('contents', JSON.stringify(contentArray));
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
      }
}


