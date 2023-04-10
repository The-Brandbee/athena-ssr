import React, { Component } from "react";
import { Link } from "gatsby"
import BlogIm from '../img/blog.jpg';
import BannerTwo from '../img/banner/In-the-news.jpg';


import MediaOne from '../img/media-1.jpg';
import MediaTwo from '../img/media-2.jpg';
import MediaThree from '../img/media-3.jpg';
import MediaFour from '../img/media-4.jpg';
import MediaFive from '../img/media-5.jpg';
import MediaSix from '../img/media-6.jpg';
import MediaSeven from '../img/media-7.jpg';
import MediaEight from '../img/media-8.jpg';
import MediaNine from '../img/media-9.jpg';

import Press1 from '../img/press/1.jpg';
import Press2 from '../img/press/2.jpg';
import Press3 from '../img/press/3.jpg';
import Press4 from '../img/press/4.jpg';
import Press6 from '../img/press/6.jpg';

import ClaOne from '../img/cla-b.png';
import ClaTwo from '../img/cla-b2.png';
import Students from '../img/footer-vector/in-the-news.jpg';

import MobileTop from '../img/mobilebanner/mobile-in-the-news.jpg';
import MobileFooter from '../img/mobilebanner/Mobile-footer-in-the-news.jpg';

import Marquee from "react-fast-marquee";
import NewPost from "../container/NewPost"; 
import { Helmet } from "react-helmet";
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";


class PressCoverage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
              <Helmet>
					<title> in the news </title>   
				</Helmet>
                <Navbar />
            <div className="pmp-profile-page in-the-news-add-page">
                
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
                                            <h3>Our Presence </h3>
                                            <h2>on the Global Stage</h2>
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
                <section className='our-result-home'>
                    <div className="container--">
                        <div className='why-choese-us-home-page-heading'>
                            <h3>PRESS COVERAGE</h3>
                            <h2>Athena's Media Footprint</h2>
                        </div>
                        <Marquee className="in-the-news-mar" speed="80" direction="left">
                            <div className='marquee-section new-press'>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaOne} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaTwo} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaThree} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaFour} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaFive} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaSix} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaSeven} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaEight} alt="" />
                                    </div>
                                </div>
                                <div className='marquee-section-inner-section-left'>
                                    <div className='marquee-section-inner-section-botton-img'>
                                        <img src={MediaNine} alt="" />
                                    </div>
                                </div>

                            </div>
                        </Marquee>

                    </div>
                </section>
                <section className="presscoverage-main-frame new">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <NewPost/>
                                  
                                    <div className="col-md-12 texe-center none">
                                        <div className="bread-crma-last-frame texe-center">
                                            <ul className="texe-center">
                                                <li className="active">1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li> &#x3e; </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </section>

                <section className="how-top-apply-page-last-student-section footer-banner-bottom-new">
                    <img src={Students} alt="" />
                    <div className="how-top-apply-page-last-student-section-inner-main">
                        <div className="container">
                            <div className="how-top-apply-page-last-student-section-inner">
                                <div className="how-top-apply-page-last-student-section-inner-teo">
                                    <p>Athena is leading the charge, shaping <br />minds and transforming the education<br /> landscape through visionary thought leadership.</p>
                                    <h4>Are you ready to lead the charge?</h4>
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
export default PressCoverage; 
