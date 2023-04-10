import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import Team from '../img/team-main.png';
import Apply from '../img/apply3.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/students-banner-7.jpg';
import PromiseOne from '../img/what-we-do-1.jpg';
import AdmissionsTwo from '../img/admissions2.png';
import AdmissionsNew from '../img/admissions.png';

import Icon1 from '../img/UK-icon/1.svg';
import Icon2 from '../img/UK-icon/2.svg';
import Icon3 from '../img/UK-icon/3.svg';
import Icon4 from '../img/UK-icon/4.svg';
import Icon5 from '../img/UK-icon/5.svg';
import Icon6 from '../img/UK-icon/6.svg';
import Icon7 from '../img/UK-icon/7.svg';
import Icon8 from '../img/UK-icon/8.svg';

import MobileFooter from '../img/mobilebanner/Mobile-footer-UK.jpg';


import MobileTop from '../img/mobilebanner/Mobile-UK.jpg';
import BannerTwo from '../img/banner/UK.jpg';
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
   
class Admissions extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page">
                 <Helmet>
					<title>  admission process to uk  </title>   
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
                                            <h3>80% OF OUR STUDENTS</h3>
                                            <h2>have gotten into top <br /> UK universities.</h2>
                                            <p>You could be next!</p>
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
                <section className='track-your-college admissions-page'>
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='track-your-college-left'>
                                    <h3>STEPWISE ADMISSIONS PROCESS</h3>
                                    <h2>Your ideal future begins here</h2>
                                    <p>Each application component must be an authentic reflection of your true human brand. As you craft your application, remember that your audience seeks students who are leaders, innovators, and activists in their community.</p>
                                </div>
                            </div>
                            <div className='col-md-5'>
                                <div className='track-your-college-right-img'>
                                    <img src={AdmissionsNew} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container">
                    <div className="heading-contact-middle">
                        <h2>Applicant Evaluation Criteria
</h2>
                        <img src={AdmissionsTwo} />
                    </div>

                </div>

                <section className="admissions-tab-frame admissions-tab-frame-new-add">
                    <div className="container">
                        <div className="admissions-tab-frame-middle-top">
                            <div className="admissions-tab-frame-middle">
                                <div className="heading-contact-middle">
                                    <h2>Stepwise application process</h2>
                                    <p>
                                    Here's a general overview of the UK undergrad application process. You will submit all your materials through the UCAS platform.
                                    Navigating through the UCAS interface is simple, and mostly all the other native apps also have a similar interface.
                                    </p>
                                   
                                </div>
                            </div>
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
                                                Register with the UCAS Hub
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        To register on UCAS, you will provide your basic details, create login credentials, and activate your account.  </p>

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
                                                Complete your details
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Once you have created the account, you can go to the dashboard where you will see a tile named 'Your application' and click 'Start' to begin your application.   </p>
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
                                                Add your education history
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        All your qualifications from secondary education onwards have to be entered in this section.
                                                        </p>
                                                        <p>
                                                        You need to provide your educational qualifications even if you are awaiting the results. However, you will have to share the result with your chosen university or college when you get them.
                                                        </p>  
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
                                                Complete your employment history
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        In this section, you can add all your work experiences, whether you have engaged in full-time or part-time jobs. Fill in the name and address of the companies you worked at, as well as your your job description and start/finish dates. </p>
                                                        <p>
                                                        You can add up to five experiences, however, any volunteer, unpaid or social work should not be included in this section. If you do not have any paid work experience, you can leave this section blank and mark it as completed. </p>
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
                                                Select your courses
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        In this section, you can add your course choices and add up to five courses. You can select the course of any preference for different universities.</p>
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
                                                Write a personal statement
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        This is one of the most important components of your application. This is the area where you can show your informed enthusiasm for your subject, evidenced by various academic experiences through which you demonstrate competence in your field. Thus, you can highlight how you represent an excellent addition to any college campus. </p>
                                                        <p>
                                                        Your personal statement must be between 1,000 and 4,000 characters long.
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
                                                Submit your application


                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Before submitting your application, review it thoroughly. Make sure you haven't missed any information and most importantly, ensure that all the details filled are authentic and backed by documents.</p>
                                                        <p>
                                                        Check the Read and Agree Declaration. This allows the portal to process your application and share it with the institutions. </p>
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
                                                Recommenders and LORs
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                             Your application cannot be submitted with the recommendation or LORs from your teacher, counselor, or professional who can testify to your character. Always focus on quality, diversity, and recency in LORs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>





                                    </Accordion>

                                </div>
                                <div className="ad-last-line">
                                    <p>Note: to apply to Oxford and Cambridge, you will need to register for various <br/>examinations based on your course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Start your search here and<br /><span>get the future that's <br />best for you.</span>
                                        <br />We make your profile spectacular and stand<br /> out from the crowd.
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
export default Admissions;
