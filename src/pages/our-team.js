import React, { Component } from "react";
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/our-team.jpg';

import Taam11 from '../img/team-2.png';
import Taam22 from '../img/finance-team-1.png';


import planned1 from '../img/box 1.jpg';
import planned2 from '../img/box 2.jpg';
import planned3 from '../img/box 3.jpg';
import planned4 from '../img/box 4.jpg';
import planned5 from '../img/box 5.jpg';
import planned6 from '../img/box 6.jpg';

import TEAM1 from '../img/athena consulting centre 1.png';
import TEAM2 from '../img/athena consulting centre 2.png';
import TEAM3 from '../img/athena consulting centre 3.png';
import TEAM4 from '../img/athena consulting centre 4.png';
import TEAM5 from '../img/athena consulting centre 5.png';
import TEAM6 from '../img/athena consulting centre 6.png';
import TEAM7 from '../img/athena consulting centre 7.png';
import TEAM8 from '../img/athena consulting centre 8.png';

import CREATIVE1 from '../img/athena creative team 1.png';
import CREATIVE2 from '../img/athena creative team 2.png';
import CREATIVE3 from '../img/athena creative team 3.png';
import CREATIVE4 from '../img/athena creative team 4.png';
import CREATIVE5 from '../img/athena creative team 5.png';
import CREATIVE6 from '../img/athena creative team 6.png';
import CREATIVE7 from '../img/athena creative team 7.png';
import CREATIVE8 from '../img/athena creative team 8.png';

import Knowledge1 from '../img/athena knowledge centre 1.png';
import Knowledge2 from '../img/athena knowledge centre 2.png';
import Knowledge3 from '../img/athena knowledge centre 3.png';
import Knowledge4 from '../img/athena knowledge centre 4.png';
import Knowledge5 from '../img/athena knowledge centre 5.png';
import Knowledge6 from '../img/athena knowledge centre 6.png';
import Knowledge7 from '../img/athena knowledge centre 7.png';
import Knowledge8 from '../img/athena knowledge centre 8.png';

import Admin1 from '../img/team/Admin-1.png';
import Admin2 from '../img/team/Admin-2.png';
import Admin3 from '../img/team/Admin-3.png';
import Admin4 from '../img/team/Admin-4.png';

import Finance1 from '../img/team/finance-team-1.png';
import Finance2 from '../img/team/finance-team-2.png';
import Finance3 from '../img/team/finance-team-3.png';

import Founder1 from '../img/team/founders-office-1.png';
import Founder2 from '../img/team/founders-office-2.png';
import Founder3 from '../img/team/founders-office-3.png';
import Founder4 from '../img/team/founders-office-4.png';


import GROWTH1 from '../img/team/Growth-1.png';
import GROWTH2 from '../img/team/Growth-2.png';
import GROWTH3 from '../img/team/Growth-3.png';
import GROWTH4 from '../img/team/Growth-4.png';
import GROWTH5 from '../img/team/Growth-6.png';
import GROWTH6 from '../img/team/Growth-6.png';
import GROWTH7 from '../img/team/Growth-7.png';


import Pc1 from '../img/team/P-C-1.png';
import Pc2 from '../img/team/P-C-2.png';
import Pc3 from '../img/team/P-C-3.png';
import Pc4 from '../img/team/P-C-5.png';
import Pc5 from '../img/team/P-C-5.png';

import Hs1 from '../img/HARNOOR-KAUR.png';
import Hs2 from '../img/MRENANK-CHAUDHRY.png';

import BannerTwo from '../img/Our-team.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import MobileTop from '../img/mobilebanner/mobile-our-team.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-our-team.jpg';
import { Helmet } from "react-helmet"; 
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";



