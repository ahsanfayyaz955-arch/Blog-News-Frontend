import { Link } from "react-router-dom";

function Hero() {
    return (

        <section className="hero">
            

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <span className="badge bg-primary mb-3">

                            Breaking News

                        </span>

                        <h1 className="display-3 fw-bold">

                            Stay Updated With Latest News

                        </h1>

                        <p className="lead mt-4">

                            Read trending articles from technology,
                            sports, business, education and much more.

                        </p>

                        <div className="mt-4">

                            <Link
                                to="/articles"
                                className="btn btn-primary btn-lg">

                                Explore Articles

                            </Link>

                        </div>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img
                            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900"
                            className="img-fluid rounded-4 shadow"
                            alt="News"/>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Hero;