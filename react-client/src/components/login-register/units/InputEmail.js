import CustumeInput from "./CustumeInput";
const InputEmail = ({ email, onChange }) => {

  return (
    <CustumeInput inputValue={email} inputID={'inputEmail'} label={'Email'} inputType={'email'} onChange={onChange} />
  )
};
export default InputEmail;