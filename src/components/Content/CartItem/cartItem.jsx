import React from 'react'
import coffeeCup from './../../../assets/coffee-cup.png'
import './cartItem.css'

export const CartItem = () => {
    return (
        <div className="container">
            <div className="items">

                <div className="cartItemSmall">
                    <div className="cartItem">
                        <h4>Quality coffee</h4>
                        <img src={coffeeCup} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium architecto cumque
                            debitis laudantium natus </p>
                    </div>
                </div>

                <div className="cartItemBig">
                    <div className="cartItem">
                        <h4>Quality coffee</h4>
                        <img src={coffeeCup} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium architecto cumque
                            debitis laudantium natus </p>
                    </div>
                </div>

                <div className="cartItemSmall">
                    <div className="cartItem">
                        <h4>Quality coffee</h4>
                        <img src={coffeeCup} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium architecto cumque
                            debitis laudantium natus </p>
                    </div>
                </div>
            </div>
        </div>
    )
}