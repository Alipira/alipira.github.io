/* ============================================================
   site.js — shared behaviour: theme toggle, reveal, year stamp
   No storage APIs, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* Theme: follows the operating system by default. The button
     flips it for this visit only — nothing is persisted. */
  var root = document.documentElement;
  var btn = document.querySelector('.theme-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
      root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    });
  }

  /* Reveal on scroll, skipped entirely when reduced motion is set. */
  var items = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('on'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  /* Footer year */
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
