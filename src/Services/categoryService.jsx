import api from "../Api/axios";

// ===========================
// GET ALL CATEGORIES
// ===========================
export const getAllCategories = async () => {

    const response = await api.get("/Categories");

    return response.data;
};

// ===========================
// GET CATEGORY BY ID
// ===========================
export const getCategoryById = async (id) => {

    const response = await api.get(`/Categories/${id}`);

    return response.data;
};

// ===========================
// CREATE CATEGORY
// ===========================
export const createCategory = async (category) => {

    const response = await api.post("/Categories", category);

    return response.data;
};

// ===========================
// UPDATE CATEGORY
// ===========================
export const updateCategory = async (id, category) => {

    const response = await api.put(`/Categories/${id}`, category);

    return response.data;
};

// ===========================
// DELETE CATEGORY
// ===========================
export const deleteCategory = async (id) => {

    const response = await api.delete(`/Categories/${id}`);

    return response.data;
};