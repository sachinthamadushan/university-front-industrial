
const LoginPage = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password"  className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 
          rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;