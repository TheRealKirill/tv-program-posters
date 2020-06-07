import { SET_PROGRAMS } from "./";

const setPrograms = (name, obj) => ({
  type: SET_PROGRAMS,
  name,
  obj,
});

export default setPrograms;
