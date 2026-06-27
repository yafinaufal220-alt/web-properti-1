// AKAI Properti - Shared scripts

// Navbar scroll state
const nav = document.querySelector('.navbar');
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// FAQ toggles
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile nav toggle (basic)
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.style.display === 'flex';
    links.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--bg)';
      links.style.flexDirection = 'column';
      links.style.padding = '2rem var(--gutter)';
      links.style.borderTop = '1px solid var(--line)';
    }
  });
}

// Contact form basic UX
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = 'Terkirim ✓';
      btn.style.background = '#2F4A3A';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        form.reset();
      }, 2400);
    }
  });
}
