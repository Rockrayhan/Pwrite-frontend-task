document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', event => {
      const parent = event.target.closest('.accordion-item');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });
  


  document.querySelector('.hamburger-menu').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
  });
  
  // Close the menu if a link is clicked
  document.querySelectorAll('.mobile-menu a, .mobile-menu button').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.remove('open');
    });
  });
  