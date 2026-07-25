(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var backToTop = document.getElementById('backToTop');
  var yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header compact state ---------- */
  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    if (backToTop) {
      if (window.scrollY > 600) {
        backToTop.hidden = false;
        requestAnimationFrame(function () { backToTop.classList.add('is-visible'); });
      } else {
        backToTop.classList.remove('is-visible');
        window.setTimeout(function () {
          if (!backToTop.classList.contains('is-visible')) backToTop.hidden = true;
        }, 250);
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Scroll-spy ---------- */
  if (sections.length && navLinks.length) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            var match = link.getAttribute('href') === '#' + id;
            link.classList.toggle('is-active', match);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { spyObserver.observe(section); });
  }

  /* ---------- Reveal-on-scroll animations ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 60 + 'ms';
      revealObserver.observe(el);
    });
  }

  /* ---------- Project accordions ---------- */
  var accordionToggles = Array.prototype.slice.call(document.querySelectorAll('.accordion-toggle'));
  accordionToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (panel) panel.hidden = isOpen;
    });
  });
})();
