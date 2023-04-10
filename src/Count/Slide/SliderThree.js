import React, { Component } from "react";
import { Link } from "react-router-dom";

import StudentThree3 from '../../img/homepagebanner-3-1.png';


class SliderThree extends React.Component {

    render() {
        return (
            <>
                <div className='second-banner-changehover-right-img-inner Three'>
                    <img src={StudentThree3} alt="" />
                    <div className='second-banner-changehover-right-img-cont'>
                        <h4>Ananya Saxena</h4>
                        <p>New York University, Batch of 2026</p>
                    </div>
                </div>
            </>

        );
    }
}

export default SliderThree;