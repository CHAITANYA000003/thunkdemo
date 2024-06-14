import App from "./App";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer/reducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
