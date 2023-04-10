import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "../container/style.css";



/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data, leadingText }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Used to determine which items appear above the active item
    const halfwayIndex = Math.ceil(data.length / 2);

    // Usd to determine the height/spacing of each item
    const itemHeight = 120;

    // Used to determine at what point an item is moved from the top to the bottom
    const shuffleThreshold = halfwayIndex * itemHeight;

    // Used to determine which items should be visible. this prevents the "ghosting" animation
    const visibleStyleThreshold = shuffleThreshold / 2;

    const determinePlacement = (itemIndex) => {
        // If these match, the item is active
        if (activeIndex === itemIndex) return 0;

        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(data.length + activeIndex - itemIndex) * itemHeight;
            }
        }

        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }

        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };

    const handleClick = (direction) => {
        setActiveIndex((prevIndex) => {
            if (direction === "next") {
                if (prevIndex + 1 > data.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            }

            if (prevIndex - 1 < 0) {
                return data.length - 1;
            }

            return prevIndex - 1;
        });
    };

    return (
        <div>
            <section className="outer-container">
                <div className="carousel-wrapper">


                    <div className="carousel">
                        <div className="slides">
                            <div className="carousel-inner">
                                {data.map((item, i) => (
                                    <button
                                        type="button"
                                        onClick={() => setActiveIndex(i)}
                                        className={cn("carousel-item", {
                                            active: activeIndex === i,
                                            visible:
                                                Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                                        })}
                                        key={item.id}
                                        style={{
                                            transform: `translateY(${determinePlacement(i)}px)`
                                        }}
                                    >
                                        {item.introline}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
                <div className="content">
                    <div className="content-inner-icon-image-change-tab">
                        <div className="content-inner-icon-image-change-tab-back-g">
                        </div>
                        <img
                            src={data[activeIndex].content.image}
                        />
                    </div>
                    <div className="content-inner">
                        <div className="content-inner-middle">

                            <h3>{data[activeIndex].content.h3}</h3>
                            <h2>{data[activeIndex].content.h2}</h2>
                            <h5>{data[activeIndex].content.h5}</h5>

                            <ul>
                                <li>{data[activeIndex].content.l1}</li>
                                <li>{data[activeIndex].content.l2}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

VerticalCarousel.propTypes = {
    data: PropTypes.array.isRequired,
    leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;
