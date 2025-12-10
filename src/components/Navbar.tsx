import { Link } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

export const Navbar = () => {
  const { user, logout } = useLogin();
  return (
    <nav className="p-4 bg-sky-400 shadow-md">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-bold
                text-2xl"
        >
          University App
        </Link>
        {user && (
          <div className="space-x-3">
            <Link
              to="/student"
              className="text-white hover:font-semibold
                "
            >
              Student
            </Link>
            <Link
              to="/course"
              className="text-white hover:font-semibold
                "
            >
              Course
            </Link>
            <Link
              to="/enrollment"
              className="text-white hover:font-semibold
                "
            >
              Enrollment
            </Link>
            <span className="text-white">|</span>
            <span className="text-white font-bold">Hi, {user.username}</span>
            <button onClick={logout}
            className="px-4 py-2 rounded-lg bg-rose-500
             text-white hover:font-semibold hover:bg-rose-600">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};
