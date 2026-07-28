import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { getDashboard } from "../../services/adminService";
import LoadingSpinner from "../../components/LoadingSpinner";
import AdminStatistics from "./AdminStatistics";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {

        try {

            setLoading(true);

            const data = await getDashboard();

            setDashboard(data);

        }
        catch (error) {

            console.log(error);

            alert("Failed to load dashboard.");

        }
        finally {

            setLoading(false);

        }

    }

    if (loading)
        return <LoadingSpinner />;

    if (!dashboard)
        return (
            <div className="container py-5 text-center">
                <h4>No Dashboard Data Found</h4>
            </div>
        );

    return (

        <div className="container-fluid py-4">

            <div className="row">

                <div className="col-lg-2 mb-4">

                    <AdminSidebar />

                </div>

                <div className="col-lg-10">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <h2 className="fw-bold">
                            📊 Admin Dashboard
                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Total Users</h6>
                                    <h2>{dashboard.totalUsers}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Total Authors</h6>
                                    <h2>{dashboard.totalAuthors}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Total Admins</h6>
                                    <h2>{dashboard.totalAdmins}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Pending Articles</h6>
                                    <h2>{dashboard.pendingArticles}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Approved Articles</h6>
                                    <h2>{dashboard.approvedArticles}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Rejected Articles</h6>
                                    <h2>{dashboard.rejectedArticles}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Total Comments</h6>
                                    <h2>{dashboard.totalComments}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h6 className="text-muted">Total Likes</h6>
                                    <h2>{dashboard.totalLikes}</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Statistics */}

                    <div className="mt-5">

                        <AdminStatistics stats={dashboard} />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;