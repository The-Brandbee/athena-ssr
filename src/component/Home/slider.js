import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowOne from '../../img/arrow-1.png';
import Arrowtwo from '../../img/arrow-2.png';
import BannerOne from '../../img/banner-1.jpg';
import BannerOne2 from '../../img/athena-banner.png';
import BannerTwo from '../../img/banner-2-2.jpg';
import BannerVideo from '../../img/atheena-video.mp4';
import BannerVideoMobile from '../../img/atheena-web-video-mobile.mp4';
import SliderRight from './SliderRight';

export default class slider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,

    };

    return (
      <div className='slider-banner'>

        <Slider className='sliderTest' {...settings}>
          <div className='first-slide'>
            <div className='banner-image'>
          
              <a target="_blank" href="https://calendly.com/athenaeducation/counseling-webinar">
                <video className='desktop' width="100%" poster={BannerOne} playsInline
                  autoPlay
                  loop
                  muted>
                  <source src={BannerVideo} type="video/mp4" />
                </video>
                <video className='Mobile none' poster={BannerOne2} width="100%" playsInline
                  autoPlay
                  loop
                  muted>
                  <source src={BannerVideoMobile} type="video/mp4" />
                </video>
              </a>
              {/* <div className='video-background-banner-new'></div> 
              <div className='banner-text-middle'>
                <div className='banner-text-middle-in'>
                  <div className='banner-text-middle-in-ll'>
                    <h2><span>7x more chances</span>
                      To Gain Admission Into Your<br /> Dream University!</h2>
                    <p>Transforming the Indian education system by cultivating the<br /> intellectually curious scholars and leaders of tomorrow.</p>
                  </div>
                  <p>
                    <a className='footer-top-map-img-button-link ' href='#'> Know more <span><img src={Arrowtwo} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                  </p>
                </div>
              </div>*/}
            </div>

          </div>
          <div className='first-slide second'>
            <div className='banner-image banner-image home'>
              <img src={BannerTwo} alt="" />
            </div>
            <div className='second-banner-changehover'>
              <div className='container'>
                <div className='second-banner-changehover-main'>
                  <div className='second-banner-changehover-left desktop'>
                    <div className='second-banner-changehover-left2 new-home'>
                      <h3>Last year, <br />80% of our students</h3>
                      <h2>were admitted to the top 10 UK universities,</h2>
                      <p>including Oxford, Cambridge, Imperial, <br />LSE, and more.</p>
                      <p>
                        <a className='footer-top-map-img-button-link ' target="_blank" href="https://calendly.com/athenaeducation/counseling-webinar"> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                      </p>
                    </div>
                  </div>
                  <div className='second-banner-changehover-right'>
                    <SliderRight />
                  </div>

                  <div className='second-banner-changehover-left mobile none'>
                    <div className='second-banner-changehover-left2 new-home'>
                      <h3>Last year, <br />80% of our students</h3>
                      <h2>were admitted to the top 10 UK universities,</h2>
                      <p>including Oxford, Cambridge, Imperial, <br />LSE, and more.</p>
                      <p>
                        <a className='footer-top-map-img-button-link ' target="_blank" href="https://calendly.com/athenaeducation/counseling-webinar"> Learn more <span><img src={ArrowOne} className="normal" alt="" /><img src={Arrowtwo} className="normal-ho" alt="" /></span></a>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </Slider >

      </div >
    )
  }
}