import InputEmail from './units/InputEmail';
import InputName from './units/InputName';
import InputPassword from './units/InputPassword';
import SubmitBtn from './units/SubmitBtn';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  //email functionality
  const [email, setEmail] = useState("")
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  //name functionality
  const [name, setName] = useState("")
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value)
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
    const loginData = { name, email, password } // =={name: name ;email: email, password: password} keys end values are equal

    const res = await fetch('http://localhost:4000/user/sign-up', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData)
    })
    const data = await res.json()
    console.log(data) 

  }
  return (
    <div className='loginPage card mt-5 shadow p-3 mb-5 bg-body rounded'>
      <h3 className='mt-3'>Register With Us</h3>
      <form onSubmit={handleSubmit}>
        <InputName name={name} handleName={handleName} />
        <InputEmail email={email} handleEmail={handleEmail} />
        <InputPassword password={password} handlePassword={handlePassword} />
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