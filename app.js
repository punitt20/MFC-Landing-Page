const navLinks = document.querySelectorAll('.navbar .menu li a');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
    navLinks.forEach((link) => {
      link.classList.add('scrolled');
    });
  } else {
    navLinks.forEach((link) => {
      link.classList.remove('scrolled');
    });
  }
});