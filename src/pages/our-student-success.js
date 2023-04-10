import React, { Component } from "react";
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/student-success.jpg';
import TestiTwo1 from '../img/our-student-success-6.png';
import TestiTwo2 from '../img/our-student-success-7.png';
import TestiTwo3 from '../img/our-student-success-8.png';
import BannerTwo from '../img/banner/student-success.jpg';
import SCHOLARSHIP1 from '../img/our-student-success-1.jpg';
import SCHOLARSHIP2 from '../img/our-student-success-2.jpg';
import SCHOLARSHIP3 from '../img/our-student-success-3.jpg';
import initiatives1 from '../img/our-student-success-4.jpg';
import initiatives2 from '../img/our-student-success-5.jpg';
import STUDENTTESTIMONIALSsuccess from "../container/STUDENTTESTIMONIALSsuccess";
import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-student-success.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-student-success.jpg';
import { Helmet } from "react-helmet";  
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class OurStudentSuccess extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
               <Helmet>
					<title>  Our Student Success  </title> 
				</Helmet>
            <Navbar />
            <div className="pmp-profile-page">
              
                <div className="banner-section OurStudentSuccess-bannernewpage desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left grade-add-design-frame'>


                                        <div className='second-banner-changehover-left2'>

                                            <h3>Our results </h3>
                                            <h2>speak louder than <br />words!</h2>
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
                <section className="our-team-middle-section about-athena new">
                    <div className="pmp-profile-page-middle-section">
                        <div className='container'>
                            <div className="heading-contact-middle">
                                <h3>CASE STUDIES</h3>
                                <h2>Here are some of our successful <br />scholars’ profiles</h2>
                            </div>
                        </div>
                        <STUDENTTESTIMONIALSsuccess />
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container our-student-success">
                    <div className="heading-contact-middle">
                        <h3>SCHOLARSHIP CASE STUDY</h3>
                        <h2>The proud accomplishments of our scholars!
                        </h2>

                    </div>

                </div>
                <section className="The-proud-accomplishments-frame new">
                    <div className='container'>
                        <div className="The-proud-accomplishments-frame-middle">
                            <div className="The-proud-accomplishments-frame-left">
                                <img src={SCHOLARSHIP1} alt="" />
                            </div>
                            <div className="The-proud-accomplishments-frame-right">
                                <div className="The-proud-accomplishments-frame-right-top-frame">
                                    <div className="The-proud-accomplishments-frame-right-top-frame-left">
                                        <img src={TestiTwo1} alt="" />
                                    </div>
                                    <div className="The-proud-accomplishments-frame-right-top-frame-right">
                                        <h4>TULIP MITTAL
                                        </h4>
                                        <p>
                                            University of California, Los Angeles '26 | Athena '22
                                        </p>
                                    </div>
                                </div>
                                <div className="The-proud-accomplishments-frame-right-top-frame-bottom">
                                    <p>
                                        In her book, Tulip dissects the socio-economic nuances of various fads and trends that we are surrounded by. Trends happen for a reason; maybe we start them or maybe we get carried by their sway. Tulip seeks to explore the cascading effects of giving into cultural trends that are irresistible. But what exactly unfolds when all of us seek to be a part of unique cultural phenomena that hold sway over the world?

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="The-proud-accomplishments-frame The-proud-accomplishments-framesec new">
                    <div className='container'>
                        <div className="The-proud-accomplishments-frame-middle AAMISH-A-BEG">
                            <div className="The-proud-accomplishments-frame-left">
                                <img src={SCHOLARSHIP2} alt="" />
                            </div>
                            <div className="The-proud-accomplishments-frame-right">
                                <div className="The-proud-accomplishments-frame-right-top-frame">
                                    <div className="The-proud-accomplishments-frame-right-top-frame-left">
                                        <img src={TestiTwo2} alt="" />
                                    </div>
                                    <div className="The-proud-accomplishments-frame-right-top-frame-right">
                                        <h4>AAMISH A. BEG
                                        </h4>
                                        <p>
                                            Dartmouth, '26 | Athena '22
                                        </p>
                                    </div>
                                </div>
                                <div className="The-proud-accomplishments-frame-right-top-frame-bottom">
                                    <p>
                                        Aamish co-founded Socale, an engaging and inclusive social networking app currently based in San Diego, and backed by the Blackstone LaunchPad startup incubator. Socale matches like-minded individuals based on several filters, including personality, interests, values, and habits.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="The-proud-accomplishments-frame new">
                    <div className='container'>
                        <div className="The-proud-accomplishments-frame-middle">
                            <div className="The-proud-accomplishments-frame-left">
                                <img src={SCHOLARSHIP3} alt="" />
                            </div>
                            <div className="The-proud-accomplishments-frame-right">
                                <div className="The-proud-accomplishments-frame-right-top-frame">
                                    <div className="The-proud-accomplishments-frame-right-top-frame-left">
                                        <img src={TestiTwo3} alt="" />
                                    </div>
                                    <div className="The-proud-accomplishments-frame-right-top-frame-right">
                                        <h4>RIA BHATNAGAR
                                        </h4>
                                        <p>
                                            Brown University, '26 | Athena '22

                                        </p>
                                    </div>
                                </div>
                                <div className="The-proud-accomplishments-frame-right-top-frame-bottom new">
                                    <p>
                                        Ria sang "Omar Sharif" for Tony award-winning musical, "The Band's Visit". She won the second position in the American Protege International Vocal Competition '21. This achievement also led her to perform at Carnegie Hall.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container our-student-success">
                    <div className="heading-contact-middle">

                        <h2>  Some of our scholars’ initiatives </h2>

                    </div>

                </div>
                <section className="STUDENTACCOLADES-sectuon admissions-results-scholarships new b">
                    <div className='container'>
                        <div className="STUDENTACCOLADES-sectuon-middle">

                            <div className="STUDENTACCOLADES-sectuon-middle-left-inner">
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-left">
                                    <img src={initiatives1} alt="" />
                                </div>
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-right">
                                    <h4>SHE DARES
                                    </h4>
                                    <p><b>Ayesha Dhall</b> (The Shri Ram School '20) organized a series of events to empower women and encourage them to push their boundaries by engaging in adventure sports. She is now studying at Stanford University.
                                    </p>
                                </div>
                            </div>
                            <div className="STUDENTACCOLADES-sectuon-middle-left-inner">
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-left">
                                    <img src={initiatives2} alt="" />
                                </div>
                                <div className="STUDENTACCOLADES-sectuon-middle-left-inner-right">
                                    <h4>ANVESHA</h4>
                                    <p><b>Amiya Jain</b>  founded Anvesha with a vision to tackle the social stigmas surrounding drug addiction and mental health. Amiya graduated from the University of Pennsylvania.
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Book a session with us to start <br />your journey to one of the <br /><span>elite universities of the <br />world.</span><br /></p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
export default OurStudentSuccess;
