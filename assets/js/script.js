document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
  
    if (!menuIcon || !navLinks) {
      console.error('menu-icon or nav-links not found');
      return;
    }
  
    function openMenu(open) {
      if (open) {
        navLinks.classList.add('active');
        // swap FA icon (fa-bars -> fa-xmark). FA6 uses 'fa-xmark'
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        menuIcon.setAttribute('aria-expanded', 'true');
      } else {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        menuIcon.setAttribute('aria-expanded', 'false');
      }
    }
  
    // toggle on hamburger click
    menuIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !navLinks.classList.contains('active');
      openMenu(willOpen);
    });
  
    // close when a nav link is clicked
    navLinks.querySelectorAll('a[href]').forEach(a => {
      a.addEventListener('click', () => openMenu(false));
    });
  
    // close on outside click
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
        openMenu(false);
      }
    });
  
    // close on Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') openMenu(false);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.querySelector(".about-content");
    const aboutItems = document.querySelectorAll(".about-item");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutContent.classList.add("show");
  
          aboutItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
            }, index * 200); 
          });
  
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    observer.observe(aboutContent);
  });
  