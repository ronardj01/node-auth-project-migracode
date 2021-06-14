import InputEmail from './units/InputEmail';
import InputPassword from './units/InputPassword';
import SubmitBtn from './units/SubmitBtn';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const LoginPage = () => {

  //email functionality
  const [email, setEmail] = useState("")
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  //password functionality
  const [password, setPassword] = useState("")
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value)
  }

  //Login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password } // =={email: email, password: password} keys end values are equal

    console.log(loginData)
    const res = await fetch('http://localhost:4000/user/sign-in', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    })
    const data = await res.text()
    console.log(data)
  
  }

  return (
    <div className='loginPage card mt-5 shadow p-3 mb-5 bg-body rounded'>
      <h3 className='mt-3'>Login</h3>
      <form onSubmit={handleSubmit}>
        <InputEmail email={email} handleEmail={handleEmail} />
        <InputPassword password={password} handlePassword={handlePassword} />
        <SubmitBtn />
      </form>
      <p>
        Don't have an account?
        <Link to="/register"> Sign up</Link>
      </p>
    </div>

  )
};

export default LoginPage;