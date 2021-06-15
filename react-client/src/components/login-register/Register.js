import InputEmail from './units/InputEmail';
import InputName from './units/InputName';
import InputPassword from './units/InputPassword';
import SubmitBtn from './units/SubmitBtn';
import { useState } from 'react';
import { Link } from "react-router-dom";
import fetchData from '../../utils/fetchData';

const Register = () => {
  //email functionality
  const [email, setEmail] = useState("")

  //name functionality
  const [name, setName] = useState("")
 
  //password functionality
  const [password, setPassword] = useState("")

  //Login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = { name, email, password } // =={name: name ;email: email, password: password} keys end values are equal
    const url = 'http://localhost:4000/user/sign-up'
    
    fetchData(registerData, url)
  }
  return (
    <div className='loginPage card mt-5 shadow p-3 mb-5 bg-body rounded'>
      <h3 className='mt-3'>Register With Us</h3>
      <form onSubmit={handleSubmit}>
        <InputName name={name} onChange={setName} />
        <InputEmail email={email} onChange={setEmail} />
        <InputPassword password={password} onChange={setPassword} />
        <SubmitBtn />
      </form>
      <p>
        Already have an account?
        <Link to='/login'> Login</Link>
      </p>
    </div>

  )
};

export default Register;