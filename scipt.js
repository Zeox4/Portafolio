document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    // Agregar evento de clic y touch a cada imagen
    document.querySelectorAll('.clickable-image').forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = "flex"; // Mostrar modal
            modalImg.src = this.src; // Establecer la imagen en el modal
        });

        image.addEventListener('touchstart', function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Cerrar el modal cuando se hace clic en la "X"
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar modal al hacer clic fuera de la imagen
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});