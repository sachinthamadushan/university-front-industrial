import { FcCircuit } from "react-icons/fc";
import { courseAPI, enrollmentAPI, studentAPI } from "../services/api";
import React, { useEffect, useState, type ReactElement } from "react";
import type { Student } from "../types/student";
import type { Course } from "../types/course";
import type { Enrollment } from "../types/enrollment";
import toast from "react-hot-toast";

export const EnrollmentForm = () => {
    const [students,setStudents] = useState<Student[]>([]);
    const [courses,setCourses] = useState<Course[]>([]);
    const [enrollDate,setEnrollDate] = useState<string>("")
    const [selectedStudent,setSelectedStudent] = useState<string>("");
    const [selectedCourse,setSelectedCourse] = useState<number>(0);

    const handleSaveEnrollments = async(e:React.FormEvent) => {
        e.preventDefault()
        const enrollment:Enrollment = {
            stuId:selectedStudent,
            courseId:selectedCourse,
            enrollDate:enrollDate
        }
        const savePromise = enrollmentAPI.create(enrollment);
        toast.promise(
            savePromise,
            {
                loading:"Enrollment is saving...",
                success:"Enrollment saved successfully!",
                error:"Enrollment save faild"
            }
        ).then(
            () => {

            }
        )
        .catch(
            (error) => console.error('Enrollment save failed',error)
        ).finally(
            ()=>{
                setSelectedCourse(0)
                setSelectedStudent("")
                setEnrollDate("")
            }
        )

    }

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
    <form onSubmit={handleSaveEnrollments} className="shadow rounded-lg bg-white p-8 mb-5">
      <h1
        className="text-2xl font-bold flex items-center
                        gap-3 mb-4"
      >
        <FcCircuit className="w-8 h-8" />
        <span>Student Enrollment</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="mb-2">
            <label className="block text-gray-900 text-sm mb-2">Choose a student</label>
            <select className="w-full p-2 border rounded font-light"
            onChange={(e)=> setSelectedStudent(e.target.value)} value={selectedStudent} required>
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
        <div className="mb-2">
            <label className="block text-gray-900 text-sm mb-2">Choose a course</label>
            <select className="w-full p-2 border rounded font-light"
            onChange={(e)=> setSelectedCourse(parseInt(e.target.value))} value={selectedCourse} required>
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
        <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2">Enroll Date</label>
            <input type="date" required className="p-2 border w-full rounded"
            onChange={(e)=>setEnrollDate(e.target.value)} value={enrollDate}/>
        </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-sky-500 text-white font-semibold
      hover:bg-sky-600 rounded-lg">Add Enrollment</button>
    </form>
  );
};
