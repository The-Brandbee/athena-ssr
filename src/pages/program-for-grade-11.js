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

import BannerTwo from '../img/banner/11th.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-11th.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class BthGradeEleven extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
              <Helmet>
					<title>  program for grade 11  </title> 
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
                                            <h3>DEFINE:</h3>
                                            <h2>Sharpen your profile story</h2>

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
                        <h2> Personal Mentorship Program for 11th graders</h2>
                        <p>
                            Our objective with 11th-grade students is to pull together the threads of the profile and create a  strategy to impressively present your body of work.<br />
                            During the course of the program, students receive guidance on which standardized tests to attempt and when, <br />internships and summer programs, and holistic extracurriculuar profile development.


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
                                                The ATS details a high-impact project that moves the needle through tangible measurable output and narrowing in on a specific academic discipline. This will provide a coherent story, consistent with your central theme, ready to be presented to admissions committees.
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
                                                Keeping in mind your brand and intended course of study, we develop unique and impactful  projects in areas ranging from research, service, leadership, liberal arts, and work experience.
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
                                                We conduct weekly interactive workshops on all the nuances of the international college application process, including essay writing, LORs, activity lists, and interviews.
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
                                                We provide recommendations for summer programs, support you to compose application essays, help you make the most of your experience, and make an impression on your professor (who may want to provide you an LOR by the end).
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Research Program and Tech Support

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
                                        Quarterly Strategic Planning Meetings

                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">
                                        <div className="th-grade-tab-open-frame-left">
                                            <img src={GradeOne} alt="" />
                                        </div>
                                        <div className="th-grade-tab-open-frame-right">
                                            <p>
                                                We conduct quarterly family meetings to provide an overarching view of your progress and share a macro-level plan of action for subsequent months.
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
export default BthGradeEleven;
