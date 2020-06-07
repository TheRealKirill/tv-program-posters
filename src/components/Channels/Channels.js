import React from "react";
import { useSelector } from "react-redux";
import ItemChannels from "./ItemChannels";
import s from "./Channels.module.css";

const Channels = () => {
  const channels = useSelector((state) => state.tv.channels);

  const createListChannels = () => {
    return channels.map((item) => (
      <ItemChannels key={item.chid} title={item.title} logo={item.logo} />
    ));
  };

  return <div className={s.item}>{createListChannels()}</div>;
};

export default Channels;
