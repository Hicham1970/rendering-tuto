"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
    const settings = {
        dots: true,
    };
    return (
        <div className="image-slider-container w-full mx-auto mt-10">
            <Slider {...settings}>
                <div>
                    <img src="http://picsum.photos/g/1600/800" />
                </div>
                <div>
                    <img src="http://picsum.photos/g/1600/800" />
                </div>
                <div>
                    <img src="http://picsum.photos/g/1600/800" />
                </div>
                <div>
                    <img src="http://picsum.photos/g/1600/800" />
                </div>
            </Slider>
        </div>
    );

}
