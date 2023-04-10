import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import acceptances1 from '../../img/acceptances/1.jpg';
import acceptances2 from '../../img/acceptances/2.jpg';
import acceptances3 from '../../img/acceptances/3.jpg';
import acceptances4 from '../../img/acceptances/4.jpg';
import acceptances5 from '../../img/acceptances/5.jpg';
import acceptances6 from '../../img/acceptances/6.jpg';
import acceptances7 from '../../img/acceptances/7.jpg';
import acceptances8 from '../../img/acceptances/8.jpg';
import acceptances9 from '../../img/acceptances/9.jpg';
import acceptances10 from '../../img/acceptances/10.jpg';
import acceptances11 from '../../img/acceptances/11.jpg';
import acceptances12 from '../../img/acceptances/12.jpg';
import acceptances13 from '../../img/acceptances/13.jpg';

export default class RecentHome extends Component {
    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };
    render() {
        return (
            <div className='recent-home-number-main-mainframe'>
                <Carousel responsive={this.responsive}>
                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>03</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances6} alt="" />
                        </div>
                    </div>
                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>07</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances12} alt="" />
                        </div>
                    </div>

                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>06</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances11} alt="" />
                        </div>
                    </div>
                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>05</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances10} alt="" />
                        </div>
                    </div>


                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>03</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances7} alt="" />
                        </div>
                    </div>

                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>03</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances8} alt="" />
                        </div>
                    </div>

                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>03</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances9} alt="" />
                        </div>
                    </div>






                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>01</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances1} alt="" />
                        </div>
                    </div>
                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>01</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances2} alt="" />
                        </div>
                    </div>
                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>01</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances3} alt="" />
                        </div>
                    </div>
                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>01</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances4} alt="" />
                        </div>
                    </div>

                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>01</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances5} alt="" />
                        </div>
                    </div>

                    <div className='recent-home-number-main'>
                        <div className='number-recent-home'>
                            <h2>01</h2>
                        </div>
                        <div className='number-recent-home-img'>
                            <img src={acceptances13} alt="" />
                        </div>
                    </div>

                </Carousel>
            </div>
        )
    }
}