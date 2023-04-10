import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InstaOne1 from '../../img/insta/1.png';
import InstaOne2 from '../../img/insta/2.png';
import InstaOne3 from '../../img/insta/3.png';
import InstaOne4 from '../../img/insta/4.png';
import InstaOne5 from '../../img/insta/5.png';
import InstaOne6 from '../../img/insta/6.png';
import InstaOne7 from '../../img/insta/7.png';
import InstaOne8 from '../../img/insta/8.png';
import InstaOne9 from '../../img/insta/9.png';
import InstaOne10 from '../../img/insta/10.png';
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

export default class SliderInsta extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  render() {

    return (
      <div>

        <Carousel responsive={this.responsive}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}

        >
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne1} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne2} alt="" />
            </a>

          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne3} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne4} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne5} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne6} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne7} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne8} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne9} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/athena_education/" target="_blank">
              <img src={InstaOne10} alt="" />
            </a>
          </div>
        </Carousel>


      </div>
    )
  }
}