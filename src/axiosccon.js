import axios from "axios";

const axiosBase = axios.create({
  
  baseURL: "https://geospatial.cyclic.app/api",
});

export default axiosBase;
