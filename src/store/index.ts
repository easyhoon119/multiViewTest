import { combineReducers } from "redux";
import MainLiveReducer from "./mainLiveReducers";
import MainVideoReducer from "./mainVideoReducers";
import NowMediaQueryReducer from "./mediaQueryReducers";

const rootReducer = combineReducers({
    MainLiveReducer,
    MainVideoReducer,
    NowMediaQueryReducer,
});

export default rootReducer;
export type RootReducerType = ReturnType<typeof rootReducer>;
