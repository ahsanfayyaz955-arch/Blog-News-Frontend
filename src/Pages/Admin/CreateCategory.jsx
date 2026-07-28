import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../services/categoryService";

function CreateCategory() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            const category = {

                name,
                description

            };

            await createCategory(category);

            alert("Category Created Successfully");

            navigate("/admin/categories");

        }
        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Category Create Failed"
            );

        }
        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">

                            <h3 className="mb-0">

                                Create Category

                            </h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Category Name

                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Description

                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={loading}
                                >

                                    {
                                        loading
                                            ? "Saving..."
                                            : "Create Category"
                                    }

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CreateCategory;