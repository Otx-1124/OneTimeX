// src/api/api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "https://currtime.onrender.com/api",
  baseURL: "https://api.onetimex.in/api/v1",
  // baseURL: "http://localhost:5500/api/v1",
  withCredentials: true, 
});

export default api;
