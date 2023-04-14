import 'bootstrap';
import '../../../../../css/styles.scss';

const itemList = (elementHTMLName = '') => {

    const item = document.createElement('div');
    item.classList.add('p-0','m-0');
    item.style.textTransform = 'uppercase';
    item.textContent = elementHTMLName

    return item;
};

export default itemList;