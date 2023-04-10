import React, { Component, useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountNine = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            {counterOn && <CountUp start={0} end={5} duration={1} delay={0} />}x
        </ScrollTrigger>
    );
};

export default CountNine;  