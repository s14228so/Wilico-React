import { combineReducers } from "redux";
import plans from "./plans";
import errors from "./errors";
const rootReducer = combineReducers({
  plans,
  errors
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
