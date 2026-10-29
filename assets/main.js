/**
 * Libra Elevadores - Core JavaScript
 * Lightweight, fast, accessible animations, mobile menu, and progressive SPA routing.
 */

(function () {
  'use strict';

  // 1. Reveal on Scroll Animation (IntersectionObserver)
  function initReveal() {
    const revealElements = document.querySelectorAll('.will-change-transform.translate-y-6');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => {
        el.classList.remove('translate-y-6', 'opacity-0');
        el.classList.add('translate-y-0', 'opacity-100');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('translate-y-6', 'opacity-0');
          entry.target.classList.add('translate-y-0', 'opacity-100');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // 2. Mobile Menu Handling
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!btn || !nav) return;

    function toggleMenu(open) {
      const isOpen = typeof open === 'boolean' ? open : nav.classList.contains('hidden');
      if (isOpen) {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
        btn.setAttribute('aria-expanded', 'true');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      } else {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
        btn.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      }
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close on navigation link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(false);
    });
  }

  // 3. Header Scroll Effect
  function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }, { passive: true });
  }

  // 4. Client-side Navigation Enhancement (Fast, smooth transitions without full reload on HTTP/S)
  function initPageTransitions() {
    // Only enable if hosted on HTTP or HTTPS, not local file:// protocol
    if (!window.location.protocol.startsWith('http')) return;

    document.addEventListener('click', async (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Skip external links, hash anchors, mailto, tel, whatsapp
      if (
        link.target === '_blank' ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('https://wa.me') ||
        href.startsWith('http://') ||
        href.startsWith('https://') && !href.startsWith(window.location.origin)
      ) {
        return;
      }

      // Handle internal navigation
      e.preventDefault();
      try {
        const res = await fetch(href);
        if (!res.ok) throw new Error('Fetch failed');
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const newMain = doc.getElementById('main-content');
        const currentMain = document.getElementById('main-content');

        if (newMain && currentMain) {
          // Cross-fade animation
          currentMain.style.opacity = '0';
          currentMain.style.transition = 'opacity 0.2s ease-out';

          setTimeout(() => {
            currentMain.innerHTML = newMain.innerHTML;
            document.title = doc.title;
            window.history.pushState({}, '', href);
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update active links
            updateActiveLinks(href);

            // Animate in
            currentMain.style.opacity = '1';

            // Re-run animations
            initReveal();
          }, 200);
        } else {
          window.location.href = href;
        }
      } catch (err) {
        console.warn('Transition error, falling back:', err);
        window.location.href = href;
      }
    });

    window.addEventListener('popstate', async () => {
      try {
        const res = await fetch(window.location.pathname);
        if (!res.ok) return;
        const text = await res.text();
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const newMain = doc.getElementById('main-content');
        const currentMain = document.getElementById('main-content');
        if (newMain && currentMain) {
          currentMain.innerHTML = newMain.innerHTML;
          document.title = doc.title;
          updateActiveLinks(window.location.pathname);
          initReveal();
        }
      } catch (e) {
        window.location.reload();
      }
    });
  }

  function updateActiveLinks(path) {
    const cleanPath = path.split('#')[0].split('?')[0].replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    const links = document.querySelectorAll('header nav a, footer nav a');
    links.forEach(link => {
      const linkHref = (link.getAttribute('data-route') || link.getAttribute('href') || '').replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      const isMatch = (cleanPath === '' || cleanPath === '/' || cleanPath === 'index') 
        ? (linkHref === '/' || linkHref === 'index' || linkHref === '')
        : (linkHref !== '/' && cleanPath.endsWith(linkHref));

      if (isMatch) {
        link.classList.add('text-primary');
        link.classList.remove('text-foreground/80');
        link.setAttribute('data-status', 'active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('text-primary');
        link.classList.add('text-foreground/80');
        link.removeAttribute('data-status');
        link.removeAttribute('aria-current');
      }
    });
  }

  // Initialize all features on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initMobileMenu();
    initHeaderScroll();
    initPageTransitions();
  });

  // Fast fallback if DOM is already ready
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initReveal();
    initMobileMenu();
    initHeaderScroll();
    initPageTransitions();
  }
})();
