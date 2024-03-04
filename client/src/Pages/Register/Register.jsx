import Lottie from "lottie-react";
import logAnimation from "./../LogIn/login.json";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/shared/GoogleLogin";
import { imageUpload } from "../../utils/imageUpload";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const profile = await imageUpload(image);
    const user = { name, email, password, image: profile.data.display_url };
    createUser(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profile?.data?.display_url,
      }).then(() => {
        toast.success("User Created  Successfully");
        navigate("/");
      });
    });
  };

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
              <form onSubmit={handleCreateUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input type="file" name="image" className="" required />
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
