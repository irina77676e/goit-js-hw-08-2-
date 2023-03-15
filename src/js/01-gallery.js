// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

 import SimpleLightbox from 'simplelightbox';
 import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${preview}">
          <img
            class="gallery__image"
            src="${original}"
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
  }).join('');
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250'});
gallery.on('show.simplelightbox', function () {
	// Do something…
});
