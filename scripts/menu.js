const menu = document.querySelector('.links-container');

export function renderMenu(links) {
  links.forEach((link) => {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('navbar-link-container');

    linkDiv.innerHTML = `<span role="button" aria-expanded="true" class="navbar-link">
                  ${link.title}
                </span>
                 <ul class="dropdown">
                ${link.nestedLinks
                  .map(
                    (nestedLink) => `<li>
                        <a href="#">${nestedLink}</a>
                    </li>`,
                  )
                  .join('')}
                </ul>`;
    const linkElement = menu.firstElementChild;
    menu.insertBefore(linkDiv, linkElement);
  });
}
