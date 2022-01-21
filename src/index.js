import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import Melu from "./melu";

ReactDOM.render(
    <BrowserRouter>
        <Melu />
    </BrowserRouter>,
    document.getElementById("root")
);
