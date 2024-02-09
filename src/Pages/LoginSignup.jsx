import '../Styles/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="signupContainer">
        <h1>Sign Up</h1>
        <div className="signupField">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p className="signupLogin">Already have an account?<span>Login</span></p>
        <div className="signupAgree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        </div>
        </div>
  )
}

export default LoginSignup