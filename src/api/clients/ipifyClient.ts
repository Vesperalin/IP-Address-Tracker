import axios from 'axios';

const ipifyClient = axios.create({
  baseURL: process.env.REACT_APP_IP_API_URL,
  params: {
    apiKey: process.env.REACT_APP_IP_API_KEY
  }
});

export { ipifyClient };
