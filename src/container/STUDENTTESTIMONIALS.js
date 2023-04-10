import React, { Component } from "react";
import { render } from 'react-dom';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Button } from '@carbon/react';
import "../container/testimonials.css";
import Boy from '../img/boy.png';
import BoyTwo from '../img/boy2.png';

import StudentTestimonials from '../img/Student-Testimonials-1.jpg';
import StudentTestimonials2 from '../img/Student-Testimonials-2.jpg';
import StudentTestimonials3 from '../img/Student-Testimonials-3.jpg';
import StudentTestimonials4 from '../img/Student-Testimonials-4.jpg';
import StudentTestimonials5 from '../img/Student-Testimonials-5.jpg';
import StudentTestimonials6 from '../img/Student-Testimonials-6.jpg';
import StudentTestimonials7 from '../img/Student-Testimonials-7.jpg';

export default class STUDENTTESTIMONIALS extends Component {

    render() {

        return (
            <div className="test-bor-img-cy" style={{ width: '100%' }}>
                <Tabs>
                    <div className="container">
                        <TabList aria-label="List of tabs">
                            <Tab>
                                <img src={StudentTestimonials} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials2} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials3} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials4} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials5} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials6} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials7} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials2} />
                            </Tab>
                            <Tab>
                                <img src={StudentTestimonials3} />
                            </Tab>
                        </TabList>
                    </div>
                    <TabPanels>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Daksh Chokra</h4>
                                                <h5>University of Pennsylvania, '20 | Athena '16</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>I've definitely grown with Athena to evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building our unique brand without diluting our unique voice. Rahul sir's various productivity hacks and obsession with striving for 100% is what I truly admire.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials2} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Moksha Sharma</h4>
                                                <h5>University of Chicago, '21 | Athena '17</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>I wasn't aware of my interest in Politics and English - though I knew I was good at them, but didn't know whether I could pursue them in my career. Athena helped me find my passions for these subjects and consequently helped me get into a college that was the right fit for my interests and passions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials3} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Prithvi Oak</h4>
                                                <h5>Brown University '25 | Athena '21</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>
                                                    They ensured that all parts of my application were looked into with meticulous detail. The team ensured that I was geared and ready with the best application.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials4} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Peehu Agarwal</h4>
                                                <h5>Stanford University, '26 | Athena '22</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>
                                                    Going into the application process, one thing I severely underestimated was the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena, I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials5} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Karan Kashyap</h4>
                                                <h5>Brown University, ‘25 | Athena, ‘21</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>The most important life skill that I learned at Athena was self-reflection. Rahul sir helped me realize early on why I like the things I do, what motivates me and how to translate that into effective action. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials6} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Naman Mansukhani</h4>
                                                <h5>Carnegie Mellon University, ‘25</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>One hurdle that Athena helped me cross was the essay writing process. They systematically broke down how to write an essay. They held weekly seminars on writing an essay. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials7} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Nehal Sindhu</h4>
                                                <h5>University of California, Berkeley, ‘25 | Athena, ‘21</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>Athena helped me get out of my comfort zone. Athena stands for being there for and standing with you during the worst and strangest of times.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Daksh Chokra</h4>
                                                <h5>University of Pennsylvania, '20 | Athena '16</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>I've definitely grown with Athena to evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building our unique brand without diluting our unique voice. Rahul sir's various productivity hacks and obsession with striving for 100% is what I truly admire.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials2} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Moksha Sharma</h4>
                                                <h5>University of Chicago, '21 | Athena '17</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>I wasn't aware of my interest in Politics and English- though I knew I was good at them, but didn't know whether I could pursue them in my career. Athena helped me find my passions for these subjects and consequently helped me get into a college that was the right fit for my interests and passions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="testimonials-all-page-align">
                                <div className="container">
                                    <div className="testimonials-all-page-align-middle">
                                        <div className="testimonials-all-page-align-middle-left">
                                            <img src={StudentTestimonials3} />
                                        </div>
                                        <div className="testimonials-all-page-align-middle-right">
                                            <div className="testimonials-all-page-align-middle-right-middle">
                                                <h4>Prithvi Oak</h4>
                                                <h5>Brown University '25 | Athena '21</h5>
                                                <div className="bordertestimonials-all-page-align-middle-right"></div>
                                                <p>
                                                    They ensured that all parts of my application were looked into with meticulous detail. The team ensured that I was geared and ready with the best application.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        )
    }
}