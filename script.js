(function () {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.querySelector('.close-menu');

  function openMenu() {
    mobileMenu.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
