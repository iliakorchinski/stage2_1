const listContainer = document.querySelector('.list-container');

export const renderItems = (items) => {
  listContainer.innerHTML = '';
  if (typeof items === 'string') {
    listContainer.innerHTML = `<p class="results-not-found">${items}</p>`;
  }
  items.forEach((item) => {
    const itemArtickle = document.createElement('article');
    itemArtickle.classList.add('list-item');

    itemArtickle.innerHTML = `
            <a href="#">
                <div class="list-item-header">
                  <div class="image">
                    <img src=${item.image} alt=${item.title} />
                  </div>
                  <div><h1 class="list-item-title">${item.title}</h1></div>
                </div>
                <div>
                  <p class="list-item-description">
                    ${item.description}
                  </p>
                  <div>
                    <span class="list-item-version">${item.version}</span>
                    <span class="additional-versions">${item.otherVersions}</span>
                  </div>
                </div>
            </a>`;

    listContainer.appendChild(itemArtickle);
  });
};
