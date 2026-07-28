import api from "../Api/axios";

export const toggleLike = async(id)=>{

    const response = await api.post(`/Likes/${id}`);

    return response.data;

}