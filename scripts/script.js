import { links, projects } from './data.js';
import { renderItems } from './items.js';
import { renderMenu } from './menu.js';
import { toggleBurgerMenu } from './mobile-menu.js';

const listContainer = document.querySelector('#list-container');

window.addEventListener('resize', () => {
  const element = document.querySelector('.side-menu-navigation');
  if (window.innerWidth > 900) {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
});

renderMenu(links);
renderItems(projects, listContainer);
toggleBurgerMenu();
