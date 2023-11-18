
import { Link } from "react-router-dom";
import { InputComponent } from "../components/InputComponent";
const Login = () => {
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
              <InputComponent type={"email"} id={"email"} name={"E-mail"} />
              <InputComponent
                type={"password"}
                id={"password"}
                name={"Password"}
              />
              <button className="loginBtn">LOGIN</button>
              <span className="loginEndText">
                New customer?
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
