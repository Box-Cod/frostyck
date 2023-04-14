import 'bootstrap';
import '../../../../../css/styles.scss';

let elementStyle = document.createElement( 'style' );

elementStyle.textContent = `

button[title='buttonAddElement']::after {

    content: none !important;
}

`;
let buttonAddElement = document.createElement( 'button' );

buttonAddElement.classList.add( 'btn', 'btn-primary', 'dropdown-toggle','fros-btn-bg', 'p-1', 'mt-1', 'mb-1', 'btn-sm', 'btn-md', 'btn-lg', 'border-0', 'rounded-top-5', 'rounded-bottom-5' );
buttonAddElement.title = 'buttonAddElement';
buttonAddElement.dataset.bsToggle = 'dropdown';
buttonAddElement.ariaExpanded = 'false;'
buttonAddElement.dataset.bsAutoClose = 'false'
buttonAddElement.type = 'button';
// buttonAddElement.style.content = 'none'

let iconAddElement = document.createElement( 'i' );

iconAddElement.classList.add( 'bi', 'fs-6', 'p-1', 'bi-plus-lg', 'text-light' );
iconAddElement.title = 'iconAddElement';

buttonAddElement.appendChild( iconAddElement );
buttonAddElement.appendChild( elementStyle )

export const elementAdd = {
    button: buttonAddElement,
    icon: iconAddElement
};
