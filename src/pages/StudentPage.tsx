import { FcList } from "react-icons/fc";
import { StudentForm } from "../components/StudentForm";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import type { Student } from "../types/student";
import {format} from 'date-fns';

export const StudentPage = () => {
  const [studentData, setStudentData] = useState<Student[]>([]);

  const fetchStudent = useCallback(
    async () => {
    const httpRequest = axios.create({
      baseURL: "http://localhost:3000/api/v1/students",
      headers: {
        "Content-Type": "application/json",
      },
    });
    httpRequest.get("/all").then(
        (response) => {
            setStudentData(response.data.data)
        }
    ).catch(
        (error) => {console.error("Student loading faild",error)}
    );
  }, []);

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  return (
    <div className="p-6">
      <StudentForm onStudentAdded={fetchStudent} />

      <div className="p-6 shadow-lg rounded-lg bg-white mt-6 overflow-x-auto">
        <h1 className="text-2xl font-bold flex items-center gap-3 mb-4">
          <FcList /> <span>Student List</span>
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
            {
                studentData.map(
                    (student) => (
                        <tr key={student.student_id} className="even:bg-sky-50 odd:bg-white font-light">
              <td className="px-5 py-3 whitespace-nowrap">{student.student_id}</td>
              <td className="px-5 py-3 whitespace-nowrap">{student.first_name}</td>
              <td className="px-5 py-3 whitespace-nowrap">{student.last_name}</td>
              <td className="px-5 py-3 whitespace-nowrap">{student.email}</td>
              <td className="px-5 py-3 whitespace-nowrap">{
                format(new Date(student.dob),"yyyy-MMM-dd")
              }</td>
              <td>
                <div className="flex items-center gap-3">
                  <button
                    className="border px-3 py-2 border-amber-500
                                rounded hover:bg-amber-500 hover:border-0
                                hover:shadow-md"
                  >
                    <BsPencil className="text-amber-500  hover:text-white" />
                  </button>
                  <button
                    className="border px-3 py-2 border-red-500
                                rounded hover:bg-red-500 hover:border-0
                                hover:shadow-md"
                  >
                    <BsTrash className="text-red-500  hover:text-white" />
                  </button>
                </div>
              </td>
            </tr>
                    )
                )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
