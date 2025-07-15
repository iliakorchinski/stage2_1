import { links } from './data.js';

const burgerMenu = document.querySelector('#burger-menu');
const sideMenu = document.querySelector('#side-menu');
const crossIcon = document.querySelector('#cross-icon');
const sideMenuNavigation = document.querySelector('#side-menu-navigation');

const renderMobileMenu = (links) => {
  sideMenuNavigation.replaceChildren();

  const link = document.createElement('div');
  const anchor = document.createElement('a');
  anchor.classList.add('link-mobile');
  anchor.setAttribute('href', '#');
  anchor.textContent = 'Tanzu Spring';
  link.appendChild(anchor);

  sideMenuNavigation.appendChild(link);

  links.forEach((link) => {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('side-menu-link-container');

    const title = document.createElement('div');
    title.classList.add('mobile-link-title');
    const span = document.createElement('span');
    span.textContent = link.title;
    title.appendChild(span);
    const linkElement = sideMenuNavigation.firstElementChild;
    sideMenuNavigation.insertBefore(title, linkElement);

    const nestedList = document.createElement('ul');
    nestedList.classList.add('side-menu-list');
    nestedList.style.display = 'none';

    link.nestedLinks.forEach((nestedLink) => {
      const link = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.textContent = nestedLink;

      link.appendChild(anchor);
      nestedList.appendChild(link);
    });

    title.addEventListener('click', () => {
      const isOpen = nestedList.style.display === 'block';

      document.querySelectorAll('.mobile-link-title ul').forEach((ul) => {
        ul.style.display = 'none';
      });

      nestedList.style.display = isOpen ? 'none' : 'block';
    });

    title.appendChild(nestedList);
    sideMenuNavigation.appendChild(linkDiv);
  });
};

export const toggleBurgerMenu = () => {
  burgerMenu.addEventListener('click', () => {
    renderMobileMenu(links);
    sideMenu.classList.remove('hidden');
    crossIcon.classList.remove('hidden');
    requestAnimationFrame(() => {
      sideMenu.classList.add('open');
    });
  });

  crossIcon.addEventListener('click', () => {
    sideMenu.classList.remove('open');

    sideMenu.addEventListener(
      'transitionend',
      () => {
        sideMenu.classList.add('hidden');
        crossIcon.classList.add('hidden');
      },
      { once: true },
    );
  });
};
