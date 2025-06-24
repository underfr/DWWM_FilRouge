/*------------------
Tranparent Scrollbar
------------------*/

window.addEventListener('scroll', function(){
    const link = document.querySelectorAll('.link');
    const head = document.querySelector('.head');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('.mainNav');
    const navUl = document.querySelector('.mainUl');
    if (window.scrollY > 50){
        head.classList.add('scrolled');
        logo.classList.add('none');
        nav.classList.add('navFull');
        navUl.classList.add('ulFull');
        link.forEach(link => {
            link.classList.add('linkBlack');
        });
    } else {
        head.classList.remove('scrolled');
        logo.classList.remove('none');
        link.forEach(link => {
            link.classList.remove('linkBlack');
        });
    }
});

/*------
Galerie
------*/
const photos = [
  {
    src: 'src/img/main.png',
    alt: 'Photo de mariage',
    titre: 'Mariage en Provence',
    description: 'Un moment magique capturé en été, en plein cœur de la Provence.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Photo de mariage',
    titre: 'Mariage en Provence',
    description: 'Un moment magique capturé en été, en plein cœur de la Provence.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Photo de mariage',
    titre: 'Mariage en Provence',
    description: 'Un moment magique capturé en été, en plein cœur de la Provence.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Photo de mariage',
    titre: 'Mariage en Provence',
    description: 'Un moment magique capturé en été, en plein cœur de la Provence.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/main.png',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  },
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.nav-btn.left');
const nextBtn = document.querySelector('.nav-btn.right');

let currentIndex = 0;

function showPhoto(index) {
  const photo = photos[index];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.alt;
  lightboxTitle.textContent = photo.titre;
  lightboxDescription.textContent = photo.description;
}

function openLightbox(index) {
  currentIndex = index;
  lightbox.classList.add('active');

  const content = lightbox.querySelector('.lightbox-content');
  content.style.animation = 'none';
  void content.offsetWidth;
  content.style.animation = 'popupIn 0.3s forwards';

  showPhoto(currentIndex);
}

function closeLightbox() {
  const content = lightbox.querySelector('.lightbox-content');
  content.style.animation = 'popupOut 0.3s forwards';
  setTimeout(() => {
    lightbox.classList.remove('active');
  }, 300);
}

// Génère la galerie
photos.forEach((photo, index) => {
  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.alt;
  img.title = photo.titre;

  img.addEventListener('click', () => openLightbox(index));

  gallery.appendChild(img);
});

// Navigation
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

// Fermeture
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
