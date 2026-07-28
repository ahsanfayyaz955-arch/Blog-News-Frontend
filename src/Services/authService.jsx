import { data } from "react-router-dom";
import api from "../Api/axios";

export const login = async (data) =>{
    const response = await api.post("/Auth/Login",data);
    return response.data;
};

export const register = async (data) =>{
    const  response = await api.post("/Auth/Register", data);
    return response.data;
};