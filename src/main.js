import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  lightbox,
  errorMessage,
} from './js/render-functions';
import { refs } from './js/refs';

refs.form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const input = event.target.elements['search-text'].value.trim();
  clearGallery();
  if (input === '') {
    errorMessage('Невалидный ввод');
    return;
  }
  showLoader();
  getImagesByQuery(input)
    .then(data => {
      if (data.hits.length === 0) {
        return errorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      refs.galleryList.insertAdjacentHTML(
        'beforeend',
        createGallery(data.hits)
      );
      lightbox.refresh();
    })
    .catch(error =>
      errorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      )
    )
    .finally(() => {
      hideLoader();
    });
}
