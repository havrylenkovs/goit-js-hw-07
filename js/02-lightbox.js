import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createMarkupGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});