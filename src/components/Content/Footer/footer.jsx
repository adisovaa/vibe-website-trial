import React from 'react'
import logo from "../../../assets/Vibe.-2.png";
import './footer.css'

export const Footer = () => {
    const navText = ['About us', 'Our menu', 'Gallery', 'Contact us', 'Visit us']
    let showText = navText.map((text, i) => <p key={i}><a href="#">{text}</a></p>)
    return (
        <div className="footer">
            <div className='container'>
                <div className="footerNavItem">
                    <div className='footerLogo'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="menu">
                        {
                            showText
                        }
                    </div>
                </div>
            </div>
            <div className="lines">
                <span className="footerLine"></span>
            </div>
        </div>
    )
}