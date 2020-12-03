const droppableDivs = document.getElementsByClassName('droppable-div');
const draggableDivs = document.getElementsByClassName('draggable-div');
let draggedElement;
for (let i=0; i< draggableDivs.length; i++) {
 draggableDivs[i].addEventListener('dragstart', dragStart); 
}
for (let i=0; i< droppableDivs.length; i++) {
 droppableDivs[i].addEventListener('dragenter', dragEnter);
 droppableDivs[i].addEventListener('dragover', dragOver);
 droppableDivs[i].addEventListener('dragleave', dragLeave);
 droppableDivs[i].addEventListener('drop', dropped);  
}
function dragStart(e) {
  draggedElement = document.getElementById(e.target.id);
}
function dragEnter(e) {
   e.target.classList.add('outline');
}
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('outline');
}
function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove('outline');
}
function dropped(e) {
  e.target.appendChild(draggedElement);
  e.target.classList.remove('outline');
}
