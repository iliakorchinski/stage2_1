import { links, projects } from './data.js';
import { renderMenu } from './menu.js';
import { renderItems } from './items.js';

const listContainer = document.querySelector('.list-container');

renderMenu(links);
renderItems(projects, listContainer);
