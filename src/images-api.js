import axios from "axios";

const API_KEY = '41777094-15d23fa072ac8c02efe5e3565'
 
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = { client_id: API_KEY, per_page: 12};

export const featchImages = async (params = {}) => {
    const { data } =  await axios.get('search/photos/', { params });
    return data;
};
