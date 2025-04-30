class NavBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const links = this.getAttribute('links')?.split(',') || [];
      const hrefs = this.getAttribute('hrefs')?.split(',') || [];
  
      const nav = document.createElement('nav');
      nav.className = 'full-width navigation-bar';
  
      const ul = document.createElement('ul');
      ul.className = 'navigation-bar__items';
  
      links.forEach((label, i) => {
        const li = document.createElement('li');
        li.className = 'navigation-bar__item';
  
        const a = document.createElement('a');
        a.className = 'navigation-bar__link';
        a.textContent = ` ${label.trim()}`;
        a.href = hrefs[i]?.trim() || '#';
  
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      nav.appendChild(ul);
  
      // 🚀 Replace <sleepy-navbar> with <nav>
      this.replaceWith(nav);
    }
  }
  
  customElements.define('sleepy-navbar', NavBar);
  