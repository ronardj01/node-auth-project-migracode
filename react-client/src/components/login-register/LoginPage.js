import InputEmail from './units/InputEmail';
import InputPassword from './units/InputPassword';
import SubmitBtn from './units/SubmitBtn';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import fetchData from '../../utils/fetchData';

const LoginPage = () => {

  //email functionality
  const [email, setEmail] = useState("")

  //const handleEmail = handleInput(setEmail)

  //password functionality
  const [password, setPassword] = useState("")
  
  //Login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password } // =={email: email, password: password} keys end values are equal
    const url = 'http://localhost:4000/user/sign-in'

    fetchData(loginData, url)
  }

  return (
    <div className='loginPage card mt-5 shadow p-3 mb-5 bg-body rounded'>
      <h3 className='mt-3'>Login</h3>
      <form onSubmit={handleSubmit}>
        <InputEmail email={email} onChange={setEmail}/>
        <InputPassword password={password} onChange={setPassword} />
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