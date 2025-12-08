import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import type { User } from "../types/user";
import { userAPI } from "../services/api";
import toast from "react-hot-toast";

const RegistrationPage = () => {
  const [userform, setUserForm] = useState<User>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((p) => ({ ...p, [name]: value }));
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    const savePromise = userAPI.create(userform);
    toast.promise(
      savePromise,
      {
        loading:'Saving user',
        success:'User saved successfully',
        error:'User save error'
      }
    ).then(
      () => { 
        // redirect into login
      }
    ).catch(
      (error) => console.error(`User registration faild ${error.message}`)
    )
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create Account
        </h2>
        <form onSubmit={handleSaveUser}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={handleInputChanges}
              value={userform.username}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={handleInputChanges}
              value={userform.password}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={handleInputChanges}
              value={userform.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-semibold transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-bold"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
