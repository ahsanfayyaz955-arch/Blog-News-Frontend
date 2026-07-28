import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
    getArticleById,
    getArticlesByCategory
} from "../services/articleService";

import { toggleLike } from "../services/likeService";

import {
    getComments,
    addComment,
    deleteComment
} from "../services/commentService";

import LoadingSpinner from "../components/LoadingSpinner";
import ArticleCard from "../components/ArticleCard";

import { getImageUrl } from "../helpers/imageHelper";

function ArticleDetails() {

    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [relatedArticles, setRelatedArticles] = useState([]);

    const [commentText, setCommentText] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        loadArticle();
        loadComments();

    }, [id]);

    useEffect(() => {

        if (article?.categoryId) {

            loadRelatedArticles(article.categoryId);

        }

    }, [article]);

    async function loadArticle() {

        try {

            const data = await getArticleById(Number(id));

            setArticle(data);

        }
        catch (error) {

            console.log(error);

        }

    }

    async function loadComments() {

        try {

            const data = await getComments(Number(id));

            setComments(data);

        }
        catch (error) {

            console.log(error);

        }

    }

    async function loadRelatedArticles(categoryId) {

        try {

            const data = await getArticlesByCategory(
                categoryId,
                1,
                4
            );

            const items = data.items || data;

            setRelatedArticles(

                items.filter(a => a.id !== Number(id))

            );

        }
        catch (error) {

            console.log(error);

        }

    }

    async function handleLike() {

        try {

            await toggleLike(article.id);

            await loadArticle();

        }
        catch (error) {

            console.log(error);

            alert("Please login first.");

        }

    }

    async function handleComment(e) {

        e.preventDefault();

        if (!commentText.trim()) {

            alert("Please write a comment.");

            return;

        }

        try {

            await addComment({

                articleId: Number(id),
                commentText: commentText.trim()

            });

            setCommentText("");

            await loadComments();

            await loadArticle();

        }
        catch (error) {

            console.log(error);

            alert("Comment failed.");

        }

    }

    async function handleDelete(commentId) {

        if (!window.confirm("Delete this comment?"))
            return;

        try {

            await deleteComment(commentId);

            await loadComments();

            await loadArticle();

        }
        catch (error) {

            console.log(error);

            alert("Delete failed.");

        }

    }

    const readingTime = useMemo(() => {

        if (!article?.content)
            return 1;

        const words = article.content.trim().split(/\s+/).length;

        return Math.max(1, Math.ceil(words / 200));

    }, [article]);

    function copyLink() {

        navigator.clipboard.writeText(window.location.href);

        alert("Article link copied.");

    }

    if (!article)
        return <LoadingSpinner />;
        return (

        <div className="container py-5">

            <div className="row">

                {/* Main Content */}

                <div className="col-lg-8">

                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                        <img
                            src={getImageUrl(article.imageUrl)}
                            alt={article.title}
                            className="img-fluid"
                            style={{
                                width: "100%",
                                maxHeight: "500px",
                                objectFit: "cover"
                            }}
                        />

                        <div className="card-body p-4">

                            <div className="d-flex flex-wrap gap-2 mb-3">

                                <span className="badge bg-success">

                                    {article.status}

                                </span>

                                {

                                    article.category &&

                                    <span className="badge bg-primary">

                                        {article.category.name}

                                    </span>

                                }

                            </div>

                            <h1 className="fw-bold mb-3">

                                {article.title}

                            </h1>

                            <div className="d-flex flex-wrap gap-4 text-muted mb-4">

                                <span>

                                    👤 {article.author?.fullName || article.author?.userName}

                                </span>

                                <span>

                                    📅 {new Date(article.createdAt).toLocaleDateString()}

                                </span>

                                <span>

                                    ⏱ {readingTime} min read

                                </span>

                            </div>

                            <hr />

                            <div

                                className="fs-5"

                                style={{

                                    lineHeight: "2",

                                    textAlign: "justify"

                                }}

                            >

                                {article.content}

                            </div>

                            <hr className="my-4" />

                            <div className="d-flex flex-wrap align-items-center gap-3">

                                <button

                                    className="btn btn-danger"

                                    onClick={handleLike}

                                >

                                    ❤️ Like

                                </button>

                                <span>

                                    ❤️ {article.likes?.length || 0}

                                </span>

                                <span>

                                    💬 {comments.length}

                                </span>

                                <button

                                    className="btn btn-outline-secondary"

                                    onClick={copyLink}

                                >

                                    🔗 Copy Link

                                </button>

                            </div>

                        </div>

                    </div>

                    {/* Comments */}

                    <div className="card border-0 shadow-sm rounded-4 mt-4">

                        <div className="card-body">

                            <h3 className="fw-bold mb-4">

                                Comments ({comments.length})

                            </h3>

                            <form onSubmit={handleComment}>

                                <textarea

                                    className="form-control mb-3"

                                    rows="4"

                                    placeholder="Write your comment..."

                                    value={commentText}

                                    onChange={(e) =>

                                        setCommentText(e.target.value)

                                    }

                                />

                                <button

                                    className="btn btn-primary"

                                    type="submit"

                                >

                                    Post Comment

                                </button>

                            </form>

                            <hr />

                            {

                                comments.length === 0 ?

                                    <div className="alert alert-info">

                                        No comments yet.

                                    </div>

                                    :

                                    comments.map(comment => (

                                        <div

                                            key={comment.id}

                                            className="border rounded-3 p-3 mb-3"

                                        >

                                            <div className="d-flex justify-content-between">

                                                <div>

                                                    <h6 className="mb-1">

                                                        {comment.userName}

                                                    </h6>

                                                    <small className="text-muted">

                                                        {

                                                            new Date(comment.createdAt)

                                                                .toLocaleString()

                                                        }

                                                    </small>

                                                </div>

                                                {

                                                    user &&

                                                    (

                                                        user.role === "Admin" ||

                                                        user.id === comment.userId

                                                    ) &&

                                                    <button

                                                        className="btn btn-sm btn-danger"

                                                        onClick={() =>

                                                            handleDelete(comment.id)

                                                        }

                                                    >

                                                        Delete

                                                    </button>

                                                }

                                            </div>

                                            <hr />

                                            <p className="mb-0">

                                                {comment.commentText}

                                            </p>

                                        </div>

                                    ))

                            }

                        </div>

                    </div>

                </div>

                {/* Sidebar */}

                <div className="col-lg-4">

                    <div

                        className="sticky-top"

                        style={{ top: "90px" }}

                    >

                        <div className="card border-0 shadow-sm rounded-4">

                            <div className="card-body">

                                <h4 className="fw-bold mb-4">

                                    Related Articles

                                </h4>

                                {

                                    relatedArticles.length === 0 ?

                                        <p className="text-muted">

                                            No related articles found.

                                        </p>

                                        :

                                        relatedArticles.map(item => (

                                            <div

                                                key={item.id}

                                                className="mb-4"

                                            >

                                                <ArticleCard

                                                    article={item}

                                                    onLike={() => {}}

                                                />

                                            </div>

                                        ))

                                }

                                <div className="text-center mt-3">

                                    <Link

                                        to="/articles"

                                        className="btn btn-outline-primary"

                                    >

                                        View All Articles

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ArticleDetails;