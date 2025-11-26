import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav className="p-4 bg-sky-400 shadow-md">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-white font-bold
                text-2xl">University App</Link>
                <div className="space-x-3">
                <Link to="/student" className="text-white hover:font-semibold
                ">Student</Link>
                <Link to="/course" className="text-white hover:font-semibold
                ">Course</Link>
                <Link to="/enrollment" className="text-white hover:font-semibold
                ">Enrollment</Link>
                <Link to="/login" className="text-white hover:font-semibold
                bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded">Login</Link>
                </div>
            </div>
        </nav>
    )
}