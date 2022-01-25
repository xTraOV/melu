import React, { useState } from "react";
import "./authentication.style.scss";
import AuthInputSignIn, {
    AuthInputRegistration,
} from "../components/authentication/authentication.component";

const AuthPage = () => {
    const [authForm, setAuthForm] = useState(null);

    const handleAuthForm = () => setAuthForm(!authForm);

    return (
        <>
            <div className='authForm'>
                <div className='authHeader'>
                    <button
                        onClick={authForm ? handleAuthForm : undefined}
                        className={`authHeaderLogIn ${
                            authForm ? "disabled" : "active"
                        }`}>
                        <span>შესვლა</span>
                    </button>
                    <button
                        onClick={!authForm ? handleAuthForm : undefined}
                        className={`authHeaderRegistration ${
                            authForm ? "active" : "disabled"
                        }`}>
                        <span>რეგისტრაცია</span>
                    </button>
                </div>
                {authForm ? <AuthInputRegistration /> : <AuthInputSignIn />}
            </div>
        </>
    );
};

export default AuthPage;
