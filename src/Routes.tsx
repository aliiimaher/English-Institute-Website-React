import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import testData from "./Data/TestData";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CoursesPage from "./pages/Courses";
import CourseInfoPage from "./components/CourseInfo";
import Cart from "./pages/Cart";
import DashboardPage from "./pages/usersPanel/Dashboard";
import MyCoursesPage from "./pages/usersPanel/MyCoursesPage";
import EditInfoPage from "./pages/usersPanel/EditInfoPage";
import TestPage from "./pages/Test";
import NotFound from "./pages/NotFound";
import ChangePassword from "./pages/ChangePassword";
import AboutUs from "./pages/AboutUs";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route
          path="/course-info"
          element={<CourseInfoPage thisCourse={testData} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/panel-dashboard" element={<DashboardPage />} />
        <Route path="/panel-my-courses" element={<MyCoursesPage />} />
        <Route path="/panel-edit-info" element={<EditInfoPage />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
