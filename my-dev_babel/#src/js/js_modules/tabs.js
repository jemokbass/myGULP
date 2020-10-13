//TABS
const tabs = (headerSelector, tabSelector, contentSelector) => {
   const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

   function hideTabContent() {
      content.forEach(item => {
         item.classList.remove('active')
      })
      tab.forEach(item => {
         item.classList.remove('active')
      })
   }
   function showTabContent(i = 0) {
      content[i].classList.add('active');
      tab[i].classList.add('active');
   }
   hideTabContent();
   showTabContent();

   header.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target
      if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
         target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
         tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
               hideTabContent();
               showTabContent(i);
            }
         })
      }
   })
}
