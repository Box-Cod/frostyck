import 'bootstrap';
import '../../../../../css/styles.scss';
import  elementItemList  from './itemListElement';

let elementStyle = document.createElement( 'style' );

elementStyle.textContent = `



`;

const containerCreateElement = () => {

    const listElementsHtml = [
        elementItemList('<header>'),
        elementItemList('<nav>'),
        elementItemList('<ul>'),
        elementItemList('<li>'),
        elementItemList('<a>'),
        elementItemList('<i>'),
        elementItemList('<p>')
    ];

    const listGroup = document.createElement('ul');
    listGroup.classList.add('m-1','p-1','dropdown-menu','text-bg-primary','text-center','border', 'border-4','border-primary-subtle','rounded');
    listGroup.id = 'collapseList';

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item','p-1','m-1');

    for (let element of listElementsHtml ) {
        listItem.appendChild(element);
    }

    listGroup.appendChild(listItem);

    return listGroup;
};

export const elementList = containerCreateElement();