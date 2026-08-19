// Auto-fill copyright year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll-reveal animation (Bootstrap has no built-in equivalent)
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Close the mobile menu (Bootstrap collapse) after tapping a nav link
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenu && window.bootstrap) {
  const collapseInstance = window.bootstrap.Collapse.getOrCreateInstance(mobileMenu, { toggle: false });
  mobileMenu.querySelectorAll('a.nav-link').forEach((link) => {
    link.addEventListener('click', () => collapseInstance.hide());
  });
}