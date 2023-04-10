import React, { Component } from "react";
import { Link } from "gatsby"
import MobileMenu from "./MobileMenu.js";
import Logo from '../../img/logo-new.png';
import ApproachOne1 from '../../img/Personalization-menu.png';
import ApproachOne2 from '../../img/Admissions-menu.png';
import ApproachOne3 from '../../img/Process-orientation-menu.png';
import Sticky from 'react-sticky-el';

class Navbar extends React.Component {
  test(event) {
    document.getElementById('test2').classList.remove('show');
  }
  test2(event) {
    document.getElementById('test2').classList.add('show');
  }


  test5(event) {
    document.getElementById('test4').classList.remove('show');
  }
  test4(event) {
    document.getElementById('test4').classList.add('show');
  }


  test7(event) {
    document.getElementById('test6').classList.remove('show');
  }
  test6(event) {
    document.getElementById('test6').classList.add('show');
  }





  render() {
    return (
      <>

        <header>
          <Sticky>
            <div className="container">
              <div className="row desktop ">
                <div className="col-md-2">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="right-top-bar">
                    <ul>
                      <li>
                        <a target="_blank" href="https://calendly.com/athenaeducation/counseling-webinar">
                          Book a Consultation
                        </a>
                      </li>
                      <li>
                        <Link to="/events-webinars">
                          Events & Webinars
                        </Link>
                      </li>

                    </ul>
                  </div>
                  <div className="navbar-menu-header">
                    <ul>
                      <li onMouseOut={() => { document.getElementById('test2').classList.remove('show'); }} onMouseOver={(event) => { this.test2(event); }}>
                        <Link to="#">
                          About Us
                        </Link>
                        <div id="test2" className="droup-menuheader-main-section dropdown-content">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="droup-menuheader-main-section-left-image">
                                  <img src={ApproachOne1} />
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="droup-menuheader-main-section-right-list">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <ul className="menu-left">
                                        <li><Link onClick={(event) => { this.test(); }} to="/about-athena">About Athena</Link></li>
                                        <li><Link onClick={(event) => { this.test(); }} to="/our-story">Our Story</Link></li>

                                        <li><Link onClick={(event) => { this.test(); }} to="/why-us">Why Us</Link></li>
                                        <li><Link onClick={(event) => { this.test(); }} to="/our-team">Our Team</Link></li>

                                      </ul>
                                    </div>
                                    <div className="col-md-6">
                                      <ul className="menu-right">

                                        <li><Link onClick={(event) => { this.test(); }} to="/our-student-success">Student Success</Link></li>

                                        <li><Link onClick={(event) => { this.test(); }} to="/knowledge-center">Knowledge Center</Link></li>
                                        <li><Link onClick={(event) => { this.test(); }} to="/testimonials"> Testimonials</Link></li>


                                        <li><Link onClick={(event) => { this.test(); }} to="/contact">Contact Us</Link></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li onMouseOut={() => { document.getElementById('test4').classList.remove('show'); }} onMouseOver={(event) => { this.test4(event); }}>
                        <Link to="#">
                          Personal Mentorship Program
                        </Link>
                        <div id="test4" className="droup-menuheader-main-section">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="droup-menuheader-main-section-left-image">
                                  <img src={ApproachOne3} />
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="droup-menuheader-main-section-right-list">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <ul className="menu-left">
                                        <li><Link onClick={(event) => { this.test5(); }} to="/about-the-program">About the Program</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/student-journey">Student Journey</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/profile-development">Profile Development</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/profile-presentation">Profile Presentation</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/how-to-apply">How to Apply</Link></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-6">
                                      <ul className="menu-right">
                                        <li><Link onClick={(event) => { this.test5(); }} to="/program-for-grade-9">Program for Grade 9</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/program-for-grade-10">Program for Grade 10</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/program-for-grade-11">Program for Grade 11</Link></li>
                                        <li><Link onClick={(event) => { this.test5(); }} to="/program-for-grade-12">Program for Grade 12</Link></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                  <li  onMouseOut={() => { document.getElementById('test6').classList.remove('show'); }} onMouseOver={(event) => { this.test6(event); }}> 

                        <Link to="#">
                          Admissions

                        </Link>
                        <div id="test6" className="droup-menuheader-main-section">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="droup-menuheader-main-section-left-image">
                                  <img src={ApproachOne2} />
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="droup-menuheader-main-section-right-list">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <ul className="menu-left">
                                        <li><Link onClick={(event) => { this.test7(); }} to="/admission-process-to-us">Admission Process to the US</Link></li>
                                        <li><Link onClick={(event) => { this.test7(); }} to="/admission-process-to-uk">Admission Process to the UK</Link></li>
                                        <li><Link onClick={(event) => { this.test7(); }} to="/admission-process-to-canada">Admission Process to Canada</Link></li>
                                      </ul>
                                    </div>
                                    <div className="col-md-6">
                                      <ul className="menu-right">
                                        <li><Link onClick={(event) => { this.test7(); }} to="/our-student-success">Student Success</Link></li>
                                        <li><Link onClick={(event) => { this.test7(); }} to="/top-colleges-for-popular-majors">Top Colleges for Popular Majors</Link></li>
                                        <li><Link onClick={(event) => { this.test7(); }} to="/admission-calendar">Admission Calendar</Link></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li><Link to="/in-the-news">In the News</Link></li>
                      <li>
                        <Link  to="/career"> 
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2 fixmenu">
                  <a target="_blank" href="https://calendly.com/athenaeducation/counseling-webinar">
                    Book a Consultation
                  </a>
                </div>
              </div>
              
            </div>
          </Sticky>
        </header>
      
        <div className="container">
          <div className="row--">
          <MobileMenu />
          </div>
        </div>
       

      </>
    );
  }
}
export default Navbar;
