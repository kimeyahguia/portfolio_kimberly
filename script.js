/* =========================================================
   Portfolio — interactions
   - Mobile navigation toggle
   - Smooth scrolling for in-page links
   - Scroll-reveal animations (IntersectionObserver)
   - Active nav link highlighting
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile navigation ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const bars = menuToggle ? menuToggle.querySelectorAll('.hamburger-bar') : [];
  if (bars.length === 3) {
    bars[0].classList.add('bar-1');
    bars[1].classList.add('bar-2');
    bars[2].classList.add('bar-3');
  }

  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (!menuToggle || !mobileMenu) return;
    const isOpen = menuToggle.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', toggleMenu);
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Smooth scrolling for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      // Move focus for keyboard/screen-reader users after scroll
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // slight stagger for elements revealing together
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, (index % 4) * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Active navigation on scroll ---------- */
  const sections = document.querySelectorAll('main section[id], main footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('text-text', isActive);
            link.classList.toggle('text-muted', !isActive);
          });
        }
      });
    }, {
      threshold: 0.4,
      rootMargin: '-40% 0px -40% 0px'
    });

    sections.forEach(section => navObserver.observe(section));
  }

  /* ---------- Project card keyboard interaction ---------- */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-active');
      }
    });
  });

});