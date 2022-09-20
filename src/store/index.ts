import { combineReducers } from "redux";
import MainLiveReducer from "./mainLiveReducers";

const rootReducer = combineReducers({
    MainLiveReducer,
});

export default rootReducer;
export type RootReducerType = ReturnType<typeof rootReducer>;
