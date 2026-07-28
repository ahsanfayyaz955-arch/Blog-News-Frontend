import { Link } from "react-router-dom";
import { getImageUrl } from "../helpers/imageHelper";

function ArticleCard({ article, onLike }) {

    return (

        <div className="card shadow-sm border-0 h-100">

            <img
                src={getImageUrl(article.imageUrl)}
                className="card-img-top"
                alt={article.title}
                style={{
                    height: "230px",
                    objectFit: "cover"
                }}
            />

            <div className="card-body d-flex flex-column">

                {/* Category */}

                {
                    article.category && (

                        <div className="mb-2">

                            <span className="badge bg-primary">

                                {article.category.name}

                            </span>

                        </div>

                    )
                }

                {/* Title */}

                <h5 className="card-title fw-bold">

                    {article.title}

                </h5>

                {/* Content */}

                <p className="card-text text-muted">

                    {
                        article.content.length > 120
                            ? article.content.substring(0, 120) + "..."
                            : article.content
                    }

                </p>

                {/* Author + Date */}

                <div className="small text-secondary mb-3">

                    <div>

                        👤 {article.author?.fullName || article.author?.userName || "Unknown"}

                    </div>

                    <div>

                        📅 {new Date(article.createdAt).toLocaleDateString()}

                    </div>

                </div>

                {/* Likes & Comments */}

                <div className="mb-3">

                    <span className="badge bg-danger me-2">

                        ❤️ {article.likes?.length || 0}

                    </span>

                    <span className="badge bg-success">

                        💬 {article.comments?.length || 0}

                    </span>

                </div>

                {/* Buttons */}

                <div className="mt-auto d-flex gap-2">

                    <button
                        className="btn btn-outline-danger flex-fill"
                        onClick={() => onLike && onLike(article.id)}
                    >

                        ❤️ Like

                    </button>

                    <Link
                        to={`/articles/${article.id}`}
                        className="btn btn-primary flex-fill"
                    >

                        Read More

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ArticleCard;