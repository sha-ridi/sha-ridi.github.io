document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    const menuItems = document.querySelectorAll('.menu-list li');
    const backButtons = document.querySelectorAll('.btn-back');
  
    function hideAllScreens() {
      screens.forEach(screen => {
        screen.classList.remove('active');
      });
    }
  
    function showScreen(id) {   
        hideAllScreens();
      
        const targetScreen = document.getElementById(id);
      
        if (targetScreen) {
          targetScreen.classList.add('active');
        } else {
        }
      }
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        showScreen(targetId);
      });
    });
  
    backButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        showScreen(targetId);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggleBtn');
    toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.innerText === '← ON →') {
        btn.innerText = '← OFF →';
      } else {
        btn.innerText = '← ON →';
      }
    });
    button.addEventListener('touchstart', () => {
      button.classList.add('hover');
    });
    button.addEventListener('touchend', () => {
      button.classList.remove('hover');
    });
    button.addEventListener('touchcancel', () => {
      button.classList.remove('hover');
    });
  });

  
});



  