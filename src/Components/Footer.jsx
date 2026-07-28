import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="bg-dark text-light pt-5 mt-5">

            <div className="container">

                <div className="row g-4">

                    {/* Logo */}

                    <div className="col-lg-4 col-md-6">

                        <h3 className="fw-bold mb-3">

                            📰 BlogNews

                        </h3>

                        <p className="text-light-emphasis">

                            BlogNews is a modern news portal delivering
                            the latest technology, business, sports,
                            entertainment, and world news with a clean,
                            fast, and responsive experience.

                        </p>

                        <div className="d-flex gap-3 fs-4">

                            <a
                                href="#"
                                className="text-white"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white"
                            >
                                <i className="bi bi-youtube"></i>
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-2 col-md-6">

                        <h5 className="fw-bold mb-3">

                            Quick Links

                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-2">

                                <Link
                                    to="/"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    Home
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/articles"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    Articles
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/AboutUs"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    About Us
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/contact"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    Contact
                                </Link>

                            </li>

                        </ul>

                    </div>

                    {/* Legal */}

                    <div className="col-lg-3 col-md-6">

                        <h5 className="fw-bold mb-3">

                            Legal

                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-2">

                                <Link
                                    to="/Privecy"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    Privacy Policy
                                </Link>

                            </li>

                            <li className="mb-2">

                                <Link
                                    to="/Terms"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    Terms & Conditions
                                </Link>

                            </li>

                            

                            <li className="mb-2">

                                <Link
                                    to="/Disclaimer"
                                    className="text-decoration-none text-light-emphasis"
                                >
                                    Disclaimer
                                </Link>

                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-3 col-md-6">

                        <h5 className="fw-bold mb-3">

                            Contact

                        </h5>

                        <p>

                            <i className="bi bi-envelope-fill me-2"></i>

                            support@blognews.com

                        </p>

                        <p>

                            <i className="bi bi-telephone-fill me-2"></i>

                            +92 300 1234567

                        </p>

                        <p>

                            <i className="bi bi-geo-alt-fill me-2"></i>

                            Karachi, Pakistan

                        </p>

                    </div>

                </div>

                <hr className="border-secondary my-4" />

                <div className="row align-items-center">

                    <div className="col-md-6 text-center text-md-start">

                        <small className="text-light-emphasis">

                            © {new Date().getFullYear()} BlogNews.
                            All Rights Reserved.

                        </small>

                    </div>

                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">

                        <small className="text-light-emphasis">

                            Developed with ❤️ using React & ASP.NET Core

                        </small>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;