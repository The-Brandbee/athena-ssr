import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Testimonials from '../component/Home/Testimonials';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/Popular-majors.jpg';

import LogoOne from '../img/top-colleges/Computer-Science/1.jpg';
import LogoOne2 from '../img/top-colleges/Computer-Science/2.jpg';
import LogoOne3 from '../img/top-colleges/Computer-Science/3.jpg';
import LogoOne4 from '../img/top-colleges/Computer-Science/4.jpg';
import LogoOne5 from '../img/top-colleges/Computer-Science/5.jpg';

import LogoOne6 from '../img/top-colleges/Economics/1.jpg';
import LogoOne7 from '../img/top-colleges/Economics/2.jpg';
import LogoOne8 from '../img/top-colleges/Economics/3.jpg';
import LogoOne9 from '../img/top-colleges/Economics/4.jpg';
import LogoOne10 from '../img/top-colleges/Economics/5.jpg';


import LogoOne11 from '../img/top-colleges/Engineering/1.jpg';
import LogoOne12 from '../img/top-colleges/Engineering/2.jpg';
import LogoOne13 from '../img/top-colleges/Engineering/3.jpg';
import LogoOne14 from '../img/top-colleges/Engineering/4.jpg';
import LogoOne15 from '../img/top-colleges/Engineering/5.jpg';

import LogoOne16 from '../img/top-colleges/Pre-Med-Biology/1.jpg';
import LogoOne17 from '../img/top-colleges/Pre-Med-Biology/2.jpg';
import LogoOne18 from '../img/top-colleges/Pre-Med-Biology/3.jpg';
import LogoOne19 from '../img/top-colleges/Pre-Med-Biology/4.jpg';
import LogoOne20 from '../img/top-colleges/Pre-Med-Biology/5.jpg';


import LogoOne21 from '../img/top-colleges/Political-Science/1.jpg'; 
import LogoOne22 from '../img/top-colleges/Political-Science/2.jpg';
import LogoOne23 from '../img/top-colleges/Political-Science/3.jpg';
import LogoOne24 from '../img/top-colleges/Political-Science/4.jpg';
import LogoOne25 from '../img/top-colleges/Political-Science/5.jpg';


import LogoOne26 from '../img/top-colleges/Psychology/1.jpg'; 
import LogoOne27 from '../img/top-colleges/Psychology/2.jpg';
import LogoOne28 from '../img/top-colleges/Psychology/3.jpg';
import LogoOne29 from '../img/top-colleges/Psychology/4.jpg';
import LogoOne30 from '../img/top-colleges/Psychology/5.jpg';


import LogoOne31 from '../img/top-colleges/History/1.jpg'; 
import LogoOne32 from '../img/top-colleges/History/2.jpg';
import LogoOne33 from '../img/top-colleges/History/3.jpg';
import LogoOne34 from '../img/top-colleges/History/4.jpg';
import LogoOne35 from '../img/top-colleges/History/5.jpg';


import LogoOne36 from '../img/top-colleges/English/1.jpg'; 
import LogoOne37 from '../img/top-colleges/English/2.jpg';
import LogoOne38 from '../img/top-colleges/English/3.jpg';
import LogoOne39 from '../img/top-colleges/English/4.jpg';
import LogoOne40 from '../img/top-colleges/English/5.jpg';



import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';


import Icon1 from '../img/top-colleges-icon/1.svg';
import Icon2 from '../img/top-colleges-icon/2.svg';
import Icon3 from '../img/top-colleges-icon/3.svg';
import Icon4 from '../img/top-colleges-icon/4.svg';
import Icon5 from '../img/top-colleges-icon/5.svg';
import Icon6 from '../img/top-colleges-icon/6.svg';
import Icon7 from '../img/top-colleges-icon/7.svg';
import Icon8 from '../img/top-colleges-icon/8.svg';
import Icon9 from '../img/top-colleges-icon/9.svg';
import Icon10 from '../img/top-colleges-icon/10.svg';
import Icon11 from '../img/top-colleges-icon/11.svg';
import Icon12 from '../img/top-colleges-icon/12.svg';
import Icon13 from '../img/top-colleges-icon/13.svg';

import MobileFooter from '../img/mobilebanner/Mobile-footer-top-colleges.jpg';
import MobileTop from '../img/mobilebanner/Mobile-top-colleges.jpg';
import BannerTwo from '../img/banner/top-colleges.jpg';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";



