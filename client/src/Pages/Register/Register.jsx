import Lottie from "lottie-react";
import logAnimation from "./../LogIn/login.json";
import { Link } from "react-router-dom";
import GoogleLogin from "../../components/shared/GoogleLogin";

const Register = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200 -z-50">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
              <Lottie
                className="lg:w-3/4 mx-auto"
                animationData={logAnimation}
              />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
              <form className="card-body">
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div>
                  <p>
                    Already Have an Account? Please{" "}
                    <Link to={"/login"} className="font-bold text-blue-600">
                      {" "}
                      LogIn
                    </Link>
                  </p>
                  <GoogleLogin />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
