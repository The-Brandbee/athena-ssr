import React, { Component } from "react";

import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/students-banner-13.jpg';
import WhyUsOne from '../img/why-us-1.jpg';
import VideoWhy from '../img/video.jpg';
import LogoThree from '../img/tab-logo-3.jpg';
import LogoFour from '../img/tab-logo-4.jpg';
import LogoFive from '../img/tab-logo-5.jpg';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ApproachTwo from '../img/alumini-1-2.jpg';
import AdmissionsNew from '../img/our-story-1.jpg';
import ProfileOne from '../img/profile-1.jpg';
import ProfileTwo from '../img/profile-2.jpg';
import Apply from '../img/apply3.png';
import PromiseOne from '../img/what-we-do-1.jpg';


import BannerTwo from '../img/banner-2.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import VerticalCarousel from "../container/VerticalCarousel.js";
import data from "../container/data.json";

class Calendar extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="pmp-profile-page our-team-page admissions-page admissions-us why-us">
                <React.StrictMode>
                    <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
                </React.StrictMode>
            </div >
        );
    }
}
export default Calendar;
