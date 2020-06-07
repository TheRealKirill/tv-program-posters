import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { tvReducer } from "./lib/tv";

const reducers = combineReducers({
  tv: tvReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
