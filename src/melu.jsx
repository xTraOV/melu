import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";

//import pages//
import ProductListPageAll from "./pages/product-list-all.page";
import ProductListPageMen from "./pages/product-list-men.page";

//styles//
import "./melu.style.scss";
import ProductListPageWomen from "./pages/product-list-women.page";
import HomePage from "./pages/home.page";
import AuthPage from "./pages/authentication.page";

const Melu = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route
                    exact
                    path='/products/all'
                    component={ProductListPageAll}
                />
                <Route
                    exact
                    path='/products/men'
                    component={ProductListPageMen}
                />
                <Route
                    exact
                    path='/products/women'
                    component={ProductListPageWomen}
                />
                <Route 
                    exact 
                    path='/authentication'
                component={AuthPage}/>
            </Switch>
        </div>
    );
};

export default Melu;
