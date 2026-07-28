import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../services/articleService";
import { getAllCategories } from "../services/categoryService";

function CreateArticle() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {

        try {

            const data = await getAllCategories();

            setCategories(data);

        }
        catch (error) {

            console.log(error);

        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("Title", title);
            formData.append("Content", content);
            formData.append("CategoryId", categoryId);

            if (image) {

                formData.append("Image", image);

            }

            await createArticle(formData);

            alert("Article Created Successfully");

            navigate("/author/my-articles");

        }
        catch (error) {

            console.log(error);

            alert("Article Create Failed");

        }
        finally {

            setLoading(false);

        }

    };

    return (

        <div className="container py-5">

            <div className="card shadow p-4">

                <h2 className="mb-4">

                    Create Article

                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">

                            Title

                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Category

                        </label>

                        <select
                            className="form-select"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            required
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
                            className="form-control"
                            rows="6"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Article Image

                        </label>

                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={loading}
                    >

                        {
                            loading
                                ? "Uploading..."
                                : "Create Article"
                        }

                    </button>

                </form>

            </div>

        </div>

    );

}

export default CreateArticle;