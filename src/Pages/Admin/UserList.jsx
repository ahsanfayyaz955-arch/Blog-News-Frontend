import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { getAllUsers, deleteUser } from "../../services/userService";

function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {

        try {

            const data = await getAllUsers();

            setUsers(data);

        }
        catch (error) {

            console.log(error);

            alert("Failed to load users.");

        }
        finally {

            setLoading(false);

        }

    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await deleteUser(id);

            alert("User Deleted Successfully");

            loadUsers();

        }
        catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

        }

    }

    const filteredUsers = users.filter(user =>

        user.fullName.toLowerCase().includes(search.toLowerCase()) ||

        user.email.toLowerCase().includes(search.toLowerCase())

    );

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

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h2>👥 Users</h2>

                    </div>

                    <div className="mb-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search user..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Created</th>
                                    <th width="180">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    filteredUsers.length === 0 ?

                                        (

                                            <tr>

                                                <td
                                                    colSpan="6"
                                                    className="text-center"
                                                >

                                                    No Users Found

                                                </td>

                                            </tr>

                                        )

                                        :

                                        (

                                            filteredUsers.map(user => (

                                                <tr key={user.id}>

                                                    <td>{user.id}</td>

                                                    <td>{user.fullName}</td>

                                                    <td>{user.email}</td>

                                                    <td>

                                                        <span
                                                            className={`badge ${
                                                                user.role === "Admin"
                                                                    ? "bg-danger"
                                                                    : user.role === "Author"
                                                                        ? "bg-warning text-dark"
                                                                        : "bg-primary"
                                                            }`}
                                                        >

                                                            {user.role}

                                                        </span>

                                                    </td>

                                                    <td>

                                                        {new Date(user.createdAt).toLocaleDateString()}

                                                    </td>

                                                    <td>

                                                        <div className="d-flex gap-2">

                                                            <Link
                                                                to={`/admin/users/edit/${user.id}`}
                                                                className="btn btn-primary btn-sm"
                                                            >
                                                                Edit
                                                            </Link>

                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => handleDelete(user.id)}
                                                            >
                                                                Delete
                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            ))

                                        )

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default UserList;