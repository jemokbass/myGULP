//MODAL_WINDOW
const modals = () => {
   function bindModal(triggerSelector, modalSelector, closeSelector) {
      const trigger = document.querySelectorAll(triggerSelector),
         modal = document.querySelector(modalSelector),
         close = document.querySelector(closeSelector);
      trigger.forEach(i => {
         i.addEventListener('click', (e) => {
            if (e.target) {
               e.preventDefault();
            }
            modal.classList.add('active')
            document.body.style.overflow = 'hidden'
         })
      })
      close.addEventListener('click', () => {
         modal.classList.remove('active')
         document.body.style.overflow = ''
      })
      modal.addEventListener('click', (e) => {
         if (e.target === modal) {
            modal.classList.remove('active')
            document.body.style.overflow = ''
         }
      })
   }
   bindModal('.modal-btn', '.modal', '.close-btn');
}
