import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getCategoryById,
    updateCategory
} from "../../services/categoryService";

function EditCategory() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {

        loadCategory();

    }, []);

    async function loadCategory() {

        try {

            const data = await getCategoryById(id);

            setName(data.name);
            setDescription(data.description || "");

        }
        catch (error) {

            console.log(error);

            alert("Category Not Found");

            navigate("/admin/categories");

        }
        finally {

            setLoading(false);

        }

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setSaving(true);

            await updateCategory(id, {

                name,
                description

            });

            alert("Category Updated Successfully");

            navigate("/admin/categories");

        }
        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Update Failed"
            );

        }
        finally {

            setSaving(false);

        }

    }

    if (loading) {

        return (

            <div className="container py-5 text-center">

                <h3>Loading...</h3>

            </div>

        );

    }

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3 className="mb-0">

                                Edit Category

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
                                    className="btn btn-primary"
                                    disabled={saving}
                                >

                                    {

                                        saving
                                            ? "Updating..."
                                            : "Update Category"

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

export default EditCategory;