import React from 'react';

import './Login.css';

export default class Login extends React.Component {
    render() {
        return (
            <div className="wrap-login">
                <form className="login__form">
					<span className="form__title">
						Account Login
					</span>

                    <div className="wrap__input">
                        <input className="input" type="text" name="email" placeholder="Email"/>
                    </div>

                    <div className="wrap__input ">
                        <input className="input" type="password" name="pass" placeholder="Password"/>
                    </div>

                    <div className="form__btn">
                        <button className="form__btn">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}