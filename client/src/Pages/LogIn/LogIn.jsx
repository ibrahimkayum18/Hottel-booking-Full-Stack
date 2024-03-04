import { Link, useNavigate } from "react-router-dom";
import logAnimation from "./login.json";
import Lottie from "lottie-react";
import GoogleLogin from "../../components/shared/GoogleLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const LogIn = () => {
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleLogIn = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    login(email, password)
    .then(() => {
      toast.success("User Logged In Successfully")
      navigate('/')
    })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 -z-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <Lottie className="lg:w-3/4 mx-auto" animationData={logAnimation} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>
                  New to Travel Bookings? Please{" "}
                  <Link to={"/register"} className="font-bold text-blue-600">
                    {" "}
                    Register
                  </Link>
                </p>
                <GoogleLogin />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
