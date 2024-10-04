//libs

//components

//styles

function ChangePassword() {
  return (
    <section className="change-password">
      <div className="first-container">
        <p>Enter a new password</p>
        <form>
          <input type="password" placeholder="A new password" required />
        </form>
      </div>
      <div className="second-container">
        <p>Enter the new password again</p>
        <form>
          <input type="password" placeholder="Same password" required />
        </form>
      </div>
      <button type="submit" className="btn">
        Send
      </button>
    </section>
  );
}

export default ChangePassword;
