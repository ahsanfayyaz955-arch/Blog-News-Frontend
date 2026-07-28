import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleCard from "../components/ArticleCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";

import { getArticlesByCategory } from "../services/articleService";
import { getCategoryById } from "../services/categoryService";
import { toggleLike } from "../services/likeService";

function CategoryArticles() {

    const { id } = useParams();

    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState(null);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 9;

    useEffect(() => {

        loadData(currentPage);

    }, [id, currentPage]);

    async function loadData(page = 1, showLoader = true) {

        try {

            if (showLoader) {

                setLoading(true);

            }

            const [articleData, categoryData] = await Promise.all([

                getArticlesByCategory(
                    id,
                    page,
                    pageSize
                ),

                getCategoryById(id)

            ]);

            console.log(articleData);

            // Safe handling
            setArticles(articleData?.items || []);

            setCurrentPage(articleData?.currentPage || 1);

            setTotalPages(articleData?.totalPages || 1);

            setCategory(categoryData);

        }
        catch (error) {

            console.log(error);

            setArticles([]);

            setCurrentPage(1);

            setTotalPages(1);

        }
        finally {

            if (showLoader) {

                setLoading(false);

            }

        }

    }

    async function handleLike(articleId) {

        try {

            await toggleLike(articleId);

            await loadData(currentPage, false);

        }
        catch (error) {

            console.log(error);

            alert("Please login first.");

        }

    }

    // Safe filter
    const filteredArticles = (articles || []).filter(article => {

        const search = searchTerm.toLowerCase();

        return (

            article.title.toLowerCase().includes(search) ||

            article.content.toLowerCase().includes(search)

        );

    });

    if (loading) {

        return <LoadingSpinner />;

    }
    return (

    <div className="container py-5">

        {/* Category Header */}

        <div className="card border-0 shadow-sm mb-5">

            <div className="card-body p-5">

                <span className="badge bg-primary mb-3">

                    📂 Category

                </span>

                <h1 className="fw-bold mb-3">

                    {category?.name}

                </h1>

                <p className="text-muted fs-5 mb-4">

                    {category?.description}

                </p>

                <div className="d-flex flex-wrap gap-3">

                    <span className="badge bg-success fs-6">

                        📰 {filteredArticles.length} Articles

                    </span>

                    <span className="badge bg-dark fs-6">

                        📄 Page {currentPage} of {totalPages}

                    </span>

                </div>

            </div>

        </div>

        {/* Search */}

        <div className="row mb-4">

            <div className="col-lg-6">

                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search articles in this category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>

        </div>

        {/* Articles */}

        {

            filteredArticles.length === 0 ?

                (

                    <div className="text-center py-5">

                        <i
                            className="bi bi-folder-x"
                            style={{ fontSize: "80px" }}
                        ></i>

                        <h3 className="mt-4">

                            No Articles Found

                        </h3>

                        <p className="text-muted">

                            There are no articles available in this category.

                        </p>

                    </div>

                )

                :

                (

                    <>

                        <div className="row g-4">

                            {

                                filteredArticles.map(article => (

                                    <div
                                        key={article.id}
                                        className="col-xl-4 col-lg-4 col-md-6"
                                    >

                                        <ArticleCard
                                            article={article}
                                            onLike={handleLike}
                                        />

                                    </div>

                                ))

                            }

                        </div>

                        {/* Pagination */}

                        <div className="d-flex justify-content-center mt-5">

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />

                        </div>

                    </>

                )

        }

    </div>

);

}

export default CategoryArticles;