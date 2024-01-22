import './CSS/Login.css';

function Login() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign In</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Login;
