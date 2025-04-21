import React, { useState } from "react";

export default function AddNewCourse() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructor: "",
    duration: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Course added successfully!");
      setFormData({
        name: "",
        description: "",
        instructor: "",
        duration: "",
        category: "",
        price: "",
      });
    } else {
      alert("Failed to add course");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 text-black">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New Course</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter course name"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Description
            </label>
            <textarea
              name="description"
              placeholder="Enter course description"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructor Name
            </label>
            <input
              name="instructor"
              type="text"
              placeholder="Enter instructor name"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.instructor}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Duration (in weeks)
            </label>
            <input
              name="duration"
              type="number"
              placeholder="Enter duration"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Category
            </label>
            <input
              name="category"
              type="text"
              placeholder="Enter category"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (USD)
            </label>
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}
