import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export const InputComponent = ({ type, id, name }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [focusedInput, setFocusedInput] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName:"",
    lastName:"",
  });


  const checkType = () => {
      if (type === "password" && isOpen) {
      return "text";
    }
    return type;
  };

  const handleFocusChange = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputChange = (inputName, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
  };

  return (
    <div className="inp">
      <input
        type={isOpen ? checkType() : type}
        id={id}
        onChange={(e) => handleInputChange(type, e.target.value)}
        onFocus={() => handleFocusChange(type)}
        onBlur={() => handleFocusChange("")}
      />
      <label
        htmlFor={type}
        className={`${
          focusedInput === type || values[type] ? "focused" : "unfocused"
        }`}
      >
        {name}
      </label>
      {type === "password" ? (
        <div className="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaEyeSlash />  : <FaEye />}
        </div>
      ) : null}
    </div>
  );
};
