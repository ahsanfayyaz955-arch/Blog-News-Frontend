import api from "../Api/axios";

export const getDashboard = async () => {

    const response = await api.get("/AdminDashboard");

    return response.data;

};