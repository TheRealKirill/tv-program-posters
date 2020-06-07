import { SET_CHANNELS, SET_PROGRAMS } from "./";
const initialState = {
  channels: [],
  programs: {},
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNELS: {
      return {
        ...state,
        channels: action.channels,
      };
    }
    case SET_PROGRAMS: {
      return {
        ...state,
        programs: { ...state.programs, [action.name]: action.obj },
      };
    }
    default: {
      return state;
    }
  }
};

export default tvReducer;
