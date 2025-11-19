import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGraduationCap } from "react-icons/fc";
import type { Student, StudentProps } from "../types/student";
import { studentAPI } from "../services/api";

export const StudentForm: React.FC<StudentProps> = ({ onStudentAdded }) => {
  const [studentData, setStudentData] = useState<Student>(
    {
    student_id:"",
    first_name:"",
    last_name:"",
    email:"",
    dob:"",
    status:1
    }
);

  const handleStudentSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const savePromise = studentAPI.create(studentData);
    toast
      .promise(savePromise, {
        loading: "Student is saving...",
        success: <b>Student Save Successfully</b>,
        error: <b>Student save failed</b>,
      })
      .then(onStudentAdded)
      .catch((error) => {
        console.error("Student save faild", error);
      })
      .finally(() => {
        
      });
  };

  const handleFormInputChanges = (e:React.FormEvent) => {
    console.log(e.target.name +'='+ e.target.value)
  }

  return (
    <form
      onSubmit={handleStudentSave}
      className="bg-white shadow-md p-6 rounded-lg"
    >
      <h1
        className="text-2xl font-bold flex items-center
            gap-3 mb-6"
      >
        <FcGraduationCap className="w-8 h-8" />
        <span>Add New Student</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
        <input
          type="text"
          placeholder="Student No"
          className="p-2 border rounded w-full"
          required
          name="sno"
          onChange={handleFormInputChanges}
        />
        <input
          type="text"
          placeholder="Frist Name"
          className="p-2 border rounded w-full"
          required
          name="fname"
          onChange={handleFormInputChanges}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 border rounded w-full"
          required
          name="lname"
          onChange={handleFormInputChanges}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded w-full"
          required
          name="email"
          onChange={handleFormInputChanges}
        />
        <input
          type="date"
          className="p-2 border rounded w-full"
          required
          name="dob"
          onChange={handleFormInputChanges}
        />
      </div>
      <button
        type="submit"
        className="bg-sky-400
            px-4 py-2 rounded text-white font-semibold
            hover:bg-sky-500 hover:font-bold"
      >
        Add Student
      </button>
    </form>
  );
};
