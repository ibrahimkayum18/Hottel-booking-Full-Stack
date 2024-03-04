import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = async () => {
    await googleLogin().then(() => {
      navigate("/");
      toast.success("User Log In Successfull");
    });
  };
  return (
    <div className="text-center py-3">
      <p>Or Log In with</p>
      <hr />
      <div
        onClick={handleGoogleLogin}
        className="py-1 my-2 w-full rounded-full border-2 text-xl cursor-pointer"
      >
        Google
      </div>
    </div>
  );
};

export default GoogleLogin;
