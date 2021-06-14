const InputEmail = ({email, handleEmail}) => {
  
  return(
    <div className="m-3">
        <label htmlFor="inputEmail" className="form-label">Email</label>
        <input 
        type='email' 
        className="form-control"
        id="inputEmail"
        required
        value={email}
        onChange={handleEmail}
        />
      </div>
  )
};
export default InputEmail;