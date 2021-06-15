const CustumeInput = ({inputValue, inputID, label, inputType, onChange}) => {

    const handleInput = (e) => {
      e.preventDefault();
      onChange(e.target.value)
    } 
    return(
      <div className="m-3">
          <label htmlFor={inputID} className="form-label">{label}</label>
          <input 
          type={inputType} 
          className="form-control"
          id={inputID}
          required
          value={inputValue}
          onChange={handleInput}
          />
        </div>
    )
  };
  export default CustumeInput;