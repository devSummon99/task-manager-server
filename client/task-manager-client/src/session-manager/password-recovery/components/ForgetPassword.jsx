import "./forget.css";

function ForgetPassword() {
  return (
    <div className="container">
      <section className="section-container">
        <h1>Reset your password</h1>
        <p>
          Enter your email address below and we will send you a link to reset
          your password.
        </p>
        <div className="input-group">
          <input type="email" placeholder="Email Address" />
          <i className="fa fa-envelope"></i>
        </div>
        <a href="#" className="btn">
          Send
        </a>
        <a href="#" className="login-link">
          Log in
        </a>
      </section>
    </div>
  );
}

export default ForgetPassword;