class OurTeam extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            <Navbar />

            <div className="pmp-profile-page our-team-page">
                <Helmet>
					<title>  Our Team  </title>  
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


                                        <div className='second-banner-changehover-left2'>

                                            <h2>Our mentors are </h2>
                                            <h3>INCREDIBLY DIVERSE</h3>
                                            <p>With expertise in various fields including computer science, economics, business, policy, psychology, engineering, anthropology, history, and more!</p>
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
                    <div className="heading-contact-middle LIFE-AT-ATHENA">
                        <h3>LIFE AT ATHENA</h3>
                        <h2>Strategy and fun!</h2>
                        <p>
                            The overall development of any student cannot be forced. To make sure the holistic development is as engaging
                            and <br />enjoyable for the student as it is for us, we’ve created a warm, friendly environment at Athena.<br /> While our
                            focus is always on output, we recognize that students work best when they feel engaged.

                        </p>
                    </div>

                </div>
                <div className="container">
                    <div className="team-top-frame-main main-new">

                        <div className="team-top-frame">
                            <div className="team-left-frame-one">
                                <div className="team-left-frame-one-left">
                                    <img src={planned1} alt="" />
                                </div>
                                <div className="team-left-frame-one-right">
                                    <p>One-on-one <br />counseling</p>
                                    <div className="team-top-border"></div>
                                </div>
                            </div>
                            <div className="team-left-frame-one">
                                <div className="team-left-frame-one-left">
                                    <img src={planned2} alt="" />
                                </div>
                                <div className="team-left-frame-one-right">
                                    <p>Access to child<br /> psychologist</p>
                                    <div className="team-top-border"></div>
                                </div>
                            </div>
                        </div>

                        <div className="team-top-frame">
                            <div className="team-left-frame-one">
                                <div className="team-left-frame-one-left">
                                    <img src={planned3} alt="" />
                                </div>
                                <div className="team-left-frame-one-right">
                                    <p>Complete support on <br />personal and academic <br />development</p>
                                    <div className="team-top-border"></div>
                                </div>
                            </div>
                            <div className="team-left-frame-one">
                                <div className="team-left-frame-one-left">
                                    <img src={planned4} alt="" />
                                </div>
                                <div className="team-left-frame-one-right">
                                    <p>Network with your <br />peers</p>
                                    <div className="team-top-border"></div>
                                </div>
                            </div>
                        </div>


                        <div className="team-top-frame">
                            <div className="team-left-frame-one">
                                <div className="team-left-frame-one-left">
                                    <img src={planned5} alt="" />
                                </div>
                                <div className="team-left-frame-one-right">
                                    <p>Annual graduation banquets & college preparation</p>
                                    <div className="team-top-border"></div>
                                </div>
                            </div>
                            <div className="team-left-frame-one">
                                <div className="team-left-frame-one-left">
                                    <img src={planned6} alt="" />
                                </div>
                                <div className="team-left-frame-one-right">
                                    <p>Develop a growth <br />mindset</p>
                                    <div className="team-top-border"></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <section className="our-team-middle-section">
                    <div className="pmp-profile-page-middle-section container">
                        <div className="heading-contact-middle">
                            <h3>Our Team</h3>
                            <h2>The Crème De La Crème</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="our-team-middle-section2">
                            <h4>Athena Consulting Center</h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM1} alt="" />
                                    <h4>Ashish Solanki</h4>
                                    <p><span>Senior Manager</span></p>
                                    <p>Williams College</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM2} alt="" />
                                    <h4>Dikshita Goel</h4>
                                    <p><span>Senior Manager</span></p>
                                    <p>Lady Shri Ram College</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM3} alt="" />
                                    <h4>Vandanee Ramani</h4>
                                    <p><span>Senior Manager</span></p>
                                    <p>The Hindu College</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM4} alt="" />
                                    <h4>Aditi Lahiri</h4>
                                    <p><span>Manager</span></p>
                                    <p>Calcutta University</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM5} alt="" />
                                    <h4>Ashwin Malik</h4>
                                    <p><span>Manager</span></p>
                                    <p>University of Delhi</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={CREATIVE7} alt="" />
                                    <h4>CHAHAT JAIN</h4>
                                    <p><span>Manager</span></p>
                                    <p>NMIMS</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM6} alt="" />
                                    <h4>Manali Dogra</h4>
                                    <p><span>Manager</span></p>
                                    <p>PhD, GGSI University</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM7} alt="" />
                                    <h4>Nirbhika Sachdev</h4>
                                    <p><span>Manager</span></p>
                                    <p>University of Delhi</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={TEAM8} alt="" />
                                    <h4>Yash Gaur</h4>
                                    <p><span>Manager</span></p>
                                    <p>University of Lucknow</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>Athena Creative Center</h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={CREATIVE1} alt="" />
                                    <h4>Jared Griffin</h4>
                                    <p><span>Creative Director</span></p>
                                    <p>Princeton University</p>
                                </div>

                                <div className="our-team-middle-section-frame-left">
                                    <img src={CREATIVE3} alt="" />
                                    <h4>Chandra Chandok</h4>
                                    <p><span>Senior Manager</span></p>
                                    <p>University of Michigan</p>
                                </div>

                                <div className="our-team-middle-section-frame-left">
                                    <img src={CREATIVE5} alt="" />
                                    <h4>Anandita Bose</h4>
                                    <p><span>Manager</span></p>
                                    <p>Lady Shri Ram College</p>
                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={CREATIVE6} alt="" />
                                    <h4>Anustup Garai</h4>
                                    <p><span>Manager</span></p>
                                    <p>SOAS University of London</p>
                                </div>

                                <div className="our-team-middle-section-frame-left">
                                    <img src={CREATIVE8} alt="" />
                                    <h4>Megha Maheshwari </h4>
                                    <p><span>Manager</span></p>
                                    <p>The VSP for Women</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>Athena Knowledge Center</h4>
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
                                    <p>Sanskriti University, Mathura</p>
                                </div>
                            </div>

                        </div>
                    </div>






                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>Student Care </h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={GROWTH1} alt="" />
                                    <h4>Samarth Chaudhary</h4>
                                    <p><span>Vice President</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={GROWTH2} alt="" />
                                    <h4>Harshit Goel</h4>
                                    <p><span>Senior Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={GROWTH3} alt="" />
                                    <h4>Dikshant Dutta</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={GROWTH4} alt="" />
                                    <h4>Harshvardhan Ballani</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Hs2} alt="" />
                                    <h4>Mrenank Chaudhry</h4>
                                    <p><span>Assistant Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={GROWTH6} alt="" />
                                    <h4>Nandita Singh</h4>
                                    <p><span>Associate Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={GROWTH7} alt="" />
                                    <h4>Avijan Sen</h4>
                                    <p><span>Video Editor & Graphic Designer</span></p>

                                </div>



                            </div>

                        </div>
                    </div>


                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>People and Culture</h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Pc1} alt="" />
                                    <h4>Tarishi Bahlwal</h4>
                                    <p><span>Senior Director</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Pc2} alt="" />
                                    <h4>Rahul Vohra</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Pc3} alt="" />
                                    <h4>Mishty Sharma</h4>
                                    <p><span>Lead </span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Hs1} alt="" />
                                    <h4>Harnoor Kaur</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Pc5} alt="" />
                                    <h4>Dolly Sharma</h4>
                                    <p><span>Associate </span></p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>Founder's Office</h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Founder1} alt="" />
                                    <h4>Prishta Grover</h4>
                                    <p><span>Strategy Lead</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Founder2} alt="" />
                                    <h4>Khusnud Shahidi</h4>
                                    <p><span>Consultant</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Founder3} alt="" />
                                    <h4>Himanshi Rathor</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Founder4} alt="" />
                                    <h4>Sehajpreet Kaur</h4>
                                    <p><span>Executive Assistant</span></p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>Finance</h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Finance1} alt="" />
                                    <h4>Sarika Chandel</h4>
                                    <p><span>Lead</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Taam22} alt="" />
                                    <h4>Rishabh Gujral</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Finance3} alt="" />
                                    <h4>Puneet Kumar</h4>
                                    <p><span>Accounts Executive</span></p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="container our-team-middle-section2-main">
                        <div className="our-team-middle-section2">
                            <h4>Admin</h4>
                            <div className="our-team-middle-section-frame">
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Admin1} alt="" />
                                    <h4>Tarun Taneja</h4>
                                    <p><span>Manager</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Admin2} alt="" />
                                    <h4>Ravindra Nath</h4>
                                    <p><span>Associate</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Admin3} alt="" />
                                    <h4>Sunil Yadav</h4>
                                    <p><span>Associate</span></p>

                                </div>
                                <div className="our-team-middle-section-frame-left">
                                    <img src={Admin4} alt="" />
                                    <h4>Amit Singh</h4>
                                    <p><span>Office</span></p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="pmp-profile-page-middle-section container bottom">
                        <div className="heading-contact-middle">
                            <h3>THE ATHENA CREDO</h3>
                            <h2>Principles for School, Work, and Life</h2>
                        </div>
                    </div>
                    <div className="pmp-profile-page-middle-section container th-grade">

                        <div className="tab-pmp-profilr">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            I have a purpose in life. My first task is to discover that purpose.<br /> Then, I will give myself wholly to it.
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    To discover my purpose, I will consider

                                                    <ul>
                                                        <li>What I'm good at</li>
                                                        <li>What I love</li>
                                                        <li>What the world needs (or will need in the future)</li>
                                                        <li>What will make money</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            An important purpose of my life is the pursuit of knowledge.
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    The growth of consciousness is an end in itself. By immersing myself in the world around me, I will strive to gather as much wisdom as I can, so I can approach a greater understanding of the truth.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            The purpose of my knowledge is to serve others
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    Wealth and power without knowledge are destructive
                                                </p>
                                                <p>
                                                    I have been fortunate to receive many resources—both material and intellectual. In the future, armed with my knowledge and principles, I will give back to society, such that young people after me find opportunities to grow.

                                                </p>

                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            The greatest power is the power to grow

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    I cherish the process of becoming someone greater than I was. I must never stop growing.
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            I embrace new ideas with an open mind
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    If someone shows me a better way to act, speak, or think, I will gladly accept it. Nonetheless, I maintain high standards for truth and seek clear evidence to substantiate any claim. </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            I balance idealism and pragmatism
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    I realize both are necessary to thrive. Idealism without pragmatism is powerless. Pragmatism without idealism is aimless. By combining the two, I can be an effective force for the good.
                                                </p>
                                                <p>
                                                    Athena is the Greek goddess of wisdom. She is also the goddess of war. She thus embodies the harmonious union of idealism and pragmatism.

                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            During times of turmoil, I
                                            recognize that everything will pass.


                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="th-grade-tab-open-frame">

                                            <div className="th-grade-tab-open-frame-right">
                                                <p>
                                                    Then, I will continue to act in a noble manner for noble action is the only way to transform my life.</p>
                                                <p>We part with words of wisdom from the ancient Greek philosopher, Aristotle:
                                                    <b> “We are what we repeatedly do. Excellence is not an act, but a habit.” </b>
                                                </p>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>





                            </Accordion>

                        </div>
                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p><span>Your one-stop solution</span><br /> for undergrad college <br />admissions abroad.

                                    </p>

                                    <div className="how-top-apply-page-last-student-section-inner-border"></div>
                                    <div className='footer-top-map-img-button'>
                                        <a className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
export default OurTeam;
