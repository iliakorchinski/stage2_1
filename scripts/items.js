const itemForRender = (data) => {
  const itemArtickle = document.createElement('article');
  itemArtickle.classList.add('list-item');

  itemArtickle.innerHTML = `
            <a href="#">
                <div class="list-item-header">
                  <div class="image">
                    <img src=${data.image} alt=${data.title} />
                  </div>
                  <div><h1 class="list-item-title">${data.title}</h1></div>
                </div>
                <div>
                  <p class="list-item-description">
                    ${data.description}
                  </p>
                  <div>
                    <span class="list-item-version">${data.version}</span>
                    <span class="additional-versions">${data.otherVersions}</span>
                  </div>
                </div>
            </a>`;
  return itemArtickle;
};

export const renderItems = (items, container) => {
  container.innerHTML = '';
  if (typeof items === 'string') {
    container.innerHTML = `<p class="results-not-found">${items}</p>`;
    return;
  }
  items.forEach((item) => {
    const itemArtickle = itemForRender(item);

    container.appendChild(itemArtickle);
  });
};
