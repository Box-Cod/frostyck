import { toolBar } from "../draggableToolBarElement";


let buttonDragToolBar = document.createElement('button'), dragX = 0, dragY = 0;
buttonDragToolBar.classList.add('btn','btn-primary','fros-btn-bg','p-1','mt-1','mb-1','btn-sm','border-0','btn-md','btn-lg','rounded-top-5','rounded-bottom-5');
buttonDragToolBar.type = 'button';
buttonDragToolBar.title = 'buttonDragToolBar';

let iconButtonDragToolBar = document.createElement('i');
iconButtonDragToolBar.classList.add('bi','fs-6','p-1','bi-arrows-move', 'text-light');


//logica
function dragStart(element) {
    let mouseY = Math.abs(element.pageY);
    let mouseX = Math.abs(element.pageX);
  
    dragX = mouseX - toolBar.offsetLeft;
    dragY = mouseY - toolBar.offsetTop;
  
    addEventListener("mousemove", dragMove);
    addEventListener("mouseup", dragEnd);
}
   
function dragMove(element) {
    let mouseY = Math.abs(element.pageY);
    let mouseX = Math.abs(element.pageX);

    toolBar.style.left = (mouseX - dragX) + 'px';
    toolBar.style.top = (mouseY - dragY) + 'px';

}
  
function dragEnd() {
    removeEventListener("mousemove", dragMove); 
    removeEventListener("mouseup", dragEnd);
}

buttonDragToolBar.appendChild(iconButtonDragToolBar);
buttonDragToolBar.addEventListener("mousedown", dragStart);

export const buttonDrag = buttonDragToolBar;