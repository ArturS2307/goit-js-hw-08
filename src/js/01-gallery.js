import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', markup);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {return `<div class="gallery__item">
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

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, });