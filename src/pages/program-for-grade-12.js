import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import GradeOne from '../img/grade-1.jpg';
import One from '../img/One.jpg';
import Two from '../img/Two.jpg';
import Three from '../img/Three.jpg';
import Four from '../img/four.jpg';
import Five from '../img/five.jpg';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';


import BannerTwo from '../img/banner/12th.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-12th.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class BthGrade extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Helmet>
					<title>  program for grade 12  </title> 
				</Helmet>
             <Navbar />
            <div className="pmp-profile-page grade-page-add">
                
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left grade-add-design-frame'>


                                        <div className='second-banner-changehover-left2 small-banner'>
                                            <h3>DISPLAY: </h3>
                                            <h2>Unveil your multiple facets</h2>
                                            <p>for the ultimate destination</p>
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
                <div className="pmp-profile-page-middle-section container th-grade">
                    <div className="heading-contact-middle">
                        <h3>About the program</h3>
                        <h2>Personal Mentorship Program for 12th graders</h2>
                        <p>Our objective with 12th-grade students is to focus on meticulously fine-tuning the profile for an immaculate presentation.<br /> Each student receives guidance on balanced college lists, pristine essays, interview preparation,<br /> so they confidently sail through the final rounds.
                        </p>
                    </div>
                    <div className="tab-pmp-profilr">
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        ATS - Application Theme & Strategy
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                The ATS puts the final touches on the profile, ensuring no gaps are left. The profile then goes through multiple quality checks to ensure it meets the highest quality standards for elite college admissions.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Psychometric Test
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                An innovative, data-backed personality assessment helps us identify preliminary personality traits and behavioral tendencies. We then leverage these insights to guide our mentorship approach.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Capstone Projects
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Time permitting, you will work on one last powerful capstone project to deepen your degree of impact and tie up loose ends to strengthen existing projects.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        1-1 Counseling
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Through weekly one-on-one sessions with our highly-qualified consultants, we provide you with personal attention for project guidance, profile development, and overall emotional counseling.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Academy Workshops
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                We conduct weekly interactive workshops on all the nuances of the international college application process, including essay writing, LORs, activity lists, and interviews, from the perspective of an admissions officer.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Summer Programs
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                We provide recommendations for summer programs, support you to compose application essays, help you make the most of your experience, and make an impression on your professor (who may offer to provide an LOR).
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Research Program & Tech Support
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                The Athena Research Program and our various tech mentors will help develop your technology skills and create a diverse array of tech projects—from building apps and websites, working with AI/ML to constructing autonomous robots.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Guidance on Work Experience
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                With over 25 companies in the database, we identify internships, apprenticeships, and research-assistant opportunities, and connect you with a network of NGOs and companies across industries for meaningful opportunities aligned with your areas of interest.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Personalized College List
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                Our years of experience, combined with our robust database, enable us to curate a concise, thoughtful, and truly customized college list, that considers rankings, culture, location, career prospects. Our balanced approach helps us produce high-quality applications while maximizing the likelihood of admission.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        LORs - Letter of Recommendations
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                We help you identify recommenders based on who will provide the most powerful testimony, and then we’ll guide you in composing brag sheets that your teachers can use to draft LoRs.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Monthly Strategic Planning Meetings
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                We conduct monthly family meetings to make key strategic decisions pertaining to college applications, provide an overarching view of your progress, and share a macro-level plan of action for subsequent months.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Personalized Essay Guidance
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                The students receive personalized end-to-end guidance for the essays listed below:
                                            </p>
                                            <p>
                                                US Common App Essay
                                                <ul>
                                                    <li>UC Personal Insight Questions</li>
                                                    <li>US College-Specific Supplement Essays</li>
                                                    <li>UK Personal Statement (PS): 5 colleges</li>
                                                    <li>Canada Essays: 8 colleges</li>
                                                    <li>Application Essays/SOP for other countries: Singapore, Hong Kong, Continental Europe, etc.</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Interview Preparation for all Countries
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                We provide intensive prep through mock interviews for students to make a memorable impression on their interviewer. We invite Athena alumni to host webinar series and conduct one-on-one US and UK specific simulations.

                                            </p>

                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
                <div className="marginBottom"></div>
                <section className='track-your-college bthgrade None'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='track-your-college-left text-center'>
                                    <h3>Our Approach</h3>
                                    <h2>Our approach stands on five pillars</h2>

                                </div>
                                <div className="Growth-Mindset-frame-middle">
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">

                                            <div className="Growth-Mindset-frame-img">
                                                <img src={One} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Growth Mindset</h4>
                                        <p>Our mentors prepare you to view all challenges as learning opportunities and strive to be forever
                                            <span>“Better Than Yesterday”.</span></p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">

                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Two} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Quality Assurance</h4>
                                        <p>
                                            Our in-house experts and mentors follow stringent systems and processes to model the highest standards of excellence and quality our students deserve.
                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">

                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Three} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Personalized <br />Mentorship</h4>
                                        <p>
                                            By rejecting the ‘cookie-cutter model’ of profile development, we tailor a unique Application Theme & Strategy to a student’s own unique interests, passions, and ikigai.

                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Four} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Life Coaching</h4>
                                        <p>
                                            Beyond college admissions, we equip you with instrumental life skills, from leadership to time management, for future success.

                                        </p>
                                    </div>
                                    <div className="Growth-Mindset-frame-middleOne text-center">
                                        <ScrollAnimation offset={20} animatePreScroll={false} initiallyVisible={true} duration={2} animateIn="fadeIn">
                                            <div className="Growth-Mindset-frame-img">
                                                <img src={Five} />
                                            </div>
                                        </ScrollAnimation>
                                        <h4>Starting Early</h4>
                                        <p>
                                            With acceptance rates rapidly falling, we encourage you to begin your profile development journey as early as possible, thus giving you a competitive advantage over the rest.

                                        </p>
                                    </div>
                                </div>
                            </div>

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
export default BthGrade;
