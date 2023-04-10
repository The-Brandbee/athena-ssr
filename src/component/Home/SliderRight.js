import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SliderOne from '../../Count/Slide/SliderOne.js';
import SliderTwo from '../../Count/Slide/SliderTwo.js';
import SliderThree from '../../Count/Slide/SliderThree.js';
import SliderFour from '../../Count/Slide/SliderFour.js';


import StudentOne1 from '../../img/student-1.png';
import StudentTwo2 from '../../img/student-2.png';
import StudentThree33 from '../../img/student-3.png';
import StudentFour4 from '../../img/student-4.png';

class SliderRight extends React.Component {

    render() {
        return (
            <div>
                <div className='second-banner-changehover-right-img'>
                    <Tabs>

                        <TabList>
                            <div className='student-list-banner'>
                                <Tab>
                                    <img src={StudentOne1} alt="" />
                                </Tab>
                                <Tab> <img src={StudentThree33} alt="" /> </Tab>
                                <Tab> <img src={StudentTwo2} alt="" /> </Tab>
                                <Tab> <img src={StudentFour4} alt="" /> </Tab>
                            </div>
                        </TabList>

                        <TabPanel>
                            <SliderOne />
                        </TabPanel>
                        <TabPanel>
                            <SliderTwo />
                        </TabPanel>
                        <TabPanel>
                            <SliderThree />
                        </TabPanel>
                        <TabPanel>
                            <SliderFour />
                        </TabPanel>
                    </Tabs>
                </div>
            </div >

        );
    }
}

export default SliderRight;