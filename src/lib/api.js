import axios from "axios";

const instance = axios.create({
  baseURL: "http://epg.domru.ru/",
});

export default instance;
