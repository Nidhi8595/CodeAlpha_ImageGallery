// Proceed Button Navigation
document.getElementById('proceedBtn').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const images = document.querySelectorAll('.gallery-container img');
let currentIndex = 0;

function showLightbox(index) {
  lightbox.classList.remove('hidden');
  lightboxImg.src = images[index].src;
  currentIndex = index;
}

images.forEach((img, i) => {
  img.addEventListener('click', () => showLightbox(i));
});

document.querySelector('.close').addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    images.forEach(img => {
      if (filter === 'all' || img.classList.contains(filter)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

document.getElementById('proceedBtn').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  document.getElementById('gallery').style.display = 'block';
});

// Toggle dark/light mode
document.getElementById('toggleModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Shuffle gallery images
document.getElementById('shuffleBtn').addEventListener('click', () => {
  const container = document.getElementById('gallery-container');
  const images = Array.from(container.querySelectorAll('img'));
  const shuffled = images.sort(() => 0.5 - Math.random());

  container.innerHTML = '';
  shuffled.forEach(img => container.appendChild(img));
});

