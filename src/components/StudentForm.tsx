import { FcGraduationCap } from "react-icons/fc"

export const StudentForm = () => {
    return (
        <form className="bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-2xl font-bold flex items-center
            gap-3 mb-6">
               <FcGraduationCap className="w-8 h-8"/> 
               <span>Add New Student</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <input type="text" placeholder="Student No"
            className="p-2 border rounded w-full" />
            <input type="text" placeholder="Frist Name"
            className="p-2 border rounded w-full" />
            <input type="text" placeholder="Last Name"
            className="p-2 border rounded w-full" />
            <input type="email" placeholder="Email"
            className="p-2 border rounded w-full" />
            <input type="date"
            className="p-2 border rounded w-full" />
            </div>
            <button type="submit" className="bg-sky-400
            px-4 py-2 rounded text-white font-semibold
            hover:bg-sky-500 hover:font-bold">Add Student</button>
        </form>
    )
}