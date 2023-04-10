import React, { Component } from "react";
import 'react-tabs/style/react-tabs.css';
import Knowledge1 from '../img/athena knowledge centre 1.png';
import Knowledge2 from '../img/athena knowledge centre 2.png';
import Knowledge3 from '../img/athena knowledge centre 3.png';
import Knowledge4 from '../img/athena knowledge centre 4.png';
import Knowledge5 from '../img/athena knowledge centre 5.png';
import Knowledge6 from '../img/athena knowledge centre 6.png';
import Knowledge7 from '../img/athena knowledge centre 7.png';
import Knowledge8 from '../img/athena knowledge centre 8.png';
import GradeOne from '../img/grade-1.jpg';
import AdmissionsNew from '../img/minerva-1.jpg';
import StudentOne from '../img/apply4.png';
import StudentTwo from '../img/apply.png';

import THROUGH1 from '../img/minerva/1.svg';
import THROUGH2 from '../img/minerva/2.svg';
import THROUGH3 from '../img/minerva/3.svg';
import THROUGH4 from '../img/minerva/4.svg';
import THROUGH5 from '../img/minerva/5.svg';
import THROUGH6 from '../img/minerva/6.svg';
import THROUGH7 from '../img/minerva/7.svg';
import THROUGH8 from '../img/minerva/8.svg';
import THROUGH9 from '../img/minerva/9.svg';
import THROUGH10 from '../img/minerva/10.svg';


import THROUGH11 from '../img/minerva/1.png';
import THROUGH12 from '../img/minerva/2.png';
import THROUGH13 from '../img/minerva/3.png';
import THROUGH14 from '../img/minerva/4.png';
import THROUGH15 from '../img/minerva/5.png';
import THROUGH16 from '../img/minerva/6.png';
import THROUGH17 from '../img/minerva/7.png';
import THROUGH18 from '../img/minerva/8.png';
import THROUGH19 from '../img/minerva/9.png';
import THROUGH20 from '../img/minerva/10.png';


import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/knowledge-center.jpg';


import BannerTwo from '../img/banner/knowledge-center.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import MobileTop from '../img/mobilebanner/mobile-knowledge-center.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-knowledge-center.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";


