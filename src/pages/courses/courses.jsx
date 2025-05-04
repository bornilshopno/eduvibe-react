import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("https://eduvibe-react-backend.onrender.com/courses");
        if (!res.ok) {
          console.error("Failed to fetch courses, status:", res.status);
          console.error("Response Body:", await res.text());
          return;
        }

        const data = await res.json();
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Price:</strong> ${course.price}
            </p>

            <button
              onClick={() => navigate(`/courses/${course._id}`)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
            >
              View Course Details
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/addNewCourse")}
        className=" py-2 px-4 rounded-lg w-full mt-6 bg-primary-400 text-white dark:bg-primary-600"
      >
        Add New Course
      </button>
    </div>
  );
}
