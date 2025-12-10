import { FcList } from "react-icons/fc";
import { StudentForm } from "../components/StudentForm";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import type { Student } from "../types/student";
import {format} from 'date-fns';
import { studentAPI } from "../services/api";
import toast from "react-hot-toast";

export const StudentPage = () => {
  const [studentData, setStudentData] = useState<Student[]>([]);
  const [editStudent,setEditStudent] = useState<Student|undefined>();

  const fetchStudent = useCallback(
    async () => {
    studentAPI.getAll().then(
        (response) => {
            setStudentData(response.data.data)
            console.log(response.data.data);
        }
    ).catch(
        (error) => {console.error("Student loading faild",error)}
    );
  }, []);

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  const handleEditStudent = (student:Student) => {
    setEditStudent(student)
  }

  const clearEditStudnet = () => {
    setEditStudent(undefined)
  }

  const deleteStudent = (studentId:string) => {
    if(window.confirm('Are you want to delete the student?')){
      const deletePromise = studentAPI.delete(studentId);
      toast.promise(
        deletePromise,
        {
          loading:'Student is deleting...',
          success:'Student Delete Successfully',
          error:'Student delete failed'
        }
      ).then(
        () => fetchStudent()
      ).catch(
        (error) => console.error('Student delete failed',error) 
      )
    }
  }

  return (
    <div className="p-6">
      <StudentForm onStudentAdded={fetchStudent} editingStudent={editStudent}
      cancleEdit={clearEditStudnet} />

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
                  <button onClick={()=> handleEditStudent(student)}
                    className="border px-3 py-2 border-amber-500
                                rounded hover:bg-amber-500 hover:border-0
                                hover:shadow-md"
                  >
                    <BsPencil className="text-amber-500  hover:text-white" />
                  </button>
                  <button onClick={()=> deleteStudent(student.student_id)}
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
