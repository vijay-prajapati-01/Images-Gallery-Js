
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


const images = [
    { src: './images/image1.jpg', alt: 'Image 1' },
    { src: './images/image2.jpg', alt: 'Image 2' },
    { src: './images/image3.jpg', alt: 'Image 3' },
    { src: './images/image4.jpg', alt: 'Image 4' },
    { src: './images/image5.jpg', alt: 'Image 5' },
    { src: './images/image6.jpg', alt: 'Image 6' },
    { src: './images/image7.jpg', alt: 'Image 7' },
    { src: './images/image8.jpg', alt: 'Image 8' },
    { src: './images/image9.jpg', alt: 'Image 9' }
];

let currentIndex = 0;

document.querySelectorAll('.image-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}


function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].alt;
}


function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].alt;
}


closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        showNext();
    } else if (e.key === 'ArrowLeft') {
        showPrev();
    }
});