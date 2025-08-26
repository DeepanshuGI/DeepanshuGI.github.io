// AOS init
AOS.init({ duration: 800, once: true, offset: 60 });

// Typed hero (only on pages that have it)
if (document.getElementById('typed')) {
  new Typed('#typed', {
    strings: ['Data Analyst', 'Business Intelligence Specialist', 'SQL & Power BI Pro', 'Storytelling with Data'],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1400,
    loop: true
  });
}

// Theme toggle
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') body.classList.add('light');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    themeToggle.innerHTML = body.classList.contains('light') ? '<i class="bi bi-brightness-high"></i>' : '<i class="bi bi-moon-stars"></i>';
  });
}

// Back to top
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => { toTop.style.display = window.scrollY > 600 ? 'block' : 'none'; });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Filter projects (projects.html)
const filterButtons = document.querySelectorAll('[data-filter]');
const projectItems = document.querySelectorAll('.project-item');
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  projectItems.forEach(card => {
    const cats = (card.dataset.category || '').split(' ');
    const show = (f === 'all') || cats.includes(f);
    card.style.display = show ? '' : 'none';
  });
}));

// Contact form validation (contact.html)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    const alert = document.createElement('div');
    alert.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3 shadow';
    alert.style.zIndex = 2000;
    alert.innerHTML = '<i class="fa-regular fa-circle-check me-2"></i>Thanks! Your message has been sent (demo).';
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 2800);
    form.reset();
    form.classList.remove('was-validated');
  });
}
