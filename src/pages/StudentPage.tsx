import { FcList } from "react-icons/fc";
import { StudentForm } from "../components/StudentForm";
import { BsPencil, BsTrash } from "react-icons/bs";

export const StudentPage = () => {
    return (
        <div className="p-6">
            <StudentForm/>

        <div className="p-6 shadow-lg rounded-lg bg-white mt-6 overflow-x-auto">
            <h1 className="text-2xl font-bold flex items-center gap-3 mb-4">
               <FcList/> <span>Student List</span>
            </h1>
            <table className="w-full">
                <thead className="bg-sky-200 text-left">
                    <tr>
                        <th className="px-5 py-3 font-semibold">Student No</th>
                        <th className="px-5 py-3 font-semibold">First Name</th>
                        <th className="px-5 py-3 font-semibold">Last Name</th>
                        <th className="px-5 py-3 font-semibold">Email</th>
                        <th className="px-5 py-3 font-semibold">DOB</th>
                        <th className="px-5 py-3 font-semibold"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-sky-50 odd:bg-white font-light">
                        <td className="px-5 py-3 whitespace-nowrap">STU-001</td>
                        <td className="px-5 py-3 whitespace-nowrap">Rose</td>
                        <td className="px-5 py-3 whitespace-nowrap">Perera</td>
                        <td className="px-5 py-3 whitespace-nowrap">rose@gmail.com</td>
                        <td className="px-5 py-3 whitespace-nowrap">1996-9-10</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <button className="border px-3 py-2 border-amber-500
                                rounded hover:bg-amber-500 hover:border-0
                                hover:shadow-md">
                                    <BsPencil className="text-amber-500  hover:text-white"/>
                                </button>
                                <button className="border px-3 py-2 border-red-500
                                rounded hover:bg-red-500 hover:border-0
                                hover:shadow-md">
                                    <BsTrash className="text-red-500  hover:text-white"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

        </div>
    );
}