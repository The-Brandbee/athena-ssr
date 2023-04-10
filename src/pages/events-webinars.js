import React, { Component } from "react";
import { Link } from "gatsby"
import BannerTwo from '../img/banner/resources.jpg';
import Students from '../img/students-banner-199.jpg';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import PastEvents from "../container/PastEvents";
import UpcomingEvents from "../container/UpcomingEvents.js";
import MobileTop from '../img/mobilebanner/Mobile-Resorces.jpg';
import MobileFooter from '../img/mobilebanner/mobile-footer-banner-resources.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class Resources extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <>
               <Helmet>
					<title>  events webinars  </title>   
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
                                    <div className='second-banner-changehover-left' style={{ width: "50%" }}>
                                        <div className='second-banner-changehover-left2'>
                                            <h2>Get a glimpse of our</h2>
                                            <h3 style={{ color: "#107869" }}>WEBINARS & WORKSHOPS</h3>
                                            <p>Dive into engaging sessions that will shift your perspective and sharpen your skill!
</p>

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
                <section className="Book-now-resources-page UpcomingEvents-page">
                    <div className="container">
                        <div className="heading-contact-middle">
                            <h3>UPCOMING EVENTS</h3>
                            <h2>Book now for our upcoming webinars & workshops</h2>
                        </div>
                        <div className="Book-now-resources-page-Past-Events UpcomingEvents">
                            <UpcomingEvents />
                        </div>

                    </div>
                </section>
                <section className="Book-now-resources-page-Past-Events">
                    <div className="container">
                        <div className="heading-contact-middle">
                            <h3>PAST EVENTS</h3>
                            <h2>Take a look at our past webinars & workshops</h2>
                        </div>

                        <PastEvents />


                    </div>
                </section>
                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>
                                    Athena Education is a <br /><span> leading education <br /> consulting firm </span> <br /> modeled after the Ivy League with <br/> 
students in 15 countries.

                                    </p>
                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a className='footer-top-map-img-button-link' href='#'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
export default Resources;
