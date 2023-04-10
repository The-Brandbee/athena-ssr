import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import TeamMain from '../img/team-main.png';
import BrandLogoTwo from '../img/Brand-logo-2.png';
import BrandLogoThree from '../img/Brand-logo-3.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/Canada.jpg';


import canadaLogo6 from '../img/canada-college-logos/6.jpg';
import canadaLogo7 from '../img/canada-college-logos/7.jpg';
import canadaLogo8 from '../img/canada-college-logos/8.jpg';
import canadaLogo9 from '../img/canada-college-logos/9.jpg';
import canadaLogo10 from '../img/canada-college-logos/10.jpg';
import canadaLogo11 from '../img/canada-college-logos/11.jpg';
import canadaLogo12 from '../img/canada-college-logos/12.jpg';
import canadaLogo13 from '../img/canada-college-logos/13.jpg';
import canadaLogo14 from '../img/canada-college-logos/14.jpg';
import canadaLogo15 from '../img/canada-college-logos/15.jpg';
import canadaLogo16 from '../img/canada-college-logos/16.jpg';
import canadaLogo17 from '../img/canada-college-logos/17.jpg';
import canadaLogo18 from '../img/canada-college-logos/18.jpg';
import canadaLogo19 from '../img/canada-college-logos/19.jpg';
import canadaLogo20 from '../img/canada-college-logos/20.jpg';
import canadaLogo21 from '../img/canada-college-logos/21.jpg';
import canadaLogo22 from '../img/canada-college-logos/22.jpg';
import canadaLogo23 from '../img/canada-college-logos/23.jpg';
import canadaLogo24 from '../img/canada-college-logos/24.jpg';
import canadaLogo25 from '../img/canada-college-logos/25.jpg';
import canadaLogo26 from '../img/canada-college-logos/26.jpg';
import canadaLogo27 from '../img/canada-college-logos/27.jpg';
import canadaLogo28 from '../img/canada-college-logos/28.jpg';

import MobileFooter from '../img/mobilebanner/Mobile-footer-calendar.jpg';


import BrandLogo from '../img/Brand-logo-1.png';
import AdmissionsNew from '../img/admissions5.png';
import BannerTwo from '../img/banner/canada.jpg';
import MobileTop from '../img/mobilebanner/Mobile-Canada.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class AdmissionsCanada extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page">
                 <Helmet>
					<title>  admission process to canada  </title>   
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

                                            <h2> Our scholars have gotten into EVERY top Canada college including UToronto, UBC, </h2>
                                            <h3>Mcgill, <span className="and-new">and</span> Waterloo.</h3>  
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
                                    <h3>Expert Mentorship, Powerful Impact</h3>
                                    <h2>
                                    Chart your path to a lifetime of success
                                    </h2>
                                    <p>
                                    By reflecting on your personal, academic, professional goals, you can identify the perfect college fit for you. Thus, you can immerse yourself in an intellectually enriching and inspiring environment, surrounded by peers and professors who will help you attain your ultimate goals.
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
                    <h2>Stepwise application process</h2>
                                <p>
                                The Canadian admissions process is largely straightforward. There is no centralized application process for universities in Canada. Application processes vary by province. In some provinces, students can apply through a central application service. In others, you must apply directly to the university. You may also want to apply to more than one program or university, in the event you aren't admitted to your first choice.
                                </p> 

                    </div>

                </div>
                <section className="what-we-do-top-section admissions-canada none">
                    <div className='container'>
                        <div className="what-we-do-top-section-top-middle">
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Explore and shortlist your university options</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Narrow down your program choices</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Check the application process and admissions process for each university</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>Check whether you meet the language requirements for each university</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>
                            <div className="what-we-do-top-section-top-middle-left">
                                <p>In most cases, you'll have to demonstrate proficiency in English through TOEFL or IELTS and program choices</p>
                                <div className="what-we-do-top-section-top-middle-left-border"></div>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="container">
                    <div className="OUAC-Application-frame-admissions-canada-page">
                        <div className="pmp-profile-page-middle-section none">
                            <div className="heading-contact-middle">
                                <h2>Stepwise application process</h2>
                                <p>
                                The Canadian admissions process is largely straightforward. There is no centralized application process for universities in Canada. Application processes vary by province. In some provinces, students can apply through a central application service. In others, you must apply directly to the university. You may also want to apply to more than one program or university, in the event you aren't admitted to your first choice.
                                </p> 
                            </div>
                        </div>
                        <div className="OUAC-Application-frame">
                            <div className="OUAC-Application-frame-left">
                                <h5>OUAC Application Process</h5>
                            </div>
                            <div className="OUAC-Application-frame-right">
                                <img src={BrandLogo} />
                            </div>
                        </div>
                        <section className="Undergraduate-Admissions-frame">
                            <div className='container--'>
                                <div className="Undergraduate-Admissions-frame-middle">
                                    <div className="Undergraduate-Admissions-frame-middle-number">
                                        <p>
                                        The OUAC or Ontario Universities' Application Centre is a not-for-profit centralized application platform for students applying to universities in Ontario. Candidates can apply to as many universities as they want, however, they can apply to a maximum of 3 programs by a particular university or its affiliates. Also, universities have the right to limit the number of programs a candidate can apply to. Here is how to complete the application:
                                        </p>
                                        <ul className="OUAC-one">
                                            <li><div>Visit the OUAC (Ontario Universities Application Centre) website and create your account. Browse available programs by university, select your preferred program, and add to the Program Choices section.
