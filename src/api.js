// src/api.js
import axios from "axios";

const API_URL =
  "https://free-ap-south-1.cosmocloud.io/development/api/employee";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    projectId: "66af25ef4399726caf526563",
    environmentId: "66af25ef4399726caf526564",
  },
});

export default axiosInstance;
