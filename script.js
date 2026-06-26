(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('.w2a-faq-item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (typeof sendHeight === 'function') {
        sendHeight();
      }
    });
  });
})();
