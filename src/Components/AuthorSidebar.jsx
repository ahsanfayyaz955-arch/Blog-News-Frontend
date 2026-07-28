import { NavLink } from "react-router-dom";

function AuthorSidebar() {

    return (

        <div className="list-group shadow">

            <NavLink
                to="/author/dashboard"
                className="list-group-item list-group-item-action"
            >
                📊 Dashboard
            </NavLink>

            <NavLink
                to="/author/my-articles"
                className="list-group-item list-group-item-action"
            >
                📰 My Articles
            </NavLink>

            <NavLink
                to="/author/create-article"
                className="list-group-item list-group-item-action"
            >
                ➕ Create Article
            </NavLink>

        </div>

    );

}

export default AuthorSidebar;