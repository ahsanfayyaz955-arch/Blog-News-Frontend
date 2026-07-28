import api from "../Api/axios";

// ==========================
// GET ALL ARTICLES
// ==========================
export const getAllArticles = async (
    page = 1,
    pageSize = 9,
    search = "",
    categoryId = "",
    sortBy = ""
) => {

    const response = await api.get("/Articles", {
        params: {
            page,
            pageSize,
            search,
            categoryId,
            sortBy
        }
    });

    return response.data;
};

// ==========================
// GET ARTICLE BY ID
// ==========================
export const getArticleById = async (id) => {

    const response = await api.get(`/Articles/${id}`);

    return response.data;
};

// ==========================
// GET MY ARTICLES
// ==========================
export const getMyArticles = async () => {

    const response = await api.get("/Articles/my-articles");

    return response.data;
};

// ==========================
// CREATE ARTICLE
// ==========================
export const createArticle = async (formData) => {

    const response = await api.post(
        "/Articles",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};

// ==========================
// UPDATE ARTICLE
// ==========================
export const updateArticle = async (id, article) => {

    const response = await api.put(`/Articles/${id}`, article);

    return response.data;
};

// ==========================
// DELETE ARTICLE
// ==========================
export const deleteArticle = async (id) => {

    const response = await api.delete(`/Articles/${id}`);

    return response.data;
};

// ==========================
// PENDING ARTICLES
// ==========================
export const getPendingArticles = async () => {

    const response = await api.get("/Articles/pending");

    return response.data;
};

// ==========================
// APPROVE ARTICLE
// ==========================
export const approveArticle = async (id) => {

    const response = await api.put(`/Articles/${id}/approve`);

    return response.data;
};

// ==========================
// REJECT ARTICLE
// ==========================
export const rejectArticle = async (id) => {

    const response = await api.put(`/Articles/${id}/reject`);

    return response.data;
};

// ==========================
// GET ARTICLES BY CATEGORY
// ==========================
export const getArticlesByCategory = async (
    id,
    page = 1,
    pageSize = 9
) => {

    const response = await api.get(`/Articles/category/${id}`, {
        params: {
            page,
            pageSize
        }
    });

    return response.data;

};