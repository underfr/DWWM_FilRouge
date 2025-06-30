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
    src: './src/img/photos/img1.JPG',
    alt: 'Porsche Jägermeister orange n°64 sur le circuit de Nogaro lors d’un événement automobile classique',
    titre: 'Légende Orange à Nogaro',
    description: 'Un moment vibrant immortalisé lors des Classic Days sur le circuit Paul Armagnac de Nogaro. Cette Porsche Jägermeister, symbole de la course historique, attire les regards autant par ses lignes que par son héritage.'
  },
  {
    src: './src/img/photos/img2.JPG',
    alt: 'Scène du spectacle Les Mousquetaires de Richelieu au Puy du Fou avec un cavalier masqué sur un cheval blanc et une danseuse en robe rouge',
    titre: 'Cavalier et Danseuse – Les Mousquetaires',
    description: 'Un instant suspendu du spectacle Les Mousquetaires de Richelieu, capturé au cœur du Puy du Fou. Un cavalier masqué surgit dans une scène flamboyante, entre théâtre, danse et prouesse équestre.'
  },
  {
    src: './src/img/photos/img3.JPG',
    alt: 'Scène du spectacle Le Dernier Panache au Puy du Fou, représentant un soldat face à une ligne de tir, dans un décor de mur de pierre et de forêt',
    titre: 'Sous le Feu de l’Histoire',
    description: 'Moment intense du spectacle Le Dernier Panache, où le héros vendéen affronte l’inévitable au cœur d’une scène théâtrale saisissante. Entre éclats de poudre et silence dramatique, l’histoire prend vie avec émotion et puissance visuelle.'
  },
  {
    src: './src/img/photos/img4.JPG',
    alt: 'Lamborghini verte garée au circuit de Nogaro, photographiée sous un ciel bleu et en pleine lumière',
    titre: 'L\'Attente du Rugissement',
    description: 'Sous le soleil du circuit Paul Armagnac de Nogaro, cette Lamborghini vert acide attire les regards, immobile mais prête à bondir. L’élégance italienne rencontre la passion mécanique dans ce moment de calme avant la tempête.'
  },
  { 
    src: './src/img/photos/img5.JPG',
    alt: 'Audi R8 immobile à Nogaro, prête à rugir sous le soleil',
    titre: 'La promesse d\'un éclair blanc sur l\'asphalte de Nogaro',
    description: 'Sous le ciel azur de Nogaro, elle attend silencieusement, telle une panthère blanche prête à bondir. La lumière danse sur sa carrosserie, ses lignes fusent déjà vers l\'horizon. Entre l\'ombre du paddock et l’appel du circuit, elle incarne l\'élégance brute et la passion mécanique, figée dans un souffle avant le rugissement.'
  },
  {
    src: './src/img/photos/img6.JPG',
    alt: 'Scène des Mousquetaires de Richelieu au Puy du Fou, entre brume et faste royal',
    titre: 'Quand l\'épée danse et la brume murmure, la cour s\'éveille',
    description: 'Sous le velours rouge et les drapés royaux, la brume se lève comme un souffle mystérieux. Le chevalier, dressé fièrement sur sa monture immaculée, tend la main vers la danseuse éprise d\'ombre et de lumière. Au sommet, la cour observe, figée dans une élégance baroque, tandis que la scène se mue en un poème vivant. Ici, chaque geste est une révérence, chaque regard un serment, et chaque pas un écho du passé qui résonne dans l\'âme.'
  },
  {
    src: './src/img/photos/img7.JPG',
    alt: 'Spectacle des Mousquetaires de Richelieu au Puy du Fou, un ballet d\'épées et de soie',
    titre: 'Quand l\'eau chante, que l\'épée scintille et que les éventails murmurent',
    description: 'Dans une symphonie d\'eau et de lumière, les danseuses tourbillonnent comme des flammes vives, tandis que les mousquetaires gardent leur prestance d\'acier. Le cavalier blanc s\'avance, noble et silencieux, témoin d\'une cour où l\'honneur se danse et la passion s\'invente. Derrière le rideau de pourpre, le temps semble suspendu, figé dans une révérence éternelle. Ici, chaque goutte devient note, chaque pas une déclaration, et chaque sourire une promesse à l\'histoire.'
  },
  {
    src: './src/img/photos/img8.JPG',
    alt: 'Comète traversant un ciel étoilé profond, fugace et lumineuse',
    titre: 'Un souffle d’éternité, une comète qui murmure au silence des étoiles',
    description: 'Dans le vaste océan nocturne, une lueur déchire l’infini, traçant un vœu muet que seuls les rêveurs peuvent entendre. La comète glisse, libre et éphémère, messagère d’un autre monde. Chaque étoile l’observe, figée dans sa propre éternité, tandis qu’elle ose une danse fulgurante avant de disparaître. Un instant suspendu, une poésie cosmique qui unit la nuit à l’âme.'
  },
  {
    src: './src/img/photos/img9.JPG',
    alt: 'Drakkar en flammes dans le spectacle des Vikings au Puy du Fou, explosion de feu et de bravoure',
    titre: 'Le cri du feu et l\'écho des sagas vikings, quand l’océan s’enflamme',
    description: 'Sous les hurlements du vent et le souffle ardent des flammes, le drakkar se consume, digne et furieux. Les guerriers tombent, se relèvent, dansent avec la mort et l’écume, portés par une histoire écrite dans le sang et le feu. Au-dessus, la fumée dessine des runes invisibles, messagères d’un passé indomptable. Ici, chaque braise raconte la gloire d’un peuple, chaque flamme scande la promesse d’un retour.'
  },
  {
    src: './src/img/photos/img10.JPG',
    alt: 'Gladiateurs saluant César dans l\'arène du Puy du Fou, flamme et honneur antiques',
    titre: 'Ave Caesar, morituri te salutant — l\'ultime révérence avant le combat',
    description: 'Quand le sable brûle et que les flammes lèchent le ciel, les gladiateurs avancent, l’âme déjà offerte au destin. Leurs pas résonnent comme un écho funeste dans l’arène, tandis que le peuple retient son souffle. « Ave Caesar, morituri te salutant », lancent-ils d’une voix grave, offrande finale à un empire qui se nourrit du sang et de la gloire. Ici, chaque flamme devient serment, chaque regard un adieu silencieux, et chaque instant un fragment d’éternité.'
  },
  {
    src: './src/img/photos/img11.JPG',
    alt: 'Rapace noble posé sur un perchoir, regard tourné vers l’horizon',
    titre: 'Le souffle du vent et la promesse du ciel dans un seul regard',
    description: 'Immobile et souverain, il scrute l’horizon d’un œil patient et indomptable. Sa silhouette se découpe dans la lumière, promesse d’un envol silencieux et puissant. Chaque plume raconte un voyage, chaque battement d’aile contient un rêve d’infini. À cet instant, il est le gardien des cieux, témoin muet des secrets que la terre murmure au vent.'
  },
  {
    src: './src/img/photos/img12.JPG',
    alt: 'Lézard émergeant parmi les feuilles, curieux et immobile dans la lumière',
    titre: 'Le gardien silencieux de l’ombre verte',
    description: 'Parmi les feuilles dansantes, un éclat d’émeraude se fige, souverain et secret. Ses écailles racontent des contes anciens, écrits dans la moiteur des jungles oubliées. Immobile, il scrute l’invisible, gardien patient des mystères de la forêt. À cet instant, la nature retient son souffle, et le temps se plie à son regard ancestral.'
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
