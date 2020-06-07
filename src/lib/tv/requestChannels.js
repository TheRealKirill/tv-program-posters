import instance from "../api";

const requestChannels = () => {
  return instance.get("geodigit/list?domain=ekat&digit=0");
};

export default requestChannels;
