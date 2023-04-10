import React, { Component } from "react";
import { Link } from "gatsby"
import 'react-tabs/style/react-tabs.css';
import OurMentors from '../img/about-athena-6.jpg';
import Students from '../img/footer-vector/about-athena.jpg';
import About from '../img/about-athena-7.jpg';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ProfileOne from '../img/about-athena-9.jpg';
import ProfileOne2 from '../img/about-athena-10.jpg';
import ProfileTwo from '../img/about-athena-8.jpg';
import WhatwedoOne from '../img/what-de-do-1.png';
import Whatwedotwo from '../img/what-de-do-2.png';
import WhatwedoThree from '../img/what-de-do-3.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import MapGif from '../component/Home/MapGif';
import Mapmobile from '../img/map-mobil.gif';
import BannerTwo from '../img/banner/About-athena.jpg';
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import MobileTop from '../img/mobilebanner/mobile-about-athena.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-about-athena.jpg';
import { Helmet } from "react-helmet"; 

class AboutAthena extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Helmet>
					<title>  About Athena  </title> 
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

                                            <h2>We help you<br />join the ranks of</h2>

                                            <h3>  Ivy LEAGUE ADMITS</h3>

                                            <p>Get into the world's most prestigious universities with our expert knowledge of the international admissions process.
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

                <section className="project-profile-development-frame what-we-do about-athena-new">

                    <div className="project-profile-development-frame-right">
                        <div className="project-profile-development-frame-righttwo">
                            <div className="heading-contact-middle">
                                <h3>About Us </h3>
                                <h2>Shaping the students of <br />
                                    today into the <br />
                                    leaders of tomorrow

                                </h2>
                                <p>
                                    India's education system is at a turning point: educators and families alike are beginning to recognize the value of interdisciplinary, liberal-arts approaches. At Athena, we empower our students to transcend their school curriculum, build necessary life skills, and craft powerful profiles.
                                </p>
                            </div>
                            <div className='track-your-college-left-link about-athena'>
                                <Link className='footer-top-map-img-button-link ' to='#'> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                            </div>

                        </div>
                    </div>
                    <div className="project-profile-development-frame-left">
                        <div className="project-profile-development-frame-left-frame">
                            <img src={ProfileOne} />
                            <img src={ProfileOne2} />
                        </div>
                        <div className="project-profile-development-frame-right-frame">
                            <img src={ProfileTwo} />
                        </div>
                    </div>
                </section>






                <section className='what-we-do-section-page about-athena-new'>

                    <div className='what-we-do-section-page-right'>
                        <div className='what-we-do-section-page-right-middle'>
                            <div className='why-choese-us-home-page-heading'>
                                <h3>Our Approach</h3>
                                <h2>#BetterThanYesterday </h2>
                                <p>Collectively striving to be #BetterThanYesterday, we focus on channeling your full potential. We aim to create an impressive, unique personal brand that helps you stand out from the crowd and crack admission to top universities worldwide.
                                </p>
                                <p>Our approach stands on three pillars:</p>
                            </div>
                            <ul>
                                <li>
                                    <div className='what-we-do-image-frame'>
                                        <img src={WhatwedoOne} alt="" />
                                        <p>Strategy</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='what-we-do-image-frame'>
                                        <img src={Whatwedotwo} alt="" />
                                        <p>Authenticity</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='what-we-do-image-frame'>
                                        <img src={WhatwedoThree} alt="" />
                                        <p>Creativity</p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='what-we-do-section-page-left'>
                        <img src={About} />
                    </div>
                </section>
                <section className="Our-Mentors-frame-our-story-frame">

                    <div className="Our-Mentors-frame-our-story-frame-right">
                        <div className='why-choese-us-home-page-heading'>
                            <h3>Our Mentors</h3>
                            <h2>The Crème De La Crème</h2>
                            <p>You'll work closely with mentors who are the cream of the crop—educated at the best universities in India and abroad. Our mentors are experienced and trained intensively in all the nuances of consulting, writing, and international admissions processes.
                            </p>
                        </div>
                        <div className="Our-Mentors-frame-our-story-frame-right-faq-section">
                            <div className="tab-pmp-profilr">
                                <Accordion allowZeroExpanded>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Consulting Center
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="th-grade-tab-open-frame">

                                                <div className="th-grade-tab-open-frame-right">
                                                    <p>
                                                        Our expert consultants oversee profile development and strategy for students.
                                                    </p>

                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Creative Center

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="th-grade-tab-open-frame">

                                                <div className="th-grade-tab-open-frame-right">

                                                    <p>
                                                        Our talented writers artfully translate the student’s profile into powerful essays that showcase their human brand.

                                                    </p>

                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <Link to="/knowledge-center"><AccordionItemHeading>
                                            <AccordionItemButton>
                                                Knowledge Center
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        </Link>
                                    </AccordionItem>





                                </Accordion>

                            </div>
                        </div>
                    </div>
                    <div className="Our-Mentors-frame-our-story-frame-left n">
                        <img src={OurMentors} alt="" />
                    </div>
                </section>

                <section className='footer-top-map home-page-new'>
                    <div className="container">
                        <div className='footer-top-map-img'>
                            <div className='map-home desktop'>
                                <MapGif />
                            </div>
                            <div className='map-home mobile none'>
                                <img src={Mapmobile} alt="" />
                            </div>

                            <h4>We are a leading education consulting firm with <span>students in more than 15 countries</span></h4>
                        </div>
                        <div className='footer-top-map-img-button'>
                            <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
                        </div>

                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success new footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Athena has a highly <br /><span>experienced and <br />exceptionally talented team</span> <br />of intellectual mentors
                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'>  Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
export default AboutAthena;
