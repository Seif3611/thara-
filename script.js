const popup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = Array.from(document.querySelectorAll('.popup-img'));

let currentIndex = 0;

// Show popup with selected image
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    popup.style.display = 'flex';
  });
});

function showImage(index) {
  popupImg.src = images[index].src;
}

// Close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Click outside image closes popup
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Next image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});


