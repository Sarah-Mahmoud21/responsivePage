function toggleMenu() {
    let content = document.getElementsByClassName('boxes')[0];
    let button = document.getElementById('filters');
    let overlay = document.getElementById('overlay');
  
    let computedStyle = window.getComputedStyle(content);
    let body = document.body;
  
    if (window.innerWidth <= 1023) {
      if (computedStyle.display === 'none') {
        content.style.display = 'block';
        button.innerHTML = '<i class="fas fa-bars"></i>' + ' Hide filters';
        body.style.overflow = 'hidden';
        overlay.style.display = 'block'; 
        overlay.style.zIndex = '1'; 
      } else {
        content.style.display = 'none';
        button.innerHTML = '<i class="fas fa-bars"></i>' + ' Show filters';
        body.style.overflow = 'auto'; // Enable scrolling
        overlay.style.display = 'none'; 
      }
    } else {
      // If the screen size is above the large breakpoint, toggle the menu without overlay
      if (computedStyle.display === 'none') {
        content.style.display = 'block';
        button.innerHTML = '<i class="fas fa-bars"></i>' + ' Hide filters';
      } else {
        content.style.display = 'none';
        button.innerHTML = '<i class="fas fa-bars"></i>' + ' Show filters';
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('overlay').addEventListener('click', function () {
      toggleMenu();
    });
  });
  