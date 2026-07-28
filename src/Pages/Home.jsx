import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";

import { getAllArticles } from "../services/articleService";
import { toggleLike } from "../services/likeService";

function Home() {

    const [articles, setArticles] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const [sortBy, setSortBy] = useState("latest");

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 9;

    // Debounce Search
    useEffect(() => {

        const timer = setTimeout(() => {

            setDebouncedSearch(searchTerm);

        }, 2000);

        return () => clearTimeout(timer);

    }, [searchTerm]);

    // Load Articles
    useEffect(() => {

        loadArticles(currentPage);

    }, [currentPage, debouncedSearch, sortBy]);

    async function loadArticles(page = 1, showLoader = true) {

        try {

            if (showLoader) {

                setLoading(true);

            }

            const data = await getAllArticles(
                page,
                pageSize,
                debouncedSearch,
                "",
                sortBy
            );

            setArticles(data.items || []);
            setCurrentPage(data.currentPage || 1);
            setTotalPages(data.totalPages || 1);

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

            alert("Please login first.");

        }

    }

    if (loading) {

        return <LoadingSpinner />;

    }
        return (

        <>

            <Hero />

            <div className="container py-5">

                <div className="row align-items-center g-3 mb-4">

                    <div className="col-lg-4">

                        <h2 className="fw-bold mb-1">

                            Latest News

                        </h2>

                        <p className="text-muted mb-0">

                            {articles.length} Articles Available

                        </p>

                    </div>

                    <div className="col-lg-5">

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search by title, content or category..."
                            value={searchTerm}
                            onChange={(e) => {

                                setSearchTerm(e.target.value);
                                setCurrentPage(1);

                            }}
                        />

                    </div>

                    <div className="col-lg-3">

                        <select
                            className="form-select form-select-lg"
                            value={sortBy}
                            onChange={(e) => {

                                setSortBy(e.target.value);
                                setCurrentPage(1);

                            }}
                        >

                            <option value="latest">

                                Latest

                            </option>

                            <option value="oldest">

                                Oldest

                            </option>

                            <option value="likes">

                                Most Liked

                            </option>

                            <option value="comments">

                                Most Commented

                            </option>

                            <option value="title">

                                A - Z

                            </option>

                            <option value="title_desc">

                                Z - A

                            </option>

                        </select>

                    </div>

                </div>

                {

                    articles.length === 0 ?

                        (

                            <div className="text-center py-5">

                                <i
                                    className="bi bi-search"
                                    style={{ fontSize: "70px" }}
                                ></i>

                                <h3 className="mt-3">

                                    No Articles Found

                                </h3>

                                <p className="text-muted">

                                    Try another keyword.

                                </p>

                            </div>

                        )

                        :

                        (

                            <>

                                <div className="row g-4">

                                    {

                                        articles.map(article => (

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

        </>

    );

}

export default Home;