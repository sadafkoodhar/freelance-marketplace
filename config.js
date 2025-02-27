const config = {
  API_URL: process.env.NODE_ENV === 'production' 
    ? 'https://freelance-hub-api.onrender.com'
    : 'http://localhost:5000/api'
};

export default config; 