import React, { Component } from "react";
import { Link } from "gatsby"
import BlogL from '../img/blog.jpg';
import BannerTwo from '../img/banner/blog.jpg';
import Cal from '../img/cla-b.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';
import Search from '../img/search.png';
import MobileTop from '../img/mobilebanner/mobile-blog.jpg';
import BlogPost from "../component/BlogPost";
import Pagination from '../component/Pagination';
import RecentPosts from "../component/RecentPosts.js";
import {Helmet} from 'react-helmet';
import Navbar from "../component/Home/Navbar.js";
import Footer from "../component/Home/Footer.js";

class BlogMain extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        return (
            <>
            <Navbar />
            <div className="pmp-profile-page">
                 <Helmet>
					<title>  Blog Main  </title>   
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
                                            <h2>Stay updated on the </h2>
                                            <h3>LATEST TRENDS IN COLLEGE ADMISSIONS!</h3>
                                            <br />
                                            <br />
                                            <p>Enhance your application with our blogs.</p>
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
                <section className="presscoverage-main-frame">
                    <div className='container'>
                        <div className="row">
                            <div className="col-md-8">
                                <BlogPost />
                            </div>
                            <div className="col-md-4">
                                <div className="search-box-blog-right-main">
                                    <div className="search-box-blog">
                                        <form action="#">
                                            <input type="text" id="fname" name="fname" placeholder="SEARCH" required />
                                            <button><img src={Search} /></button>
                                        </form>
                                    </div>

                                    <div className="blog-list-frame-right bottom">
                                        <h4>Recent posts</h4>

                                        <RecentPosts />
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

            </div>
            <Footer />
            </>
        );
    }
}
export default BlogMain;