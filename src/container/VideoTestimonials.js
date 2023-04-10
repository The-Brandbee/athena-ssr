import React, { Component } from 'react';
import Fancybox from "./fancybox.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InstaOne from '../img/Play2.png';
import play from '../img/play.png';
import video1 from '../img/video-testimonials-1.jpg';
import video2 from '../img/video-testimonials-2.jpg';
import video3 from '../img/video-testimonials-3.jpg';
import video4 from '../img/video-testimonials-4.jpg';
import video5 from '../img/video-testimonials-5.jpg';
import video6 from '../img/video-testimonials-6.jpg';
import video7 from '../img/video-testimonials-7.jpg';
import video8 from '../img/video-testimonials-8.jpg';
import video9 from '../img/video-testimonials-9.jpg';
import video10 from '../img/video-testimonials-10.jpg';


import video11 from '../img/video-testimonials11.jpg';

export default class VideoTestimonials extends Component {
    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
            <div className='container'>

                <div className='Video-Testimonials-page-main'>
                    <Carousel responsive={this.responsive}>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=FiVcXifRvsg">
                                     <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video1} alt="" />
                                        <h4>Shalini Gupta</h4>
                                        <p>Mother of Aranav Pandit, Athena '22</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=vlkmS1SIruU">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video2} alt="" />
                                        <h4>Ramola Jind</h4>
                                        <p>Mother of Samara Mohan, Athena '22</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>
                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=PmdXHiGvrO0">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video3} alt="" />
                                        <h4>Tulip Mittal</h4>
                                        <p>Athena '22, UCLA</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>
                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=PSpl8JHSC_o">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video4} alt="" />
                                        <h4>Samara Mohan</h4>
                                        <p>Athena '22, <br />Barnard College</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>
                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=8UT3sIwpIAA">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video5} alt="" />
                                        <h4>Anushka Khetawat</h4>
                                        <p> Athena '22, <br />Barnard College</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=JP2QbO0lpAg">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video6} alt="" />
                                        <h4>Arnav Pandit</h4>
                                        <p> Athena '22, <br />Princeton University</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>


                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=BLtOeZLk9Ic">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video7} alt="" />
                                        <h4>Viren Arora</h4>
                                        <p> Athena '22, <br />Boston University </p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=BhiRLbZ30xw">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video8} alt="" />
                                        <h4>Abhivir Singh</h4>
                                        <p>  Athena '22, <br />University of Cambridge</p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=JtuLNHeNpfk">
                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video9} alt="" />
                                        <h4>Aman Gulati</h4>
                                        <p> Athena '22, London School of Economics </p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=Dg_RBsmUIWU">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video10} alt="" />
                                        <h4>Aryan Dawer</h4>
                                        <p>  Athena '22, <br />Dartmouth College </p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>

                        <div>
                            <Fancybox options={{ dragToClose: false }}>
                                <a data-fancybox="gallery" href="https://www.youtube.com/watch?v=qP_u3PoHnMk">

                                    <div className='Video-Testimonials-page2'>
                                        <img className='top' src={video11} alt="" />
                                        <h4>Peehu Agarwal</h4>
                                        <p> Athena '22, <br />Stanford University </p>
                                        <h5><img src={play} alt="" /></h5>
                                    </div>

                                </a>
                            </Fancybox>
                        </div>


                    </Carousel>

                </div>

            </div>
        )
    }
}