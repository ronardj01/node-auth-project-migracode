import InputEmail from './units/InputEmail';
import InputName from './units/InputName';
import InputPassword from './units/InputPassword';
import SubmitBtn from './units/SubmitBtn';
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='loginPage card mt-5'>
      <h3 className='mt-3'>Register With Us</h3>
      <form>
        <InputName />
        <InputEmail />
        <InputPassword />
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