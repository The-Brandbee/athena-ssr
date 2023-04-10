import React, { Component } from "react";
import { Link } from "gatsby"
import BannerTwo from '../img/banner/contact-us.png';
import mapIcon from '../img/mapIcon.png';
import Ph from '../img/Ph.png';
import InstagramApi from '../component/Home/InstagramApi.js';
import Facebook from '../img/facebook2.png';
import IN from '../img/in2.png';
import Insta from '../img/insta2.png';
import Tw from '../img/tw2.png';
import Youtube from '../img/youtube2.png';
import MobileTop from '../img/mobilebanner/mobile-contact-us.jpg';
import HubspotContactForm from "../container/HubspotContactForm";
import { Helmet } from "react-helmet"; 
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";


class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <>
            <Navbar />
            <div className="pmp-profile-page our-team-page admissions-page admissions-us why-us">
                 <Helmet>
					<title>  Contact Us  </title> 
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
                                        <div className='second-banner-changehover-left2 small-banner'>
                                            <h2>We're here to </h2>
                                            <h3>
                                                help & answer any<br /> questions you might<br /> have.</h3>
                                            <p>Looking forward to hearing from you!
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
                <section className="contact-us-top-section">
                    <div className="container">
                        <div className="heading-contact-middle">
                            <h3>Contact form</h3>
                            <h2>Please get in touch and our expert support<br /> team will answer all your questions.</h2>
                        </div>
                        <div className="Contact-form-middle-frame">
                            <HubspotContactForm/> 
                            <form className="none">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="Contact-form-middle-frame-box">
                                            <input type="text" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="Contact-form-middle-frame-box">
                                            <input type="text" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="Contact-form-middle-frame-box">
                                            <input type="text" placeholder="Contact No" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="Contact-form-middle-frame-box">
                                            <input type="text" placeholder="City" required />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="Contact-form-middle-frame-box text-center">
                                            <button>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>


                <section className="contact-us-top-section-map">
                    <div className="container">
                        <div className="heading-contact-middle">
                            <h3>Other modes of communication</h3>
                            <h2>We would love to hear from you.</h2>
                            <p>We would love to hear from you. Get in touch with us for more information and queries.</p>
                        </div>
                        <div className="contact-us-top-section-map-frame-mai">
                            <div className="contact-us-top-section-map-frame">
                                <div className="contact-us-top-section-map-frame-left">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.057772489999!2d77.0791874373099!3d28.47780674202016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e83b00a90d%3A0x558e33b968a0f97d!2sAthena%20Education!5e0!3m2!1sen!2sin!4v1599116709961!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                                </div>
                                <div className="contact-us-top-section-map-frame-right">
                                    <h3>Gurugram Office</h3>
                                    <p> <img src={mapIcon} /> <span>1st floor, Vatika Triangle<br />
                                        MG Road<br />
                                        Gurugram</span></p>
                                    <p> <a href="tel:+919560911655"><img src={Ph} /> <span>+91-9560911655</span></a></p>
                                </div>
                            </div>

                            <div className="contact-us-top-section-map-frame">
                                <div className="contact-us-top-section-map-frame-left">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2990822608244!2d72.83028816387656!3d19.00653820909363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf268cdce9dd%3A0x6d1bc3fafa5a705a!2sThe%20Business%20Quarter%20(TBQ)!5e0!3m2!1sen!2sin!4v1675156746867!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="contact-us-top-section-map-frame-right">
                                    <h3>MUMBAI Office</h3>
                                    <p> <img src={mapIcon} /> <span>The Business Quarter, 7th floor,<br />
                                        Tower 2A, One World Center<br />
                                        Lower Parel, Mumbai</span></p>
                                    <p> <a href="tel:+918130011695"><img src={Ph} /> <span>+91-8130011695</span></a></p>
                                </div>
                            </div>

                            <div className="contact-us-top-section-map-frame">
                                <div className="contact-us-top-section-map-frame-left">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.693853615968!2d77.692706!3d12.927387699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176eee7cbdd7%3A0x8a690552bdc12ffb!2sAthena%20Education!5e0!3m2!1sen!2sin!4v1676961597347!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="contact-us-top-section-map-frame-right">
                                    <h3>Bengaluru Office</h3>
                                    <p> <img src={mapIcon} /> <span>WeWork<br />
                                        Embassy Tech Village<br />
                                        Bellandur, Bengaluru</span></p>
                                    <p> <a href="tel:+918920733436"><img src={Ph} /> <span>+91-8920733436</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <section className="contact-us-appointments-page">
                    <div className="container">
                        <p>Please note that meetings are conducted by appointments only. </p>
                        <p>Please e-mail <a href="mailto:enrolment@athenaeducation.co.in">enrolment@athenaeducation.co.in</a> to schedule. </p>
                        <p>For all questions (enrolment, HR, marketing, etc.) call us at <a href="tel:+918920733436">+91 92891 47334</a></p>
                    </div>
                </section>
                <section className='instagram-main-frame track-your-college'>
                    <div className="container">
                        <div className="track-your-college-left text-center">
                            <h3>Stay in touch</h3>
                            <h2>Check us out on social media</h2>
                            <p>Want to know how we help our students smoothly navigate their journey to the top universities across the globe? <br />Follow us on social media and be a part of our community.  </p>
                        </div>
                        <div className='instagram-page-scol contactpage'>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/athenaeducationindia" target="_blank">
                                        <img src={Facebook} alt="" />
                                    </a>

                                </li>
                                <li>
                                    <a href="https://www.instagram.com/athena_education/" target="_blank">
                                        <img src={IN} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/athena-education-india" target="_blank">
                                        <img src={Insta} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/AthenaEduIndia" target="_blank">
                                        <img src={Tw} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCfANEYz13Ey2vE_ziHVHBXQ/videos" target="_blank">
                                        <img src={Youtube} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className='instagram-pic-frame-button'>
                        <InstagramApi />
                    </div>
                </section>
               

            </div>
            <Footer />
            </>
        );
    }
}
export default Contact;
