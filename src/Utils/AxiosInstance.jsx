import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1', // Use HTTPS for secure connections
  headers: {
    "Content-Type": "application/json",
    "key": "87a7f6cf7ac6474b8fb134942231309", // Rename "key" to "apikey"
  },
  timeout: 3000, // Define timeout here, outside of the headers object
});

export default AxiosInstance;

