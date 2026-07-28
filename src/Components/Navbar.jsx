import { NavLink } from "react-router-dom";

function Navbar() {

    const user = JSON.parse(localStorage.getItem("user"));

    const role = user?.role || user?.Role;
    const fullName = user?.fullName || user?.FullName;

    function logout() {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/";

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">

            <div className="container">

                <NavLink
                    to="/"
                    className="navbar-brand fw-bold fs-3"
                >
                    📰 BlogNews
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="mainNavbar"
                >

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">

                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active fw-semibold" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/articles"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active fw-semibold" : "nav-link"
                                }
                            >
                                Articles
                            </NavLink>

                        </li>

                         <li className="nav-item">

                            <NavLink
                                to="/Privecy"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active fw-semibold" : "nav-link"
                                }
                            >
                                Privecy Policy
                            </NavLink>

                        </li>

                        
                         <li className="nav-item">

                            <NavLink
                                to="/AboutUs"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active fw-semibold" : "nav-link"
                                }
                            >
                                About Us
                            </NavLink>

                        </li>

                    </ul>

                    {

                        user ?

                            (

                                <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">

                                    <span className="text-white small text-center text-lg-start">

                                        👋 Welcome, <strong>{fullName}</strong>

                                    </span>

                                    {

                                        role === "Author" &&

                                        <NavLink
                                            to="/author/dashboard"
                                            className="btn btn-warning btn-sm"
                                        >
                                            Dashboard
                                        </NavLink>

                                    }

                                    {

                                        role === "Admin" &&

                                        <NavLink
                                            to="/admin/dashboard"
                                            className="btn btn-danger btn-sm"
                                        >
                                            Admin Panel
                                        </NavLink>

                                    }

                                    <button
                                        className="btn btn-outline-light btn-sm"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>

                                </div>

                            )

                            :

                            (

                                <div className="d-flex flex-column flex-lg-row gap-2">

                                    <NavLink
                                        to="/login"
                                        className="btn btn-outline-light btn-sm"
                                    >
                                        Login
                                    </NavLink>

                                    <NavLink
                                        to="/register"
                                        className="btn btn-primary btn-sm"
                                    >
                                        Register
                                    </NavLink>

                                </div>

                            )

                    }

                </div>

            </div>

        </nav>

    );

}

export default Navbar;