import axios from "axios";
import type { Student } from "../types/student";

const httpRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const studentAPI = {
    create:(student:Student) => httpRequest.post('/students/create',student),
    getAll:() => httpRequest.get('/students/all'),
    delete:(studentId:string) => httpRequest.put(`/students/delete/${studentId}`)
} 