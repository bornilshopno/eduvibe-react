import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
    const navigate = useNavigate();

    const goHome = () => {
      navigate("/");
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-7xl font-bold text-red-500">OPPS</h1>
        <h2 className="text-2xl mt-4 font-semibold">Page is Under Contruction</h2>
        <p className="text-gray-600 mt-2 text-center">
          We are working to onboard this Page very shortly
        </p>
        <button
          onClick={goHome}
          className="mt-6 px-6 py-2 bg-sky-200 text-green-500 hover:text-white font-medium rounded-lg shadow hover:bg-sky-400 transition-all duration-200"
        >
          Go Back Home
        </button>
      </div>
    );
};

export default DashboardLayout;