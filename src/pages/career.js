import React, { Component } from "react";
import { Link } from "gatsby"
import BannerTwo from '../img/banner/careers.jpg';
import MobileTop from '../img/mobilebanner/Mobile-Careers.jpg';
import Career1 from '../img/career-1.png';
import Career2 from '../img/career-2.png';
import Career3 from '../img/career-3.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/career.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-calendar.jpg';
import BannerOne from '../img/banner-1.jpg';
import BannerVideo from '../img/atheena-video.mp4'; 
import ProfileOne from '../img/profile-1.jpg';
import ProfileTwo from '../img/profile-2.jpg';
import teammain from '../img/team-main.png'; 

import CULTURE1 from '../img/CULTURE-1.jpg';
import CULTURE2 from '../img/CULTURE-2.jpg';
import CULTURE3 from '../img/CULTURE-3.jpg';

import heart1 from '../img/heart-1.jpg';
import heart2 from '../img/heart-2.jpg';
import heart3 from '../img/heart-3.jpg';
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js"; 


class Career extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page career-page-main">
                  <Helmet>
					<title>  Career  </title>   
				</Helmet>  
                <div className="banner-section desktopD">
                    <div className='first-slide second'>
                        <div className='banner-image'>
                            <img src={BannerTwo} alt="" />
                        </div>
                        <div className='second-banner-changehover'>
                            <div className='container'>
                                <div className='second-banner-changehover-main'>
                                    <div className='second-banner-changehover-left grade-add-design-frame'>


                                        <div className='second-banner-changehover-left2 small-banner'>
                                           <h2> Athena is a hub of intellectuals, </h2>
                                            <h3>creatives, and writers on a mission </h3>
                                            <p> to transform education.</p>
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
                <section className="project-profile-development-frame what-we-do about-athena-new career">

<div className="project-profile-development-frame-right">
    <div className="project-profile-development-frame-righttwo">
        <div className="heading-contact-middle">
            <h3>Life at Athena</h3>
            <h2>Our team is at the heart  <br />
            of everything we do!

            </h2>
            <p>
            We are a dynamic group of young (at heart!) professionals on a mission to transform the global education system.
            </p>
            <p>Operating in a unique liberal-arts center modeled after a university library, Athena is committed to nurturing intellectual vitality, leadership, and compassion among students around the world, helping them become their best selves and ultimately get into the world’s most competitive universities.</p>
            <p>If you want to sharpen your creative quill or flex your client communication muscles for an enriching career in education, Athena is your new home! </p>
        </div>
       

    </div>
</div>
<div className="project-profile-development-frame-left career-page">
    <div className="project-profile-development-frame-left-frame">
        <img src={heart1} />
        <img src={heart2} />
    </div>
    <div className="project-profile-development-frame-right-frame">
        <img src={heart3} />
    </div>
</div>
</section>

<section className="Founding-Members-frame OPEN-POSITIONS">
                    <div className='container'>
                        <div className="heading-contact-middle emerged">
                            <h3>Open positions</h3>
                            <h2>Find the perfect role for you. Select from our <br/> open positions below to begin your search.</h2>
                        </div>
                        <div className='track-your-college-left-link career-page'>
                                <a target="_blank" className='footer-top-map-img-button-link ' href='https://boards.greenhouse.io/athenaeducation'> Check open positions <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                            </div>
                    </div>
                </section>

                <section className="Founding-Members-frame OPEN-POSITIONS What-we-offer">
                    <div className='container'>
                        <div className="heading-contact-middle emerged">
                            <h3>What we offer</h3>
                            <h2>If you’re passionate about what you do,  <br/> Athena is the place for you.</h2>
                        </div>
                             <div className="Team-Culture-frame-middle">
                                 <div className="Team-Culture-frame-middle-left">
                                   <img src={CULTURE1}/>
                                 </div>
                                 <div className="Team-Culture-frame-middle-right">
                                   <h4>Team and Culture</h4>
                                   <p>
                                   Our team consists of creative and colorful characters, all goal-oriented and hungry for growth (and healthy snacks). The work environment is a mixture of formal and playful, as we all strive to get things done while sipping Italian coffee brewed in house.
</p>
                                 </div>
                             </div>

                             <div className="Team-Culture-frame-middle">
                                 <div className="Team-Culture-frame-middle-left">
                                   <img src={CULTURE2}/>
                                 </div>
                                 <div className="Team-Culture-frame-middle-right">
                                   <h4>Professional Advancement
</h4>
                                   <p>
                                   You will have opportunities to master your existing skills, obtain new competencies, and drive organizational transformation. We encourage you to explore various cross-functional roles that can expand your professional horizons. 
                                   </p>
<p>
We also offer the opportunity to collaborate across our group organizations—Hora.ai (tech) and Sitare Foundation (education non-profit)—and learn from like-minded, passionate people committed to creating true impact.
</p>
                                 </div>
                             </div>
                             <div className="Team-Culture-frame-middle">
                                 <div className="Team-Culture-frame-middle-left">
                                   <img src={CULTURE3}/>
                                 </div>
                                 <div className="Team-Culture-frame-middle-right">
                                   <h4>Location & Work Environment</h4>
                                   <p>The Vatika Triangle; Gurgaon, India.
We have built a creative space in a top corporate building in a prime location in Gurgaon. The office is on M.G. Road, a 2-minute walk from the M.G. Road Metro Station.
</p>
                                   <p>Our team comes with diverse academic backgrounds including economics, engineering, literature, psychology, data science, microbiology and law among others.  We pride ourselves on delivering unparalleled quality, taking ownership of our work, and adapting to ever-changing circumstances. 
</p>
                                 </div>
                             </div>


                        </div>
                      
                </section>

                <section className="Founding-Members-frame OPEN-POSITIONS">
                    <div className='container'>
                        <div className="heading-contact-middle emerged">
                            <h3>Hear from our team</h3>
                            <h2>Here is what our team has <br/> to say about life at Athena.</h2>
                        </div>
                        </div>
                        <div className="video-frame-career">
                        <iframe width="100%" height="600" src="https://www.youtube.com/embed/o-c-QWNEr2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                        </div>
                       
                   
                </section>


                <section className="Founding-Members-frame OPEN-POSITIONS Our-Impact">
                    <div className='container'>
                        <div className="heading-contact-middle emerged">
                            <h3>Our Impact</h3>
                            <h2>We ensure our team members have just as  <br/> promising careers as our scholars do.</h2>
                        </div>
                        <div className="Our-Impact-middle-frame">
                               <div className="Our-Impact-middle-frame-left">
                                  <img src={Career1}/>
                                  <h4>Students and their families</h4>
                                  <p>Providing students with a gateway to the best institutions and a bright, fulfilling future. Helping them grow in the process! </p>
                               </div>
                               <div className="Our-Impact-middle-frame-left">
                                  <img src={Career2}/>
                                  <h4>The education industry</h4>
                                  <p>Promoting a holistic, interdisciplinary approach that mirrors Ivy League education. </p>
                               </div>
                               <div className="Our-Impact-middle-frame-left">
                                  <img src={Career3}/>
                                  <h4>Your personal learning and growth</h4>
                                  <p>
                                      We are teachers at heart and integrate learning and self-development in all we do. Writers and consultants undergo weekly training sessions that help sharpen their skillset.
                                  </p>
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
                                    <p>By focusing on inclusivity,<br/> engagement, and culture,<br/> we are committed to cultivating a  <br />
                                        <span>workplace in which everyone<br /> can grow.</span><br />
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
export default Career;
