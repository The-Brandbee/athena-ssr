import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testi from '../img/testi.png';
import TestiTwo from '../img/testi-m.png';
import ParentTestimonials1 from '../img/Parent-Testimonials-1.jpg';
import ParentTestimonials2 from '../img/Parent-Testimonials-2.jpg';
import ParentTestimonials3 from '../img/Parent-Testimonials-3.jpg';
import ParentTestimonials4 from '../img/Parent-Testimonials-4.jpg';
import ParentTestimonials5 from '../img/Parent-Testimonials-5.png';

export default class ParentsTestimonials extends Component {
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
                            <p>
                                When we connected with Athena, we learned that Athena doesn't catch the fish for the student; it teaches the student fishing. I have seen Tulip transform before my own eyes and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We were three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={ParentTestimonials1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Preeti Kaul</h4>
                                <p>Parent of Ish Kaul | Princeton University, '22 | Athena '18</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                I appreciate the meticulous and thorough expertise Athena provided with the undergrad application process, the personalized approach to understanding my child's unique strengths and opportunities. Then, the journey of nudging each child to become more self-aware, hone in on their colleges of choice, allowing the child to discover the best fits for themself both in terms of academics, personality, and the social ecosystem that would suit them. Athena does not follow a cookie-cutter approach; instead, they give mentorship on how the child can bring out the best and unique attributes about themself in college applications.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={ParentTestimonials4} className="normal" alt="" />
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
                                The biggest perk of working with Athena was that we, as parents, could comfortably take a step back. The phenomenal amount of attention to detail with which Athena prepared Aryaman for all his projects, essays, and other endeavors assured us that he was in the safest hands. From tailoring Aryaman according to his capabilities and personality to structuring every bit of the college experience according to his profile, each step of the process was perfectly handled.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={ParentTestimonials1} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Rajesh Sokhal</h4>
                                <p>Parent of Aryaman Raj Sokhal | Cambridge University, '24 | Athena '20</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                When we connected with Athena, we learned that Athena doesn't catch the fish for the student; it teaches the student fishing. I have seen Tulip transform before my own eyes and I wish we had signed up with Athena in the 9th grade. The earlier you sign up, the more value you get! We were three years late.
                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={ParentTestimonials2} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Preeti Kaul</h4>
                                <p>Parent of Ish Kaul | Princeton University, '22 | Athena '18</p>
                            </div>
                        </div>
                    </div>

                    <div className='TESTIMONIALS-list-main-home'>
                        <div className='TESTIMONIALS-list-main-home-top-cont'>
                            <img src={Testi} className="normal" alt="" />
                            <p>
                                Athena has been a transformative experience for Samara.  She has always had a kind heart and a desire to make a difference in the world, and Athena has helped her focus and clarify her path forward. She has gained confidence, clarity, and her organizational skills have improved tremendously. Athena has also helped her evolve into a more well-rounded person, embracing diverse perspectives while having the courage to hold on to her own. I am grateful to Athena for their kindness, focus on each child's individuality, and for creating a fun environment where Samara could thrive. Athena has truly allowed Samara to blossom from the inside out.

                            </p>
                        </div>
                        <div className='TESTIMONIALS-list-main-home-top-cont-img'>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-left'>
                                <img src={ParentTestimonials5} className="normal" alt="" />
                            </div>
                            <div className='TESTIMONIALS-list-main-home-top-cont-img-right'>
                                <h4>Ramona Jind</h4>
                                <p>Mother of Smara Mohan | Athena '22</p>
                            </div>
                        </div>
                    </div>



                </Carousel>
            </div>
        )
    }
}