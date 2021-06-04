import React from 'react'
import './socialBlock.css'
import social from './../../../assets/4.png'
import icon from './../../../assets/logo-instagram-white.png'
import twitterIcon from './../../../assets/twitter.png'

export const SocialBlock = () => {
    return (
        <div className="socialBlockContainer">
            <div className="socialBlockItems">
                <div className="socialBlock">
                    <img src={social} alt=""/>
                    <img className='icon' src={icon} alt=""/>
                    <div className="iconBlock">
                        <img src={twitterIcon} alt=""/>
                        <p className='iconText'>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit con sectetur adipisicing elit</p>
                        <p className='iconLink'>@vibe_coffee</p>
                    </div>
                </div>
                <div className="socialBlock">
                    <img src={social} alt=""/>
                    <img className='icon' src={icon} alt=""/>
                    <div className="iconBlock">
                        <img src={twitterIcon} alt=""/>
                        <p className='iconText'>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit con sectetur adipisicing elit</p>
                        <p className='iconLink'>@vibe_coffee</p>
                    </div>
                </div>
                <div className="socialBlock">
                    <img src={social} alt=""/>
                    <img className='icon' src={icon} alt=""/>
                    <div className="iconBlock">
                        <img src={twitterIcon} alt=""/>
                        <p className='iconText'>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit con sectetur adipisicing elit</p>
                        <p className='iconLink'>@vibe_coffee</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
