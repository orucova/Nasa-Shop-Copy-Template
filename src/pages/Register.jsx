import { Link} from "react-router-dom";

// React hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Yup
import * as yup from "yup";

// Axios
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {


  const registerSchema = yup.object({
    name: yup.string().trim().min(3, "Must be at least 3 characters.").required("The name cannot be empty."),
    surname: yup.string().trim().min(3, "Must be at least 3 characters.").required("Surname cannot be empty."),
    email: yup.string().trim().required("Email must not be empty.").matches(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, {
      message: "The e-mail address field is required.",
      excludeEmptyString: true,
    }),
   
    password: yup
      .string()
      .trim()
      .required("The password cannot be empty.")
      .min(4, "Password too short.")
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
  });

  //? React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });



  //? Register
  const formSubmit = async (data) => {
    const body = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:8000/api/register", body)
      .then((res) => {
        console.log(res);
        toast.success('You have successfully registered.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setTimeout(() => {
          window.location.pathname="/login";
        }, 2000);
      })
      .catch((err) => {
        toast.warn('Warning!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
          });
        console.log(err);
      });
  };

  return (
    <section className="loginPage">
      <ToastContainer
position="top-center"
autoClose={2000}
limit={1}
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
              <h2 className="loginTitle">REGISTER</h2>
              <p className="loginText">Please fill in the fields below:</p>
            </div>
            <form className="loginForm" onSubmit={handleSubmit(formSubmit)}>
              <div className="inp">
                {errors.name && (
                  <span className="errorMsg">{errors.name.message}</span>
                )}
                <input
                  placeholder="First Name"
                  type={"firstName"}
                  id={"firstName"}
                  name={"name"}
                  {...register("name")}
                />
              </div>
              <div className="inp">
                {errors.surname && (
                  <span className="errorMsg">{errors.surname.message}</span>
                )}
                <input
                  placeholder="Last Name"
                  type={"lastName"}
                  id={"lastName"}
                  name={"surname"}
                  {...register("surname")}
                />
              </div>

              <div className="inp">
                {errors.email && (
                  <span className="errorMsg">{errors.email.message}</span>
                )}
                <input
                  placeholder="E-mail"
                  type={"email"}
                  id={"email"}
                  name={"email"}
                  {...register("email")}
                />
              </div>

              <div className="inp">
                {errors.password && (
                  <span className="errorMsg">{errors.password.message}</span>
                )}
                <input
                  placeholder="Password"
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  {...register("password")}
                />
              </div>
              <button className="loginBtn" type="submit">
                Create Account
              </button>
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
