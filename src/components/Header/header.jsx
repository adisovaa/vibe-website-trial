import React, {useState} from 'react'
import './header.css'
import './media.css'
import logo from './../../assets/Vibe.-2.png'
import email from './../../assets/email-white.png'
import phone from './../../assets/phone-white.png'

const Header = () => {
    const [active, setActive] = useState(true)
    const navText = ['About us', 'Our menu', 'Gallery', 'Contact us', 'Visit us']
    let showText = navText.map((text, i) => <p key={i}><a href="#">{text}</a></p>)

    let showNavBar = e => {
        e.preventDefault();
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }
    return (
        <div className='header'>
            <div className='headerNav'>
                <div className='container'>
                    <div className="headerNavAddress">
                        <div className='logo'>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className='contact'>
                        <span className='email'>
                           <a><img className='icon' src={email} alt="email"/></a>
                            <a className='info' href="#">hey@vibe.co.uk</a>
                            </span>
                            <span>
                           <a><img className='icon' src={phone} alt="phone"/></a>
                            <a className='info' href="#">0161 883 1122</a>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='headerNavBar'>
                <div className="container">
                    <div className={active ? 'burger' : 'burger'.concat(' active')} onClick={showNavBar}>
                        <span></span>
                    </div>
                    <div className={active ? 'menu-burger' : 'menu-burger'.concat(' active')}>
                        <div className="menu">
                            {
                                showText
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header