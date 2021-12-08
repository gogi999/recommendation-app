import axios from 'axios';

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

const googleBooksApi = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?',
    params: {
        filter: 'partial',
        maxResults: 10,
        key: apiKey
    }
});

export default googleBooksApi;
