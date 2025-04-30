document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBD = document.querySelector('.header-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const bdItems = document.querySelectorAll('.header-menu-list a');
  const menuItems = document.querySelectorAll('.hiden-menu a');

  // show bd
  if (menuOpenBD && backdrop) {
    menuOpenBD.addEventListener('click', () => {
      backdrop.classList.toggle('show');
      menuOpenBD.classList.toggle('close');
      if (menuOpenBD.classList.contains('close')) {
        return (document.body.style.overflow = 'hidden');
      }
      document.body.style.overflow = 'auto';
    });
  }

  if (menuItems && backdrop) {
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        removeActive(menuItems);
        item.classList.add('active');
      });
    });
    bdItems.forEach(item => {
      item.addEventListener('click', () => {
        removeActive(bdItems);
        item.classList.add('active');
      });
    });
  }

  function removeActive(menuItems) {
    menuItems.forEach(item => {
      item.classList.remove('active');
      backdrop.classList.remove('show');
      menuOpenBD.classList.remove('close');
      document.body.style.overflow = 'auto';
    });
  }
});
