import { refs } from './refs';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';

export function createGallery(images) {
  const createLi = images
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
  refs.galleryList.insertAdjacentHTML('beforeend', createLi);
  let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function clearGallery() {
  refs.galleryList.innerHTML = '';
}
export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export const errorMessage = msg => {
  iziToast.error({
    title: 'Error',
    position: 'topRight',
    message: msg,
  });
};
