import React from 'react'
import "./css/signUp.css"

function SignUp() {

  return (
    <div className='form'>
     <section className="wrapper">
    <div className="form signup">
      <header>Signup</header>
      <form action="#">
        <input type="text" placeholder="Full name" required="" />
        <input type="text" placeholder="Email address" required="" />
        <input type="password" placeholder="Password" required="" />
        <div className="checkbox">
          <input type="checkbox" id="signupCheck" />
          <label htmlFor="signupCheck">
            I accept all terms &amp; conditions
          </label>
        </div>
        <input type="submit" defaultValue="Signup" />
      </form>
    </div>
    <div className="form login">
      <header>Login</header>
      <form action="#">
        <input type="text" placeholder="Email address" required="" />
        <input type="password" placeholder="Password" required="" />
        <a href="#">Forgot password?</a>
        <input type="submit" defaultValue="Login" />
      </form>
    </div>
  </section>
  </div>

  )
}

export default SignUp
