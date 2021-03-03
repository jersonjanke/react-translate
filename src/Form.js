import react, { useState } from "react";
import "./index.css";

const Form = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    biography: "",
    transport: "",
    agree: false,
  });

  const onChangeHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="firstName">First name</label>
      <input id="firstName" name="firstName" onChange={onChangeHandler} />
      <label htmlFor="lastName">Last name</label>
      <input id="lastName" name="lastName" onChange={onChangeHandler} />
      <label htmlFor="biography">Biography</label>
      <label htmlFor="transport">Transport</label>
      <select
        id="transport"
        name="transport"
        onChange={onChangeHandler}
        value={formState.transport}
      >
        <option>None selected</option>
        <option value="planes">Planes</option>
        <option value="trains">Trains</option>
        <option value="Cars">Cars</option>
        <option value="boats">Boats</option>
      </select>
      <textarea
        id="biography"
        name="biography"
        rows="10"
        onChange={onChangeHandler}
        value={formState.biography}
      ></textarea>
      <label htmlFor="agree">I agree to the TOC</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        onChange={onChangeHandler}
        checked={formState.agree}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onSubmitHandler}>
        Clear state
      </button>
    </form>
  );
};

export default Form;
