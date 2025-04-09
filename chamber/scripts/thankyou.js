document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const detailsList = document.getElementById('thankyou-details');
  
    if (!detailsList) return;
    detailsList.innerHTML = '';

    params.forEach((value, key) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> ${decodeURIComponent(value)}`;
        detailsList.appendChild(li);
      });

      const title = document.getElementById('thankyou-modal-title');
  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
  }
});
