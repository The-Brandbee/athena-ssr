import React, { Component, useState, } from 'react'
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Apply from '../img/apply.png';
import ArrowOne from '../img/arrow-1.png';
import Arrowtwo from '../img/arrow-2.png';

import studentJicon1 from '../img/studentj-icon/1.svg';
import studentJicon2 from '../img/studentj-icon/2.svg';
import studentJicon3 from '../img/studentj-icon/3.svg';
import studentJicon4 from '../img/studentj-icon/4.svg';

import studentJicon6 from '../img/studentj-icon/6.svg';
import studentJicon7 from '../img/studentj-icon/7.svg';
import studentJicon8 from '../img/studentj-icon/8.svg';
import studentJicon9 from '../img/studentj-icon/9.svg';





export default class StudentJou extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <>
                <Tabs>
                    <div className="container">
                        <TabList>

                            <Tab>
                                <div className='Profile-development-tab'>
                                    <h4>  <img src={studentJicon1} /><span>Profile development</span></h4>
                                    <p>The process of building your human brand to showcase your true potential</p>
                                </div>
                            </Tab>
                            <Tab>
                                <div className='Profile-development-tab'>
                                    <h4>  <img src={studentJicon6} /><span>Profile presentation</span></h4>
                                    <p>The process of presenting it to colleges in the most impressive and articulate manner</p>
                                </div>
                            </Tab>

                        </TabList>
                    </div>

                    <TabPanel>
                        <div className="container">
                            <div className='Assess-tab-frame'>
                                <div className='Assess-tab-frame-middle'>
                                    <h4><span>Assess</span> <img src={studentJicon2} /></h4>
                                    <h5>Your interests, strengths, and goals</h5>
                                    <ul>
                                        <li>Psychometric Test</li>
                                        <li>Autobiography of a Student</li>
                                        <li>Deep Autobiography of a Student</li>
                                    </ul>
                                </div>
                                <div className='Assess-tab-frame-middle'>
                                    <h4><span>Strategize</span> <img src={studentJicon3} /></h4>
                                    <h5>The application<br /> theme</h5>
                                    <ul>
                                        <li>Design the student brand</li>
                                        <li>Student roadmap</li>
                                        <li>Work experience</li>
                                        <li>Summer programs</li>
                                        <li>Standardized test planning
                                        </li>

                                    </ul>
                                </div>
                                <div className='Assess-tab-frame-middle'>
                                    <h4><span>Execute </span> <img src={studentJicon4} /></h4>
                                    <h5>Bespoke <br />Mentorship </h5>
                                    <ul>
                                        <li>Weekly one-on-one check-ins</li>
                                        <li>Time management and prioritization
                                        </li>
                                        <li>Experiential learning
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="lean-more-bottom-tab-frame admission-to-your-dream-university-frame-middle-right what-we-do-section-page">
                            <div className='footer-top-map-img-button'>
                                <Link className='footer-top-map-img-button-link' to="/profile-development"> Learn more <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="container">
                            <div className='Assess-tab-frame'>
                                <div className='Assess-tab-frame-middle'>
                                    <h4><span>Assess</span> <img src={studentJicon7} /></h4>
                                    <h5>Categorize | Evaluate:</h5>
                                    <ul>
                                        <li>Strategize your College List</li>

                                    </ul>
                                </div>
                                <div className='Assess-tab-frame-middle'>
                                    <h4><span>STRATEGIZE</span> <img src={studentJicon8} /></h4>
                                    <h5>Workshops:</h5>
                                    <ul>
                                        <li>Prepare essay and application
                                            academy workshops
                                        </li>
                                    </ul>
                                </div>
                                <div className='Assess-tab-frame-middle'>
                                    <h4><span>EXECUTE </span> <img src={studentJicon9} /></h4>
                                    <h5>Essays | Applications | Interviews | Pick the college :</h5>
                                    <ul>
                                        <li>Essays</li>
                                        <li>Letter of Recommendation (LoRs) and Activity List</li>
                                        <li>Interviews</li>
                                        <li>Pick the right college for you and meet Athena alumni</li>


                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="lean-more-bottom-tab-frame admission-to-your-dream-university-frame-middle-right what-we-do-section-page">
                            <div className='footer-top-map-img-button'>
                                <Link className='footer-top-map-img-button-link' to="/profile-presentation"> Learn more <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </>
        )
    }
}
