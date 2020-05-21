import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {HashRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Manage from "./pages/admin/Manage";

ReactDOM.render(
    <Router>
        <Route path="/"/>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Manage} />
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
