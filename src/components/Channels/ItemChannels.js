import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Programs from "./Programs/Programs";
import { format } from "date-fns";
import s from "./ItemChannels.module.css";
import { requestPrograms, setPrograms } from "../../lib/tv";

const ItemChannels = (props) => {
  const dispatch = useDispatch();

  const [programs, setProgram] = useState(false);
  const [perfectRequest, setPerfectRequest] = useState(false);

  const getPrograms = async () => {
    setProgram(!programs);

    if (!perfectRequest) {
      setPerfectRequest(true);
      const date = new Date().getTime();
      const dateFrom = format(date, "yyyy-MM-dd");
      const dateTo = format(date + 86400000, "yyyy-MM-dd");
      const programs = await requestPrograms(props.title, dateFrom, dateTo);
      dispatch(setPrograms(props.title, programs.data.programs));
    }
  };

  return (
    <div className={s.item} onClick={getPrograms}>
      <div className={s.item_channel}>
        <div
          className={s.item_channel__icon}
          style={{
            background: `no-repeat center/100% url(http://epg.domru.ru/${props.logo})`,
          }}
        ></div>
        <p>{props.title}</p>
      </div>
      {programs && <Programs title={props.title} />}
    </div>
  );
};

export default ItemChannels;
