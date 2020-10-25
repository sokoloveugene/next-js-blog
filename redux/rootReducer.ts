import { postKeepReducer } from "./PostKeep/PostKeepReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  savedPosts: postKeepReducer,
});

export default rootReducer;
