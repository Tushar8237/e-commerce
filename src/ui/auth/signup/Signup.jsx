import React, { useState } from "react";
import "./Signup.scss";
import InputText from "../input-text/InputText";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContactChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !contactNumber) {
      alert('Please fill out all fields.');
      return;
    }

    console.log('Form Details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Contact Number:', contactNumber);

  };
  return (
    <div className="signup_wrapper">
      <div className="signup_section">
        <form className="signup_form" onSubmit={handleSubmit}>
          <h3>Register Here</h3>

          <InputText
            label="Name"
            type="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />

          <InputText
            label="Contact"
            type="number"
            name="contact"
            value={contactNumber}
            onChange={handleContactChange}
          />

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
          <button type="submit" className="signup_button">
            Register
          </button>
          <div className="signup_social">
            <div className="signup_google"> Google</div>
            <div className="signup_facebook"> Facebook</div>
          </div>
          <p>
            Already have a Account? <span><Link to='/login'>Login Here</Link></span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
