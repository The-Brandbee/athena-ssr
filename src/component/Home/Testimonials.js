import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testi from '../../img/testi.png';
import TestiTwo1 from '../../img/testi-m-1.jpg';
import TestiTwo2 from '../../img/testi-m-2.jpg';
import TestiTwo4 from '../../img/testi-m-4.jpg';
import TestiTwo5 from '../../img/testi-m-5.jpg'; 

export default class Testimonials extends Component {
    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    render() {
        return (
            <div className='TESTIMONIALS-list-main-home-main'>
                <Carousel responsive={this.responsive}>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>





                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>



                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>



                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>



                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>



                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>



                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>




                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>Before I joined, I knew I was good at politics and English but had no idea I could pursue them as a serious career! Athena helped me discover a feasible path with these subjects and consequently helped me get into a college that was the right fit for my academic and professional ambitions.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Moksha Sharma</h4>
                                <p>University of Chicago, '21 | Athena '17</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that they don’t catch the fish for the student; they teach the student how to fish. I have seen Tulip transform before my eyes, and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We started three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo4} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Nitin Mittal</h4>
                                <p>Father of Tulip Mittal | UCLA, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Going into the application process, I severely underestimated the number of moving pieces there were - the essays, activity list, the LORS, etc. Working with Athena; I was able to figure out a game plan to help me achieve my dream of getting into Stanford.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Peehu Agarwal</h4>
                                <p>Stanford University, '26 | Athena '22</p>
                            </div>
                        </div>
                    </div>
                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena helped me evolve into a new, more confident 2.0 version of myself. The team focuses on amplifying and building my unique brand without diluting our unique voice. Athena's various productivity hacks and obsession with striving for 100% were crucial to my success.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={TestiTwo1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Daksh Chokra</h4>
                                <p>University of Pennsylvania, '20 | Athena '22</p>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </div>
        )
    }
}