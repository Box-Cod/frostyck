import 'bootstrap';
import './../../../css/styles.scss';
import { selectTool } from './tools/selectElement';


let toolBarItemGroup = document.createElement('nav');
toolBarItemGroup.classList.add('nav','flex-sm-column','flex-md-column', 'flex-lg-column');

let draggableToolBarElement = document.createElement('div'), dragX = 0, dragY = 0;
draggableToolBarElement.classList.add('position-absolute','p-1','m-1','flex-sm-column','flex-md-column','flex-lg-column','bg-primary','border', 'border-3','border-primary-subtle','rounded-pill');
draggableToolBarElement.style.maxHeight = "75vh";
draggableToolBarElement.style.maxWidth = "75vw";
draggableToolBarElement.style.minWidth = '1vw';
draggableToolBarElement.style.minHeight = '1vh';
draggableToolBarElement.style.width = "2rem";
draggableToolBarElement.style.height = "16rem";

function dragStart(element) {
  let mouseY = Math.abs(element.pageY);
  let mouseX = Math.abs(element.pageX);

  dragX = mouseX - draggableToolBarElement.offsetLeft;
  dragY = mouseY - draggableToolBarElement.offsetTop;

  addEventListener("mousemove", dragMove);
  addEventListener("mouseup", dragEnd);
}
 
function dragMove(element) {
  let mouseY = Math.abs(element.pageY);
  let mouseX = Math.abs(element.pageX);

  draggableToolBarElement.style.left = (mouseX - dragX) + 'px';
  draggableToolBarElement.style.top = (mouseY - dragY) + 'px';

}

function dragEnd() {
  removeEventListener("mousemove", dragMove); 
  removeEventListener("mouseup", dragEnd);
}


toolBarItemGroup.appendChild(selectTool);
draggableToolBarElement.appendChild(toolBarItemGroup);

draggableToolBarElement.addEventListener("mousedown", dragStart);

export const toolBar = draggableToolBarElement;