class Minerva extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            <Helmet>
					<title>  Knowledge Center  </title> 
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

                                            <h2>We teach scholars</h2>
                                            <h3 className="minerva">cutting-edge skills</h3>
                                            <p>through experiential learning and immersive collaboration</p>
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
                <section className='track-your-college admissions-page our-story minerva-top-frame'>
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-12 minerva-top-heading">
                                <div className='track-your-college-left text-center'>
                                    <h3>About Knowledge Center</h3>
                                    <h2>We offer targeted Academies focused on <br />projects, research, and policy papers</h2>

                                </div>
                                <div className='track-your-college-right-img none mobile'>
                                    <img src={AdmissionsNew} alt="" />
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='track-your-college-left'>
                                    <p>
                                        The Knowledge Center is run by a group of diverse knowledge professionals which includes engineers, scientists, social scientists, lawyers, business management Graduates, art and design instructors, and professionals with industry experiences. Minerva nurtures the students’ diverse interests with a series of expertly curated and certified courses, that span from the literary arts to life skills.
                                    </p>
                                    <p>Students get ample opportunities for customized learning and the agency to choose their own courses with Minerva. These courses add incredible value to the student’s profiles through strategic external validation, which adds depth to their application.</p>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='track-your-college-right-img desktp-m'>
                                    <img src={AdmissionsNew} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-team-middle-section about-athena Athena-Was-Establishedabout-athena-page PROJECTS-THROUGH-ACADEMY">
                    <div className='container'>
                        <div className="heading-contact-middle">
                            <h3>Projects Through Academy</h3>
                            <h2>Category of projects our students work on</h2>
                            <p>
                                Projects play an essential role in supporting the overall brand and showcasing their intellectual curiosity. <br />Our students work on a few of the following projects based on their interests.
                            </p>
                        </div>
                        <div className="Autobiography-of-a-Student-frame">
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH11} className="One" />
                                    <img src={THROUGH1} className="two" />
                                </div>
                                <p>Research Paper</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH12} className="One" />
                                    <img src={THROUGH2} className="two" />
                                </div>
                                <p>Leadership Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH13} className="One" />
                                    <img src={THROUGH3} className="two" />
                                </div>
                                <p>Astrophysics Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH14} className="One" />
                                    <img src={THROUGH4} className="two" />
                                </div>
                                <p>Design Portfolio</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH15} className="One" />
                                    <img src={THROUGH5} className="two" />
                                </div>
                                <p>Data Science Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH16} className="One" />
                                    <img src={THROUGH6} className="two" />
                                </div>
                                <p>Liberal Arts Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH17} className="One" />
                                    <img src={THROUGH7} className="two" />
                                </div>
                                <p>Business & Economics Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH18} className="One" />
                                    <img src={THROUGH8} className="two" />
                                </div>
                                <p>Social Science Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH19} className="One" />
                                    <img src={THROUGH9} className="two" />
                                </div>
                                <p>Technology Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={THROUGH20} className="One" />
                                    <img src={THROUGH10} className="two" />
                                </div>
                                <p>Natural Science Project</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container th-grade minerva-tab minerva-newclass">
                    <div className="heading-contact-middle">
                        <h3>ABOUT THE PROGRAM</h3>
                        <h2> Courses curated just for you, based<br /> on your areas of interest</h2>

                    </div>
                    <div className="tab-pmp-profilr">
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Build Your Business
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">

                                        <div className="th-grade-tab-open-frame-right">
                                            <h5><span>Course duration</span> - 12 weeks</h5>
                                            <p>Learn the art of doing business through this 12-week course. Learn innovative ideas to raise funds, create your own digital platform with design and branding, and start creating an impact with your products. </p>
                                            <div className="th-grade-tab-open-frame-right-bottom-ul">
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-left">
                                                    <h4>Course Outcomes </h4>
                                                    <ul>
                                                        <li>Business Plan</li>
                                                        <li>Brand Identity</li>
                                                        <li>App and web design</li>
                                                    </ul>
                                                </div>
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-right">
                                                    <h4>Key Learnings</h4>
                                                    <ul>
                                                        <li>Resource planning & financial modeling</li>
                                                        <li>Social media tools for marketing</li>
                                                        <li>UI/UX (Figma)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Design and Curate Your Own Art Exhibition
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">

                                        <div className="th-grade-tab-open-frame-right">
                                            <h5><span>Course duration</span> - 12 weeks</h5>
                                            <p>This course is titled “Fake”. This course explores the notion of bodily aesthetics, alterations, and enhancement. The course clears the concept of “the artificial” as a subjective value and a cultural judgment.</p>
                                            <div className="th-grade-tab-open-frame-right-bottom-ul">
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-left">
                                                    <h4>Course Outcomes</h4>
                                                    <ul>
                                                        <li>Portfolio design</li>
                                                        <li>Project design</li>
                                                        <li>Exhibition planning</li>
                                                    </ul>
                                                </div>
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-right">
                                                    <h4>Key Learnings</h4>
                                                    <ul>
                                                        <li>Visual autobiography</li>
                                                        <li>Visual autobiography</li>
                                                        <li>Prototype development</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Eureka Research Program
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">

                                        <div className="th-grade-tab-open-frame-right">
                                            <h5><span>Course duration</span> - 6 weeks</h5>
                                            <p>This program aims to inculcate scholarly research academic writing and critical thinking skills among high school students enrolled with Athena’s personal mentorship program.</p>
                                            <div className="th-grade-tab-open-frame-right-bottom-ul">
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-left">
                                                    <h4>Course Outcome</h4>
                                                    <ul>
                                                        <li>Research paper</li>

                                                    </ul>
                                                </div>
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-right">
                                                    <h4>Key Learnings</h4>
                                                    <ul>
                                                        <li>Critical thinking</li>
                                                        <li>Problem solving</li>
                                                        <li>Data handling</li>
                                                        <li>Academic writing</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Building your own Data Model and Understanding what data says
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">

                                        <div className="th-grade-tab-open-frame-right">
                                            <h5><span>Course duration</span> - 12 weeks</h5>
                                            <p>
                                                Learn the art of data science, statistics, graph analysis, flow chart, python basics, data modeling, and ML models on data sets under this course.
                                            </p>
                                            <div className="th-grade-tab-open-frame-right-bottom-ul">
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-left">
                                                    <h4>Course Outcomes</h4>
                                                    <ul>
                                                        <li>ML based project</li>

                                                    </ul>
                                                </div>
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-right">
                                                    <h4>Key Learning</h4>
                                                    <ul>
                                                        <li>Statistics</li>
                                                        <li>Python</li>
                                                        <li>ML modeling</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How to write a policy paper
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">

                                        <div className="th-grade-tab-open-frame-right">
                                            <h5><span>Course duration</span> - 8 weeks</h5>
                                            <p>
                                                The course amends the imbalance between efforts on analytical capacity and less significance on drafting quality policy papers. The course grooms to write effective policy papers along with teaching the art of illustrating your argument through the use of data.
                                            </p>
                                            <div className="th-grade-tab-open-frame-right-bottom-ul">
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-left">
                                                    <h4>Course Outcomes</h4>
                                                    <ul>
                                                        <li>Writing an effective policy paper</li>

                                                    </ul>
                                                </div>
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-right">
                                                    <h4>Key Learnings</h4>
                                                    <ul>
                                                        <li>Drafting of a policy paper</li>
                                                        <li>Policy making process</li>
                                                        <li>Using data for policy advocacy</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Space Masterclass
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="th-grade-tab-open-frame">

                                        <div className="th-grade-tab-open-frame-right">
                                            <h5><span>Course duration</span> - 16 weeks</h5>
                                            <p>
                                                Scholars understand the scope of the subject and research process via interactive theoretical classes that cover a broad spectrum of subjects.
                                            </p>
                                            <div className="th-grade-tab-open-frame-right-bottom-ul">
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-left">
                                                    <h4>Course Outcomes</h4>
                                                    <ul>
                                                        <li>Astronomy and space science project</li>
                                                        <li>Research paper</li>

                                                    </ul>
                                                </div>
                                                <div className="th-grade-tab-open-frame-right-bottom-ul-right">
                                                    <h4>Key Learnings</h4>
                                                    <ul>
                                                        <li>The process of experimentation, research, and innovation</li>
                                                        <li>Critically investigate and apply knowledge</li>
                                                        <li>Develop the ability of creative thinking process</li>
                                                        <li>Learn to communicate, convince and test the ideas</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>







                        </Accordion>

                    </div>
                </div>
                <section className="our-team-middle-section n-mobile">
                    <div className="pmp-profile-page-middle-section container">
                        <div className="heading-contact-middle">
                            <h3>Our Instructors</h3>
                            <h2>Meet our team</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="our-team-middle-section2">

                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge1} alt="" />
                                    <h4>Dr. Mritunjay Sharma</h4>
                                    <p><span>Vice President</span></p>
                                    <p>University of Manchester</p>
                                </div>

                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge3} alt="" />
                                    <h4>Nitin Rastogi</h4>
                                    <p><span>Senior Technology Mentor</span></p>
                                    <p>16+ years of experience </p>
                                </div>

                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge4} alt="" />
                                    <h4>Manasvini Nayar</h4>
                                    <p><span>Manager - Art & Design</span></p>
                                    <p>Parsons School of Design</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge5} alt="" />
                                    <h4>SRISHTI KAPOOR</h4>
                                    <p><span>Manager - Research</span></p>
                                    <p>IIM Calcutta</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge6} alt="" />
                                    <h4>Dr Ankita Dave</h4>
                                    <p><span>Biology Mentor</span></p>
                                    <p>CSIR, Gujarat</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge7} alt="" />
                                    <h4>Ashutosh Sengar</h4>
                                    <p><span>Senior Director - Legal & Policy</span></p>
                                    <p>Faculty of Law, DU</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge8} alt="" />
                                    <h4>Nischal Dwivedi</h4>
                                    <p><span>Math, Physics & Data Science Specialist</span></p>
                                    <p>IIT Bombay</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Knowledge2} alt="" />
                                    <h4>Bhaskar Pandey</h4>
                                    <p><span>Technology Mentor</span></p>
                                    <p>Sanskriti University,Mathura</p>
                                </div>
                            </div>

                        </div>
                    </div>




                </section >

                <section className="how-top-apply-page-last-student-section footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">

                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <h4>The Knowledge Center </h4>
                                    <p>unlocks the key to high-level ideas <br />that will expand your mind.</p>
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
export default Minerva;
