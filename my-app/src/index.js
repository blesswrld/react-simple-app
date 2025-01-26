import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const text = "Hello World!";

const elem = (
  <div>
    <h2 className="header">Text: {text}</h2>
    <input type="text"></input>
    <label htmlFor=""></label>
    <button tabIndex="0">Click</button>
    {/* <button/> if you want button without content*/}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
