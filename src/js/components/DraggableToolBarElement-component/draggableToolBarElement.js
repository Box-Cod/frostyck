import 'bootstrap';
import './../../../css/styles.scss';
import { selectTool } from './tools/selectElement';
import { randomNumber } from '../../index';
import { buttonDrag } from './tools/buttonDragToolBar';


//estilo
//manipular estilos e pseudo-elementos via javascript
export let elementStyle = document.createElement( 'style' );

/*estilos personalizados do componente*/
elementStyle.textContent = `

div button[title].fros-btn-bg:hover {
  background-color: #01316e;
}
 

`;

elementStyle.id = randomNumber();
let elementStyleId = elementStyle.id;


let draggableToolBarElement = document.createElement('div');
draggableToolBarElement.classList.add('position-absolute','p-1','m-1','d-flex','flex-sm-column','flex-md-column','flex-lg-column','bg-primary','border', 'border-4','border-primary-subtle','rounded-pill');
draggableToolBarElement.style.maxHeight = "75vh";
draggableToolBarElement.style.maxWidth = "75vw";
draggableToolBarElement.style.minWidth = '1vw';
draggableToolBarElement.style.minHeight = '1vh';
draggableToolBarElement.id = randomNumber();
draggableToolBarElement.title = "draggableToolBarElement";



//logica

// function dragStart(element) {
//   let mouseY = Math.abs(element.pageY);
//   let mouseX = Math.abs(element.pageX);

//   dragX = mouseX - draggableToolBarElement.offsetLeft;
//   dragY = mouseY - draggableToolBarElement.offsetTop;

//   addEventListener("mousemove", dragMove);
//   addEventListener("mouseup", dragEnd);
// }
 
// function dragMove(element) {
//   let mouseY = Math.abs(element.pageY);
//   let mouseX = Math.abs(element.pageX);

//   draggableToolBarElement.style.left = (mouseX - dragX) + 'px';
//   draggableToolBarElement.style.top = (mouseY - dragY) + 'px';

// }

// function dragEnd() {
//   removeEventListener("mousemove", dragMove); 
//   removeEventListener("mouseup", dragEnd);
// }

// draggableToolBarElement.addEventListener("mousedown", buttonDrag);

draggableToolBarElement.appendChild(elementStyle);

draggableToolBarElement.appendChild(selectTool);
draggableToolBarElement.appendChild(buttonDrag);


export const toolBar = draggableToolBarElement;
