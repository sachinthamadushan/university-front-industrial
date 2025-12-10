import React, { useState, type ChangeEvent } from "react";
import { Link , useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import { userAPI } from "../services/api";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<User>({
    username: "",
    password: "",
  });

  const handleLoginInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((p) => ({ ...p, [name]: value }));
  };

  const handLogin = (e:React.FormEvent) => {
    e.preventDefault();
    const savePromise =  userAPI.login(loginData);
    toast.promise(
      savePromise,
      {
        loading:'Loging....!!',
        success:'Login Successfully',
        error:'Login Failed!'
      }
    ).then(
      (response) => {
        // redirect home
        console.log(response);
        if(response.status === 200 && response.statusText === 'OK'){
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('username',response.data.username)
          navigate('/');
        }
      }
    ).catch(
      (error) => console.error(`Login failed ${error}`)
    ).finally(
      () => {
        setLoginData({username:'', password:''})
      }
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded"
              required
              onChange={handleLoginInputs}
              value={loginData.username}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded"
              required
              onChange={handleLoginInputs}
              value={loginData.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 
          rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-bold"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
