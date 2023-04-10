import React, { Component, useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import Map from '../../img/map-video-new.gif';

const MapGif = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='mapframe-inline'>
                <div className='mapframe-inline-border'></div>
                <img src={Map} alt="" />
            </div>
        </ScrollTrigger>
    );
};

export default MapGif;