import React, { Component } from "react";
import { Link } from "react-router-dom";
import SliderIconNM from '../../img/slider--icon.png';
import StudentThree1 from '../../img/homepagebanner-1-1.png';

class SliderOne extends React.Component {

    render() {
        return (
            <>
                <div className='second-banner-changehover-right-img-inner one'>
                    <img src={StudentThree1} alt="" />
                    <div className='second-banner-changehover-right-img-cont'>
                        <h4>Anvii Mishra</h4>
                        <p>Johns Hopkins University, Batch of 2026</p>
                    </div>
                </div>
            </>

        );
    }
}

export default SliderOne;