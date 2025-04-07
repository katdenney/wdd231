import { setupModals } from './modal.js';
import { getTimeStamp } from './timestamp.js';
document.addEventListener('DOMContentLoaded', ()=> {
    setupModals();
    getTimeStamp();
    setupFormSubmission();
});
function setupFormSubmission() {
    const form = document.getElementById('form');
    const thankYouModal = document.getElementById('thankyou-modal');
    const thankYouDetails = document.getElementById('thankyou-details');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Extract form data
        const formData = new FormData(form);
        thankYouDetails.innerHTML = ''; // Clear previous data

        // Populate the modal with form data
        formData.forEach((value, key) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
            thankYouDetails.appendChild(listItem);
        });

        // Show the modal
        if (thankYouModal && typeof thankYouModal.showModal === 'function') {
            thankYouModal.showModal();
        }
    });
}