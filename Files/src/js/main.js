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
        nav.classList.remove('navFull');
        navUl.classList.remove('ulFull');
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
    src: 'src/img/photos/img1.jpg',
    alt: 'Porsche Jägermeister orange n°64 sur le circuit de Nogaro lors d’un événement automobile classique',
    titre: 'Légende Orange à Nogaro',
    description: 'Un moment vibrant immortalisé lors des Classic Days sur le circuit Paul Armagnac de Nogaro. Cette Porsche Jägermeister, symbole de la course historique, attire les regards autant par ses lignes que par son héritage.'
  },
  {
    src: 'src/img/photos/img2.jpg',
    alt: 'Scène du spectacle Les Mousquetaires de Richelieu au Puy du Fou avec un cavalier masqué sur un cheval blanc et une danseuse en robe rouge',
    titre: 'Cavalier et Danseuse – Les Mousquetaires',
    description: 'Un instant suspendu du spectacle Les Mousquetaires de Richelieu, capturé au cœur du Puy du Fou. Un cavalier masqué surgit dans une scène flamboyante, entre théâtre, danse et prouesse équestre.'
  },
  {
    src: 'src/img/photos/img3.jpg',
    alt: 'Scène du spectacle Le Dernier Panache au Puy du Fou, représentant un soldat face à une ligne de tir, dans un décor de mur de pierre et de forêt',
    titre: 'Sous le Feu de l’Histoire',
    description: 'Moment intense du spectacle Le Dernier Panache, où le héros vendéen affronte l’inévitable au cœur d’une scène théâtrale saisissante. Entre éclats de poudre et silence dramatique, l’histoire prend vie avec émotion et puissance visuelle.'
  },
  {
    src: 'src/img/photos/img4.jpg',
    alt: 'Lamborghini verte garée au circuit de Nogaro, photographiée sous un ciel bleu et en pleine lumière',
    titre: 'L\'Attente du Rugissement',
    description: 'Sous le soleil du circuit Paul Armagnac de Nogaro, cette Lamborghini vert acide attire les regards, immobile mais prête à bondir. L’élégance italienne rencontre la passion mécanique dans ce moment de calme avant la tempête.'
  },
  { 
    src: 'src/img/photos/img5.jpg',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/photos/img6.jpg',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  },
  {
    src: 'src/img/photos/img7.jpg',
    alt: 'Photo de mariage',
    titre: 'Mariage en Provence',
    description: 'Un moment magique capturé en été, en plein cœur de la Provence.'
  },
  {
    src: 'src/img/photos/img8.jpg',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/photos/img9.jpg',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  },
  {
    src: 'src/img/photos/img10.jpg',
    alt: 'Photo de mariage',
    titre: 'Mariage en Provence',
    description: 'Un moment magique capturé en été, en plein cœur de la Provence.'
  },
  {
    src: 'src/img/photos/img11.jpg',
    alt: 'Portrait en studio',
    titre: 'Portrait d\'artiste',
    description: 'Lumière douce et atmosphère intimiste pour ce portrait.'
  },
  {
    src: 'src/img/photos/img12.jpg',
    alt: 'Paysage de montagne',
    titre: 'Lever de soleil',
    description: 'La lumière dorée éclaire les sommets enneigés.'
  }
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

// Lightbox galerie
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

// Fermeture lightbox
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
