
import { Link } from "react-router-dom";
import { InputComponent } from "../components/InputComponent";

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";



// Yup
import { object, string } from "yup";

// Axios
import axios from "axios";

// React Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

  // Yup schema
  const loginSchema = object({
    email: string()
      .trim("Email will not be empty.")
      .matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
        message: "The e-mail address field is required.",
        excludeEmptyString: true,
      })
      .required("The password cannot be empty."),
    password: string()
      .trim("")
      .required("The password field is required."),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Login
  const submitForm = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };
    console.log(body)
    // await axios
    //   .post("http://localhost:8000/api/login", body)
    //   .then((res) => {
    //     localStorage.setItem("token", JSON.stringify(res.data.token));
    //     toast.success("Daxil oldunuz", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "colored",
    //     });
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 1500);
    //   })
    //   .catch((err) => {
    //     toast.error("Tapilmadi", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "colored",
    //     });
    //   });
  };

  return (
    <section className="loginPage">
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
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
              <InputComponent type={"email"} id={"email"} name={"E-mail"} {...register("email")} />
              {errors.email && (
                      <span className="errorMsg">{errors.email.message}</span>
                    )}
              <InputComponent
                type={"password"}
                id={"password"}
                name={"Password"}
                {...register("password")}
              />
               {errors.password && (
                      <span className="errorMsg">
                        {errors.password.message}
                      </span>
                    )}
              <button className="loginBtn" type="submit">LOGIN</button>
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
  }

export default Login;
