import elementToolbarWrapper  from "../../draggableToolBarElement";


const buttonDragToolBar: HTMLButtonElement = document.createElement( 'button' );
let dragX: number;
let dragY: number;
dragX = 0;
dragY = 0;

buttonDragToolBar.classList.add( 'btn', 'btn-primary', 'fros-btn-bg', 'p-1', 'mt-1', 'mb-1', 'btn-sm', 'border-0', 'btn-md', 'btn-lg', 'rounded-top-5', 'rounded-bottom-5' );
buttonDragToolBar.type = 'button';
buttonDragToolBar.title = 'buttonDragToolBar';

const iconButtonDragToolBar: HTMLElement = document.createElement( 'i' );

iconButtonDragToolBar.classList.add( 'bi', 'fs-6', 'p-1', 'bi-arrows-move', 'text-light' );
iconButtonDragToolBar.title = 'iconButtonDragToolBar';

//logica
function dragStart( element: any ) {

    let mouseY = Math.abs( element.pageY );
    let mouseX = Math.abs( element.pageX );
  
    dragX = mouseX - elementToolbarWrapper.element.offsetLeft;
    dragY = mouseY - elementToolbarWrapper.element.offsetTop;
  
    addEventListener( "mousemove", dragMove );
    addEventListener( "mouseup", dragEnd );
}
   
function dragMove( element: any ) {

    let mouseY = Math.abs( element.pageY );
    let mouseX = Math.abs( element.pageX );

    elementToolbarWrapper.element.style.left = ( mouseX - dragX ) + 'px';
    elementToolbarWrapper.element.style.top = ( mouseY - dragY ) + 'px';

}
  
function dragEnd() {

    removeEventListener( "mousemove", dragMove ); 
    removeEventListener( "mouseup", dragEnd );

}

buttonDragToolBar.appendChild( iconButtonDragToolBar );
buttonDragToolBar.addEventListener( "mousedown", dragStart );

export const elementDrag = { 
    button: buttonDragToolBar, 
    icon: iconButtonDragToolBar
};
