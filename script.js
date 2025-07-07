const links = [
  {
    title: 'Why Spring',
    url: '#',
    nestedLinks: [
      'Overview',
      'Generative AI',
      'Microservices',
      'Reactive',
      'Event Driven',
      'Cloud',
      'Web Applications',
      'Serverless',
      'Batching',
    ],
  },
  {
    title: 'Learn',
    url: '#',
    nestedLinks: [
      'Overview',
      'Quickstart',
      'Guides',
      'Blog',
      'Security Advisories',
    ],
  },
  {
    title: 'Projects',
    url: '#',
    nestedLinks: [
      'Overview',
      'Spring Boot',
      'Spring Framework',
      'Spring Cloud',
      'Spring Cloud Data Flow',
      'Spring Data',
      'Spring Integration',
      'Spring Batch',
      'Spring Security',
      'Spring AI',
    ],
  },
  { title: 'Academy', url: '#', nestedLinks: ['Courses', 'Get Certified'] },
  {
    title: 'Community',
    url: '#',
    nestedLinks: ['Community', 'Events', 'Authors'],
  },
];

const menu = document.querySelector('.links-container');

function renderMenu(links) {
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
renderMenu(links);
