import './styles.css';
import './js/theme.js';
import menuData from './js/menu.json';
import template from './template/menu.hbs';

const menuRef = document.querySelector('.js-menu');
const markup = template(menuData);
console.log(markup);
menuRef.insertAdjacentHTML('afterbegin', markup);
