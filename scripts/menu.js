const menu = document.querySelector('.links-container');

export const renderMenu = (links) => {
  links.forEach((link) => {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('navbar-link-container');
    const linkTitle = document.createElement('span');
    linkTitle.classList.add('navbar-link');
    linkTitle.setAttribute('role', 'button');
    linkTitle.setAttribute('aria-expanded', 'true');
    linkTitle.textContent = link.title;

    const dropdown = document.createElement('ul');
    dropdown.classList.add('dropdown');
    const fragment = document.createDocumentFragment();
    link.nestedLinks.forEach((nestedLink) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = nestedLink;
      listItem.appendChild(anchor);
      fragment.appendChild(listItem);
    });

    dropdown.appendChild(fragment);
    linkDiv.appendChild(linkTitle);
    linkDiv.appendChild(dropdown);
    const linkElement = menu.firstElementChild;
    menu.insertBefore(linkDiv, linkElement);
  });
};
