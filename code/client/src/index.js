import React from "react";
import ReactDOM from "react-dom";
import "./App.less";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import ArticleManage from "./pages/admin/article/ArticleManage";
import ArticleAdd from "./pages/admin/article/ArticleAdd";
import ArticleEdit from "./pages/admin/article/ArticleEdit";
import ClassifyManage from "./pages/admin/classify/ClssifyManage";
import ClassifyAdd from "./pages/admin/classify/ClassifyAdd";
import ClassifyEdit from "./pages/admin/classify/ClassifyEdit";
import Home from "./pages/home/Home";
import CodeShare from './pages/home/CodeShare'
import HappyWriting from "./pages/home/HappyWriting";
import PersonalFiles from "./pages/home/PersonalFiles";
import AboutMe from "./pages/home/AboutMe";
import Article from './pages/home/Article'

ReactDOM.render(
    <Router>
        <Route path="/" exact component={Home}/>
        <Route path='/codeshare' component={CodeShare}></Route>
        <Route path='/happywriting' component={HappyWriting}></Route>
        <Route path='/personalfiles' component={PersonalFiles}></Route>
        <Route path='/aboutme' component={AboutMe}></Route>
        <Route path='/article' component={Article}></Route>
        <Route path="/login" component={Login} />
        <Route path="/admin/article" exact component={ArticleManage} />
        <Route path="/admin/article/add" exact component={ArticleAdd} />
        <Route path="/admin/article/edit" exact component={ArticleEdit} />
        <Route path="/admin/classify" exact component={ClassifyManage} />
        <Route path="/admin/classify/add" exact component={ClassifyAdd} />
        <Route path="/admin/classify/edit" exact component={ClassifyEdit} />
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
