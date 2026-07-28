import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import {
    Bar,
    Doughnut,
    Pie,
    Line
} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

function AdminStatistics({ stats }) {

    if (!stats) return null;

    // ============================
    // Article Status
    // ============================

    const articleChart = {

        labels: stats.articleStatus?.map(x => x.status) || [],

        datasets: [
            {
                label: "Articles",

                data: stats.articleStatus?.map(x => x.count) || [],

                backgroundColor: [
                    "#22c55e",
                    "#f59e0b",
                    "#ef4444",
                ],

                borderRadius: 8
            }
        ]
    };

    // ============================
    // Overall System
    // ============================

    const systemChart = {

        labels: [
            "Users",
            "Articles",
            "Categories",
            "Comments",
            "Likes"
        ],

        datasets: [

            {

                data: [

                    stats.totalUsers,

                    stats.totalArticles,

                    stats.totalCategories,

                    stats.totalComments,

                    stats.totalLikes

                ],

                backgroundColor: [

                    "#3b82f6",

                    "#10b981",

                    "#8b5cf6",

                    "#f59e0b",

                    "#ef4444"

                ]

            }

        ]

    };

    // ============================
    // User Roles
    // ============================

    const roleChart = {

        labels: stats.roleStats?.map(x => x.role) || [],

        datasets: [

            {

                data: stats.roleStats?.map(x => x.count) || [],

                backgroundColor: [

                    "#3b82f6",

                    "#8b5cf6",

                    "#10b981",

                    "#f59e0b",

                    "#ef4444"

                ]

            }

        ]

    };

    // ============================
    // Monthly Articles
    // ============================

    const monthNames = [

        "",

        "Jan",

        "Feb",

        "Mar",

        "Apr",

        "May",

        "Jun",

        "Jul",

        "Aug",

        "Sep",

        "Oct",

        "Nov",

        "Dec"

    ];

    const monthlyChart = {

        labels: stats.monthlyArticles?.map(x => monthNames[x.month]) || [],

        datasets: [

            {

                label: "Articles",

                data: stats.monthlyArticles?.map(x => x.count) || [],

                borderColor: "#3b82f6",

                backgroundColor: "rgba(59,130,246,.2)",

                tension: .4,

                fill: true

            }

        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                position: "bottom"

            }

        }

    };

    return (

        <div className="row mt-5">

            {/* Article Status */}

            <div className="col-lg-6 mb-4">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">

                            📊 Article Status

                        </h5>

                        <div style={{ height: 320 }}>

                            <Bar

                                data={articleChart}

                                options={options}

                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Overall */}

            <div className="col-lg-6 mb-4">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">

                            🌍 Overall System

                        </h5>

                        <div style={{ height: 320 }}>

                            <Doughnut

                                data={systemChart}

                                options={options}

                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* User Roles */}

            <div className="col-lg-6 mb-4">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">

                            👥 User Roles

                        </h5>

                        <div style={{ height: 320 }}>

                            <Pie

                                data={roleChart}

                                options={options}

                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Monthly */}

            <div className="col-lg-6 mb-4">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">

                            📈 Monthly Articles

                        </h5>

                        <div style={{ height: 320 }}>

                            <Line

                                data={monthlyChart}

                                options={options}

                            />

                        </div>

                    </div>

                </div>

            </div>
                        {/* Category Statistics */}

            <div className="col-lg-6 mb-4">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">
                            📂 Category Statistics
                        </h5>

                        <div style={{ height: 320 }}>

                            <Bar
                                data={{
                                    labels:
                                        stats.categoryStats?.map(x => x.category) || [],
                                    datasets: [
                                        {
                                            label: "Articles",
                                            data:
                                                stats.categoryStats?.map(x => x.articles) || [],
                                            backgroundColor: [
                                                "#3b82f6",
                                                "#8b5cf6",
                                                "#10b981",
                                                "#f59e0b",
                                                "#ef4444",
                                                "#06b6d4",
                                                "#6366f1",
                                                "#ec4899",
                                            ],
                                            borderRadius: 8,
                                        },
                                    ],
                                }}
                                options={options}
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Top Authors */}

            <div className="col-lg-6 mb-4">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">
                            👑 Top Authors
                        </h5>

                        <div style={{ height: 320 }}>

                            <Bar
                                data={{
                                    labels:
                                        stats.authorStats?.map(x => x.author) || [],
                                    datasets: [
                                        {
                                            label: "Articles",
                                            data:
                                                stats.authorStats?.map(x => x.articles) || [],
                                            backgroundColor: "#8b5cf6",
                                            borderRadius: 8,
                                        },
                                    ],
                                }}
                                options={{
                                    ...options,
                                    indexAxis: "y",
                                }}
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Recent Articles */}

            <div className="col-12">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h5 className="fw-bold mb-4">

                            📰 Recent Articles

                        </h5>

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Title</th>

                                        <th>Author</th>

                                        <th>Category</th>

                                        <th>Status</th>

                                        <th>Date</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {stats.recentArticles?.map(article => (

                                        <tr key={article.id}>

                                            <td>{article.title}</td>

                                            <td>{article.author}</td>

                                            <td>{article.category}</td>

                                            <td>

                                                <span
                                                    className={`badge ${
                                                        article.status === "Approved"
                                                            ? "bg-success"
                                                            : article.status === "Pending"
                                                            ? "bg-warning text-dark"
                                                            : "bg-danger"
                                                    }`}
                                                >
                                                    {article.status}
                                                </span>

                                            </td>

                                            <td>

                                                {new Date(
                                                    article.createdAt
                                                ).toLocaleDateString()}

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminStatistics;