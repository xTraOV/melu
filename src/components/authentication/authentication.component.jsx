import React from "react";
import "./authentication.component.style.scss";
import GoogleLogo from "../../images/btn_google_signin_dark_normal_web.png";
import FacebookLogo from "../../images/oL5c2.png";

const AuthInputSignIn = () => {
    return (
        <>
            <div className='input-container signin'>
                <form>
                    <input type='email' name='email' placeholder='ელ. ფოსტა' />
                    <input
                        type='password'
                        name='password'
                        placeholder='პაროლი'
                    />
                </form>
                <button
                    onClick={() => {
                        console.log("google sign in");
                    }}
                    className='google-sign-in'>
                    <img src={GoogleLogo} alt='google sign in' />
                </button>
                <button
                    onClick={() => {
                        console.log("facebook sign in");
                    }}
                    className='facebook-sign-in'>
                    <img src={FacebookLogo} alt='facebook sign in' />
                </button>
            </div>
        </>
    );
};

const AuthInputRegistration = () => {
    return (
        <>
            <div className='input-container register'>
                <form>
                    <input
                        type='text'
                        name='full name'
                        placeholder='სახელი გვარი'
                    />
                    <input type='email' name='email' placeholder='ელ. ფოსტა' />
                    <input
                        type='password'
                        name='password'
                        placeholder='პაროლი'
                    />
                    <input
                        type='password'
                        name='password repeat'
                        placeholder='გაიმეორე პაროლი'
                    />
                </form>
                <button
                    onClick={() => {
                        console.log("google sign in");
                    }}
                    className='google-sign-in'>
                    <img src={GoogleLogo} alt='google sign in' />
                </button>
                <button
                    onClick={() => {
                        console.log("facebook sign in");
                    }}
                    className='facebook-sign-in'>
                    <img src={FacebookLogo} alt='facebook sign in' />
                </button>
            </div>
        </>
    );
};

export default AuthInputSignIn;
export { AuthInputRegistration };
