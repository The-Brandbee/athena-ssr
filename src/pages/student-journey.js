import React, { Component } from "react";
import { Link } from "gatsby"
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import MoneyG from '../img/MoneyG.gif';
import MoneyGM from '../img/ikigai-gif-mobile.gif';
import Student from '../img/footer-vector/student-journey.jpg';

import counseling1 from '../img/Bespoke-counseling-1.jpg';
import counseling2 from '../img/Bespoke-counseling-2.jpg';
import counseling3 from '../img/Bespoke-counseling-3.jpg';
import counseling4 from '../img/Bespoke-counseling-4.jpg';


import ApproachTwo from '../img/ApproachOne2.png';
import Testimonials from '../component/Home/Testimonials';
import StudentJouMob from '../container/StudentJouMob.js';
import StudentJou from '../container/StudentJou.js'; 
import BannerTwo from '../img/banner/student-journey.jpg';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-student-journey.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-student-journey.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";



class StudentJourney extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
              <Helmet>
					<title>  Student Journey  </title> 
				</Helmet>

             <Navbar />
            <div className="pmp-profile-page student-journey-add">
               
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left'>
                                        <div className='second-banner-changehover-left2 small-banner'>

                                            <h2>We transform the </h2>
                                            <h3>STUDENTS OF TODAY</h3>
                                            <p>into leaders of tomorrow

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

                <section className='track-your-college bthgrade how-to-apply student-journey'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='track-your-college-left text-center'>
                                    <h3>Personal Mentorship Program</h3>
                                    <h2>Bespoke counseling  you deserve</h2>
                                    <p>By leveraging tech, analytical metrics, and in-house expertise, we wish to: </p>
                                </div>
                                <div className="how-top-chose-a-oprtiom-middle-frame student-journey-page">
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={counseling1} />
                                        <p>Get students into the <span>best universities in the world</span></p>
                                        <div className="border-apply-page"></div>
                                    </div>
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={counseling2} />
                                        <p>Provide <span>holistic</span> academic immersion</p>
                                        <div className="border-apply-page"></div>
                                    </div>
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={counseling3} />
                                        <p>Personalize our program to <span>students’ unique needs</span> </p>
                                        <div className="border-apply-page"></div>
                                    </div>
                                    <div className="how-top-chose-a-oprtiom-middle-frame-middle">
                                        <img src={counseling4} />
                                        <p>Push students to grow into <span>conscientious young adults</span></p>
                                        <div className="border-apply-page"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
                <section className="how-top-chose-a-oprtiom track-your-college student-jou">
                    <div className='track-your-college-left text-center'>
                        <h3>Our Student Journey</h3>
                        <h2>We're with you, every step of the way!</h2>
                    </div>
                    <div className="studentjoun-frame-tab desktop">
                        <StudentJou />
                    </div>
                    <div className="studentjoun-frame-tab mobile none">
                        <StudentJouMob />
                    </div>
                </section>


                <section className="our-program-how-to-apply track-your-college">
                    <div className="container">
                        <div className="track-your-college-left text-center">
                            <h3>YOUR DRIVING PURPOSE</h3>
                            <h2>We help you discover your Ikigai</h2>
                            <p>Our expert consultants hold one-on-one sessions with each student to get a profound knowledge of their personality, interests, skills, etc. We believe in the concept of Ikigai, which loosely translates to “purpose” or “calling”—your North Star for good decision-making.</p>
                            <p>The evaluation results of Each student's Ikigai lies at the intersection of specifically four circles:</p>
                        </div>

                    </div>
                    <div className="MoneyG-gif-frame">
                        <img className="desktopMoneyG" src={MoneyG} />
                        <img className="MobileMoneyG none" src={MoneyGM} />
                    </div>
                </section>
                <section className='Testimonials-home-middle student-journeypage'>
                    <div className='Testimonials-home-middle-right track-your-college mobile none'>
                        <div className='track-your-college-left'>
                            <h3>Testimonials</h3>
                            <h2>What people are saying <br />about us!</h2>
                            <p>We take pride in what we do to groom the future leaders of tomorrow. Here is what our happy parents, students, counsellors and others have to say about Athena Education and the milestones we have reached. </p>
                            <div className='track-your-college-left-link'>
                                <Link className='footer-top-map-img-button-link ' to='/testimonials'> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='Testimonials-home-middle-left'>
                        <Testimonials />
                    </div>
                    <div className='Testimonials-home-middle-right track-your-college desktop'>
                        <div className='track-your-college-left'>
                            <h3>Testimonials</h3>
                            <h2>What people are saying <br />about us!</h2>
                            <p>We take pride in what we do to groom the future leaders of tomorrow. Here is what our happy parents, students, counsellors and others have to say about Athena Education and the milestones we have reached. </p>
                            <div className='track-your-college-left-link'>
                                <Link className='footer-top-map-img-button-link ' to='/testimonials'> Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="admission-to-your-dream-university-frame">
                    <div className="admission-to-your-dream-university-frame-middle container">
                        <div className="admission-to-your-dream-university-frame-middle-left">
                            <p>You are just a step away from your  <span>dream university.</span></p>
                        </div>
                        <div className="admission-to-your-dream-university-frame-middle-right what-we-do-section-page">
                            <div className='footer-top-map-img-button'>

                                <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation
                                    <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="how-top-apply-page-last-student-section footer-banner-bottom-new">
                    <img src={Student} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>
                                        <span>Discover your <br />true potential</span><br />

                                        with Athena!</p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>

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
export default StudentJourney;
