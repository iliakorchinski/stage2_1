import { projects } from './data.js';
import { renderItems } from './items.js';

const listContainer = document.querySelector('#list-container');

export const clearInput = () => {
  const searchInput = document.getElementById('site-search');
  const clearBtn = document.getElementById('clear-btn');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query === '') {
      clearBtn.classList.add('hidden');
      renderItems(projects, listContainer);
    } else {
      clearBtn.classList.remove('hidden');
    }

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.classList.add('hidden');
      renderItems(projects, listContainer);
    });
  });
};

export const debounce = (func, delay) => {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export const searchTerm = (onChange) => {
  const searchInput = document.getElementById('site-search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    onChange(query);
  });
};

export const handleFilteredResults = (results) => {
  if (typeof results !== 'string' && results.length !== 0) {
    renderItems(results, listContainer);
  }
  if (typeof results === 'string') {
    renderItems(results, listContainer);
  }
};

export const debouncedSearch = debounce((value) => {
  if (value) {
    const filteredProjects = projects.filter(
      (item) =>
        item.description.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toLowerCase().includes(value.toLowerCase()),
    );
    handleFilteredResults(
      filteredProjects.length > 0
        ? filteredProjects
        : 'Ooops... No results found... Try again!',
    );
  }
}, 300);

searchTerm(debouncedSearch);
