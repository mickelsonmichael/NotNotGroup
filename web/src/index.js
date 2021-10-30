import React from "react";
import { render } from "react-dom";
import App from "./App";

const Index = () => (
    <App />
);

const root = document.getElementById("root");

render(<Index />, root);
