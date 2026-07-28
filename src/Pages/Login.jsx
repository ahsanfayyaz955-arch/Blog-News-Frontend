import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../Services/authService";

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        if (!formData.email || !formData.password) {

            setError("Please fill all fields");
            return;

        }

        try {

            setLoading(true);

            const response = await login(formData);

            console.log("Login Response:", response);

            // Support both PascalCase and camelCase
            const token = response.token || response.Token;
            const role = response.role || response.Role;
            const fullName = response.fullName || response.FullName;
            const email = response.email || response.Email;
            const userId = response.userId || response.UserId;

            localStorage.setItem("token", token);

            localStorage.setItem(
                "user",
                JSON.stringify({
                    token,
                    role,
                    fullName,
                    email,
                    userId
                })
            );

            if (role === "Author") {

                window.location.href = "/author/dashboard";

            }
            else if (role === "Admin") {

                window.location.href = "/admin/dashboard";

            }
            else {

                window.location.href = "/";

            }

        }
        catch (err) {

            console.log(err);

            setError(
                err.response?.data?.message ||
                err.response?.data ||
                "Login Failed"
            );

        }
        finally {

            setLoading(false);

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4">
                                Welcome Back
                            </h2>

                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >

                                    {loading ? "Logging In..." : "Login"}

                                </button>

                            </form>

                            <div className="text-center mt-4">

                                Don't have an account?

                                <Link
                                    to="/register"
                                    className="ms-2"
                                >
                                    Register
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;