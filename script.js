window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('scroll-nav');
    } else {
      nav.classList.remove('scroll-nav');
    }
  });

// Obtén el contenedor de la galería y los botones de control
const gallery = document.querySelector('.gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variables para controlar el índice de la imagen visible
let currentIndex = 0;
const totalItems = document.querySelectorAll('.gatito').length;
const itemWidth = 320;  // Ancho de cada imagen + margen (300px + 20px)

function updateGalleryPosition() {
  const offset = -currentIndex * itemWidth;  // Calcula el desplazamiento
  gallery.style.transform = `translateX(${offset}px)`;  // Aplica el desplazamiento
}


// Función para mover el carrusel hacia la izquierda
prevButton.addEventListener('click', () => {
    gallery.scrollBy({
      left: -320,  // Ajusta el valor según el tamaño de las tarjetas
      behavior: 'smooth',  // Suaviza el desplazamiento
    });
  });
  
  // Función para mover el carrusel hacia la derecha
  nextButton.addEventListener('click', () => {
    gallery.scrollBy({
      left: 320,  // Ajusta el valor según el tamaño de las tarjetas
      behavior: 'smooth',
    });
  });

// Agrega los eventos de clic a los botones
// prevButton.addEventListener('click', moveToPrev);
// nextButton.addEventListener('click', moveToNext);
