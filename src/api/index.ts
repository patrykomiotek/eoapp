import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/appR1T6x0KWpg335k';
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: 'Bearer keyaXt4qtmUYjZljo',
  },
});
