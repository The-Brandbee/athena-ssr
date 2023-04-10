import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "gatsby"
import ApproachThree from '../img/ApproachOne3.png';
import MobileFooter from '../img/mobilebanner/Mobile-footer-calendar.jpg';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/Calendar.jpg';
import BannerTwo from '../img/banner/calendar.jpg';
import 'react-accessible-accordion/dist/fancy-example.css';
import MobileTop from '../img/mobilebanner/Mobile-Calendar.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class AdmissionsCalendar extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
             <Navbar />
            <div className="pmp-profile-page">
                 <Helmet>
					<title>  admission calendar  </title>   
				</Helmet>  
                <div className="banner-section OurStudentSuccess-bannernewpage desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left grade-add-design-frame'>


                                        <div className='second-banner-changehover-left2'>
                                            <h2>Your complete guide to</h2>
                                            <h3>admission calendar<br /> and deadlines</h3>
                                            <h2>of different<br /> universities/colleges.</h2>
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
                <div className="pmp-profile-page-middle-section container our-student-success">
                    <div className="heading-contact-middle">
                        <h3>ADMISSION CALENDAR</h3>
                        <h2>  2023-2024 Undergraduate <br /> Admissions Cycle</h2>

                    </div>

                </div>


                <section className="Undergraduate-Admissions-frame">
                    <div className='container'>
                        <div className="Undergraduate-Admissions-frame-middle">
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>March, 2023</h4>
                                <ul> 
                                    <li><div>We recommend you begin composing your Common Application Essay (CAE) for the US. </div>

                                      
                                    </li>
                                 </ul>
                            </div>

                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>April, 2023</h4>
                                <ul>
                                    <li><div>We recommend you begin your preliminary college selection process: research, parameters, strategy, including consideration of initial Early Decision, Early Action, or Restrictive Early Action (ED/EA/REA) options.
</div></li>
                                    <li><div>We recommend you begin composing your UCAS Personal Statement (PS) for the UK.</div></li>
                                    <li><div>
                                    Start compiling your preliminary Activity List, identifying activities, projects, and accomplishments you wish to include in your application.
                                        </div></li>
                                    <li><div>
                                    Identify your recommenders and begin composing for brag sheets for your Letters of Recommendation (LOR).
                                        </div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>May, 2023</h4>
                                <ul>
                                    <li><div>UCAS undergraduate application officially opens for 2024 entry.</div></li>
                                    <li><div>We recommend you begin composing your University of California (UC) Personal Insight Questions (PIQ) responses.</div></li>
                                    <li><div>Take any AP exams for which you have registered.</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>July, 2023</h4>
                                <ul>
                                    <li><div>We recommend you finalize your CAE, early colleges, and complete your LORs/bragsheets.</div></li>
                                       
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>August, 2023</h4>
                                <ul>
                                    <li><div>
                                    The Common Application (including supplemental essay prompts), Coalition Application, and University of California (UC) application officially open for 2024 entry.
</div></li>
                                    
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>September, 2023</h4>
                                <ul>
                                    <li><div>We recommend you finalize your UCAS Personal Statement.</div></li>
                                    <li><div><span>Sep 27 -</span> HKUST (Hong Kong) application officially opens.</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>October, 2023</h4>
                                <ul>
                                    <li><div>
                                    Register for any Oxford and Cambridge pre-interview assessments (e.g. Thinking Skills Assessment).
</div></li>
                                    <li><div>Register for all US Early Round alumni interviews.
</div></li>
                                    <li><div>
                                    Begin preparing for your UK and US interviews. You will take both technical interviews for the UK and personality interviews with alumni for the US. We recommend you refine your spoken communication and self-presentation skills during this time, focusing on effectively conveying your human brand and your academic competence in a concise manner.

                                        </div></li>
                                    <li><div>Begin preparing for your UK entry examinations.</div></li>
                                    <li><div><span>Oct 15 </span></div>
                                    <ul>
                                    <li><div>
                                    Official UCAS undergraduate deadline for Oxford and Cambridge.

