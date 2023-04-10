import React, { Component } from "react";
import { Link } from "gatsby"
import GradeOne from '../img/grade-1.jpg';
import One from '../img/One.jpg';
import Two from '../img/Two.jpg';
import Three from '../img/Three.jpg';
import Apply from '../img/apply.png';
import ApplyTwo from '../img/apply2.png';
import WhatwedoOne from '../img/what-de-do-1.png';
import Whatwedotwo from '../img/what-de-do-2.png';
import WhatwedoThree from '../img/what-de-do-3.png';
import Doone from '../img/how-to-apply.jpg';
import DoTwo from '../img/do-2.png';
import DoThree from '../img/do-3.png';
import DoFour from '../img/do-4.png';
import DoFive from '../img/do-5.png';
import DoSix from '../img/do-6.png';
import DoSeven from '../img/do-7.png';
import DoEight from '../img/do-8.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Student from '../img/footer-vector/how-to-apply.jpg';
import ApproachOne from '../img/ApproachOne.png';
import TeamTwo from '../img/team-2.png';

import ACADEMIC1 from '../img/ACADEMIC1.svg';
import ACADEMIC2 from '../img/ACADEMIC2.svg';
import ACADEMIC3 from '../img/ACADEMIC3.svg';
import ACADEMIC4 from '../img/ACADEMIC4.svg';

import Skill1 from '../img/Skill-1.svg';
import Skill2 from '../img/Skill-2.svg';
import Skill3 from '../img/Skill-3.svg';
import Skill4 from '../img/Skill-4.svg';
import Skill5 from '../img/Skill-5.svg';

import OurApproach1 from '../img/Our-Approach-1.png';
import OurApproach2 from '../img/Our-Approach-2.png';
import OurApproach3 from '../img/Our-Approach-3.png';


import BannerTwo from '../img/banner/how-to-apply.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-how-to-apply.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-how-to-apply.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";



