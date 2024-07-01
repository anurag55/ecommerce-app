import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login(props) {
  const [mobileNo, setMobileNo] = useState("");
  const [buttonText, setButtonText] = useState("Request OTP");
  const [otp, setOtp] = useState("");
  const [originalOtp, setOriginalOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setIsLoggedIn } = props;

  function handleSubmit(event) {
    event.preventDefault();
    if (isOtpVerified && password !== '') {
      setIsLoggedIn(true);
      navigate("/home");
      console.log("You are logged in");
    }
    else if (originalOtp === '') {
      if (mobileNo.length !== 10) {
        alert("10 numbers are required");
        return;
      } else {
        setOriginalOtp(Math.floor(100000 + Math.random() * 900000));
        setIsOtpSent(true);
        setButtonText("Verify OTP");
      }
      
    }
    else if (originalOtp !== '') {
      console.log(originalOtp, otp);
      if (originalOtp !== parseInt(otp)) {
        alert("Invalid OTP");
        return;
      } else {
        setIsOtpVerified(true);
        setButtonText("Login");
      }
    }
  }
  
  return (
    <div className="login-container">
      <div className="login">
        <div className="left">
          <h2>Sign up</h2>
          <h5>Get access to your Orders, Wishlist and Recommendations</h5>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            {
              originalOtp === '' ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={mobileNo}
                    onChange={(event) => setMobileNo(event.target.value)}
                  />
                  <br />
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value="terms"
                  />
                  <label htmlFor="terms" className="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</label>
                </>
              ) : ( isOtpVerified ? (
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(event) => setOtp(event.target.value)}
                  />
                  <p>The otp is {originalOtp}</p>
                </>
              ))
            }
            <br />
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
}