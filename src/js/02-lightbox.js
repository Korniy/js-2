import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

//  1. створення і рендер розмітки на підставі масиву даних

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </div>
     `;
    })
    .join('');
}

listEl.insertAdjacentHTML('afterbegin', galleryMarkup);

// 2. реалізація делегування на div.

// listEl.addEventListener('click', onImageClick);

// function onImageClick(event) {
//   event.preventDefault();

// перевірка на що саме відбувся клік
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

// код бібліотеки

const lightbox = new SimpleLightbox('.gallery__item', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// }