</div></li>
<li><div>
EA/ED Deadline for some US universities (e.g. Georgia Tech for Georgia residents) and art portfolio deadline.

</div></li>
<li><div>
NUS & NTU (Singapore) applications officially open.
</div></li>
</ul>
</li>                            
                                    
                                </ul> 
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>November, 2023</h4>
                                <ul>
                                    <li><div><span>Nov 1 -</span> Official EA/ED/REA deadline for most US universities.</div></li>
                                    <li><div><span>Nov 17 -</span> HKU early deadline.</div></li>
                                    <li><div><span>Nov 19 -</span> HKUST early deadline.</div></li>

                                    <li><div><span>Nov 30 -</span> Official University of California undergraduate application deadline. (Note: The UC Application is extensive, and the portal is prone to crashing close to the deadline!)
</div></li>
                                    </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>December, 2023</h4>
                                <ul>
                                    
                                    <li><div><span>Dec 1 -</span> Official deadline for most US public universities (e.g. UT Austin), as well as scholarship deadlines for several universities (e.g. Dartmouth, BU, USC, and Claremont McKenna).</div></li>
                                    <li><div><span>Mid Dec -</span> Most (private) REA/ED admissions results announced. Select Canadian early deadlines.</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>January, 2024</h4>
                                <ul>
                                    <li><div>
                                    <span>Jan 1-15 -</span> Official Regular Decision deadline for most US universities.

</div></li>
                                    
                                    <li><div>
                                    Recommended date for letters of continued interest for deferred applicants. US RD alumni interviews ongoing.

</div></li>

<li><div><span>Jan 14 -</span> HKUST main round deadline.


</div></li>
<li><div><span>Jan 15 onwards - </span> Canadian university deadlines. Selected US universities EA/ED (e.g. Michigan, Georgia Tech, UIUC) and Oxbridge admissions results typically announced


</div></li>
<li><div><span>Jan 31 -</span> UCAS regular deadline (for most UK undergraduate courses).

</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>February, 2024</h4>
                                <ul>
                                    <li><div>
                                    Continue to give US alumni interviews.
</div></li>
                                    <li><div> Select US universities early e.g. UIUC) admissions results are announced.

</div></li>

<li><div><span>Feb 21 -</span> NUS (Singapore) deadline for IB students.</div></li>
<li><div><span>Feb 28 -</span> NUS (Singapore) deadline for international students.</div></li>
                                </ul>
                            </div>
                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>March, 2024</h4>
                                <ul>
                                    <li><div>
                                    Regular Decision admissions results announced for most US universities (including University of California, Ivy League (“Ivy Day”), Stanford)).


                                    </div></li>

                                 
                                    <li><div>
                                   <span>Mar 19 -</span> NTU (Singapore) deadline.



                                    </div></li>

                                    
                                </ul>
                            </div>
                           

                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>May, 2024</h4>
                                <ul>
                                   
                                    <li><div>
                                   <span>May 1 - </span> 
                                   Deadline for most US universities to commit to the college of your choice and submit your deposit.

                                    </div></li> 

                                </ul>
                            </div>

                            <div className="Undergraduate-Admissions-frame-middle-number">
                                <h4>August - September 2024</h4>
                                <ul>
                                    <li><div>
                                    Matriculation date for most universities.

                                    </div></li>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="admissions-calendar-plz-note">
                    <div className="container">
                        <div className="admissions-calendar-plz-note-middel">
                            <h4>Notes</h4>
                            <ul>
                                <li>
                                All official standardized test scores (SAT, ACT) must be submitted two weeks prior to the final application deadlines

                                </li>
                                <li>
                                English proficiency exams scores must often be submitted by a designated date, which varies by university
                                </li>
                                <li>UCAS and Canadian deadlines and admissions notifications ongoing (i.e. no standard date)</li>
                    
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section our-student-success footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>We help you  in organizing your<br /> time, setting priorities and <br />
                                        <span>getting you where you<br /> want to be.</span><br />
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
export default AdmissionsCalendar;
