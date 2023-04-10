import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderIconNM from '../../img/slider--icon2.png';
import StudentThree4 from '../../img/homepagebanner-4-1.png';

class SliderFour extends React.Component {

    render() {
        return (
            <>
                <div className='second-banner-changehover-right-img-inner Four'>
                    <img src={StudentThree4} alt="" />
                    <div className='second-banner-changehover-right-img-cont'>
                        <h4>Abhivir Singh</h4>
                        <p>University of Cambridge, Batch of 2025</p>
                    </div>
                </div>
            </>

        );
    }
}

export default SliderFour;