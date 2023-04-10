import React, { Component } from "react";
import { Link } from "gatsby"
import Logo from '../../img/logo-new.png';
import { slide as Menu } from 'react-burger-menu'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';


class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="mobile-menu-header">
        <div className="container--">
          <div className="col-md-2--">
            <div className="header-logo-mobile">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-md-10--">
            <div className="dropdown mobilemenu-new">
              <Menu>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <a href="/"><AccordionItemHeading>
                      <AccordionItemButton>
                        Home
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    </a>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        About Us
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li><a href="/about-athena">About Athena</a></li>
                          <li><a href="/our-story">Our Story</a></li>
                          <li><a href="/why-us">Why Us</a></li>
                          <li><a href="/our-team">Our Team</a></li>
                          <li><a href="/our-student-success">Student Success</a></li>
                          <li><a href="/knowledge-center">Knowledge Center</a></li>
                          <li><a href="/testimonials">Testimonials</a></li>
                          <li><a href="/contact">Contact Us</a></li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Personal Mentorship Program
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li><a href="/about-the-program">About the Program</a></li>
                          <li><a href="/student-journey">Student Journey</a></li>
                          <li><a href="/profile-development">Profile Development</a></li>
                          <li><a href="/profile-presentation">Profile Presentation</a></li>
                          <li><a href="/how-to-apply">How to Apply</a></li>
                          <li><a href="/program-for-grade-9">Program for Grade 9</a></li>
                          <li><a href="/program-for-grade-10">Program for Grade 10</a></li>
                          <li><a href="/program-for-grade-11">Program for Grade 11</a></li>
                          <li><a href="/program-for-grade-12">Program for Grade 12</a></li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Admissions
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li><a href="/admission-process-to-us">Admission Process to the US</a></li>
                          <li><a href="/admission-process-to-uk">Admission Process to the UK</a></li>
                          <li><a href="/admission-process-to-canada">Admission Process to Canada</a></li>
                          <li><a href="/our-student-success">Student Success</a></li>
                          <li><a href="/top-colleges-for-popular-majors">Top Colleges for Popular Majors</a></li>
                          <li><a href="/admission-calendar">Admission Calendar</a></li>

                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem> 
                  <AccordionItem>
                    <a  href="/events-webinars"><AccordionItemHeading>
                      <AccordionItemButton> 
                      Events & Webinars
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    </a> 
                  </AccordionItem>
                  <AccordionItem>
                    <a href="/in-the-news"><AccordionItemHeading>
                      <AccordionItemButton>
                        In the News
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    </a>
                  </AccordionItem>
               
                  <AccordionItem>
                    <a  href="/career"><AccordionItemHeading>
                      <AccordionItemButton> 
                        Careers
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    </a>
                  </AccordionItem>

                  <AccordionItem>
                    <a href="/blog"><AccordionItemHeading>
                      <AccordionItemButton>
                        Blogs
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    </a>
                  </AccordionItem>

                </Accordion>
              </Menu>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default MobileMenu;