import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorSidebar from "../components/AuthorSidebar";
import { getMyArticles, deleteArticle } from "../services/articleService";
import { getImageUrl } from "../helpers/imageHelper";

function MyArticles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadArticles();

    }, []);

    async function loadArticles() {

        try {

            const data = await getMyArticles();

            setArticles(data);

        }
        catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Are you sure you want to delete this article?"))
            return;

        try {

            await deleteArticle(id);

            alert("Article Deleted Successfully");

            loadArticles();

        }
        catch (error) {

            console.log(error);

            alert("Delete Failed");

        }

    }

    if (loading) {

        return (

            <div className="container py-5 text-center">

                <div className="spinner-border text-primary"></div>

                <h5 className="mt-3">Loading Articles...</h5>

            </div>

        );

    }

    return (

        <div className="container-fluid py-4">

            <div className="row">

                <div className="col-lg-3 mb-4">

                    <AuthorSidebar />

                </div>

                <div className="col-lg-9">

                    <div className="card shadow border-0">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <h2 className="fw-bold">

                                    My Articles

                                </h2>

                                <Link
                                    to="/author/create-article"
                                    className="btn btn-success"
                                >

                                    <i className="bi bi-plus-circle me-2"></i>

                                    Create Article

                                </Link>

                            </div>

                            <div className="table-responsive">

                                <table className="table table-hover align-middle">

                                    <thead className="table-dark">

                                        <tr>

                                            <th>Image</th>

                                            <th>Title</th>

                                            <th>Category</th>

                                            <th>Status</th>

                                            <th>Likes</th>

                                            <th>Comments</th>

                                            <th>Date</th>

                                            <th width="180">

                                                Actions

                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {

                                            articles.length === 0 ?

                                                (

                                                    <tr>

                                                        <td
                                                            colSpan="8"
                                                            className="text-center py-5"
                                                        >

                                                            <h5>

                                                                No Articles Found

                                                            </h5>

                                                        </td>

                                                    </tr>

                                                )

                                                :

                                                (

                                                    articles.map(article => (

                                                        <tr key={article.id}>

                                                            <td>

                                                                <img
                                                                    src={getImageUrl(article.imageUrl)}
                                                                    alt={article.title}
                                                                    style={{
                                                                        width: "90px",
                                                                        height: "65px",
                                                                        objectFit: "cover",
                                                                        borderRadius: "10px"
                                                                    }}
                                                                />

                                                            </td>

                                                            <td>

                                                                <strong>

                                                                    {article.title}

                                                                </strong>

                                                            </td>

                                                            <td>

                                                                {

                                                                    article.category ?

                                                                        <span className="badge bg-primary">

                                                                            {article.category.name}

                                                                        </span>

                                                                        :

                                                                        <span className="text-muted">

                                                                            No Category

                                                                        </span>

                                                                }

                                                            </td>

                                                            <td>

                                                                <span
                                                                    className={`badge ${

                                                                        article.status === "Approved"

                                                                            ? "bg-success"

                                                                            : article.status === "Rejected"

                                                                                ? "bg-danger"

                                                                                : "bg-warning text-dark"

                                                                        }`}
                                                                >

                                                                    {article.status}

                                                                </span>

                                                            </td>

                                                            <td>

                                                                ❤️ {article.likes?.length || 0}

                                                            </td>

                                                            <td>

                                                                💬 {article.comments?.length || 0}

                                                            </td>

                                                            <td>

                                                                {

                                                                    new Date(article.createdAt)
                                                                        .toLocaleDateString()

                                                                }

                                                            </td>

                                                            <td>

                                                                <Link
                                                                    to={`/author/edit-article/${article.id}`}
                                                                    className="btn btn-primary btn-sm me-2"
                                                                >

                                                                    <i className="bi bi-pencil-square"></i>

                                                                </Link>

                                                                <button
                                                                    className="btn btn-danger btn-sm"
                                                                    onClick={() => handleDelete(article.id)}
                                                                >

                                                                    <i className="bi bi-trash"></i>

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

            </div>

        </div>

    );

}

export default MyArticles;