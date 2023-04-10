import React, { Component } from "react";
import { Link } from "gatsby"
import BannerTwo from '../img/banner/profile-development.jpg';
import ProfileOne from '../img/profile-1.jpg';
import ProfileTwo from '../img/profile-2.jpg';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import profiledevelopment1 from '../img/profile-development1.jpg';
import profiledevelopment2 from '../img/profile-development2.jpg';
import profiledevelopment3 from '../img/profile-development3.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-profile-development.jpg';
import { Helmet } from "react-helmet"; 
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";


class ProfilePresentation extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Navbar />
            <div className="pmp-profile-page profile-development-page profile-development">
                 <Helmet>
					<title>  Profile Development  </title> 
				</Helmet>
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
                                            <h3>BUILD YOUR BRAND</h3>
                                            <h2>to stand out</h2>

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
                <div className="pmp-profile-page-middle-section container">
                    <div className="heading-contact-middle">
                        <h3>Profile Development </h3>
                        <h2>Discover your true potential</h2>
                        <p className="Our-experts">Our experts develop a comprehensive profile strategy based on your<br /> innate capabilities. To design your theme, we:</p>


                    </div>
                    <div className="tab-pmp-profilr profile-development-fianl">
                        <div class="student-top-collage-section-us-uk-left-tow-border"></div>
                        <Accordion allowZeroExpanded>
                          
                                <AccordionItem>

                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <h3>ASSESS</h3>
                                            <p>Your interests, strengths, and goals</p>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>



                                    <AccordionItemPanel >
                                        <div className="tab-first-frame">
                                            <div className="tab-first-frame-middle">
                                                <h4>Psychometric <br />test</h4>
                                                <p>We use a data-backed personality assessment tool to identify what makes you tick.</p>
                                                <div className="tab-border"></div>
                                            </div>
                                            <div className="tab-first-frame-middle">
                                                <h4>Autobiography of a Student</h4>
                                                <p>
                                                    The Autobiography of a Student (AoS) is a set of exploratory questions we use to evaluate your academic performance, extracurricular activities, awards, honors, etc.
                                                </p>
                                                <div className="tab-border"></div>
                                            </div>
                                            <div className="tab-first-frame-middle">
                                                <h4>Deep Autobiography of a Student</h4>
                                                <p>
                                                    The Deep Autobiography of a Student uncovers your pivotal life experiences and how they’ve shaped your values and ambitions.
                                                </p>
                                                <div className="tab-border"></div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>

                                </AccordionItem>
                           
                                <AccordionItem>

                                    <AccordionItemHeading>

                                        <AccordionItemButton>
                                            <h3>STRATEGIZE</h3>
                                            <p> The application theme</p>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>


                                    <AccordionItemPanel>
                                        <div className="tab-first-frame three">
                                            <div className="main-n">
                                                <div className="tab-first-frame-middle">
                                                    <h4>Design the student brand</h4>
                                                    <p>
                                                        The Application Theme and Strategy acts as a blueprint for your profile that outlines a comprehensive plan and execution framework for your academic milestones, capstone projects, and work experience.
                                                    </p>
                                                    <div className="tab-border"></div>
                                                </div>
                                                <div className="tab-first-frame-middle">
                                                    <h4>Student roadmap </h4>
                                                    <p>
                                                        All profile elements are organized in a roadmap that systematically outlines timelines and weekly tasks.

                                                    </p>
                                                    <div className="tab-border"></div>
                                                </div>
                                            </div>
                                            <div className="main-n">
                                                <div className="tab-first-frame-middle">
                                                    <h4>Work experience </h4>
                                                    <p>
                                                        We identify internships, apprenticeships, and research-assistant opportunities within our network of organizations across industries.
                                                    </p>

                                                    <div className="tab-border"></div>
                                                </div>
                                                <div className="tab-first-frame-middle">
                                                    <h4>Summer programs </h4>
                                                    <p>
                                                        We facilitate summer program admission to elite institutions, including Wharton, MIT, Stanford, and Brown.
                                                    </p>
                                                    <div className="tab-border"></div>
                                                </div>
                                            </div>
                                            <div className="main-n">
                                                <div className="tab-first-frame-middle">
                                                    <h4>Standardized test planning</h4>
                                                    <p>
                                                        Our consultants use data to guide school subject selection and standardized testing strategies to position you as a competitive candidate at the top colleges. </p>
                                                    <div className="tab-border"></div>
                                                </div>

                                            </div>

                                        </div>
                                    </AccordionItemPanel>

                                </AccordionItem>
                           
                                <AccordionItem>

                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <h3>EXECUTE</h3>
                                            <p>Bespoke Mentorship</p>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel >
                                        <div className="tab-first-frame new-four">
                                            <div className="tab-first-frame-middle">
                                                <h4>Weekly one-on-one check-ins</h4>
                                                <p>
                                                    Our experienced specialists meet you at least once a week to drive your progress, make key profile decisions, and ensure you’re on track.  </p>
                                                <div className="tab-border"></div>
                                            </div>
                                            <div className="tab-first-frame-middle">
                                                <h4>Time management and prioritization</h4>
                                                <p>
                                                    We guide you on managing your busy schedule to minimize stress while facilitating smooth project completion.  </p>
                                                <div className="tab-border"></div>
                                            </div>
                                            <div className="tab-first-frame-middle">
                                                <h4>Experiential learning
                                                </h4>
                                                <p>
                                                    We hone your technical and soft skills through interactive, hands-on Academy Workshops in which you produce tangible projects to be included in your application.
                                                </p>
                                                <div className="tab-border"></div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>

                                </AccordionItem>
                           
                        </Accordion>
                    </div>
                </div>
                <section className="project-profile-development-frame profile-development-page">

                    <div className="project-profile-development-frame-right">
                        <div className="project-profile-development-frame-righttwo">
                            <div className="heading-contact-middle">
                                <h3>Projects and Academies </h3>
                                <h2>Discover your true potential</h2>
                                <p>To truly stand out from the crowd, we believe that you must undertake unique, interdisciplinary projects and initiatives that not only channel your creativity and skill set, but also create a strong social impact. You will work on a few of the following projects: </p>
                            </div>
                            <div className="project-profile-development-bottom-ul-list">
                                <ul>
                                    <li>Research Paper</li>
                                    <li>Leadership Project</li>
                                    <li>Astrophysics Project</li>
                                    <li>Design Portfolio</li>
                                    <li>Data Science Project</li>
                                </ul>
                                <ul>
                                    <li>Liberal Arts Project</li>
                                    <li>Business & Economics Project</li>
                                    <li>Social Science Project</li>
                                    <li>Tech Project</li>
                                    <li>Natural Science Project</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="project-profile-development-frame-left">
                        <div className="project-profile-development-frame-left-frame profile-development">
                            <img src={profiledevelopment1} />
                            <img src={profiledevelopment2} />
                        </div>
                        <div className="project-profile-development-frame-right-frame">
                            <img src={profiledevelopment3} />
                        </div>
                    </div>
                </section>


                <section className="admission-to-your-dream-university-frame color-change">
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
            </div>
            <Footer />   
            </>
        );
    }
}
export default ProfilePresentation;
