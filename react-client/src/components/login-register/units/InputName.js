import CustumeInput
 from "./CustumeInput";
const InputName = ({ name, onChange }) => {
  
  
  return (
    <CustumeInput
    inputValue={name}
    inputID={'inputName'} 
    label={'Name'} 
    inputType={'text'} 
    onChange={onChange}
    />
  )
};
export default InputName;