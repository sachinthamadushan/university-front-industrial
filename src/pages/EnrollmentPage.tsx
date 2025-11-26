import { FcElectricalSensor } from "react-icons/fc";
import { EnrollmentForm } from "../components/EnrollmentForm";
import { useCallback, useEffect, useState } from "react";
import type { LoadEnrollment } from "../types/enrollment";
import { enrollmentAPI } from "../services/api";
import { format } from "date-fns";
import { BsTrash } from "react-icons/bs";
import toast from "react-hot-toast";

export const EnrollmentPage = () => {
  const [enrollments, setEnrollments] = useState<LoadEnrollment[]>([]);

  const fetchEnrollments = useCallback(async () => {
    enrollmentAPI
      .getAll()
      .then((response) => setEnrollments(response.data.data))
      .catch((error) => console.error("Enrollments Loading error", error));
  }, []);

  useEffect(() => {
    fetchEnrollments();
  }, [fetchEnrollments]);

  const deleteEnrollment = async (enrollId: number) => {
    if (window.confirm("Are you want delete the enrollment?")) {
      const deletePromise = enrollmentAPI.delete(enrollId);
      toast
        .promise(deletePromise, {
          loading: "Enrollment is deleteing",
          success: "Enrollment Delete Successfully!",
          error: "Enrollment not deleted!",
        })
        .then(() => fetchEnrollments())
        .catch((error) => console.error("Enrollment not deleted", error));
    }
  };

  return (
    <div className="p-6">
      <EnrollmentForm />

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <FcElectricalSensor className="w-10 h-10" />
          <span>Entrollments Details</span>
        </h1>

        <div className="">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-xs text-gray-700">
              <tr>
                <th className="px-5 py-2">Date</th>
                <th className="px-5 py-2">Student</th>
                <th className="px-5 py-2">Course</th>
                <th className="px-5 py-2">Fee</th>
                <th className="px-5 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-sky-100">
                  <td className="px-6 py-3">
                    {format(new Date(enrollment.entroll_date), "yyyy-MMM-dd")}
                  </td>
                  <td className="px-6 py-3">{enrollment.full_name}</td>
                  <td className="px-6 py-3">{enrollment.course_name}</td>
                  <td className="px-6 py-3">{enrollment.course_fee}</td>
                  <td>
                    <button
                      className="border px-3 py-2 border-red-500
                      rounded hover:bg-red-500 hover:border-0
                      hover:shadow-md"
                      onClick={() => deleteEnrollment(enrollment.id)}
                    >
                      <BsTrash className="text-red-500  hover:text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
