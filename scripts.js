document.getElementById('toggle-btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const isVisible = sidebar.style.transform === 'translateX(0px)';
    sidebar.style.transform = isVisible ? 'translateX(-100%)' : 'translateX(0)';
});

document.querySelectorAll('.modal-btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';

        // Initialize the current image index
        currentIndex = 0;
        updateModalImage();
    });
});

document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Image navigation logic
const images = [
    "Captura de pantalla 2024-08-16 1.png",
    "Captura de pantalla 2024-08-16 2.png",
    "Captura de pantalla 2024-08-16 4.png",
    "Captura de pantalla 2024-12-25 5.png",
    "Captura de pantalla 2024-12-25 6.png",
    "Captura de pantalla 2024-12-25 7.png",

    "Captura de pantalla 2024-12-25 13.png",
    "Captura de pantalla 2024-12-25 14.png",
    "Captura de pantalla 2024-12-25 15.png",
    "UC-266c45ca-d582-4113-8919-7186dc354550.jpg",
    "UC-92801e38-0111-4331-a261-3b69bba30ba0 (1).jpg",
    "UC-92801e38-0111-4331-a261-3b69bba30ba0.jpg",
    "UC-fa29bc3d-a0f2-4db8-b6cb-5033f0fc6aa9.jpg"
];

let currentIndex = 0;

function updateModalImage() {
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[currentIndex];
}

document.getElementById('prev-btn').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
});

document.getElementById('next-btn').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
});
