import { refs } from './refs';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

export function createGallery(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
      <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}"  />
      </a>
       <ul class="description-list">
      <li class="description-item"> likes <p>${likes}</p> </li>
      <li class="description-item"> views <p>${views}</p></li>
      <li class="description-item"> comments <p>${comments}</p></li>
      <li class="description-item"> downloads <p>${downloads}</p> </li>
      </ul>
      </li>
      `
    )
    .join('');
}
export const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
export function clearGallery() {
  refs.galleryList.innerHTML = '';
}
export function showLoader() {
  refs.span.classList.remove('hidden');
}
export function hideLoader() {
  refs.span.classList.add('hidden');
}

export const errorMessage = msg => {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: msg,
  });
};
