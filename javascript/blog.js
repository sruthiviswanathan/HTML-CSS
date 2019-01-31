// var description = localStorage.getItem('desc')? JSON.parse(localStorage.getItem('desc')) : [];
// var titleArray = localStorage.getItem('title')? JSON.parse(localStorage.getItem('title')) : [];

var parent = document.getElementById('txt');
var ul= document.getElementById('menu');
var descValue = document.getElementById('txtarea');
var emptyspan;
var textarea;

var setTitle = function(el){
    emptyspan.innerHTML = ellipsify(el.value);
  }
  
  function ellipsify (str) {
      if (str.length > 10) {
          return (str.substring(0, 10) + "...");
      }
      else {
          return str;
      }
  }
  
//   titleArray.forEach(function(title){
//     constructli(title);
//   });

  var constructli = function(title){
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = title;
    li.appendChild(span);
    li.setAttribute("type", "show");
    ul.appendChild(li);
    return span;
  }

function addNewElement() {

        emptyspan = constructli("");
        textarea = document.getElementById('txtarea');
        textarea.value="";
        textarea.focus();
}