import { useEffect, useState } from "react";
import { getAllArticles } from "../services/articleService";
import { toggleLike } from "../services/likeService";

import ArticleCard from "../components/ArticleCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";

function Articles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 9;

    useEffect(() => {

        loadArticles(currentPage);

    }, [currentPage]);

    async function loadArticles(page = 1, showLoader = true) {

        try {

            if (showLoader) {

                setLoading(true);

            }

            const data = await getAllArticles(
                page,
                pageSize
            );

            setArticles(data.items);

            setCurrentPage(data.currentPage);

            setTotalPages(data.totalPages);

        }
        catch (error) {

            console.log(error);

        }
        finally {

            if (showLoader) {

                setLoading(false);

            }

        }

    }

    async function handleLike(id) {

        try {

            await toggleLike(id);

            await loadArticles(currentPage, false);

        }
        catch (error) {

            console.log(error);

            alert("Login required to like article.");

        }

    }

    if (loading) {

        return <LoadingSpinner />;

    }

    return (

        <div className="container py-5">

            <h2 className="mb-4">

                All Articles

            </h2>

            <div className="row g-4">

                {

                    articles.map(article => (

                        <div
                            key={article.id}
                            className="col-lg-4 col-md-6"
                        >

                            <ArticleCard
                                article={article}
                                onLike={handleLike}
                            />

                        </div>

                    ))

                }

            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </div>

    );

}

export default Articles;