const imageGallery = [
    "https://images.pexels.com/photos/5745048/pexels-photo-5745048.jpeg",
    "https://images.pexels.com/photos/15925236/pexels-photo-15925236.jpeg",
    "https://images.pexels.com/photos/2752037/pexels-photo-2752037.jpeg"
];

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentImageindex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageindex];
}

updateImage();

nextButton.addEventListener('click', function() {
    currentImageindex = (currentImageindex + 1) % imageGallery.length;
    updateImage(); 
});

prevButton.addEventListener('click', function() {
    currentImageindex = (currentImageIndex - 1 + imageGallery.length) % imageGallery.length
    updateImage();
});