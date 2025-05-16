function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }

  // Optional: close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.menu-wrapper').contains(event.target);
    if (!isClickInside) {
      document.getElementById('dropdownMenu').style.display = 'none';
    }
  });