class AdmissionsTopColleges extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0) 
    }
    render() {
        return (
            <>
            <Helmet>
					<title>  top colleges for popular majors  </title>   
				</Helmet> 


             <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page admissions-us admissions-top-colleges">
                   
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
                                            <h3>FROM THE IVY LEAGUE<br /> TO ELITE UNIVERSITIES</h3>
                                            <h2>Athena can help find the best college for you.</h2>

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
                <div className="pmp-profile-page-middle-section">
                    <div className="heading-contact-middle">
                        <h2>Top colleges for popular majors</h2>

                        <div className="tab-section-inadmissions-top-colleges one">
                            <Tabs>
                                <TabList>
                                    <div className="container">

                                        <Tab>Computer Science</Tab>
                                        <Tab>Economics/Business</Tab>
                                        <Tab>Engineering</Tab>
                                        <Tab>Pre-Med/Biology</Tab>
                                    </div>
                                </TabList>


                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne2} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne3} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne4} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne5} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne6} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne7} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne8} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne9} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne10} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne11} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne12} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne13} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne14} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne15} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne16} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne17} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne18} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne19} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne20} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                            </Tabs>
                           
                        </div>


                        <div className="tab-section-inadmissions-top-colleges two">
                            <Tabs>
                                <TabList>
                                    <div className="container">
                                        <Tab >Political Science</Tab>
                                        <Tab >Political Science</Tab>
                                        <Tab>Psychology</Tab>
                                        <Tab>History</Tab>
                                        <Tab>English Language & Literature</Tab>
                                    </div>
                                </TabList>

                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne21} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne22} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne23} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne24} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne25} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne21} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne22} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne23} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne24} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne25} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne26} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne27} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne28} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne29} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne30} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne31} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne32} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne33} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne34} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne35} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container-mainadmissions-top-colleges">
                                        <div className="container">
                                            <div className="tab-section-image-frame">
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne36} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne37} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne38} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne39} />
                                                </div>
                                                <div className="tab-section-image-frame-left">
                                                    <img src={LogoOne40} />
                                                </div>
                                            </div>
                                            <div className="Source-US-News">
                                <p>Source: US News</p>
                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                            </Tabs>
                            
                        </div>

                    </div>

                </div>

                <section className="admissions-tab-frame track-your-college collage-type admissions-tab-frame-new-add topm">
                    <div className="container">
                    <div className="track-your-college-left text-center">
                       
                        <h2>How identify the right college for you? </h2>
                        <p>Here are the various parameters you should consider while researching any institution.<br/> By prioritizing the factors important to you, you can identify colleges that best align<br/> with your personal, academic, and professional ambitions.</p>
                        </div>
                        <div className="admissions-tab-frame-middle-top">

                            <div className="pmp-profile-page-middle-section container th-grade">

                                <div className="tab-pmp-profilr">
                                    <div class="student-top-collage-section-us-uk-left-tow-border"></div>
                                    <Accordion allowZeroExpanded>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon1} className="Desktop-icon" />
                                                </div>
                                                College Type
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Research university vs. liberal arts college vs. institute of technology (polytechnic institute) vs. other vocational/professional schools
                                                        </p>
                                                        <p>Public vs. Private</p>
                                                        <p>Identity-based
                                                            <ul>
                                                                <li>Non-secular vs. secular/nonsectarian</li>
                                                                <li>Co-ed vs. single-gender</li>
                                                            </ul>
                                                            <p> Residential vs. Low-res vs. Collegiate, etc. vs. satellite campus </p>
                                                            <p> Small, medium, and large </p>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon2} className="Desktop-icon" />
                                                </div>
                                                Overall Reputation & Selectivity

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>National vs. Global</p>
                                                        <p>Rankings</p>
                                                        <p>Network</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon3} className="Desktop-icon" />
                                                </div>
                                                Geographical Location

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>Global regions</p>
                                                        <p>US
                                                            <ul>
                                                                <li>New England
</li>
                                                                <li>Southeast
</li>
                                                                <li>Southwest</li>
                                                                <li>Midwest</li>
                                                                <li>West Coast
