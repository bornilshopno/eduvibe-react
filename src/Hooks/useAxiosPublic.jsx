import axios from "axios";

const axiosPublicly = axios.create({
    baseURL: "https://edu-vibe-back-end.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublicly
};

export default useAxiosPublic;