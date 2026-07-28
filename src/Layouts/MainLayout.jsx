import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar";

function MainLayout() {
  return (
    <>
      <Navbar />
       <CategoryNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;