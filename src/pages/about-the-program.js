import React, { Component } from "react";
import leaders1 from '../img/about-the-program/1.svg';
import leaders2 from '../img/about-the-program/2.svg';
import leaders3 from '../img/about-the-program/3.svg';
import leaders4 from '../img/about-the-program/4.svg';
import leaders5 from '../img/about-the-program/5.svg';
import leaders6 from '../img/about-the-program/6.svg';
import leaders7 from '../img/about-the-program/7.svg';
import leaders8 from '../img/about-the-program/8.svg';
import leaders9 from '../img/about-the-program/9.svg';
import leaders10 from '../img/about-the-program/10.svg';
import leaders11 from '../img/about-the-program/11.svg';
import leaders12 from '../img/about-the-program/12.png';
import leaders13 from '../img/about-the-program/13.png';
import leaders14 from '../img/about-the-program/14.png';
import leaders15 from '../img/about-the-program/15.png';
import leaders16 from '../img/about-the-program/16.png';
import leaders17 from '../img/about-the-program/17.png';
import leaders18 from '../img/about-the-program/18.png';
import leaders19 from '../img/about-the-program/19.png';
import leaders20 from '../img/about-the-program/20.png';
import leaders21 from '../img/about-the-program/21.png';
import leaders22 from '../img/about-the-program/22.png';
import Student from '../img/footer-vector/about-the-program.jpg';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import BannerTwo from '../img/banner/About the-program.jpg';
import Table1 from '../img/about-the-program-2.png';
import Table2 from '../img/about-the-program-3.png';
import Table3 from '../img/about-the-program-4.png';
import Table4 from '../img/about-the-program-5.png';
import Table5 from '../img/about-the-program-6.png';
import Table6 from '../img/about-the-program-7.png';
import 'react-accessible-accordion/dist/fancy-example.css';
import Sticky from 'react-sticky-el';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import GradeOne from '../img/grade-1.jpg';
import MobileTop from '../img/mobilebanner/mobile-profile-development.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-about-the-program.jpg';
import { Helmet } from "react-helmet"; 
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class AboutUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
              <Helmet>
					<title>  About The Program  </title>    
				</Helmet>
             <Navbar /> 
            <div className="pmp-profile-page about-the-program-new-add">
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left'>


                                        <div className='second-banner-changehover-left2 how-to-apply'>
                                            <h2>We transform<br />you into the</h2>
                                            <h3>best version of<br /> yourself</h3>
                                            <p>MIT | Stanford | Princeton | Columbia <br />Brown | Oxford | Cambridge</p>

                                            <p>97% of our students get admission to at<br /> least one university of their choice.</p>
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
                <section className="our-team-middle-section about-athena Athena-Was-Establishedabout-athena-page">
                    <div className='container'>
                        <div className="heading-contact-middle new-add">
                            <h3>What We Do?</h3>
                            <h2>We nurture the leaders of tomorrow</h2>
                            <p>
                                Athena paves a strategic and personalized path to help your realize your true potential and align it with the most ambitious goals for your future. We not only prepare a spectacular human brand that will impress elite admissions officers, but also develop holistic life skills, preparing you to create true impact in the world. We’ll curate a customized roadmap for your based on your instrinsic capabilities and interests.
                            </p>
                            <h5>Based on your grade, our program helps you <span>identify your vision and build</span><br /> the right path through:</h5>
                        </div>
                        <div className="Autobiography-of-a-Student-frame new-add about-the-program frame">
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders12} className="One" />
                                    <img src={leaders1} className="two" />
                                </div>
                                <p>AoS - Autobiography of <br />a Student</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders13} className="One" />
                                    <img src={leaders2} className="two" />
                                </div>
                                <p>Deep AoS - Deep  Autobiography of a Student</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders14} className="One" />
                                    <img src={leaders3} className="two" />
                                </div>
                                <p>ATS - Application <br />Theme & Strategy</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders15} className="One" />
                                    <img src={leaders4} className="two" />
                                </div>
                                <p>Psychometric<br /> Test</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders16} className="One" />
                                    <img src={leaders5} className="two" />
                                </div>
                                <p>Capstone<br /> Projects</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders17} className="One" />
                                    <img src={leaders6} className="two" />
                                </div>
                                <p>Academy<br /> Workshops</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders18} className="One" />
                                    <img src={leaders7} className="two" />
                                </div>
                                <p>1-1 <br />Consulting</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders19} className="One" />
                                    <img src={leaders8} className="two" />
                                </div>
                                <p>Summer <br />Programs</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders20} className="One" />
                                    <img src={leaders9} className="two" />
                                </div>
                                <p>Research Program & <br />Tech Support</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders21} className="One" />
                                    <img src={leaders10} className="two" />
                                </div>
                                <p>Academic & Internship<br /> Guidance</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="Autobiography-of-a-Student-frame-left">
                                <div className="Autobiography-of-a-Student-frame-left-img">
                                    <img src={leaders22} className="One" />
                                    <img src={leaders11} className="two" />
                                </div>
                                <p>Strategic Planning<br /> Meeting</p>
                                <div class="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='track-your-college bthgrade about-the-program-impactful'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='track-your-college-left text-center'>
                                    <h3>Our Program</h3>
                                    <h2>Curating an impactful personal brand</h2>
                                </div>
                                <div className="pmp-profile-page-middle-section container th-grade mobile none">
                                    <div className="about-the-program-bottom-table tab-pmp-profilr">
                                        <Accordion allowZeroExpanded>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span className="number"><strong>9</strong><sup>th</sup> </span>
                                                        <span className="aadw">-</span>
                                                        <span className="cont">DISCOVER</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="th-grade-tab-open-frame nAcademies">
                                                        <p><span>Academies:</span> 8-9</p>
                                                        <p><span>pROJECTS:</span> 6-7</p>
                                                        <p><span>Academic Exploration:</span> <br />Academic exploration through our in-house Field Memos</p>
                                                        <p><span>Summer engagement:</span><br /> Applications for experiential summer programs</p>
                                                        <p><span>Standardized Test Planning:</span> <br />Introduction to standardized testing + study material</p>
                                                        <p><span>Focus areas:</span> <br />Facilitate structured academic and extracurricular exploration</p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span className="number"><strong>10</strong><sup>th</sup> </span>
                                                        <span className="aadw">-</span>
                                                        <span className="cont">DEVELOP</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="th-grade-tab-open-frame nAcademies">
                                                        <p><span>Academies:</span> 6-7</p>
                                                        <p><span>pROJECTS:</span> 4-5</p>
                                                        <p><span>Academic Exploration:</span> <br />Subject selection for 11th and 12th grade</p>
                                                        <p><span>Summer engagement:</span><br /> Applications for skill-based summer programs + internships</p>
                                                        <p><span>Standardized Test Planning:</span> <br />Recommend timelines for SAT/ACT preparation and guide AP subject selection</p>
                                                        <p><span>Focus areas:</span> <br />Identify the subjects and extracurriculars that align most with the student profile and develop them</p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span className="number"><strong>11</strong><sup>th</sup> </span>
                                                        <span className="aadw">-</span>
                                                        <span className="cont">DEFINE</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="th-grade-tab-open-frame nAcademies">
                                                        <p><span>Academies:</span> 4-5</p>
                                                        <p><span>pROJECTS:</span> 2-3</p>
                                                        <p><span>Academic Exploration:</span> <br />Intended major exploration through 1-1 conversations with subject matter experts</p>
                                                        <p><span>Summer engagement:</span><br /> Applications for more intensive programs/internships</p>
                                                        <p><span>Standardized Test Planning:</span> <br />AP subject selection based on school subjects and intended major</p>
                                                        <p><span>Focus areas:</span> <br />Pull together the profile threads and refining a coherent story for profile presentation.</p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <span className="number"><strong>12</strong><sup>th</sup> </span>
                                                        <span className="aadw">-</span>
                                                        <span className="cont">DEMONSTRATE</span>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="th-grade-tab-open-frame nAcademies">
                                                        <p><span>Academies:</span> 1-2</p>
                                                        <p><span>pROJECTS:</span> At least 1</p>
                                                        <p><span>Academic Exploration:</span> <br />Intended majors alignment with overall college application strategy</p>
                                                        <p><span>Summer engagement:</span><br /> Applications for more intensive/project focused programs/internships</p>
                                                        <p><span>Standardized Test Planning:</span> <br />Help students pick the right scores to report to colleges, whether to report the score or not, how to report them</p>
                                                        <p><span>Focus areas:</span> <br />Work intensively on final brand alignment and profile presentation through essays, activity list, recommendations, among others.
                                                        </p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                        </Accordion>

                                    </div>
                                </div>
                                <div className="about-the-program-bottom-table desktop">
                                    <Sticky>
                                        <div className="table-th-heading">
                                            <div className="table-th-heading-left-frame"></div>
                                            <div className="table-th-heading-left-frame">
                                                <div className="about-the-program-bottom-table-middle">
                                                    <span className="number">9</span> <span className="cont">th <br />DISCOVER</span>
                                                </div>
                                            </div>
                                            <div className="table-th-heading-left-frame">
                                                <div className="about-the-program-bottom-table-middle">
                                                    <span className="number">10</span> <span className="cont">th <br />DEVELOP</span>
                                                </div>
                                            </div>
                                            <div className="table-th-heading-left-frame">
                                                <div className="about-the-program-bottom-table-middle">
                                                    <span className="number">11</span> <span className="cont">th <br />DEFINE</span>
                                                </div>
                                            </div>
                                            <div className="table-th-heading-left-frame">
                                                <div className="about-the-program-bottom-table-middle">
                                                    <span className="number">12</span><span className="cont">th <br />DEMONSTRATE </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Sticky>
                                    <div className="table-tr-heading-frame">
                                        <div className="table-tr-heading-frame-left">
                                            <span><img src={Table1} className="two" /></span> <span>Academies</span>
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            8-9
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            6-7
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            4-5
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            1-2
                                        </div>
                                    </div>
                                    <div className="table-tr-heading-frame">
                                        <div className="table-tr-heading-frame-left">
                                            <span><img src={Table2} className="two" /></span> <span>Projects</span>
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            6-7
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            4-5
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            2-3
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            At least 1
                                        </div>
                                    </div>
                                    <div className="table-tr-heading-frame">
                                        <div className="table-tr-heading-frame-left">
                                            <span><img src={Table3} className="two" /></span> <span>Academic <br />Exploration</span>
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Academic exploration through our in-house Field Memos
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Subject selection for 11th and 12th grade
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Intended major exploration through 1-1 conversations with subject matter experts
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Intended majors alignment with overall college application strategy

                                        </div>
                                    </div>
                                    <div className="table-tr-heading-frame">
                                        <div className="table-tr-heading-frame-left">
                                            <span><img src={Table4} className="two" /></span> <span>Summer <br />engagement</span>
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Applications for experiential summer programs
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Applications for skill-based summer programs + internships
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Applications for more intensive programs/internships
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Applications for more intensive/project focused programs/internships

                                        </div>
                                    </div>
                                    <div className="table-tr-heading-frame">
                                        <div className="table-tr-heading-frame-left">
                                            <span><img src={Table5} className="two" /></span> <span>Standardized <br />Test Planning</span>
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Introduction to standardized testing + study material
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Recommend timelines for SAT/ACT preparation and guide AP subject selection
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            AP subject selection based on school subjects and intended major
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Help students pick the right scores to report to colleges, whether to report the score or not, how to report them

                                        </div>
                                    </div>
                                    <div className="table-tr-heading-frame">
                                        <div className="table-tr-heading-frame-left">
                                            <span><img src={Table6} className="two" /></span> <span>Focus areas</span>
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Facilitate structured academic and extracurricular exploration
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Identify the subjects and extracurriculars that align most with the student profile and develop them
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Pull together the profile threads and refining a coherent story for profile presentation.
                                        </div>
                                        <div className="table-tr-heading-frame-left">
                                            Work intensively on final brand alignment and profile presentation through essays, activity list, recommendations, among others.

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section >

                <section className="how-top-apply-page-last-student-section footer-banner-bottom-new">
                    <img src={Student} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>An international (non-US) student <br />working with Athena is
                                        <br /><span>5X more likely to<br /> gain acceptance </span><br />
                                        to elite US universities with<br /> acceptance rates as low as 1%</p>

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

            </div >
            <Footer />
            </>
        );
    }
}
export default AboutUs;
