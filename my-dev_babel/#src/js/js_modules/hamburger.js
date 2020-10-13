// HEADER MENU BURGER
function hamburgerMenu() {
   const navLinks = document.querySelector('.nav-links'),
      hamburger = document.querySelector('.hamburger')

   if (hamburger) {
      hamburger.addEventListener('click', () => {
         navLinks.classList.toggle('open');
         hamburger.classList.toggle('active');
         if (hamburger.classList.contains(active)) {
            document.body.style.overflow = 'hidden'
         } else { document.body.style.overflow = '' }
      });
   }
}
