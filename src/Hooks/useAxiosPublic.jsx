import axios from "axios";

const axiosPublicly = axios.create({
  // baseURL: "https://edu-vibe-back-end.vercel.app"
  // baseURL: "http://localhost:5000",
  // baseURL: "https://eduvibe-react-backend.onrender.com"
  baseURL: "https://eduvibe-server-m88v.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublicly;
};

export default useAxiosPublic;
