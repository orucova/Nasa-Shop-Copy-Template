import { Link } from "react-router-dom";

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Yup
import { object, string } from "yup";

// Axios
import axios from "axios";

// React Toastify
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

  // Yup schema
  const loginSchema = object({
    email: string()
      .trim()
      .matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
        message: "The e-mail address field is required.",
        excludeEmptyString: true,
      })
      .required("Email must not be empty."),
      password: string()
    .trim("")
    .test({
      name: 'passwordLength',
      test: value => {
        if (!value) {
          return true; 
        }
        return value.length >= 6;
      },
      message: "Password must be at least 6 characters."
    })
    .required("The password cannot be empty."),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // 
  // Login
  const submitForm = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };
        await axios
          .post("http://localhost:8000/api/login", body)
          .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            toast.success('You are successfully logged in!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            setTimeout(() => {
              window.location.pathname="/";
            }, 1500);
          })
          .catch((err) => {
            toast.warn('Error!  Account not found.', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
    console.log(err)
          });
  };

  return (
    <section className="loginPage">
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container">
        <div className="row">
          <div className="login">
            <div className="loginTitles">
              <h2 className="loginTitle">LOGIN</h2>
              <p className="loginText">
                Please enter your e-mail and password:
              </p>
            </div>
            <form className="loginForm" onSubmit={handleSubmit(submitForm)}>
              <div className="inp">
              {errors.email && (
                <span className="errorMsg">{errors.email.message}</span>
              )}
                <input type="email" id={"email"} name="email" placeholder="E-mail" {...register("email")} />
              </div>
              <div className="inp">
              {errors.password && (
                <span className="errorMsg">{errors.password.message}</span>
              )}
                <input type={"password"} id={"password"} name="password" placeholder="Password" {...register("password")} />
              </div>
              <button className="loginBtn" type="submit">
                LOGIN
              </button>
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
