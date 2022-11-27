import React from "react";
import './../template.scss'
const WelcomePage = () => {

    return (
        <div className="Welcome-container">
            <div className="custom-shape-divider-top-1668932020">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="inner-container">
                <div className="welcome-text">Welcome to ClassMag</div>
                <div className="input-container">
                    <div className="form-group">
                        <span>Login</span>
                        <input className="form-field" type="text" placeholder="Welcome back"/>
                    </div>
                    <div className="or-line">Or</div>
                    <div className="form-group">
                        <input className="form-field" type="email" placeholder="Join us"/>
                        <span>Register</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default WelcomePage