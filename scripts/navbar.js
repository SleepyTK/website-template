const navbarLinks = [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'The Project', href: 'project.html' }
  ];
  
  class NavBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const currentPath = window.location.pathname;
  
      const section = document.createElement('section');
      section.className = 'grid-layout';
  
      const nav = document.createElement('nav');
      nav.className = 'grid-layout max-width navigation-bar';
  
      const ul = document.createElement('ul');
      ul.className = 'full-width navigation-bar__items';
  
      navbarLinks.forEach((link) => {
        const li = document.createElement('li');
        li.className = 'navigation-bar__item';
  
        const a = document.createElement('a');
        a.className = 'navigation-bar__link';
        a.textContent = ` ${link.label}`;
  
        if (currentPath.includes(link.href)) {
          a.href = '#';
          a.setAttribute('aria-current', 'page');
        } else {
          a.href = link.href;
        }
  
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      nav.appendChild(ul);
      section.appendChild(nav);
  
      this.replaceWith(section);
    }
  }
  
  customElements.define('sleepy-navbar', NavBar);
 