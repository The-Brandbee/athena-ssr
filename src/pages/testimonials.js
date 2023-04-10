import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/testimonials.jpg';
import WhyUsOne from '../img/alumini-1-3.jpg';
import VideoWhy from '../img/video.jpg';
import LogoThree from '../img/tab-logo-3.jpg';
import StudentTwo from '../img/apply.png';
import StudentOne from '../img/apply4.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ResultOne from '../img/result-1.jpg';
import aboutathenaTwo from '../img/about-athena-2.jpg';
import TeamTwo from '../img/team-2.png';
import Marquee from "react-fast-marquee";
import ResultLogoOne from '../img/result-logo.jpg';
import ResultLogoTwo from '../img/result-logo2.jpg';
import ResultLogoThree from '../img/result-logo3.jpg';
import ResultLogoFour from '../img/result-logo4.jpg';
import ResultLogoFive from '../img/result-logo5.jpg';


import BannerTwo from '../img/banner/testimonials.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import AboutAthenaPlatform from "../container/AboutAthenaPlatform";
import STUDENTTESTIMONIALS from "../container/STUDENTTESTIMONIALS";
import ParentsTestimonials from "../container/ParentsTestimonials";
import VideoTestimonials from "../container/VideoTestimonials.js";

import MobileTop from '../img/mobilebanner/mobile-testimonials.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-testimonials.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";


class Testimonials extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <>
              <Helmet>
					<title>  Testimonials </title>        
				</Helmet> 
             <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page admissions-us why-us">
               
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left'>
                                        <div className='second-banner-changehover-left2'>
                                            <h3>WHY WE DO <br />WHAT WE DO.</h3>
                                            <h2>Helping our students <br />achieve their goals!</h2>
                                        </div>
                                    </div>
                                    <div className='second-banner-changehover-right'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-section MobileD none">
                    <img src={MobileTop} alt="" />
                </div>
                <section className="our-team-middle-section about-athena TOp">
                    <div className="pmp-profile-page-middle-section">
                        <div className="heading-contact-middle">
                            <h3>Student Testimonials</h3>
                            <h2>Here is what our students have to say!</h2>
                        </div>
                        <STUDENTTESTIMONIALS />
                    </div>
                </section>
                <section className='Testimonials-home-middle Parents-Testimonials-section testimonials-mainpage'>

                    <div className='Testimonials-home-middle-right track-your-college mobile none'>
                        <div className='track-your-college-left te-page'>
                            <h3>Parents Testimonials</h3>
                            <h2>Hear what our happy <br />parents have to say!</h2>
                            <p>

                                We take pride in how we support not only our students, but also their families. Hear about their experiences.  </p>

                        </div>
                    </div>
                    <div className='Testimonials-home-middle-left'>
                        <ParentsTestimonials />
                    </div>
                    <div className='Testimonials-home-middle-right track-your-college desktop'>
                        <div className='track-your-college-left te-page'>
                            <h3>Parents Testimonials</h3>
                            <h2>Hear what our happy <br />parents have to say!</h2>
                            <p>

                                We take pride in how we support not only our students, but also their families. Hear about their experiences.  </p>

                        </div>
                    </div>
                </section>
                <section className="Video-Testimonials-page">
                    <div className="heading-contact-middle">
                        <h3>Video Testimonials</h3>
                        <h2>Hear from our students and parents directly!</h2>
                    </div>
                    <VideoTestimonials />
                </section>
                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>
                                        Strengthening our community and <br />working toward becoming<br /><span>#BetterThanYesterday</span>
                                    </p>
                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation session <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="Mobile footer-banner none">
                    <a target="_blank" href='https://calendly.com/athenaeducation/counseling-webinar'>
                        <img src={MobileFooter} alt="" />
                    </a>
                </div>



            </div>
            <Footer />
            </>
        );
    }
}
export default Testimonials;
