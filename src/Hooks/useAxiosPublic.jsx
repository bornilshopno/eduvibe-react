import axios from "axios";

const axiosPublicly = axios.create({
    // baseURL: "https://edu-vibe-back-end.vercel.app"
    baseURL: "http://localhost:5000"
})

const useAxiosPublic = () => {
    return axiosPublicly
};

export default useAxiosPublic;