import React from "react";
import ReactDOM from "react-dom";
import "./App.less";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Manage from "./pages/admin/Manage";

ReactDOM.render(
    <Router>
        <Route path="/" />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Manage} />
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
