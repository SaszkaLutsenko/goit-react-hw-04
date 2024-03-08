import axios from 'axios';

const API_KEY = '9A6__VP6QjfEYnKkMdN6PNbH-ftbX9MJf5pRJm8p6I0';

axios.defaults.baseURL = `https://api.unsplash.com/`;
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 12,
};

export const fetchImages = async (params = {}) => {
  const { data } = await axios.get('search/photos/', {
    params,
  });
  return data;
};



