import { NavLink } from "react-router-dom";

function AdminSidebar() {
    return (
        <div className="list-group shadow">

            <NavLink
                to="/admin/dashboard"
                className="list-group-item list-group-item-action"
            >
                📊 Dashboard
            </NavLink>

            <NavLink
                to="/admin/pending"
                className="list-group-item list-group-item-action"
            >
                📰 Pending Articles
            </NavLink>

            <NavLink
                to="/admin/users"
                className="list-group-item list-group-item-action"
            >
                👥 Users
            </NavLink>

            <NavLink
          to="/admin/categories"
         className="list-group-item list-group-item-action"
>
        📂 Categories
         </NavLink>

        </div>
    );
}

export default AdminSidebar;