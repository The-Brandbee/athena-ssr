import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderIconNM from '../../img/slider--icon2.png';

import StudentThree2 from '../../img/homepagebanner-2-1.png';


class SliderTwo extends React.Component {

    render() {
        return (
            <>
                <div className='second-banner-changehover-right-img-inner Two'>
                    <img src={StudentThree2} alt="" />
                    <div className='second-banner-changehover-right-img-cont'>
                        <h4>Taranvir Virk</h4>
                        <p>London School of Economics, Batch of 2025</p>
                    </div>
                </div>
            </>

        );
    }
}

export default SliderTwo;