Once the OUAC is submitted, each university will email you guidelines to create application portals.

 </div></li>
                                            <li><div>After you receive the email, create your application portal to access the college-specific essay prompts and other application/document requirements.
                                                </div></li>
                                            <li><div>
                                            Ideally, you should submit each university's application within three weeks of receiving the email or as per the deadlines mentioned on each university’s application portal.</div></li>
                                            <li><div>
                                            We recommend that you submit the initial OUAC 105 application by December 15th, since the University of Toronto's Early Deadline is December 15th.
                                                </div></li>
                                            <li><div>
                                            We recommend that you submit the initial OUAC 105 application by December 15th, since the University of Toronto's Early Deadline is December 15th.</div></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="Ontario-region-colleges">
                            <h4>Ontario region colleges that accept the OUAC</h4>
                            <div className="Ontario-region-colleges-middele-frame">
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo6} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo7} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo8} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo9} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo10} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo11} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo12} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo13} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo14} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo15} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo16} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo17} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo18} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo19} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo20} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo21} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo22} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo23} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo24} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo25} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo26} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo27} />
                                </div>
                                <div className="Ontario-region-colleges-middele-frame-two">
                                    <img src={canadaLogo28} />
                                </div>
                              
                            </div>
                        </div>
                        <div className="OUAC-Application-frame">
                            <div className="OUAC-Application-frame-left">
                                <h5>University of British Columbia <br />Application Process</h5>
                            </div>
                            <div className="OUAC-Application-frame-right">
                                <img src={BrandLogoTwo} />
                            </div>
                        </div>
                        <section className="Undergraduate-Admissions-frame">
                            <div className='container--'>
                                <div className="Undergraduate-Admissions-frame-middle">
                                    <div className="Undergraduate-Admissions-frame-middle-number">
                                        <p>
                                        The University of British Columbia is a public research university with campuses in Vancouver and Okanagan, British Columbia.
                                        </p>
                                        <ul className="OUAC-one">   
                                            <li><div>The portal opens in early October 2023</div></li>
                                            <li><div><span>Admission deadline:</span> January 15, 2024 (11:59 PST)</div></li>
                                            <li><div><span>Admissions decisions:</span> Late January to April 2024<br />
                                            UBC's admission process is not first-come, first-served. They evaluate applications continuously from January to April.
                                                </div></li> 
                                            <li><div>
                                            UBC has an English language requirement that can be met by any of the tests mentioned on the UBC website under the admission requirements - English language competency</div></li>
                                            <li><div>
                                            The grades required for an admission offer from UBC differ by degree, and vary from year to year. In 2023, an 85% average on India’s grading scale was required.

                                            </div></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="OUAC-Application-frame">
                            <div className="OUAC-Application-frame-left">
                                <h5>McGill University Application Process</h5>
                            </div>
                            <div className="OUAC-Application-frame-right">
                                <img src={BrandLogoThree} />
                            </div>
                        </div>
                        <section className="Undergraduate-Admissions-frame">
                            <div className='container--'>
                                <div className="Undergraduate-Admissions-frame-middle">
                                    <div className="Undergraduate-Admissions-frame-middle-number">
                                        <p>McGill University is a public research university located in Montreal, Canada.</p>
                                        <ul className="OUAC-one">
 
                                            <li><div><span>Important dates and deadlines</span> </div>
                                                <ul className="Important-dates">
                                                    <li><div>The portal opens on October 1st, 2023.</div></li>
                                                    <li><div>Application for Admission Deadline: January 15, 2024.</div></li>
                                                    <li><div>Create your Minerva account.</div></li>
                                                    <li><div>You can register for two programs; your application will be considered separately for each.</div></li>
                                                </ul>
                                            </li>
                                            <li><div>Reporting SAT scores is encouraged as McGill has no essay prompts, and the admission is based largely on academics.</div></li>
                                            <li><span>Prerequisites by the board</span>
                                                <ul className="Important-dates Important-dates-new">
                                                    <li><div>
                                                    You can find the the prerequisites and cut-offs for IGCSE on the McGill website under Undergraduate Admissions / Apply / Requirements / International /Advanced-levels</div></li>
                                                    <li><div>
                                                    You can find the the prerequisites and cut-offs for Indian School Certificate (ISC) on the McGill website under Undergraduate Admissions / Apply / Requirements / International /India
                                                        </div></li>  
                                                </ul> 

                                            </li>
                                            <li><span>Pre-Application to-do list</span>
                                                <ul className="Important-dates">
                                                    <li><div>IELTS/TOEFL</div></li>
                                                    <li><div>Predicted scores</div></li>
                                                    <li><div>Final IB diploma/Transcripts (if received)</div></li>
                                                    <li><div>Copy of high school transcript, including mid-year/final 1st-semester results for the final year.</div></li>
                                                    <li><div>No Additional Supporting documents (LORs, SoP) are required, unless:</div>
                                                        <ul className="You-have-applied">
                                                            <li>
                                                            You have applied to Architecture, Education, Music, Nursing, Religious Studies, and/or Social Work
                                                            </li>
                                                            <li>You have completed the separate application for Major Entrance Scholarship and Financial Aid</li>
                                                            <li>You selected ‘Extenuating Circumstances’ on the application for admission</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><div>
                                            <span>You'll receive an email confirmation within 48 hours</span> of submitting your application. With the login information you receive, you can access your Minerva account to do the following:
                                            </div>
                                                <ul>
                                                    <li>Upload your documents (if required)</li>
                                                    <li>Verify that your documents have been received (you'll see a received date next to the item on the checklist)</li>
                                                    <li>See if additional documents have been requested by an admissions officer</li>
                                                    <li>Fill out applications for Scholarship and/or Financial Aid</li>
                                                    <li>View the decision that has been made on your application (consult our admission glossary for definitions)</li>
                                                    <li>Update your contact information</li>
                                                    <li>Verify your student housing application</li>
                                                </ul>

                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="ad-last-line-admissions-canada">
                            <p>Be sure to check your Minerva account and email regularly! It is your responsibility to verify your status on <br/>Minerva and ensure the completion of your application.</p></div> 
                    </div>
                </div>
                <section className="none how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
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
                                        <a target="_blank" className='footer-top-map-img-button-link' href='https://calendly.com/athenaeducation/counseling-webinar'> Book a Consultation session <span><img src={ClaOne} className="normal" alt="" /><img src={ClaTwo} className="normal-ho" alt="" /></span></a>
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
            </div >
            <Footer />
            </>
        );
    }
}
export default AdmissionsCanada;
