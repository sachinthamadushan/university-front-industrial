import { Link } from "react-router-dom";

const RegistrationPage = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create Account</h2>
        

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input 
              type="text" 
              name="username"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-semibold transition duration-200">
            Register
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-bold">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;