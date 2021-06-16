import axios from 'axios';

const numPerPage = 12;
const apiKey = '21693687-d312e4baa20e789348b176d28';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&
  image_type=photo&orientation=horizontal&per_page=${numPerPage}`;

export const getImages = async (searchTerm, page) => {
  try {
    const response = await axios.get(apiUrl + `&q=${searchTerm}&page=${page}`);

    const result = response.data.hits.map(hit => ({
      id: hit.id,
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL
    }));
    return result;
  } catch (error) {
    return [];
  }
};

// delay added so that spinner wil be visible
export const getImagesWithDelay = async (searchTerm, page, delay) => {
  return getImages(searchTerm, page).then(sleeper(delay));
};

const sleeper = ms => {
  return function (x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
};
