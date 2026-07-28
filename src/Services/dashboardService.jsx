import api from "../Api/axios";

export const getDashboard = async ()=>{
    const response = await api.get("/Dashboard/author");
    return response.data;
};