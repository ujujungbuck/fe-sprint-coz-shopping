import axios from "axios";

const instance = axios.create({
  baseURL: "http://cozshopping.codestates-seb.link/api/v1/Products?",
});

export default instance;
