import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../services/categoryService";

function CategoryNavbar() {

    const [categories, setCategories] = useState([]);

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

    }

    return (

        <div
            className="bg-white border-bottom shadow-sm"
            style={{
                position: "sticky",
                top: "72px",
                zIndex: 999
            }}
        >

            <div className="container">

                <div
                    className="d-flex flex-nowrap overflow-auto py-2"
                    style={{
                        whiteSpace: "nowrap",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    }}
                >

                    {/* All */}

                    <NavLink
                        to="/articles"
                        className={({ isActive }) =>
                            `btn btn-sm me-2 rounded-pill ${
                                isActive
                                    ? "btn-primary"
                                    : "btn-light border"
                            }`
                        }
                    >
                        📰 All
                    </NavLink>

                    {

                        categories.map(category => (

                            <NavLink
                                key={category.id}
                                to={`/category/${category.id}`}
                                className={({ isActive }) =>
                                    `btn btn-sm me-2 rounded-pill ${
                                        isActive
                                            ? "btn-primary"
                                            : "btn-light border"
                                    }`
                                }
                            >

                                {category.name}

                            </NavLink>

                        ))

                    }

                </div>

            </div>

            {/* Hide Scrollbar */}

            <style>{`
                .overflow-auto::-webkit-scrollbar{
                    display:none;
                }
            `}</style>

        </div>

    );

}

export default CategoryNavbar;