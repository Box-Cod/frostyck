import 'bootstrap';
import '../../../../../css/styles.scss';

const itemList = (elementHTMLName = '') => {

    const item = document.createElement('div');
    item.classList.add('p-1','m-1');
    item.style.border = '2px solid red';
    item.style.textTransform = 'uppercase';
    item.textContent = elementHTMLName

    return item;
};

export default itemList;