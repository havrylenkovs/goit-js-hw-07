import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createMarkupGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createMarkupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryList.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.tagName !== "IMG") {
    return;
  }

  const image = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    ` <img src="${image}" width = "800" height = "600">`
  );
  instance.show();

  galleryList.addEventListener("keydown", closeModal);

  function closeModal(e) {
    if (e.code === "Escape") {
      galleryList.removeEventListener("keydown", closeModal);
      instance.close();
    }
  }
}
