import axios from 'axios';

export async function fetchData(searchQuery, page) {
  axios.defaults.baseURL = 'https://api.unsplash.com';

  const response = await axios.get('/search/photos', {
    params: {
      client_id: 'XlQHejxEb7aa8VHPbhkOCsQ5rLw_yC586ecpSv9njn0',
      query: searchQuery,
      page,
      per_page: 10,
      orientation: 'landscape',
    },
  });
  return response.data;
}



