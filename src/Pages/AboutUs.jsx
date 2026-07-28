import { Link } from "react-router-dom";

function AboutUs() {

    return (
<div className="container-fluid py-5 px-lg-5">

    <div className="bg-white rounded-4 shadow-sm p-5">

                            {/* Header */}

                            <div className="text-center mb-5">

                                <i
                                    className="bi bi-newspaper text-primary"
                                    style={{ fontSize: "70px" }}
                                ></i>

                                <h1 className="fw-bold mt-3">

                                    About BlogNews

                                </h1>

                                <p className="text-muted fs-5">

                                    Delivering trusted news, insightful stories,
                                    and the latest updates from around the world.

                                </p>

                            </div>

                            <hr className="mb-5" />

                            {/* Our Story */}

                            <section className="mb-5">

                                <h2 className="fw-bold mb-3">

                                    Our Story

                                </h2>

                                <p className="text-muted">

                                    BlogNews was created with one simple goal:
                                    to make high-quality news accessible to
                                    everyone. We believe that reliable
                                    information empowers people to make better
                                    decisions and stay connected with the world.

                                </p>

                                <p className="text-muted">

                                    Our platform brings together breaking news,
                                    technology, sports, business, health,
                                    entertainment, politics, and many other
                                    categories in one place.

                                </p>

                            </section>

                            {/* Mission */}

                            <section className="mb-5">

                                <h2 className="fw-bold mb-3">

                                    Our Mission

                                </h2>

                                <p className="text-muted">

                                    Our mission is to provide accurate,
                                    unbiased, and timely news while maintaining
                                    the highest standards of journalism.

                                </p>

                            </section>

                            {/* Vision */}

                            <section className="mb-5">

                                <h2 className="fw-bold mb-3">

                                    Our Vision

                                </h2>

                                <p className="text-muted">

                                    We aim to become one of the most trusted
                                    digital news platforms by combining modern
                                    technology with responsible journalism.

                                </p>

                            </section>

                            {/* What We Offer */}

                            <section className="mb-5">

                                <h2 className="fw-bold mb-4">

                                    What We Offer

                                </h2>

                                <div className="row g-4">

                                    <div className="col-md-6">

                                        <div className="border rounded-4 p-4 h-100">

                                            <i className="bi bi-lightning-charge-fill text-warning fs-1"></i>

                                            <h4 className="mt-3">

                                                Breaking News

                                            </h4>

                                            <p className="text-muted">

                                                Stay informed with real-time
                                                updates on major events around
                                                the globe.

                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="border rounded-4 p-4 h-100">

                                            <i className="bi bi-cpu-fill text-primary fs-1"></i>

                                            <h4 className="mt-3">

                                                Technology

                                            </h4>

                                            <p className="text-muted">

                                                Discover the latest innovations,
                                                AI trends, gadgets, and software
                                                updates.

                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="border rounded-4 p-4 h-100">

                                            <i className="bi bi-trophy-fill text-success fs-1"></i>

                                            <h4 className="mt-3">

                                                Sports

                                            </h4>

                                            <p className="text-muted">

                                                Follow international and local
                                                sports with match highlights,
                                                scores, and analysis.

                                            </p>

                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <div className="border rounded-4 p-4 h-100">

                                            <i className="bi bi-globe2 text-danger fs-1"></i>

                                            <h4 className="mt-3">

                                                Global Coverage

                                            </h4>

                                            <p className="text-muted">

                                                Explore stories from around the
                                                world with comprehensive news
                                                coverage.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </section>

                            {/* Why Choose */}

                            <section className="mb-5">

                                <h2 className="fw-bold mb-4">

                                    Why Choose BlogNews?

                                </h2>

                                <ul className="list-group list-group-flush">

                                    <li className="list-group-item">

                                        ✅ Fast and responsive news platform

                                    </li>

                                    <li className="list-group-item">

                                        ✅ Secure user accounts

                                    </li>

                                    <li className="list-group-item">

                                        ✅ Author-based article publishing

                                    </li>

                                    <li className="list-group-item">

                                        ✅ Community comments and likes

                                    </li>

                                    <li className="list-group-item">

                                        ✅ Mobile-friendly design

                                    </li>

                                    <li className="list-group-item">

                                        ✅ Modern and clean user experience

                                    </li>

                                </ul>

                            </section>

                            {/* Team */}

                            <section className="mb-5">

                                <h2 className="fw-bold mb-3">

                                    Our Team

                                </h2>

                                <p className="text-muted">

                                    Our dedicated team of editors, writers,
                                    developers, and contributors work together
                                    to ensure that every article published on
                                    BlogNews meets high standards of quality,
                                    accuracy, and relevance.

                                </p>

                            </section>

                            {/* Contact */}

                            <section>

                                <div className="bg-light rounded-4 p-5 text-center">

                                    <h2 className="fw-bold">

                                        Get In Touch

                                    </h2>

                                    <p className="text-muted mb-4">

                                        We'd love to hear your feedback,
                                        suggestions, or partnership inquiries.

                                    </p>

                                    <Link
                                        to="/contact"
                                        className="btn btn-primary btn-lg px-4"
                                    >

                                        Contact Us

                                    </Link>

                                </div>

                            </section>



                        </div>

                    </div>

            

         

       

    );

}

export default AboutUs;