import { Link } from "react-router-dom";

function Disclaimer() {

    return (

        <div className="container-fluid bg-light py-5">

            <div className="container">

                <div className="bg-white shadow rounded-4 p-5">

                    {/* Header */}

                    <div className="text-center border-bottom pb-4 mb-5">

                        <i
                            className="bi bi-exclamation-triangle-fill text-warning"
                            style={{ fontSize: "70px" }}
                        ></i>

                        <h1 className="display-5 fw-bold mt-3">

                            Disclaimer

                        </h1>

                        <p className="text-muted">

                            Last Updated: July 2026

                        </p>

                    </div>

                    {/* 1 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            1. General Information

                        </h3>

                        <p className="text-muted">

                            The information published on BlogNews is provided
                            for general informational and educational purposes
                            only. While we strive to keep our content accurate
                            and up to date, we make no guarantees regarding its
                            completeness, reliability, or accuracy.

                        </p>

                    </section>

                    {/* 2 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            2. No Professional Advice

                        </h3>

                        <p className="text-muted">

                            Articles published on BlogNews should not be
                            considered legal, financial, medical, or
                            professional advice. Always consult a qualified
                            professional before making important decisions.

                        </p>

                    </section>

                    {/* 3 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            3. User Generated Content

                        </h3>

                        <p className="text-muted">

                            Opinions expressed by authors or users belong solely
                            to them and do not necessarily represent the views
                            of BlogNews or its administrators.

                        </p>

                    </section>

                    {/* 4 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            4. External Links

                        </h3>

                        <p className="text-muted">

                            Our website may contain links to external websites.
                            We are not responsible for the content, security,
                            availability, or privacy practices of third-party
                            websites.

                        </p>

                    </section>

                    {/* 5 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            5. Accuracy of Information

                        </h3>

                        <p className="text-muted">

                            Although we make every effort to verify published
                            information, errors or omissions may occasionally
                            occur. BlogNews reserves the right to update,
                            modify, or remove content without prior notice.

                        </p>

                    </section>

                    {/* 6 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            6. Limitation of Liability

                        </h3>

                        <p className="text-muted">

                            BlogNews shall not be liable for any direct,
                            indirect, incidental, or consequential damages
                            arising from the use of this website or reliance on
                            any published information.

                        </p>

                    </section>

                    {/* 7 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            7. Copyright

                        </h3>

                        <p className="text-muted">

                            All original content, logos, graphics, and website
                            design are the property of BlogNews unless otherwise
                            stated. Unauthorized reproduction or distribution is
                            prohibited.

                        </p>

                    </section>

                    {/* 8 */}

                    <section className="mb-5">

                        <h3 className="fw-bold">

                            8. Changes to This Disclaimer

                        </h3>

                        <p className="text-muted">

                            We reserve the right to update or modify this
                            Disclaimer at any time. Continued use of BlogNews
                            indicates acceptance of any changes made.

                        </p>

                    </section>

                    {/* Contact */}

                    <section>

                        <h3 className="fw-bold">

                            Contact Information

                        </h3>

                        <div className="bg-warning-subtle border border-warning rounded-4 p-4 mt-3">

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

                    {/* Button */}

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

export default Disclaimer;