//libs

//components

//styles

function OTPvalue() {
  return (
    <div className="container-otp-password">
      <header>Verify</header>

      <form>
        <p>Your code was sent to you via email</p>
        <div className="code-inputs">
          <input
            className="code-inputs-otp-one"
            type="text"
            maxLength="1"
            placeholder="1"
          />
          <input
            className="code-inputs-otp-two"
            type="text"
            maxLength="1"
            placeholder="2"
          />
          <input
            className="code-inputs-otp-three"
            type="text"
            maxLength="1"
            placeholder="3"
          />
          <input
            className="code-inputs-otp-four"
            type="text"
            maxLength="1"
            placeholder="4"
          />
          <input
            className="code-inputs-otp-five"
            type="text"
            maxLength="1"
            placeholder="5"
          />
          <input
            className="code-inputs-otp-six"
            type="text"
            maxLength="1"
            placeholder="6"
          />
        </div>
        <button className="verify-button">Verify</button>
      </form>

      <p>
        <a href="#" className="resend-link">
          Didn{" ' "}t receive code? Request again
        </a>
      </p>
    </div>
  );
}

export default OTPvalue;
