import instance from "../api";

const requestPrograms = (channel, dateFrom, dateTo) => {
  return instance.get(
    `search/common?domain=perm&query=${channel}&date_from=${dateFrom}&date_to=${dateTo}`
  );
};

export default requestPrograms;
