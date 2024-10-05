//libs

//components
import "boxicons";
//styles

// eslint-disable-next-line react/prop-types
function Register({ setclassNameUsed}) {

  const handleClickRemove = () => {
    setclassNameUsed('')
    console.log(' not active')
    }
    

  return (
    <div className="signup-section">
      <header onClick={handleClickRemove}>Signup</header>

      <div className="social-buttons">
        <button>
          <box-icon name="google" type="logo"></box-icon> Use Google
        </button>
        <button>
          <box-icon name="apple" type="logo"></box-icon> Use Apple
        </button>
      </div>

      <div className="separator">
        <div className="line"></div>
        <p>Or</p>
        <div className="line"></div>
      </div>

      <form>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <a href="#">Forget Password?</a>
        <button type="submit" className="btn">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Register;
