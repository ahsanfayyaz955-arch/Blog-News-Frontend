import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import {
    getUserById,
    updateUser
} from "../../services/userService";
import axios from "axios";

function EditUser() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser() {

        try {

            const data = await getUserById(id);

            setFullName(data.fullName);
            setEmail(data.email);
            setRole(data.role);

        }
        catch (error) {

            console.log(error);

            alert("Failed to load user.");

        }
        finally {

            setLoading(false);

        }

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setSaving(true);

            await updateUser(id, {

                fullName,
                email,
                role

            });

            alert("User Updated Successfully");

            navigate("/admin/users");

        }
        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Update Failed"
            );

        }
        finally {

            setSaving(false);

        }

    }

    if (loading) {

        return (

            <div className="container py-5 text-center">

                <h3>Loading...</h3>

            </div>

        );

    }

    return (

        <div className="container py-4">

            <div className="row">

                <div className="col-md-3">

                    <AdminSidebar />

                </div>

                <div className="col-md-9">

                    <div className="card shadow">

                        <div className="card-header bg-dark text-white">

                            <h3 className="mb-0">
                                Edit User
                            </h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={fullName}
                                        onChange={(e) =>
                                            setFullName(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Role
                                    </label>

                                    <select
                                        className="form-select"
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                    >

                                        <option value="User">
                                            User
                                        </option>

                                        <option value="Author">
                                            Author
                                        </option>

                                        <option value="Admin">
                                            Admin
                                        </option>

                                    </select>

                                </div>

                                <button
                                    className="btn btn-success"
                                    disabled={saving}
                                >

                                    {
                                        saving
                                            ? "Updating..."
                                            : "Update User"
                                    }

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditUser;