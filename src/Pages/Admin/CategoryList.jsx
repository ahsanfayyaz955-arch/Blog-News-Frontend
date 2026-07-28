import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorSidebar from "../../components/AdminSidebar";
import {
    getAllCategories,
    deleteCategory
} from "../../services/categoryService";

function CategoryList() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

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
        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmDelete) return;

        try {

            await deleteCategory(id);

            alert("Category Deleted Successfully");

            loadCategories();

        }
        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

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

        <div className="container py-4">

            <div className="row">

                <div className="col-md-3">

                    <AuthorSidebar />

                </div>

                <div className="col-md-9">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h2>Categories</h2>

                        <Link
                            to="/admin/categories/create"
                            className="btn btn-success"
                        >
                            + Add Category
                        </Link>

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th width="180">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    categories.length === 0 ?

                                        (

                                            <tr>

                                                <td
                                                    colSpan="5"
                                                    className="text-center"
                                                >

                                                    No Categories Found

                                                </td>

                                            </tr>

                                        )

                                        :

                                        (

                                            categories.map(category => (

                                                <tr key={category.id}>

                                                    <td>

                                                        {category.id}

                                                    </td>

                                                    <td>

                                                        {category.name}

                                                    </td>

                                                    <td>

                                                        {category.description}

                                                    </td>

                                                    <td>

                                                        <span
                                                            className={`badge ${
                                                                category.isactive
                                                                    ? "bg-success"
                                                                    : "bg-danger"
                                                            }`}
                                                        >

                                                            {
                                                                category.isactive
                                                                    ? "Active"
                                                                    : "Inactive"
                                                            }

                                                        </span>

                                                    </td>

                                                    <td>

                                                        <Link
                                                            to={`/admin/categories/edit/${category.id}`}
                                                            className="btn btn-primary btn-sm me-2"
                                                        >

                                                            Edit

                                                        </Link>

                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => handleDelete(category.id)}
                                                        >

                                                            Delete

                                                        </button>

                                                    </td>

                                                </tr>

                                            ))

                                        )

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CategoryList;