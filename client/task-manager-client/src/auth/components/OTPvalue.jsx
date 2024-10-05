/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import './otp.css';

function OTPvalue() {
  return (
    <div className="container">
      <h1>Verify</h1>
      <p>Your code was sent to you via email</p>
      <div className="code-inputs">
        <input type="text" maxlength="1" value="1" />
        <input type="text" maxlength="1" value="2" />
        <input type="text" maxlength="1" value="3" />
        <input type="text" maxlength="1" value="5" />
        <input type="text" maxlength="1" value="6" />
        <input type="text" maxlength="1" value="6" />
      </div>
      <button className="verify-button">Verify</button>
      <a href="#" className="resend-link">
        Didn't receive code? <span>Request again</span>
      </a>
    </div>
  );
}

export default OTPvalue;
