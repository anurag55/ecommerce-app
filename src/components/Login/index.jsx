import React from "react";

import "./Login.css";

export default function Login() {
  const [mobileNo, setMobileNo] = React.useState("");
  const [otp, setOtp] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login form submitted");
  }
  
  return (
    <div className="login">
      <div className="left">
        <h2>Sign up</h2>
        <h5>Get access to your Orders, Wishlist and Recommendations</h5>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
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
          <br />
          <button type="submit">Request OTP</button>
        </form>
      </div>
    </div>
  );
}