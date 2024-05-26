document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', event => {
      const parent = event.target.closest('.accordion-item');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });
  