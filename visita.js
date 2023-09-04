let currentImageIndex = 0;
const images = ['imagens/amigos.jpeg', 'imagens/caminho.jpeg', 'imagens/ceu.jpeg', 'imagens/foto.jpeg', 'imagens/porco 2.jpeg', 'imagens/turma.jpeg', 'imagens/vacas.jpeg'
, 'imagens/verde.jpeg', 'imagens/coelho.jfif', 'imagens/céu1.jfif'];

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = images.indexOf(imageSrc);

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

// Fecha o modal ao clicar fora da imagem
const modal = document.getElementById('myModal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
