import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "store";
import App from "./App";
import "./reset.css";
import MultiLiveBox from "components/multiLiveBox";
import MultiVideoBox from "components/multiVideoBox";
import LivePage from "pages/livePage";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

export { default as MultiLiveBox } from "components/multiLiveBox";
export { default as MultiVideoBox } from "components/multiVideoBox";
export { default as LivePage } from "pages/livePage";
