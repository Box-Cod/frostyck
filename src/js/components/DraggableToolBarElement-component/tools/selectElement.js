import 'bootstrap';
import './../../../../css/styles.scss';

let elementSelectTool = document.createElement('button');
elementSelectTool.classList.add('btn','btn-outline-primary','p-0','m-0','btn-sm','btn-md','btn-lg');

let elementSelectSvg = document.createElement('i');
elementSelectSvg.classList.add('bi','bi-cursor-fill','text-light');

elementSelectTool.appendChild(elementSelectSvg);
export const selectTool = elementSelectTool;