import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store'; // Make sure to import your store
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
