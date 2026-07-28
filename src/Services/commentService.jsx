import api from "../Api/axios";

export const getComments = async (articleId) => {
    const response = await api.get(`/Comments/${articleId}`);
    return response.data;
};

export const addComment = async (data) => {
    const response = await api.post("/Comments", data);
    return response.data;
};

export const deleteComment = async (id) => {
    const response = await api.delete(`/Comments/${id}`);
    return response.data;
};