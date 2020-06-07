import React from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import s from "./Programs.module.css";

const Programs = (props) => {
  const programsList = useSelector((state) => state.tv.programs[props.title]);

  const createListPrograms = () => {
    return programsList.map((item) => {
      const datePars = item.start.split(" ");
      const time = datePars[1].split(":");
      const date = datePars[0];
      const todey = format(new Date().getTime(), "yyyy-MM-dd");
      return (
        <div className={s.item} key={item.start}>
          <div className={s.item_program}>{item.ptitle}</div>
          <div className={s.item_date}>
            {todey === date
              ? `Сегодня в ${time[0]}ч ${time[1]}м`
              : `${date} в ${time[0]}ч ${time[1]}м`}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {programsList &&
        (programsList.length ? (
          createListPrograms()
        ) : (
          <div className={s.item}>Программа недоступна</div>
        ))}
    </div>
  );
};

export default Programs;
