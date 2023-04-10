import React, { Component } from "react";
import { Link } from "gatsby"
import Facebook from '../../img/facebook.png';
import IN from '../../img/in.png';
import Insta from '../../img/insta.png';
import Tw from '../../img/tw.png';
import Youtube from '../../img/youtube.png';
import RightArrow from '../../img/right-arrow.png';
import ArrowTop from "./ArrowTop";

export default class Footer extends Component {
  render() {
    return (
      <div>
<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25237881.js">
</script>
        <footer>
          <div className="container">
            <div className="row">

              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>ABOUT US</h4>
                      <ul>
                        <li><Link to="/about-athena">About Athena</Link></li>
                        <li><Link to="/our-story">Our Story</Link></li>

                        <li><Link to="/why-us">Why Us?</Link></li>
                        <li><Link to="/our-team">Our Team</Link></li>
                        <li><Link to="/our-student-success">Student Success</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>ABOUT THE PROGRAM</h4>
                      <ul>
                        <li> <Link to="/about-the-program">Personal Mentorship Program</Link></li>
                        <li> <Link to="/student-journey">Student Journey</Link></li>
                        <li> <Link to="/profile-development">Profile Development</Link></li>
                        <li> <Link to="/profile-presentation">Profile Presentation</Link></li>
                        <li> <Link to="/how-to-apply">How To Apply</Link></li>

                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>RESOURCES</h4>
                      <ul>
                        <li> <Link to="/events-webinars">Events & Webinars</Link></li>
                        <li> <Link to="/admission-calendar">Admission Calendar</Link></li> 
                        <li> <Link to="/in-the-news">In The News</Link></li>
                        <li> <Link to="/blog">Blogs</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="middle-footer">
                      <h4>USEFUL LINKS</h4>
                      <ul>

                        <li>  <a target="_blank" href="https://welcome.athenaeducation.co.in/events">
                          Events
                        </a></li>

                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li>  <Link  to="/career">
                          Careers
                        </Link></li>
                        <li> <Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 last-child">
                <div className="footer-right-frame">
                  <div className="subsc">
                    <form>
                      <h4>Sign up for the newsletter</h4>
                      <input className="Email" type="text" placeholder="Email" name="fname" required="" />
                      <button><img src={RightArrow} alt="" /></button>
                    </form>
                  </div>
                  <div className="clear"></div>
                  <div className="touch">

                    <ul>
                      <li>
                        <a href="https://www.facebook.com/athenaeducationindia" target="_blank">
                          <img src={Facebook} alt="" />
                        </a>

                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/athena-education-india" target="_blank">
                          <img src={IN} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/athena_education/" target="_blank">
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
                    <div className="subsc number">

                      <h4>To get in touch with us, call
                      </h4>
                      <p>
                        <a href="+91 9289147334">+91 92891-47334</a>
                      </p>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer >
        <div className="copyright-sec">
          <div className="row--">
            <p>Copyright © Athena Education. All Rights Reserved 2023</p>
          </div>
        </div>

        <ArrowTop />
      </div >
    );
  }
}
