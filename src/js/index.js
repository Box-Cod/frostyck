import 'bootstrap';
import '../css/styles.scss';
import { elementStyle, toolBar } from './components/DraggableToolBarElement-component/draggableToolBarElement';

// let allElementsPage = [];
// allElementsPage.push( document.querySelectorAll( '*' ) );
let elementsBody = document.querySelector('body')

// allElementsPage.forEach( ( nodeElementsList ) => {
  
// nodeElementsList.forEach( ( nodeElement ) => {
  
  
//   let i = 0;
//   while ( i < nodeElement.children.length ) {

//       if ( 
//       nodeElement.children.item(i).localName !== 'html' && nodeElement.children.item(i).localName !== 'head' && 
//       nodeElement.children.item(i).localName !== 'meta' && nodeElement.children.item(i).localName !== 'base' && 
//       nodeElement.children.item(i).localName !== 'title' && nodeElement.children.item(i).localName !== 'link' && 
//       nodeElement.children.item(i).localName !== 'script' ) 
//       {
        

    
//       }
    
//     i++
//   }
  

// })

// });

elementsBody.addEventListener('click', (element) => {
  if (element.target.title === 'elementSelectToolButton' || element.target.title === 'iconElementSelect') {
    if (elementsBody.style.cursor === 'crosshair') {
      
      elementsBody.style.cursor = 'auto';
    } else {
      elementsBody.style.cursor = 'crosshair'
      elementsBody.addEventListener('click',(element) => {
        elementStyle.textContent = `
          .selectElement {  
            border: 1px solid red;
          }
        `;
        element.target.classList.add('selectElement');

        console.log(element.target.style);
      });
    }
  }
});

elementsBody.appendChild(toolBar)

// allElementsBody.forEach((elements) => {

//   let i = 0;
//   let parentElements = [];
//   while ( i < elements.length ) {

//     parentElements = elements.item( i ).children
//     if ( elements.item( i ).localnodeElement.children.item(i).localName !== 'script' &&&  elements.item( i ).localnodeElement.children.item(i).localName !== 'head') {
      
     
      
//       console.log(elements.item( i ).children)
     
//     }

//     i++
//   }

// });


// for ( let i = 0; i < allElementsBody.length; i++) {


  // if ( parentElements.localnodeElement.children.item(i).localName !== 'script' ) {

    // if (parentElements.children.length !== 0 &&& parentElements.id !== null && parentElements.id !== '') {
      
      // for(let elements of parentElements) {
      //   let childsElements = document.querySelectorAll('#'+elements.id+' > *')
      //   console.log(childsElements)

      // }
     
      // for(let child of parentElements.children) {
      //   childsElements.push(document.querySelectorAll(child.localnodeElement.children.item(i).localName));
      //   let childs = document.querySelectorAll(`${parentElements.localnodeElement.children.item(i).localName} > *`) 
      // }
    // }

    // for (let i = 0; parentElements.children.length !== 0, i < parentElements.children.length; i++) {
    //   let childsElements = parentElements.children[i];
    //   console.log('aqui->',parentElements.children[i])
    // }
    
   
  //   if ( parentElements.id == null && parentElements.id == undefined && parentElements.id === '' ) {

  //     parentElements.id = randomNumber();
  //   }

  // }
  
 
  // console.log(allElementsBody)
// }


export function randomNumber() {
  // code inspired by: https://codigofonte.org/gerando-id-aleatorio-em-javascript/
  
  return Math.floor( Math.floor( Math.random() * Date.now() ) * Math.random() ).toString( 36 );
}

// if ( bodyId !== null &&& bodyId == document.body.id ) {

//   let body = document.body;
//   let allElementsOfPage = document.documentElement.querySelectorAll( '*' );

//   body.innerHTML = ` ${ body.innerHTML } <h1>ola</h1> `;

//   for ( let allElements of allElementsOfPage ) {
    
//     if ( parentElements.id !== null &&& parentElements.id === bodyId) {
//       console.log(parentElements.id);
//     }
    
//   }

//   console.log( allElementsOfPage );

// }

