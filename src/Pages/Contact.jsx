import { Link } from "react-router-dom";

function Contact() {

    return (

        <div className="container-fluid bg-light py-5">

            <div className="container">

                {/* Hero */}

                <div className="text-center mb-5">

                    <span className="badge bg-primary fs-6 px-3 py-2">

                        Contact Us

                    </span>

                    <h1 className="display-4 fw-bold mt-3">

                        We'd Love to Hear From You

                    </h1>

                    <p className="text-muted fs-5">

                        Have questions, suggestions, or feedback?
                        Our team is always ready to help.

                    </p>

                </div>

                <div className="row g-4">

                    {/* Contact Form */}

                    <div className="col-lg-7">

                        <div className="card border-0 shadow rounded-4">

                            <div className="card-body p-5">

                                <h3 className="fw-bold mb-4">

                                    Send us a Message

                                </h3>

                                <form>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">

                                                Full Name

                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="John Doe"
                                            />

                                        </div>

                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">

                                                Email

                                            </label>

                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="john@example.com"
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Subject

                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label">

                                            Message

                                        </label>

                                        <textarea
                                            rows="6"
                                            className="form-control"
                                            placeholder="Write your message..."
                                        ></textarea>

                                    </div>

                                    <button
                                        className="btn btn-primary btn-lg px-5"
                                        type="submit"
                                    >

                                        Send Message

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                    {/* Contact Info */}

                    <div className="col-lg-5">

                        <div className="card border-0 shadow rounded-4 mb-4">

                            <div className="card-body">

                                <h4 className="fw-bold mb-4">

                                    Contact Information

                                </h4>

                                <div className="mb-4">

                                    <h6>

                                        📧 Email

                                    </h6>

                                    <p className="text-muted mb-0">

                                        support@blognews.com

                                    </p>

                                </div>

                                <div className="mb-4">

                                    <h6>

                                        📞 Phone

                                    </h6>

                                    <p className="text-muted mb-0">

                                        +92 300 1234567

                                    </p>

                                </div>

                                <div className="mb-4">

                                    <h6>

                                        📍 Address

                                    </h6>

                                    <p className="text-muted mb-0">

                                        Shahrah-e-Faisal,
                                        Karachi, Pakistan

                                    </p>

                                </div>

                                <div className="mb-4">

                                    <h6>

                                        🕒 Working Hours

                                    </h6>

                                    <p className="text-muted mb-0">

                                        Monday - Friday

                                    </p>

                                    <p className="text-muted">

                                        9:00 AM - 6:00 PM

                                    </p>

                                </div>

                                <h5 className="fw-bold mt-4">

                                    Follow Us

                                </h5>

                                <div className="d-flex gap-3 fs-3 mt-3">

                                    <a href="#" className="text-primary">

                                        <i className="bi bi-facebook"></i>

                                    </a>

                                    <a href="#" className="text-dark">

                                        <i className="bi bi-twitter-x"></i>

                                    </a>

                                    <a href="#" className="text-danger">

                                        <i className="bi bi-instagram"></i>

                                    </a>

                                    <a href="#" className="text-primary">

                                        <i className="bi bi-linkedin"></i>

                                    </a>

                                    <a href="#" className="text-danger">

                                        <i className="bi bi-youtube"></i>

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Google Map */}

                <div className="card border-0 shadow rounded-4 mt-5 overflow-hidden">

                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=Shahrah-e-Faisal,Karachi&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>

                </div>

                {/* CTA */}

                <div className="text-center mt-5">

                    <h3 className="fw-bold">

                        Thank You for Visiting BlogNews

                    </h3>

                    <p className="text-muted">

                        We appreciate your support and feedback.

                    </p>

                    <Link
                        to="/"
                        className="btn btn-primary btn-lg px-5 rounded-pill"
                    >

                        ← Back to Home

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Contact;