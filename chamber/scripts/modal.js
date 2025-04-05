export function setupModals() {
    const modalLinks = document.querySelectorAll('.membership-link');
    const modals = document.querySelectorAll('dialog');
    //open
    modalLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const modalId = link.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal && typeof modal.showModal === 'function') {
                modal.showModal();
            }
        });
    });
    //close
    modals.forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.close();
            }
        });
        //escape
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape' && modal.open) {
                modal.close();
            }
        });
    });
}