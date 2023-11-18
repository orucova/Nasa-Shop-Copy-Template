import { Link } from "react-router-dom";
import { InputComponent } from "../components/InputComponent";

const Register = () => {
  return (
    <section className="loginPage">
      <div className="container">
        <div className="row">
          <div className="login">
            <div className="loginTitles">
              <h2 className="loginTitle">REGISTER</h2>
              <p className="loginText">Please fill in the fields below:</p>
            </div>
            <form className="loginForm">
              <InputComponent
                type={"firstName"}
                id={"firstName"}
                name={"First Name"}
              />
              <InputComponent
                type={"lastName"}
                id={"lastName"}
                name={"Last Name"}
              />
              <InputComponent type={"email"} id={"email"} name={"E-mail"} />
              <InputComponent
                type={"password"}
                id={"password"}
                name={"Password"}
              />
              <button className="loginBtn">Create Account</button>
              <span className="loginEndText">
                Already have an account?
                <Link className="createAccountlink" to="/login">
                  Login
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
