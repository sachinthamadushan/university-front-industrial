import axios from "axios";
import type { Student } from "../types/student";
import type { Enrollment } from "../types/enrollment";
import type { User } from "../types/user";

const httpRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const studentAPI = {
  create: (student: Student) => httpRequest.post("/students/create", student),
  getAll: () => httpRequest.get("/students/all"),
  update: (studentId: string, student: Student) =>
    httpRequest.put(`/students/update/${studentId}`, student),
  delete: (studentId: string) =>
    httpRequest.put(`/students/delete/${studentId}`),
};

export const courseAPI = {
  getAll: () => httpRequest.get("/courses/all"),
};

export const enrollmentAPI = {
  create: (enrollment:Enrollment) => httpRequest.post('/enrollments/create',enrollment),
  getAll: () => httpRequest.get('/enrollments/all'),
  delete: (enrollId:number) => httpRequest.delete(`/enrollments/delete/${enrollId}`)
}

export const userAPI = {
  create: (user:User) => httpRequest.post('/users/create',user),
  login: (user:User) => httpRequest.post('/users/login',user)
}
