import React, { Component } from "react";
import { Link } from "gatsby"
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';

import BannerTwo from '../img/banner/profile presentation.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import MobileTop from '../img/mobilebanner/mobile-profile-presentation.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";


  
class PmpProfile extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Helmet>
					<title>  Profile Presentation  </title> 
				</Helmet>
                <Navbar />
            <div className="pmp-profile-page profile-presentation-pageadd">
                
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
                                            <h3>PROFILE PRESENTATION</h3>
                                            <h2>Showcase your extraordinary brand
                                            </h2>

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
                        <h3>Profile Presentation</h3>
                        <h2>What do you bring to the table?</h2>
                        <p className="Our-experts">We analyze each student’s potential, and find exactly what makes you stand out. Then, we develop a <br />profile that demonstrates the unique value you add to any college campus.</p>
                    </div>
                    <div className="tab-pmp-profilr profile-presentation-page-new">
                        <div class="student-top-collage-section-us-uk-left-tow-border"></div>
                        <Accordion allowZeroExpanded>
                            
                                <AccordionItem>

                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <h3>ASSESS</h3>
                                            <p>Categorize | Evaluate</p>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>



                                    <AccordionItemPanel >
                                        <div className="tab-first-frame second">
                                            <div className="tab-first-frame-middle">
                                                <h4 className="text-center">Strategize your College List
                                                </h4>
                                                <p className="text-center">
                                                    We divide your college list into three categories - reach, target, and likely. Our years of experience, combined with our robust database, enable us to curate a concise, thoughtful, and truly customized college list.
                                                </p>


                                            </div>


                                        </div>
                                    </AccordionItemPanel>

                                </AccordionItem>
                          
                                <AccordionItem>

                                    <AccordionItemHeading>

                                        <AccordionItemButton>
                                            <h3>STRATEGIZE</h3>
                                            <p>Workshops</p>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>


                                    <AccordionItemPanel>
                                        <div className="tab-first-frame second">
                                            <div className="tab-first-frame-middle">
                                                <h4 className="text-center">Prepare essay and application
                                                    <br />academy workshops
                                                </h4>
                                                <p className="text-center">
                                                    Our specialized workshops provide instrumental information and strategic insights about how to approach the application and essays from the perspective of an admission officer. We support students with:
                                                </p>

                                                <div className="pmp-profiledr-ul-list">
                                                    <ul>
                                                        <li>Essay-writing series</li>
                                                        <li>Activity lists</li>
                                                        <li>Recommendations</li>

                                                    </ul>
                                                    <ul>
                                                        <li>Interview series</li>
                                                        <li>Video applications</li>
                                                        <li>Transcript submissions, etc. </li>

                                                    </ul>
                                                </div>
                                            </div>


                                        </div>
                                    </AccordionItemPanel>

                                </AccordionItem>
                         
                                <AccordionItem>

                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <h3>EXECUTE</h3>
                                            <p>Essays | Applications | Interviews | Pick the college</p>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>


                                    <AccordionItemPanel>
                                        <div className="tab-first-frame three">
                                            <div className="main-n">
                                                <div className="tab-first-frame-middle">
                                                    <h4>Essays</h4>
                                                    <p>Our mentors provide expert guidance to draft the extraordinary essays only you can write. We’ll ideate, outline, and finalize your writing, all while retaining your authentic voice.
                                                    </p>
                                                    <div className="tab-border"></div>
                                                </div>
                                                <div className="tab-first-frame-middle">
                                                    <h4>Letter of Recommendation (LoRs) and Activity List</h4>
                                                    <p>We help you identify your recommenders and guide you in composing brag sheets. Then, we’ll teach you to craft an effective Activity List that perfectly showcases your profile.</p>
                                                    <div className="tab-border"></div>
                                                </div>
                                            </div>
                                            <div className="main-n">
                                                <div className="tab-first-frame-middle">
                                                    <h4>Interviews</h4>
                                                    <p>Our consultants conduct intensive mock interviews and invite Athena alumni to host webinars about their experiences, how they cracked the code. </p>
                                                    <div className="tab-border"></div>
                                                </div>
                                                <div className="tab-first-frame-middle">
                                                    <h4>Pick the right college for you and meet Athena alumni</h4>
                                                    <p>After you get into multiple colleges, we use a data-driven framework to help you pick the college where you’ll thrive. For extra perspective, you can always seek advice from our expansive network of 300 alumni! </p>
                                                    <div className="tab-border"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>

                                </AccordionItem>
                           

                        </Accordion>
                    </div>
                </div>


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
export default PmpProfile;
