function ForgetPassword() {
  return (
    <div className="recovery-pass-container">
      <section className="recovery-email-section">
        <div className="text-email-container">
          <p>
            Enter a valid email to reset your password. A verification code will
            be sent to you.
          </p>
        </div>
        <form>
          <input type="email" placeholder="Email address" required />
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </section>
      <section className="recovery-token-section">
      <div className="text-token-container">
          <p>
          Enter the verification code correctly
          </p>
        </div>
        <form>
          <input type="number" placeholder="A verification code" required />
          <button type="submit" className="btn">
            Send
          </button>
          </form>
      </section>
    </div>
  );
}

export default ForgetPassword;
