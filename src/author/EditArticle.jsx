import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    getArticleById,
    updateArticle
} from "../services/articleService";

import { getAllCategories } from "../services/categoryService";

function EditArticle() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const [categoryId, setCategoryId] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        loadData();

    }, [id]);

    async function loadData() {

        try {

            const article = await getArticleById(id);

            const categoryData = await getAllCategories();

            setCategories(categoryData);

            setTitle(article.title);

            setContent(article.content);

            setCategoryId(article.categoryId);

            setImageUrl(article.imageUrl || "");

        }
        catch (error) {

            console.log(error);

            alert("Failed to load article.");

        }
        finally {

            setPageLoading(false);

        }

    }

    if (pageLoading) {

        return (

            <div className="container py-5 text-center">

                <div
                    className="spinner-border text-primary"
                    role="status"
                ></div>

            </div>

        );

    }

    return (

        <div className="container py-5">

            <div className="card shadow border-0">

                <div className="card-body p-4">

                    <h2 className="fw-bold mb-4">

                        Edit Article

                    </h2>

                    <form>

                        <div className="mb-3">

                            <label className="form-label">

                                Title

                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label">

                                Category

                            </label>

                            <select
                                className="form-select"
                                value={categoryId}
                                onChange={(e) =>
                                    setCategoryId(e.target.value)
                                }
                            >

                                <option value="">

                                    Select Category

                                </option>

                                {

                                    categories.map(category => (

                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >

                                            {category.name}

                                        </option>

                                    ))

                                }

                            </select>

                        </div>

                        <div className="mb-3">

                            <label className="form-label">

                                Content

                            </label>

                            <textarea
                                rows="8"
                                className="form-control"
                                value={content}
                                onChange={(e) =>
                                    setContent(e.target.value)
                                }
                            />

                        </div>

                        {

                            imageUrl && (

                                <div className="mb-3">

                                    <label className="form-label">

                                        Current Image

                                    </label>

                                    <img
                                        src={`https://localhost:7192${imageUrl}`}
                                        alt=""
                                        className="img-fluid rounded border"
                                        style={{
                                            maxHeight: "300px",
                                            objectFit: "cover"
                                        }}
                                    />

                                </div>

                            )

                        }
                                                <div className="d-flex gap-2 mt-4">

                            <button
                                type="button"
                                className="btn btn-success"
                                disabled={loading}
                                onClick={handleSubmit}
                            >

                                {

                                    loading

                                        ? "Updating..."

                                        : "Update Article"

                                }

                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>
                                    navigate("/author/my-articles")
                                }
                            >

                                Cancel

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

    async function handleSubmit(e) {

        if (e)
            e.preventDefault();

        if (!title.trim()) {

            alert("Title is required.");

            return;

        }

        if (!content.trim()) {

            alert("Content is required.");

            return;

        }

        if (!categoryId) {

            alert("Please select category.");

            return;

        }

        try {

            setLoading(true);

            const article = {

                title,

                content,

                imageUrl,

                categoryId: Number(categoryId)

            };

            await updateArticle(id, article);

            alert("Article Updated Successfully.");

            navigate("/author/my-articles");

        }
        catch (error) {

            console.log(error);

            alert("Update Failed.");

        }
        finally {

            setLoading(false);

        }

    }

}

export default EditArticle;