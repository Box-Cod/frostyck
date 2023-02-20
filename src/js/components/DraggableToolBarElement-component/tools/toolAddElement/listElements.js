import 'bootstrap';
import '../../../../../css/styles.scss';
import itemListElement from './itemListElement';

const containerCreateElement = () => {

    const card = document.createElement('div');
    card.classList.add('position-absolute','card','text-bg-primary');
    card.style.top = '20%';
    card.style.right = '20%';

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header','text-center');
    cardHeader.textContent = 'header';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body','text-bg-primary','bg-transparent','p-0','m-1');

    const listGroup = document.createElement('div');
    listGroup.classList.add('text-center');

    const listGroupItem = document.createElement('div');
    listGroupItem.classList.add('bg-transparent');

    const elementsItemsList = {
        header: itemListElement('<header>'),
        nav: itemListElement('<nav>'),
        ul: itemListElement('<ul>'),
        li: itemListElement('<li>'),
        a: itemListElement('<a>'),
        i: itemListElement('<i>'),
        p: itemListElement('<p>')
    };
    
    listGroupItem.appendChild(elementsItemsList.header);
    listGroupItem.appendChild(elementsItemsList.nav);
    listGroupItem.appendChild(elementsItemsList.ul);
    listGroupItem.appendChild(elementsItemsList.ul);
    listGroupItem.appendChild(elementsItemsList.li);
    listGroupItem.appendChild(elementsItemsList.a);
    listGroupItem.appendChild(elementsItemsList.i);
    listGroupItem.appendChild(elementsItemsList.p);

    listGroup.appendChild(listGroupItem);
    cardBody.appendChild(listGroup);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
};

export const listElements = containerCreateElement();