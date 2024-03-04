import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    .then(() => {
      toast.success("Log Out Successfull");
      navigate('/')
    })
  }
  const navLinks = (
    <>
      
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-purple-700 font-bold" : ""
          }
        >
          <span className="animated-button">HOME</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-purple-700 font-bold" : ""
          }
        >
          <span className="animated-button">ABOUT</span>
        </NavLink>
      
      {!user ? (
        <>
          
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-purple-700 font-bold" : ""
              }
            >
              <span className="animated-button">LOG IN</span>
              
            </NavLink>
          
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-purple-700 font-bold" : ""
              }
            >
               <span className="animated-button">REGISTER</span>
              
            </NavLink>
          
        </>
      ) : (
        <>
          <div className="dropdown dropdown-end ml-5">
            <div tabIndex={0} role="button" className=" m-1">
              <img className="h-12 w-12 rounded-full " src={user.photoURL} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[20] menu p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <p>{user.displayName}</p>
              </li>
              <li onClick={handleLogOut}>
                <p>Log out</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
  return (
    <div className="drawer absolute top-0 left-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden text-white">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-3xl font-bold text-white">
            Tour <span className="text-purple-600"> Booking</span>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal flex items-center z-50 gap-6 text-white ">
              {/* Navbar menu content here */}
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-4 z-50">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
