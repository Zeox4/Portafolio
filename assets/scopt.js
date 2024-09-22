document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementById('modal-close-btn'); // Botón de cierre
    const images = document.querySelectorAll('.clickable-image');

    // Mostrar el modal al hacer clic en una imagen
    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = image.src;
            modalTitle.textContent = image.getAttribute('data-title');
            modalDescription.textContent = image.getAttribute('data-description');
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    modal.addEventListener('click', (event) => {
        const isClickInside = event.target.closest('.modal-content-container');
        if (!isClickInside) {
            modal.style.display = 'none';
        }
    });
});