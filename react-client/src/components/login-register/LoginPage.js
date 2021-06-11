import InputEmail from './units/InputEmail';
import InputPassword from './units/InputPassword';
import SubmitBtn from './units/SubmitBtn';

const LoginPage = () => {
  return (
    <div className='loginPage card mt-5'>
      <h3 className='mt-3'>Login</h3>
      <form>
        <InputEmail />
        <InputPassword />
        <SubmitBtn />
      </form>
      <p>Don't have an account? Sign up</p>
    </div>

  )
};

export default LoginPage;