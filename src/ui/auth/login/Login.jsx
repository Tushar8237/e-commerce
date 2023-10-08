import React, { useState } from "react";
import "./Login.scss";
import InputText from "../input-text/InputText";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
      };
    return (
        <div className="login_wrapper">
            <div className="login_section">
                <form className="login_form" onSubmit={handleSubmit} >
                    <h3>Login Here</h3>

                    <InputText
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <InputText
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button type="submit" className="login_button">Log In</button>
                    <div className="login_social">
                        <div className="login_google"> Google</div>
                        <div className="login_facebook"> Facebook</div>
                    </div>
                    <p>New to shop India? <span><Link to='/signup'>Create an Account</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
