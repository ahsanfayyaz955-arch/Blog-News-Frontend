import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Public Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Articles from "../pages/Articles";
import ArticleDetails from "../pages/ArticlesDetails";
import CategoryArticles from "../pages/CategoryArticles";
import NotFound from "../pages/NotFound";
import Privecy from "../Pages/Privecy";
import AboutUs from "../Pages/AboutUs";

// Author
import Dashboard from "../author/Dashboard";
import MyArticles from "../author/MyArticles";
import CreateArticle from "../author/CreateArticle";
import EditArticle from "../author/EditArticle";

// Admin
import AdminDashboard from "../pages/Admin/AdminDashboard";
import PendingArticles from "../pages/Admin/PendingArticles";
import CategoryList from "../pages/Admin/CategoryList";
import CreateCategory from "../pages/Admin/CreateCategory";
import EditCategory from "../pages/Admin/EditCategory";
import UserList from "../pages/Admin/UserList";
import EditUser from "../Pages/Admin/EditUser";
import Contact from "../Pages/Contact";
import Terms from "../Pages/Terms";
import Disclaimer from "../Pages/Disclaimer";


function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />}>

                {/* Public */}
                <Route index element={<Home />} />
                <Route path="articles" element={<Articles />} />
                 <Route path="Privecy" element={<Privecy />} />
                  <Route path="AboutUs" element={<AboutUs />} />
                  <Route path="Contact" element={<Contact />} />
                   <Route path="Terms" element={<Terms />} />
                    <Route path="Disclaimer" element={<Disclaimer />} />
                    
                <Route path="articles/:id" element={<ArticleDetails />} />
                <Route path="category/:id" element={<CategoryArticles />} />
               
                 

                {/* Authentication */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                {/* Author */}
                <Route path="author/dashboard" element={<Dashboard />} />
                <Route path="author/my-articles" element={<MyArticles />} />
                <Route path="author/create-article" element={<CreateArticle />} />
                <Route path="author/edit-article/:id" element={<EditArticle />} />

                {/* Admin */}
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route path="admin/pending" element={<PendingArticles />} />

                {/* Category Management */}
                <Route path="admin/categories" element={<CategoryList />} />
                <Route path="admin/categories/create" element={<CreateCategory />} />
                <Route path="admin/categories/edit/:id" element={<EditCategory />} />

                {/* User Management */}
                <Route path="admin/users" element={<UserList />} />
                <Route path="admin/users/edit/:id" element={<EditUser />} />

            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRoutes;