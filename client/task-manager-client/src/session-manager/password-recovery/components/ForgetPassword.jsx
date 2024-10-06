/* eslint-disable react/prop-types */
//libs

//components

//styles

function ForgetPassword({setModifyClassName}) {

  const handleSumbitButton = () => {
    setModifyClassName('active')
    }
  
    const handleSumbitTop = () => {
      setModifyClassName('')
    }
  return (
    <div className="container-forgot-password">
    <header onClick={handleSumbitTop}>Reset your password</header>

    <form>
    <p>
      Enter your email address below and we will send you a link to reset
      your password.
    </p>
      <input type="email" placeholder="Email address" />
      <button onClick={handleSumbitButton}>Send</button>
      <a href="#">Log in</a>
    </form>
  </div>
  );
}

export default ForgetPassword;
