import CustumeInput from "./CustumeInput";

const InputPassword = ({password, onChange}) => {
  
  return (
    <CustumeInput 
    inputValue={password}
    inputID={'InputPassword'}
    label={'Password'}
    inputType={'password'}
    onChange={onChange}
    />
  )
};

export default InputPassword;