import { Link } from "react-router-dom";

function Terms() {

    return (

        <div className="container-fluid bg-light py-5">

            <div className="container">

                <div className="bg-white shadow rounded-4 p-5">

                    {/* Header */}

                    <div className="text-center border-bottom pb-4 mb-5">

                        <i
                            className="bi bi-file-earmark-text-fill text-primary"
                            style={{ fontSize: "70px" }}
                        ></i>

                        <h1 className="display-5 fw-bold mt-3">

                            Terms & Conditions

                        </h1>

                        <p className="text-muted">

                            Last Updated: July 2026

                        </p>

                    </div>

                    {/* 1 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            1. Acceptance of Terms

                        </h3>

                        <p className="text-muted">

                            By accessing or using BlogNews, you agree to
                            comply with these Terms and Conditions. If you do
                            not agree with any part of these terms, please do
                            not use our website.

                        </p>

                    </section>

                    {/* 2 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            2. User Accounts

                        </h3>

                        <ul className="text-muted">

                            <li>You must provide accurate information during registration.</li>

                            <li>You are responsible for maintaining your account security.</li>

                            <li>You must not share your password with others.</li>

                            <li>You are responsible for all activities performed through your account.</li>

                        </ul>

                    </section>

                    {/* 3 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            3. Content Submission

                        </h3>

                        <p className="text-muted">

                            Authors are responsible for the articles they
                            publish. Content must be original, legal, and must
                            not violate copyrights or community standards.

                        </p>

                    </section>

                    {/* 4 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            4. Prohibited Activities

                        </h3>

                        <ul className="text-muted">

                            <li>Posting illegal or harmful content.</li>

                            <li>Uploading malware or malicious code.</li>

                            <li>Harassing other users.</li>

                            <li>Attempting unauthorized access.</li>

                            <li>Using automated bots without permission.</li>

                        </ul>

                    </section>

                    {/* 5 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            5. Intellectual Property

                        </h3>

                        <p className="text-muted">

                            All website design, branding, logos, and original
                            content belong to BlogNews unless otherwise stated.
                            Unauthorized copying or redistribution is prohibited.

                        </p>

                    </section>

                    {/* 6 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            6. Limitation of Liability

                        </h3>

                        <p className="text-muted">

                            BlogNews is not responsible for any damages,
                            losses, or interruptions resulting from the use
                            of our services or third-party content.

                        </p>

                    </section>

                    {/* 7 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            7. Account Suspension

                        </h3>

                        <p className="text-muted">

                            We reserve the right to suspend or permanently
                            remove accounts that violate these Terms and
                            Conditions.

                        </p>

                    </section>

                    {/* 8 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            8. Privacy

                        </h3>

                        <p className="text-muted">

                            Your use of this website is also governed by our
                            Privacy Policy. Please review it to understand how
                            your information is collected and protected.

                        </p>

                    </section>

                    {/* 9 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            9. Changes to Terms

                        </h3>

                        <p className="text-muted">

                            We may update these Terms and Conditions from time
                            to time. Continued use of the website means you
                            accept the revised terms.

                        </p>

                    </section>

                    {/* 10 */}

                    <section>

                        <h3 className="fw-bold">

                            10. Contact Information

                        </h3>

                        <div className="bg-primary text-white rounded-4 p-4 mt-3">

                            <p className="mb-2">

                                <strong>Email:</strong> support@blognews.com

                            </p>

                            <p className="mb-2">

                                <strong>Website:</strong> www.blognews.com

                            </p>

                            <p className="mb-0">

                                <strong>Location:</strong> Karachi, Pakistan

                            </p>

                        </div>

                    </section>

                    <div className="text-center mt-5">

                        <Link
                            to="/"
                            className="btn btn-primary btn-lg rounded-pill px-5"
                        >

                            ← Back to Home

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Terms;