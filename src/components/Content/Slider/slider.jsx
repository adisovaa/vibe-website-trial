import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import imgOne from './../../../assets/cafe.png'

export default function SliderBox() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings} className='sliderContainer'>
                <div className='slider'>
                    <img src={imgOne} alt="imgOne"/>
                </div>
                <div>
                    <div className='slider'>
                        <img src={imgOne} alt="imgOne"/>
                    </div>
                </div>
                <div>
                    <div className='slider'>
                        <img src={imgOne} alt="imgOne"/>
                    </div>
                </div>
                <div>s
                    <div className='slider'>
                        <img src={imgOne} alt="imgOne"/>
                    </div>
                </div>
            </Slider>
            <div className="sliderText">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae cumque ex fugit nostrum </p>
            </div>
        </>
    );
}
