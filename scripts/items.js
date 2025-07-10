const itemForRender = (data) => {
  const itemArticle = document.createElement('article');
  itemArticle.classList.add('list-item');

  const link = document.createElement('a');
  link.href = '#';

  const header = document.createElement('div');
  header.classList.add('list-item-header');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image');

  const img = document.createElement('img');
  img.src = data.image;
  img.alt = data.title || '';

  imageContainer.appendChild(img);
  header.appendChild(imageContainer);

  const titleContainer = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('list-item-title');
  title.textContent = data.title;
  titleContainer.appendChild(title);
  header.appendChild(titleContainer);

  const content = document.createElement('div');

  const description = document.createElement('p');
  description.classList.add('list-item-description');
  description.textContent = data.description;
  content.appendChild(description);

  const versions = document.createElement('div');

  const version = document.createElement('span');
  version.classList.add('list-item-version');
  version.textContent = data.version;

  const otherVersions = document.createElement('span');
  otherVersions.classList.add('additional-versions');
  otherVersions.textContent = data.otherVersions;

  versions.appendChild(version);
  versions.appendChild(otherVersions);
  content.appendChild(versions);

  link.appendChild(header);
  link.appendChild(content);
  itemArticle.appendChild(link);

  return itemArticle;
};

export const renderItems = (items, container) => {
  container.replaceChildren();
  if (typeof items === 'string') {
    const notFound = document.createElement('p');
    notFound.classList.add('results-not-found');
    notFound.textContent = items;
    container.appendChild(notFound);
    return;
  }
  items.forEach((item) => {
    const itemArtickle = itemForRender(item);

    container.appendChild(itemArtickle);
  });
};
