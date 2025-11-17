import axios from "axios";
import React, { useState } from "react"
import toast from "react-hot-toast";
import { FcGraduationCap } from "react-icons/fc"
import type { Student, StudentProps } from "../types/student";

export const StudentForm:React.FC<StudentProps> = ({onStudentAdded}) => {

const [studetNo,setStudentNo] = useState<string>("");
const [firstName,setFirstName] = useState<string>("");
const [lastName,setLastName] = useState<string>("");
const [email,setEmail] = useState<string>("");
const [dob,setDob] = useState<string>("");

const handleStudentSave = async (e:React.FormEvent) => {
    e.preventDefault();
    const student:Student = {
        student_id:studetNo,
        first_name:firstName,
        last_name:lastName,
        email:email,
        dob:dob,
        status:1
    }
    const httpRequest = axios.create({
        baseURL:'http://localhost:3000/api/v1/students',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const savePromise = httpRequest.post('/create',student);
    toast.promise(
        savePromise,
        {
          loading:'Student is saving...',
          success:<b>Student Save Successfully</b>,
          error:<b>Student save failed</b>  
        }
    ).then(
        onStudentAdded
    ).catch(
        (error) => {console.error('Student save faild',error)}
    ).finally(
        () => {
            setStudentNo("")
            setFirstName("")
            setLastName("")
            setEmail("")
            setDob("")
        }
    );
}

    return (
        <form onSubmit={handleStudentSave} className="bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-2xl font-bold flex items-center
            gap-3 mb-6">
               <FcGraduationCap className="w-8 h-8"/> 
               <span>Add New Student</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <input type="text" placeholder="Student No"
            className="p-2 border rounded w-full" required
            onChange={(e) => setStudentNo(e.target.value)}
            value={studetNo} />
            <input type="text" placeholder="Frist Name"
            className="p-2 border rounded w-full" required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName} />
            <input type="text" placeholder="Last Name"
            className="p-2 border rounded w-full" required
            onChange={(e) => setLastName(e.target.value)} 
            value={lastName}/>
            <input type="email" placeholder="Email"
            className="p-2 border rounded w-full" required 
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <input type="date"
            className="p-2 border rounded w-full" required 
            onChange={(e) => setDob(e.target.value)}
            value={dob}/>
            </div>
            <button type="submit" className="bg-sky-400
            px-4 py-2 rounded text-white font-semibold
            hover:bg-sky-500 hover:font-bold">Add Student</button>
        </form>
    )
}