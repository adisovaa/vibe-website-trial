import React from 'react'
import './form.css'
import bookImg from './../../../assets/Book.png'

const UserProfileForm = () => {
    return (
        <div className="commentBlock">
            <div className="leftBlock">
                <div className="block">
                    <img src={bookImg} alt=""/>
                </div>
            </div>
            <div className="userForm">
                <div className="formContainer">
                    <div className="formText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur dicta ea eaque
                            fugiat laboriosam laborum laudantium magni neque nulla officiis pariatur quaerat quas, qui,
                            quidem ratione suscipit totam, voluptas.</p>
                    </div>
                    <div className='formUserItem'>
                        <div className="formUserInfo">
                            <div className="formInputOne">
                                <input placeholder='First name' type='text'/>
                            </div>
                            <div className="formInputTwo">
                                <input placeholder='Last name' type='text'/>
                            </div>
                        </div>

                        <div className="formUserInfo">
                            <div className="formInputOne">
                                <input placeholder='Phone number' type='text'/>
                            </div>
                            <div className="formInputTwo">
                                <input placeholder='Email address' type='email'/>
                            </div>
                        </div>
                        <div>
                            <textarea placeholder='Comment' type='text' name="textarea"></textarea>
                        </div>
                        <div className="sendButton">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileForm;