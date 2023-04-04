// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const takeEllement = document.querySelector('.gallery');
console.log(takeEllement);

let listGallery = '';
galleryItems.forEach((item) => {
    listGallery += 
    `       
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>
`
});

takeEllement.insertAdjacentHTML('afterbegin', listGallery);

   const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });