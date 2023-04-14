import 'bootstrap';
import '../../../../../css/styles.scss';
import  elementItemList  from './itemListElement';

let elementStyle = document.createElement( 'style' );

elementStyle.textContent = `

.scroll-list {
    height: 1rem;
    overflow-y: auto;
    font-family: 'Roboto', sans-serif;
}

.scrollbarlist {
    scrollbar-color: #999 #333;
}

.scrollbarlist::-webkit-scrollbar  {
    width: 10px;
    height: 10px; 
}

.scrollbarlist::-webkit-scrollbar-thumb { 
    background: #0b5ed9;
    border: 3px solid #093f8f;
    border-radius: 0 10px 10px 0; 
}

.scrollbarlist::-webkit-scrollbar-track { 
    background:  #093f8f;
   
    border-radius: 0 1rem 1rem 0;
}


`;

const containerCreateElement = () => {

    const tagsHtml = ['<header>','<nav>',
    '<ul>',
    '<li>',
    '<a>',
    '<i>',
    '<p>',
    '<main>',
    '<div>',
    '<fieldset>',
    '<legend>',
    '<form>',
    '<h1>',
    '<h2>',
    '<h3>',
    '<h4>',
    '<h5>',
    '<h6>',
    '<img>',
    '<input>',
    '<select>',
    '<option>',
    '<table>',
    '<tbody>',
    '<thead>',
    '<td>',
    '<th>',
    '<tfoot>',
    '<template>',
    '<textarea>',
    '<u>',
    '<ul>',
    '<span>',
    '<small>',
    '<section>',
    '<dl>',
    '<dt>',
    '<cite>',
    '<canvas>',
    '<button>',
    '<blockquote>',
    '<article >',
    '<footer>',
    '<iframe>',
    '<label>',
    '<strong>',
    '<aside>'
];


    const listElementsHtml = tagsHtml.map(element => elementItemList(element));

    const listGroup = document.createElement('ul');
    listGroup.classList.add('mx-3','p-1','dropdown-menu', 'scrollbarlist','scroll-list','text-bg-primary','text-center','border', 'border-5','border-primary-subtle');
    listGroup.id = 'collapseList';
    listGroup.style.height = "15rem";
    listGroup.style.borderRadius = "1rem";

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item','p-1','m-1');

    for (let element of listElementsHtml ) {
        listItem.appendChild(element);
    }

    listGroup.appendChild(listItem);
    listGroup.appendChild(elementStyle)

    return listGroup;
};

export const elementList = containerCreateElement();