import { Link } from "react-router-dom";

function Privacy() {

    return (

        <div className="container-fluid py-5 bg-light">

    <div className="container">

        <div className="bg-white shadow-sm rounded-4 p-5">

                            <div className="text-center mb-5">

                                <i
                                    className="bi bi-shield-lock-fill text-primary"
                                    style={{ fontSize: "70px" }}
                                ></i>

                                <h1 className="fw-bold mt-3">

                                    Privacy Policy

                                </h1>

                                <p className="text-muted">

                                    Last Updated: July 2026

                                </p>

                            </div>

                            <hr />

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    1. Introduction

                                </h3>

                                <p className="text-muted">

                                    Welcome to <strong>BlogNews</strong>.
                                    Your privacy is important to us.
                                    This Privacy Policy explains how we collect,
                                    use, and protect your personal information
                                    when you use our website.

                                </p>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    2. Information We Collect

                                </h3>

                                <ul className="text-muted">

                                    <li>Name</li>

                                    <li>Email Address</li>

                                    <li>Profile Information</li>

                                    <li>Comments you post</li>

                                    <li>Articles you publish</li>

                                    <li>Likes and interactions</li>

                                    <li>Technical information such as browser, device and IP address</li>

                                </ul>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    3. How We Use Your Information

                                </h3>

                                <ul className="text-muted">

                                    <li>Create and manage your account.</li>

                                    <li>Publish and manage articles.</li>

                                    <li>Improve website performance.</li>

                                    <li>Provide customer support.</li>

                                    <li>Prevent fraud and abuse.</li>

                                    <li>Send important account notifications.</li>

                                </ul>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    4. Cookies

                                </h3>

                                <p className="text-muted">

                                    BlogNews may use cookies to improve
                                    user experience, remember preferences,
                                    and analyze website traffic.

                                </p>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    5. Third-Party Services

                                </h3>

                                <p className="text-muted">

                                    We may use trusted third-party services
                                    for analytics, authentication, hosting,
                                    and security. These providers only receive
                                    information necessary to perform their services.

                                </p>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    6. Data Security

                                </h3>

                                <p className="text-muted">

                                    We implement appropriate security measures
                                    to protect your personal information against
                                    unauthorized access, disclosure, or misuse.

                                </p>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    7. Your Rights

                                </h3>

                                <ul className="text-muted">

                                    <li>Access your personal data.</li>

                                    <li>Update your profile information.</li>

                                    <li>Request deletion of your account.</li>

                                    <li>Contact us regarding privacy concerns.</li>

                                </ul>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    8. Children's Privacy

                                </h3>

                                <p className="text-muted">

                                    Our services are not intended for children
                                    under the age of 13. We do not knowingly
                                    collect personal information from children.

                                </p>

                            </section>

                            <section className="mb-5">

                                <h3 className="fw-bold">

                                    9. Changes to This Policy

                                </h3>

                                <p className="text-muted">

                                    We may update this Privacy Policy
                                    periodically. Any changes will be posted
                                    on this page with the updated revision date.

                                </p>

                            </section>

                            <section>

                                <h3 className="fw-bold">

                                    10. Contact Us

                                </h3>

                                <p className="text-muted">

                                    If you have any questions regarding this
                                    Privacy Policy, please contact our support
                                    team.

                                </p>

                                <div className="alert alert-primary mt-4">

                                    <strong>Email:</strong> support@blognews.com

                                    <br />

                                    <strong>Website:</strong> www.blognews.com

                                </div>

                            </section>

                            <div className="text-center mt-5">

                                <Link
                                    to="/"
                                    className="btn btn-primary px-4"
                                >

                                    ← Back to Home

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

          

     

    );

}

export default Privacy;