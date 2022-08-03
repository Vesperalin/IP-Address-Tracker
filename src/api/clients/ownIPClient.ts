import axios from 'axios';

const onwIPClient = axios.create({
  baseURL: process.env.REACT_APP_GEOLOCATION_URL,
});

export { onwIPClient };
