import 'bootstrap';
import '../css/styles.scss';
// import { toolBarStyle, toolBarWrapper } from './components/DraggableToolBarElement-component/draggableToolBarElement';
// import { elementAdd } from './components/DraggableToolBarElement-component/tools/addElement';
// import { buttonDrag, elementDrag, iconDrag } from './components/DraggableToolBarElement-component/tools/buttonDragToolBar';
// import { iconSelect, selectTool } from './components/DraggableToolBarElement-component/tools/selectElement';
import  elementToolbarWrapper  from './components/DraggableToolBarElement-component/draggableToolBarElement';

let elementsBody = document.querySelector( 'body' );

let elementStyle = document.createElement( 'style' );

elementStyle.id = randomNumber();
elementStyle.textContent = elementStyle.textContent + `

.selectElement {  
  border: 1px solid red;
}

`;

// const toolBar = {

//   parentElement: {

//     element: toolBarWrapper,
//     style: toolBarStyle,

//     childrenElements: {

//       // buttonSelect: {

//       //   button: selectTool,
//       //   icon: iconSelect

//       // },

//       buttonAdd: {

//         element: elementAdd,
//         button: elementAdd.button,
//         icon: elementAdd.icon

//       },
    
//       buttonDrag: {

//         element: elementDrag,
//         button: elementDrag.button,
//         icon: elementDrag.icon

//       }

//     }

//   }
  
// };

// const toolBarChildren = toolBar.parentElement.childrenElements;

// const titleToolbarElements = {

//   toolBarTitle: toolBar.parentElement.element.title,

//   buttonDragTitle: toolBar.parentElement.childrenElements.buttonDrag.button.title,

//   iconDragTitle: toolBar.parentElement.childrenElements.buttonDrag.icon.title,

//   // buttonSelectTitle: toolBar.parentElement.childrenElements.buttonSelect.button.title,

//   // iconSelectTitle: toolBar.parentElement.childrenElements.buttonSelect.button.title

// }

// const elementProperties = {

//   property: ( clickEvent ) => {

//     let elementBody = elementsBody;

//     if ( clickEvent !== undefined || clickEvent !== null ) {
 
//       return {
  
//         parentElementTitle: clickEvent.target.parentElement.title,

//         elementTargetTitle: clickEvent.target.title,

//         elementTargetClassList: clickEvent.target.classList,

//         bodyStyle: elementBody.style
  
//       };

//     } else {

//       return {
//         error: 'function parameter is undefined.'
//       };

//     }

//   }

// };

const changeArrow = () => {

  elementsBody.addEventListener( 'click', ( clickEvent ) => {
    // console.log('aqui1->');
    // const elementTargetTitle = elementProperties.property(clickEvent).elementTargetTitle;
    // const elementTargetClassList = elementProperties.property(clickEvent).elementTargetClassList;
    // let bodyStyle = elementProperties.property(clickEvent).bodyStyle;

    // if ( elementTargetTitle == titleToolbarElements.buttonSelectTitle || elementTargetTitle ==  toolBarChildren.buttonSelect.icon.title ) {
      // console.log('aqui2->');
      // if ( bodyStyle.cursor == "crosshair" ) {
        // console.log('aqui3->');
        // bodyStyle.cursor = "auto";

      // } else {
        // console.log('aqui4->');
        // bodyStyle.cursor = "crosshair"
        // if ( elementTargetClassList.value === "" || elementTargetClassList.value !== "selectElement" ) {
          // console.log('aqui5->');

          // elementsBody.addEventListener('click',fnAddSelectClass.select);

        // } 
  
      // }

    // }

  });

}



changeArrow();

elementsBody.appendChild( elementToolbarWrapper.element );
elementsBody.appendChild( elementStyle );

// let fnAddSelectClass = { 
//   select: ( clickEvent ) => {
//       // console.log('aqui6->');
//     const parentElementTitle = elementProperties.property(clickEvent).parentElementTitle;
//     const bodyStyle = elementProperties.property(clickEvent).bodyStyle;
//     let elementTargetClassList = elementProperties.property(clickEvent).elementTargetClassList;
//     const elementTargetTitle = elementProperties.property(clickEvent).elementTargetTitle;

//     if ( parentElementTitle !== undefined && parentElementTitle !== null && parentElementTitle != "" ) {
//       // console.log('aqui7->');
      
//       if ( parentElementTitle == titleToolbarElements.buttonSelectTitle || parentElementTitle ==  titleToolbarElements.buttonDragTitle ||  parentElementTitle == titleToolbarElements.iconSelectTitle || parentElementTitle == titleToolbarElements.iconDragTitle ) {
//         // console.log('aqui8->');
      
//         elementTargetClassList.remove('selectElement');

//       } 
      
//     } else {
//       // console.log('aqui9->');

//       if ( elementTargetTitle == titleToolbarElements.toolBarTitle ) {
//         // console.log('aqui10->');

//         elementTargetClassList.remove('selectElement');

//       } else {
//       // console.log('aqui11->');
        
//         if ( elementTargetTitle !== "selectElement" ) {
//           // console.log('aqui12->');

          

//           if (bodyStyle.cursor === "crosshair") {
//             // console.log('aqui13->');
            
//             // if (parentElementTitle != titleToolbarElements.toolBarTitle && parentElementTitle != titleToolbarElements.buttonDragTitle || parentElementTitle != titleToolbarElements.iconDragTitle && parentElementTitle != titleToolbarElements.buttonSelectTitle || parentElementTitle != titleToolbarElements.iconSelectTitle) {
//             //   console.log('aqui14->');
//             // // if (clickEvent.target.localName === "body") {
              
//             //   let wrapper = addWrapperDiv(clickEvent.target);
//             //   let parent = clickEvent.target.parentElement;
//             //   // console.log(parent.appendChild(wrapper))
//             // // }
                
//             // // // console.log(verifications.verifyElement.checkElementExistsByTitleAttribute(element.target))

//             //   //  addWrapperDiv(clickEvent.target);
//             //   // // console.log(element.target.children)
//             // }
//             elementTargetClassList.add('selectElement');
            
//           }

//         }
        
//       }
      
//     }

//   }

// };


// function addWrapperDiv(element) {

//   let divWrapper = document.createElement( 'div' );

//   divWrapper.id = randomNumber();
//   divWrapper.title = "divWrapper";
//   divWrapper.classList.add('selectElement');
//   if (element.localName != titleToolbarElements.toolBarTitle) {
//     if (element.childNodes.length > 0) {
    
//       if (element.title !== titleToolbarElements.toolBarTitle && element.id !== elementStyle.id) {


//           let print = element.cloneNode(true);
          
//           divWrapper.appendChild(print);
//           element.insertAdjacentElement('beforebegin',divWrapper);
 
            
//             elementsBody.removeChild(element);


//         // console.log('->',key)
//       }
//     } else if (element.childNodes.length == 0){
//       if (element.title !== titleToolbarElements.toolBarTitle && element.id !== elementStyle.id) {

//         let print = element.cloneNode(true);
//         divWrapper.appendChild(print);
//         element.insertAdjacentElement('beforebegin',divWrapper);
//         elementsBody.removeChild(element);
//         console.log('->',key)
//       }
//     }
//     console.log('ola')
//   }
//   // divWrapper.append(element);
//   // elementsBody.appendChild(divWrapper);
//   return;
  
// }

export function randomNumber() {

  // code inspired by: https://codigofonte.org/gerando-id-aleatorio-em-javascript/
  
  return Math.floor( Math.floor( Math.random() * Date.now() ) * Math.random() ).toString( 36 );

}