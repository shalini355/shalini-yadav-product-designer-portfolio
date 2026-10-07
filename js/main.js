document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const pageName = body.dataset.page || 'home';

  document.querySelectorAll('.nav-link').forEach((link) => {
    const linkPage = link.dataset.page;
    if (linkPage === pageName) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  const menuButton = document.querySelector('.mobile-menu-toggle');
  const siteNavigation = document.querySelector('.site-nav');

  if (menuButton && siteNavigation) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      siteNavigation.removeAttribute('data-menu-open');
    };

    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isExpanded));
      menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
      if (isExpanded) {
        siteNavigation.removeAttribute('data-menu-open');
      } else {
        siteNavigation.setAttribute('data-menu-open', 'true');
      }
    });

    siteNavigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener('pointerdown', (event) => {
      if (!event.target.closest('.site-header') && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });

    window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
  }

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 });

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      revealObserver.observe(element);
    });
    body.classList.add('motion-enabled');
  }

  const emailButton = document.querySelector('[data-copy-email]');
  if (emailButton) {
    const status = document.querySelector('[data-copy-status]');
    emailButton.addEventListener('click', async () => {
      const email = 'syhalini@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        if (status) {
          status.textContent = 'Email address copied.';
        }
      } catch {
        if (status) {
          status.textContent = `Copy unavailable. Email ${email} directly.`;
        }
      }
    });
  }
});
