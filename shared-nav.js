(() => {
  const nav = document.querySelector('#mainNav');
  const menu = document.querySelector('#menuToggle');
  if (nav && menu) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }
  const toggle = document.querySelector('#searchToggle');
  const panel = document.querySelector('#searchPanel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      panel.setAttribute('aria-hidden', String(!open));
      toggle.setAttribute('aria-expanded', String(open));
      if (open) document.querySelector('#searchInput')?.focus();
    });
  }
  const form = document.querySelector('#searchForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const q = (document.querySelector('#searchInput')?.value || '').trim().toLowerCase();
    const routes = [
      [['project','portfolio','gallery'], 'portfolio.html'],
      [['service','design','cladding','staging'], 'services.html'],
      [['mood','sample','board','material'], 'mood-boards.html'],
      [['process','how'], 'process.html'],
      [['about','studio'], 'about.html'],
      [['contact','whatsapp','phone'], 'contact.html'],
      [['home'], 'index.html']
    ];
    const match = routes.find(([words]) => words.some(word => q.includes(word)));
    if (match) location.href = match[1];
    else {
      const toast = document.querySelector('#toast');
      if (toast) { toast.textContent = 'Try Projects, Services, Process, Mood Boards, About or Contact.'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2800); }
    }
  });
})();
