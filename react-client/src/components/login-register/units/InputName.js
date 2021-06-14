const InputName = ({ name, handleName }) => {
  return (
    <div className="m-3">
      <label htmlFor="inputName" className="form-label">Name</label>
      <input
        type='text'
        className="form-control"
        id="inputName"
        required
        value={name}
        onChange={handleName}
      />
    </div>
  )
};
export default InputName;