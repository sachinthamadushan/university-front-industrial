import { FcCircuit } from "react-icons/fc";
import { courseAPI, studentAPI } from "../services/api";
import { useEffect, useState } from "react";
import type { Student } from "../types/student";
import type { Course } from "../types/course";

export const EnrollmentForm = () => {
    const [students,setStudents] = useState<Student[]>([])
    const [courses,setCourses] = useState<Course[]>([])

    const fetchData = async() => {
        studentAPI.getAll()
        .then(
            (response)=>setStudents(response.data.data)
            
        ).catch(
            (error) => {console.error('Student loading faild',error)}
        );

        courseAPI.getAll()
        .then(
            (response) => setCourses(response.data.data) 
        ).catch(
            (error) => {console.error('Student loading faild',error)}
        )
    }
    useEffect(
        () => {
            fetchData()
        }
    ,[])

  return (
    <form className="shadow rounded-lg bg-white p-8">
      <h1
        className="text-2xl font-bold flex items-center
                        gap-3 mb-4"
      >
        <FcCircuit className="w-8 h-8" />
        <span>Student Enrollment</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2">Choose a student</label>
            <select className="w-full p-2 border rounded font-light">
                <option value="">--- Select a student ---</option>
                {
                    students.map(
                        (student) => (
                            <option
                            key={student.student_id} value={student.student_id}>
                                {student.student_id} - {student.first_name} {student.last_name}
                            </option>
                        )
                    )
                }
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2">Choose a course</label>
            <select className="w-full p-2 border rounded font-light">
                <option value="">--- Select a course ---</option>
                {
                    courses.map(
                        (course) => (
                            <option key={course.id} value={course.id}>{course.course_name} - {course.code}</option>
                        )
                    )
                }
            </select>
        </div>
      </div>
    </form>
  );
};
