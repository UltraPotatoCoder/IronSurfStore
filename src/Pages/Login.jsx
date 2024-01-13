import './CSS/Login.css';

function Login() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree with the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
