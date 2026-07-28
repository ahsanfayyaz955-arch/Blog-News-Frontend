import { useEffect, useState } from "react";
import AuthorSidebar from "../components/AuthorSidebar";
import { getDashboard } from "../services/dashboardService";

function Dashboard() {

    const [stats, setStats] = useState({
        totalArticles: 0,
        approved: 0,
        pending: 0,
        rejected: 0,
        totalLikes: 0,
        totalComments: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {

        try {

            const data = await getDashboard();

            setStats({
                totalArticles: data.totalArticles,
                approved: data.approved,
                pending: data.pending,
                rejected: data.rejected,
                totalLikes: data.totalLikes,
                totalComments: data.totalComments
            });

        }
        catch (error) {

            console.log(error);

            alert("Failed to load dashboard.");

        }

    }

    return (

        <div className="container py-4">

            <div className="row">

                <div className="col-md-3">
                    <AuthorSidebar />
                </div>

                <div className="col-md-9">

                    <h2 className="mb-4">
                        Author Dashboard
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h5>Total Articles</h5>
                                <h2>{stats.totalArticles}</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h5>Approved</h5>
                                <h2>{stats.approved}</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h5>Pending</h5>
                                <h2>{stats.pending}</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h5>Rejected</h5>
                                <h2>{stats.rejected}</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h5>Total Likes</h5>
                                <h2>{stats.totalLikes}</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h5>Total Comments</h5>
                                <h2>{stats.totalComments}</h2>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;