import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:4400/api",
  baseURL: "https://asterevangadi.cyclic.app/api",

  // baseURL: "https://nice-pear-hedgehog-fez.cyclic.app",
  // baseURL: "https://calm-hare-galoshes.cyclic.app",
});

export default axiosBase;
