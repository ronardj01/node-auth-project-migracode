import { useState } from "react";

const InputPassword = ({password, handlePassword}) => {

  return (
    <div className="m-3">
      <label htmlFor="inputPassword" className="form-label">Password</label>
      <input type='password'
        className="form-control"
        id="inputPassword"
        value={password}
        onChange={handlePassword}
      />
    </div>
  )
};

export default InputPassword;