class HowToApply extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
              <Helmet>    
					<title>  How To Apply  </title> 
				</Helmet>
             <Navbar />
            <div className="pmp-profile-page how-to-apply-pageadd">
              
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
                                            <h3>LEAD THE CHARGE</h3>
                                            <h2>You can change the world.</h2>
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
                <section className='track-your-college bthgrade how-to-apply'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='track-your-college-left text-center'>
                                    <h3>APPLICATION PROCESS</h3>
                                    <h2>How to Apply </h2>
                                    <p>
                                        To ensure a truly personalized experience, we accept a limited number of students in each batch. Through our selective application process, we aim to identify students who are highly driven, multifaceted, and humble.
                                    </p>

                                </div>
                                <div className="Growth-Mindset-frame-middle">
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                       
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={One} />
                                            </div>
                                      
                                        <h4><span>Step 1</span>
                                            First Counseling<br /> Session</h4>

                                        <p>
                                            Attend a walk-through of the foreign application process and understand how you can leverage Athena for success.

                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Two} />
                                            </div>
                                      
                                        <h4><span>Step 2</span>
                                            Application <br />form
                                        </h4>

                                        <p>Complete our online application and schedule an interview with our team.</p> </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Three} />
                                            </div>
                                       
                                        <h4><span>Step 3</span>
                                            Personal <br />Interview
                                        </h4>

                                        <p>We evaluate your academic, extracurricular, and personal potential. Once we accept you, your parents will receive an enrollment form.
                                        </p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how-top-chose-a-oprtiom track-your-college new">
                    <div className="container">
                        <div className='track-your-college-left text-center'>
                            <h3>Why choose our program?</h3>
                            <h2>Helping our students to<br />
                                grow as scholars & leaders of tomorrow</h2>

                        </div>

                    </div>
                </section>
                <section className="our-team-middle-section about-athena  newnew bottom">

                    <div className="container">
                        <div className="our-team-middle-section2">

                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Skill1} alt="" />

                                    <p>Skill<br />development</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Skill2} alt="" />

                                    <p>Academic <br />exploration</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Skill3} alt="" />

                                    <p>360° holistic <br />immersion</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Skill4} alt="" />

                                    <p>Immaculate profile <br />development</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Skill5} alt="" />

                                    <p>College application<br /> process</p>
                                </div>
                            </div>
                            <div className='footer-top-map-img-button'>

                                <a className='footer-top-map-img-button-link' href='/about-the-program'> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* A JSX comment 
                <section className='what-we-do-section-page how-to-apply'>
                    <div className='what-we-do-section-page-left'>
                        <ul>
                            <li>
                                <div className="flip-box">
                                    <div className="flip-box-inner One">
                                        <div className="flip-box-front">
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />

                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flip-box">
                                    <div className="flip-box-inner One">
                                        <div className="flip-box-front">
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />

                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flip-box">
                                    <div className="flip-box-inner One">
                                        <div className="flip-box-front">
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />

                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flip-box">
                                    <div className="flip-box-inner One">
                                        <div className="flip-box-front">
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />

                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flip-box">
                                    <div className="flip-box-inner One">
                                        <div className="flip-box-front">
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />
                                            <img src={Doone} alt="" />

                                        </div>

                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <div className='what-we-do-section-page-right how-to-apply-page'>
                        <div className='what-we-do-section-page-right-middle'>
                            <div className='why-choese-us-home-page-heading'>
                                <h3>Why Athena?</h3>
                                <h2>We send the largest<br /> number of students to Ivy<br /> league from India every<br /> year</h2>
                                <p className="how-top-app">Our experts curate unique strategies for the students by merging our years of experience and expertise in multiple disciplines to help them get admission to top global universities.
                                </p>

                            </div>


                        </div>
                    </div>
                </section>*/}
                <section className="our-approach-page container our-approach-page container-new n">
                    <h2 className="text-center">Our Approach</h2>
                    <div className="our-approach-page-inner">
                        <div className="our-approach-page-inner-frame text-center">
                            <img src={OurApproach1} alt="" />
                            <h4>KNOW THYSELF</h4>
                            <p>Help you identify what sets you apart,</p>
                        </div>
                        <div className="our-approach-page-inner-frame text-center">
                            <img src={OurApproach2} alt="" />
                            <h4>PUSH THYSELF</h4>
                            <p>Push your own boundaries by focusing on incremental improvement.
                            </p>
                        </div>
                        <div className="our-approach-page-inner-frame text-center">
                            <img src={OurApproach3} alt="" />
                            <h4>KNOW THY SYSTEM</h4>
                            <p>Use our insider expertise to get into the world's best universities.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="our-program-how-to-apply track-your-college how-to-apply-bottom">
                    <div className="container">
                        <div className="track-your-college-left text-center">
                            <h3>Our Program</h3>
                            <h2>Personal Mentorship Program</h2>
                        </div>
                        <div className="Academic-roadmap-main-frame">
                            <div className="Academic-roadmap-main-frame-middle">
                                <div className="Academic-roadmap-main-frame-middle-left">
                                    <h4>ACADEMIC ROADMAP</h4>
                                    <p>We create a month-wise roadmap that organizes the student's academic and extracurricular activities in a systematic manner.</p>
                                    <div className="Academic-roadmap-main-frame-middle-left-border"></div>
                                </div>
                                <div className="Academic-roadmap-main-frame-middle-right">
                                    <div className="Academic-roadmap-main-frame-middle-right-img">
                                        <img src={ACADEMIC1} />
                                    </div>

                                </div>
                            </div>
                            <div className="Academic-roadmap-main-frame-middle">
                                <div className="Academic-roadmap-main-frame-middle-left">
                                    <h4>PROJECTS</h4>
                                    <p>
                                        We devise innovative projects determined by the student's specific passions and ensure execution to the highest standards of quality.

                                    </p>
                                    <div className="Academic-roadmap-main-frame-middle-left-border"></div>
                                </div>
                                <div className="Academic-roadmap-main-frame-middle-right">
                                    <div className="Academic-roadmap-main-frame-middle-right-img">
                                        <img src={ACADEMIC2} />
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="Academic-roadmap-main-frame">
                            <div className="Academic-roadmap-main-frame-middle">
                                <div className="Academic-roadmap-main-frame-middle-left">
                                    <h4>APPLICATION STRATEGY</h4>
                                    <p>We identify a distinct central theme or 'brand' that highlights the student's unique value-add in the application strategy.</p>
                                    <div className="Academic-roadmap-main-frame-middle-left-border"></div>
                                </div>
                                <div className="Academic-roadmap-main-frame-middle-right">
                                    <div className="Academic-roadmap-main-frame-middle-right-img">
                                        <img src={ACADEMIC3} />
                                    </div>

                                </div>
                            </div>

                            <div className="Academic-roadmap-main-frame-middle">
                                <div className="Academic-roadmap-main-frame-middle-left">
                                    <h4>ESSAYS</h4>
                                    <p>Through our highly creative, introspective process, we mentor our students on effectively presenting their human brand through artful personal essays.
                                    </p>
                                    <div className="Academic-roadmap-main-frame-middle-left-border"></div>
                                </div>
                                <div className="Academic-roadmap-main-frame-middle-right">
                                    <div className="Academic-roadmap-main-frame-middle-right-img">
                                        <img src={ACADEMIC4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-top-map-img-button'>

                            <Link className='footer-top-map-img-button-link' to='/about-the-program'> Know more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                        </div>
                    </div>
                </section>
                <section className="how-top-apply-page-last-student-section footer-banner-bottom-new">
                    <img src={Student} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Our world is rapidly changing.<br /> Our future will require critical<br /> thinkers, problem solvers, and dynamic,<br /> inspiring thought leaders.</p>
                                    <h4>Are you ready to lead the charge?</h4>
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
export default HowToApply;
