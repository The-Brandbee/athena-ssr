import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InstaOne from '../img/about-athena-3.png';
import InstaTwo from '../img/about-athena-4.png';
import InstaThree from '../img/about-athena-5.png';


export default class AboutAthenaPlatform extends Component {
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
            items: 2,
        },
    };
    render() {

        return (
            <div className='Proprietary-Tech-Platform-frame-right-middle'>

                <Carousel responsive={this.responsive} swipeable={false}
                    autoPlaySpeed={1000}
                    customTransition="all .2"
                    transitionDuration={900}
                >
                    <div className='slider-main'>
                        <div className='overflow-color'></div>
                        <a href="#" target="_blank">
                            <img src={InstaThree} alt="" />
                        </a>
                    </div>
                    <div className='slider-main'>
                        <div className='overflow-color'></div>
                        <a href="#" target="_blank">
                            <img src={InstaOne} alt="" />
                        </a>
                    </div>
                    <div className='slider-main'>
                        <div className='overflow-color'></div>
                        <a href="#" target="_blank">
                            <img src={InstaTwo} alt="" />
                        </a>
                    </div>
                    <div className='slider-main'>
                        <div className='overflow-color'></div>
                        <a href="#" target="_blank">
                            <img src={InstaThree} alt="" />
                        </a>
                    </div>
                    <div className='slider-main'>
                        <div className='overflow-color'></div>
                        <a href="#" target="_blank">
                            <img src={InstaOne} alt="" />
                        </a>
                    </div>
                    <div className='slider-main'>
                        <div className='overflow-color'></div>
                        <a href="#" target="_blank">
                            <img src={InstaTwo} alt="" />
                        </a>
                    </div>

                </Carousel >
            </div >
        )
    }
}