import axios from 'axios';
export function getImagesByQuery(query) {
  const keyApi = '54610826-258ca21fce67e24d1b909df87';

  return axios
    .get(`https://pixabay.com/api/`, {
      params: {
        key: keyApi,
        per_page: 21,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
