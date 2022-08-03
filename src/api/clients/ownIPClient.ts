import axios from 'axios';

const onwIPClient = axios.create({
  baseURL: 'https://geolocation-db.com',
});

export { onwIPClient };