</li>

                                                            </ul>
                                                        </p>
                                                        <p>UK
                                                            <ul>
                                                                <li>Urban</li>
                                                                <li>Non-urban</li>
                                                            </ul>
                                                        </p>
                                                        <p>Canada</p>
                                                        <p>Continental Europe</p>
                                                        <p>Singapore</p>
                                                        <p>Australia</p>
                                                        <p>India</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon4} className="Desktop-icon" />
                                                </div>
                                                Urban colleges

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Urban colleges are surrounded by large buildings and apartments/condominiums. They bustle with activity, including community involvement, employment/internships, and cultural/social opportunities. Shopping, restaurants, and entertainment are always close at hand. Sometimes safety is an issue, but many schools such as USC and Columbia offer escort services, as well as security-conscious dorms. If fast-paced, city living is your thing, then an urban campus is probably a good choice. (Note that urban colleges vary in how integrated they are with their local city—from relatively secluded (Yale) to completely interconnected (NYU).)

                                                             </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon5} className="Desktop-icon" />
                                                </div>
                                                Suburban colleges
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Suburban colleges located in the satellite areas of such cities as Washington, D.C., St. Louis, Santa Barbara, and Portland in residential communities filled with strip malls and single-family homes. They often boast convenient access to urban areas and major airports through a short commute by car or public transportation. The lifestyle is often slower than that of the central city, but restaurants, shops, and movie theaters are usually not far away. Note that suburban areas can be upscale, but they can also be in poor areas.
                                                             </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon6} className="Desktop-icon" />
                                                </div>
                                                College towns

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        College towns such as Ann Arbor, Michigan; Boulder, Colorado; and Hanover, New Hampshire are very special places. The entire town, including residents and businesses, revolves around the needs, wants, and desires of students, faculty, staff, and their families. (In other words, the college and town are essentially synonymous.) (In other words, the college and town are essentially synonymous.) Some students like these towns so much that they find all kinds of excuses for staying on after graduation; some never leave.
                                                       </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon7} className="Desktop-icon" />
                                                </div>
                                                Rural colleges

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Rural colleges offer access to the outdoors, including sports such as hiking, skiing, and bicycling; beautiful, serene settings; and a sense of getting away from it all. Safety is hardly a concern. Good shopping, airports, and other city resources are not very accessible. And you may find that the local residents lack diversity. However, if cultural resources are important, don’t dismiss colleges in rural locations; frequently they bring into their campuses and communities the best of what is available in the country. (Some argue they’re the best settings for the deep learning required for a true liberal arts education!)  </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon8} className="Desktop-icon" />
                                                </div>
                                                Climate & topography
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            <ul>
                                                                <li>Beaches (Ocean)</li>
                                                                <li>Lakes</li>
                                                                <li>Deserts</li>
                                                                <li>Plains</li>
                                                                <li>Mountains</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon9} className="Desktop-icon" />
                                                </div>
                                                   Career & Residency Prospects
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                            <ul>
                                                                <li>Co-op programs</li>
                                                                <li>
                                                                Industry recruitment, the average starting salary

                                                                </li>

                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon10} className="Desktop-icon" />
                                                </div>
                                                Academics
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Program Reputation & Selectivity
                                                            <ul>
                                                                <li>National vs. global</li>
                                                                <li>Rankings</li>
                                                                <li>
                                                                Name recognition & network

                                                                </li>
                                                            </ul>
                                                        </p>
                                                        <p>
                                                        Program Availability, Breadth of Choices, & Freedom to Change Course

                                                        </p>
                                                        <p>Undergraduate focus</p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon11} className="Desktop-icon" />
                                                </div>
                                                Cost & Financial Aid
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Admission Types

                                                            <ul>
                                                                <li>Need-blind
</li>
                                                                <li>Need-aware</li>
                                                            </ul>
                                                        </p>
                                                        <p>
                                                        Financial Aid Types

                                                            <ul>
                                                                <li>Need-based
</li>
                                                                <li>Merit-based
</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon12} className="Desktop-icon" />
                                                </div>
                                                Culture
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Please identify whether you find the religious orientation and/or ethnic makeup of a college important. </p>
                                                        <p>
                                                        Are you interested in schools that have a religious affiliation, or at least a large population of students with that orientation (e.g. Georgetown, Santa Clara, or Notre Dame?)
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                <div className="icon-middle-tab-image">
                                                   <img src={Icon13} className="Desktop-icon" />
                                                </div>
                                                Athletics
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        NCAA Division I competitive sports opportunities for yourself  </p>
                                                        <p>
                                                        NCAA Division II competitive sports opportunities for yourself
                                                        </p>
                                                        <p>
                                                        NCAA Division III competitive sports opportunities for yourself
                                                        </p>
                                                        <p>
                                                        Intramural sports opportunities for yourself 
                                                        </p>
                                                        <p>
                                                        Major sports school with NCAA Division I football and/or basketball teams to watch as a spectator 
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>





                                    </Accordion>

                                </div>

                            </div>
                        </div>
                    </div>
                </section >
                <section className='Testimonials-home-middle new-arrow'>
                <div className='Testimonials-home-middle-right track-your-college mobile none'>
						<div className='track-your-college-left'>
                        <h3>Testimonials</h3>
                            <h2>What people are saying <br />about us!</h2>
                            <p>We take pride in what we do to groom the future leaders of tomorrow. Here is what our happy parents, students, counsellors and others have to say about Athena Education and the milestones we have reached. </p>
                           
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
                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Create a list of colleges that <br />considers all of the above metrics<br /> and use it to<br /><span>form your ideal <br />college list!</span>
                                    </p>

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
export default AdmissionsTopColleges;
