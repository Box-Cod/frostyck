import 'bootstrap';
import './../../../css/styles.scss';

import { randomNumber } from '../../index';
import { elementDrag } from './tools/toolDragToolbar/buttonDragToolBar';
import { elementAdd } from './tools/toolAddElement/addElement';


//estilo
//manipular estilos e pseudo-elementos via javascript
let elementStyle = document.createElement( 'style' );

/*estilos personalizados do componente*/
elementStyle.textContent = elementStyle.textContent + `

div button[title].fros-btn-bg:hover {
  background-color: #01316e;
}
 

`;

elementStyle.id = randomNumber();
let elementStyleId = elementStyle.id;


let draggableToolBarElement = document.createElement( 'div' );
draggableToolBarElement.classList.add('position-absolute','p-1','m-1','p-sm-1','m-sm-1','p-md-1','m-md-1','p-xl-1','m-xl-1','d-flex','flex-sm-column','flex-md-column','flex-lg-column','bg-primary','border', 'border-4','border-primary-subtle','rounded-pill');
draggableToolBarElement.style.maxHeight = "75vh";
draggableToolBarElement.style.maxWidth = "75vw";
draggableToolBarElement.style.minWidth = '1vw';
draggableToolBarElement.style.minHeight = '1vh';
draggableToolBarElement.id = randomNumber();
draggableToolBarElement.title = "draggableToolBarElement";

draggableToolBarElement.appendChild( elementStyle );

draggableToolBarElement.appendChild( elementAdd.button );
draggableToolBarElement.appendChild( elementDrag.button );

const elementToolbarWrapper = {

  element: draggableToolBarElement,
  style: elementStyle,
  
  children: [

    {

      name: elementDrag.button.title,
      element: elementDrag,
      button: elementDrag.button,
      icon: elementDrag.icon

    },

    {

      name: elementAdd.button.title,
      element: elementAdd,
      button: elementAdd.button,
      icon: elementAdd.icon

    }

  ]

};

export default elementToolbarWrapper;
