import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import ClaOne from '../img/cla-b.png';   
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/US.jpg';
import AdmissionsTwo from '../img/admissions3-new.png';
import AdmissionsNew from '../img/admissions3.png';
import MobileTop from '../img/mobilebanner/Mobile-US.jpg';

import Icon1 from '../img/USA/1.svg';
import Icon2 from '../img/USA/2.svg';
import Icon3 from '../img/USA/3.svg';
import Icon4 from '../img/USA/4.svg';
import Icon5 from '../img/USA/5.svg';
import Icon6 from '../img/USA/6.svg';
import Icon7 from '../img/USA/7.svg';

import MobileFooter from '../img/mobilebanner/Mobile-footer-US.jpg';


import BannerTwo from '../img/banner/US.jpg';
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
class AdmissionsUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0) 
    }
    render() {
        return (
            <>
             <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page admissions-us">
                 <Helmet>
					<title>  admission process to us  </title>   
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
                                            <h3>87% OF OUR STUDENTS</h3>
                                            <h2>have gotten into top 50 US colleges.</h2>
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
                            <div className='col-md-6'>
                                <div className='track-your-college-left'>
                                    <h3>ADMISSIONS PROCESS GUIDANCE</h3>
                                    <h2>We guide you, every step of the way</h2>
                                    <p>
                                    Your college application should be a meticulous representation of your very best self. Therefore, we ensure that every detail is in place.

                                    </p>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='track-your-college-right-img'>
                                    <img src={AdmissionsNew} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pmp-profile-page-middle-section container">
                    <div className="heading-contact-middle">
                        <h2>Stepwise college application process</h2>
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
                                    Here is an easy-to-follow breakdown of how to apply to US colleges. The most convenient way is to sign up on the Common Application, a platform through which nearly all major universities will receive your application.
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
                                                Create an account

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        To create a Common App account, you simply have to add your basic details, create login credentials, complete your registration process, and select “create account.”

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
                                                Add colleges

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        Once you've created your account, you can go to the dashboard and start building your college list. You can add up to 20 universities using various filters like location, cost, and deadlines. 
                                                       </p>
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
                                                About you and your family

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        This section asks for some basic information about you and your family, including your name, home address, phone number, family income level, educational background. They will also ask about your demographics and background, such as ethnicity, race, and religion. For the “language section,” we recommend that you select English as your primary language and add any additional languages that you speak. </p>
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
                                                Educational details

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        In this section, you will provide information about your academics, including schools and colleges attended, grades, special courses, reporting GPA, cumulative GPA, summer programs, degrees if applicable, and academic honors from across your four years of high school.</p>
                                                        <p>
                                                        If your school does not provide a GPA, you can simply leave that section blank. While filling in the “future plans” section, if you’re unsure about your career path, we recommend you choose a more unconventional option to help you stand out.
 </p>
 <p>Subsequently, you will complete the standardized testing section, indicating the number of test attempts you’ve taken and your highest scores in each. </p>
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
                                                Extracurricular Activities & Work Experience
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        The activity list is a concise summary of your top ten extracurricular activities, which can include anything from your clubs, leadership positions, social impact accomplishments, internships, summer programs, artistic or athletic activities, and much more. You will need to succinctly summarize the activity in no more than 100 characters and ensure they all flow together to form a coherent story of your four years of high school. </p>
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
                                                Writing Responses
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        The “written responses” or essays are an opportunity to share your personal journey with admissions officers and really win them over through thoughtful reflection and poignant insights.  </p>
                                                        <p>
                                                        In the “Additional Information” section, you may include any additional activities worth mentioning that could not fit into the “Activity” section. You can also add any important context you’d like colleges to know about your application.

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
                                                Letters of Recommendation

                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <div className="th-grade-tab-open-frame">

                                                    <div className="th-grade-tab-open-frame-right">
                                                        <p>
                                                        When you invite your recommender, they will receive a link through which to provide your recommendation. When selecting your recommenders, you should prioritize quality, diversity, and recency. Your teachers will be able to testify to your character, your contribution to your peer community, and your ability to thrive in college.
                                                        </p>
                                                        <p>You will subsequently complete the FERPA Release Authorization, which grants your high school permission to send your records on your behalf.  </p>
                                                    </div>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        

                                    </Accordion>

                                </div>
                                <div className="ad-last-line none">
                                    <p>Your transcript will go to universities after a thorough analysis by
your counselors.
</p> 
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
                                    <p>An elite college degree can<br /><span>change the trajectory of your life.</span>  
                                    <br/> By creating a profile that will intrigue and <br/>impress admissions officers, you can<br/> attain the future you desire.

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
            </div >
            <Footer />
            </>
        );
    }
}
export default AdmissionsUs;
