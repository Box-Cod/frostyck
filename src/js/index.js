import 'bootstrap';
import '../css/styles.scss';

import  elementToolbarWrapper  from './components/DraggableToolBarElement-component/draggableToolBarElement';
import { listElements } from './components/DraggableToolBarElement-component/tools/toolAddElement/listElements';


let elementsBody = document.querySelector( 'body' );

let elementStyle = document.createElement( 'style' );

elementStyle.id = randomNumber();
elementStyle.textContent = elementStyle.textContent + `

.selectElement {  
  border: 1px solid red;
}

`;

elementsBody.appendChild( listElements );
elementsBody.appendChild( elementToolbarWrapper.element );

elementsBody.appendChild( elementStyle );

export function randomNumber() {

  // code inspired by: https://codigofonte.org/gerando-id-aleatorio-em-javascript/
  
  return Math.floor( Math.floor( Math.random() * Date.now() ) * Math.random() ).toString( 36 );

}