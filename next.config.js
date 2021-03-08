require('dotenv').config();
module.exports = {
    publicRuntimeConfig: {
      // Will be available on both server and client
      backendUrl: process.env.API_URL,
      apiKey : process.env.API_KEY,
    },
  }