import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, Routes
} from "react-router-dom";
import Home from "./Home.js";
import Navbar from "../component/Home/Navbar.js";
import "../css/style.css"
import "../css/Mobile.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Home/Footer.js"; 
import ReactGA from "react-ga4"; 


export default class App extends Component {

    render() {
    const TRACKING_ID = 'G-EY1S647KBZ';
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/" });  
        return (

            <div>    
                <Navbar />
                <Home /> 
                <Footer />
            </div >
        );
    }
}


