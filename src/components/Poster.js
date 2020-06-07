import React from "react";
import { useDispatch } from "react-redux";
import { requestChannels, setChannels } from "../lib/tv";
import Channels from "./Channels/Channels";

const Poster = () => {
  const dispatch = useDispatch();

  const getChannels = async () => {
    const { data } = await requestChannels();
    console.log(data);
    dispatch(setChannels(data));
  };
  getChannels();

  return <Channels />;
};

export default Poster;
