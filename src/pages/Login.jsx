import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
const Login = () => {
  const [value, setValue] = useState(null);
  return (
    <section className="loginPage">
      <div className="container">
        <div className="row">
          <div className="login">
            <div className="loginTitles">
              <h2 className="loginTitle">LOGIN</h2>
              <p className="loginText">
                Please enter your e-mail and password:
              </p>
            </div>
            <form className="loginForm">
              <span className="p-float-label">
                <InputText
                  id="username"
                  type="email"
                  onChange={(e) => setValue(e.target.value)}
                />


                <label htmlFor="username">E-mail</label>
              </span>
              <span className="p-float-label">
              <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} toggleMask />
                <label htmlFor="username">Password</label>
              </span>
              <button className="loginBtn">LOGIN</button>
              <span className="loginEndText">
                New customer?{" "}
                <Link className="createAccountlink" to="/create-account">
                  Create an account
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
