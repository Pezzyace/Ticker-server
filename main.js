window.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementById('closeModal');

  modal.style.display = 'block';

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});