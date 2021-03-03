import react, { useState } from "react";
import "./index.css";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    biography: "",
    transport: "",
    agree: false,
    breakfast: false,
    dinner: false,
  };

  const [formState, setFormState] = useState(initialState);

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
    console.log(formState);
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

      <fieldset>
        <legend>Select your meals</legend>
        <input
          type="checkbox"
          name="breakfast"
          id="breakfast"
          onChange={onSubmitHandler}
          checked={formState.breakfast}
        />
        <label htmlFor="breakfast">Breackfast</label>

        <input
          type="checkbox"
          name="launch"
          id="launch"
          onChange={onSubmitHandler}
          checked={formState.launch}
        />
        <label htmlFor="launch">Launch</label>

        <input
          type="checkbox"
          name="dinner"
          id="dinner"
          onChange={onSubmitHandler}
          checked={formState.dinner}
        />
        <label htmlFor="dinner">Dinner</label>
      </fieldset>

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
