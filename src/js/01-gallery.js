// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

//* Solution

const galleryEl = document.querySelector(".gallery");

galleryEl.style.listStyle = "none";

const imageItemsEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", imageItemsEl);

const lightbox = new SimpleLightbox(".gallery a", {
  closeText: "&times;",
  captions: true, 
  captionsData: "alt", 
  captionDelay: 250, 
  history: true,
  enableKeyboard: true, 
  close: true, 
});