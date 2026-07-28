import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import {
    getPendingArticles,
    approveArticle,
    rejectArticle,
    deleteArticle
} from "../../services/articleService";
import { getImageUrl } from "../../helpers/imageHelper";

function PendingArticles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadArticles();
    }, []);

    async function loadArticles() {

        try {

            const data = await getPendingArticles();
            setArticles(data);

        }
        catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    }

    async function handleApprove(id) {

        if (!window.confirm("Approve this article?"))
            return;

        await approveArticle(id);

        loadArticles();

    }

    async function handleReject(id) {

        if (!window.confirm("Reject this article?"))
            return;

        await rejectArticle(id);

        loadArticles();

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this article?"))
            return;

        await deleteArticle(id);

        loadArticles();

    }

    if (loading)
        return <h3 className="text-center mt-5">Loading...</h3>;

    return (

        <div className="container-fluid py-4">

            <div className="row">

                <div className="col-md-2">
                    <AdminSidebar />
                </div>

                <div className="col-md-10">

                    <h2 className="mb-4">
                        Pending Articles ({articles.length})
                    </h2>

                    <table className="table table-bordered table-hover align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>Image</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                articles.length === 0 ?

                                    (

                                        <tr>

                                            <td
                                                colSpan="6"
                                                className="text-center"
                                            >

                                                No Pending Articles

                                            </td>

                                        </tr>

                                    )

                                    :

                                    articles.map(article => (

                                        <tr key={article.id}>

                                            <td width="120">

                                                <img
                                                    src={getImageUrl(article.imageUrl)}
                                                    alt={article.title}
                                                    style={{
                                                        width: "100px",
                                                        height: "70px",
                                                        objectFit: "cover"
                                                    }}
                                                />

                                            </td>

                                            <td>

                                                {article.title}

                                            </td>

                                            <td>

                                                {article.author?.fullName}

                                            </td>

                                            <td>

                                                <span className="badge bg-warning">

                                                    {article.status}

                                                </span>

                                            </td>

                                            <td>

                                                {
                                                    new Date(article.createdAt)
                                                        .toLocaleDateString()
                                                }

                                            </td>

                                            <td>

                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={() => handleApprove(article.id)}
                                                >
                                                    Approve
                                                </button>

                                                <button
                                                    className="btn btn-warning btn-sm me-2"
                                                    onClick={() => handleReject(article.id)}
                                                >
                                                    Reject
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(article.id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default PendingArticles;