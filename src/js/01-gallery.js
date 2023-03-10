import { galleryItems } from './gallery-items.js';
// Change code below this line

const divEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

//  1. створення і рендер розмітки на підставі масиву даних

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
     `;
    })
    .join('');
}

divEl.insertAdjacentHTML('afterbegin', galleryMarkup);

// 2. реалізація делегування на div і отримання url великого зображення

divEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  // перевірка на що саме відбувся клік
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // код бібліотеки
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  // закриття по Esc
  divEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

// divEl.addEventListener('keydown', onEscClick);

// function onEscClick(event) {
//   if (event.code === 'Escape') {
//     instance.close();
//   }
// }
