import React, { Component } from "react";
import Event from '../../img/event.png';
import Map from '../../img/map.png';
import Clock from '../../img/clock.png';
import Cal from '../../img/cla.png';
import MapWhite from '../../img/map-white.png';
import ClockWhite from '../../img/clock-white.png';
import CalWhite from '../../img/ClaWhite.png';
import ArrowOne from '../../img/arrow-1.png';
import Arrowtwo from '../../img/arrow-2.png';
import MediaOne from '../../img/media-1.jpg';
import MediaTwo from '../../img/media-2.jpg';
import MediaThree from '../../img/media-3.jpg';
import MediaFour from '../../img/media-4.jpg';
import MediaFive from '../../img/media-5.jpg';
import MediaSix from '../../img/media-6.jpg';
import MediaSeven from '../../img/media-7.jpg';
import MediaEight from '../../img/media-8.jpg';
import MediaNine from '../../img/media-9.jpg';
import MediaTen from '../../img/media-10.jpg';
import { Link } from "gatsby"
 

class HomeEvent extends React.Component {

    render() {
        return (
            <div>
                <div className="home-event-section-page">
                    <div className="home-event-section-page-left">
                        <div className="home-page-para-heading">
                            <h3>A peak into our world</h3>
                            <h2>Join our upcoming events</h2>
                        </div>
                        <div className="event-left-section">
                            <div className="event-left-section-left">
                                <img src={Event} />
                            </div>
                            <div className="event-left-section-right">

                                <h4>Name of the event</h4>
                                <ul className="event-home-top-list">
                                    <li> <img className="normal" src={Cal} /><img className="white" src={CalWhite} /> <span>00-00-0000</span></li>
                                    <li> <img className="normal" src={Clock} /> <img className="white" src={ClockWhite} /> <span>6:00 pm</span></li>
                                </ul>
                                <ul className="event-home-top-list">
                                    <li> <img className="normal" src={Map} /> <img className="white" src={MapWhite} /> <span>Athena Campus, Gurugram</span></li>

                                </ul>
                            </div>
                        </div>
                        <div className="event-left-section">
                            <div className="event-left-section-left">
                                <img src={Event} />
                            </div>
                            <div className="event-left-section-right">

                                <h4>Name of the event</h4>
                                <ul className="event-home-top-list">
                                    <li> <img className="normal" src={Cal} /><img className="white" src={CalWhite} /> <span>00-00-0000</span></li>
                                    <li> <img className="normal" src={Clock} /> <img className="white" src={ClockWhite} /> <span>6:00 pm</span></li>
                                </ul>
                                <ul className="event-home-top-list">
                                    <li> <img className="normal" src={Map} /> <img className="white" src={MapWhite} /> <span>Athena Campus, Gurugram</span></li>

                                </ul>
                            </div>
                        </div>
                        <div className='track-your-college-left-link'>
                            <Link className='footer-top-map-img-button-link' to='/resources'>Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                        </div>
                    </div>
                    <div className="home-event-section-page-right">
                        <div className="home-page-para-heading align-center">
                            <h3>Press coverage</h3>
                            <h2>Athena in the media</h2>
                        </div>
                        <div className="home-page-logo-media-frame">
                            <ul>
                                <li><img src={MediaOne} /></li>
                                <li><img src={MediaTwo} /></li>
                                <li><img src={MediaThree} /></li>
                                <li><img src={MediaFour} /></li>
                                <li><img src={MediaFive} /></li>
                                <li><img src={MediaSix} /></li>
                                <li><img src={MediaSeven} /></li>
                                <li><img src={MediaEight} /></li>
                                <li><img src={MediaNine} /></li>
                                <li><img src={MediaTen} /></li>
                            </ul>


                        </div>
                        <div className='track-your-college-left-link align-center'>
                            <Link className='footer-top-map-img-button-link' to='/in-the-news'>Read more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></Link>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default HomeEvent;