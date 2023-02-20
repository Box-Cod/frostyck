import 'bootstrap';
import '../../../../../css/styles.scss';

let buttonAddElement = document.createElement( 'button' );

buttonAddElement.classList.add( 'btn', 'btn-primary', 'fros-btn-bg', 'p-1', 'mt-1', 'mb-1', 'btn-sm', 'btn-md', 'btn-lg', 'border-0', 'rounded-top-5', 'rounded-bottom-5' );
buttonAddElement.title = 'buttonAddElement';
buttonAddElement.type = 'button';

let iconAddElement = document.createElement( 'i' );

iconAddElement.classList.add( 'bi', 'fs-6', 'p-1', 'bi-plus-lg', 'text-light' );
iconAddElement.title = 'iconAddElement';

buttonAddElement.appendChild( iconAddElement );

export const elementAdd = {
    button: buttonAddElement,
    icon: iconAddElement
};
