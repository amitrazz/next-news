import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
});
console.log(publicRuntimeConfig.apiKey);
console.log(publicRuntimeConfig.backendUrl);
instance.defaults.headers.common['X-Api-Key'] = publicRuntimeConfig.apiKey;
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;