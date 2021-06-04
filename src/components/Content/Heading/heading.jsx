import React from 'react'
import img from './../../../assets/Vibe.-1.png'
import imgBanner from './../../../assets/1.png'
import './heading.css'

const Heading = () => {
    return (
        <div className="heading">
            <div className="welcomeBlock">
                <div className="headingImg">
                    <img className='imgVibe' src={img} alt="img"/>
                </div>
                <div className="text">
                    <h3>Welcome</h3>
                    <span className="line"></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi consectetur, in incidunt,maxime
                        consectetur, in incidunt,maxime dolor sit amet consectetur adipisicing  mollitia nisi</p>
                    <button className='btn'>Visit us</button>
                </div>
            </div>

            <div className="headingBanner">
                <img className='imgBanner' src={imgBanner} alt="imgBanner"/>
            </div>
        </div>
    )
}

export default Heading