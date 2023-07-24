import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import testData from "./Data/TestData";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CoursesPage from "./pages/Courses";
import CourseInfoPage from "./components/CourseInfo";
import Cart from "./pages/Cart";
import Panel from "./pages/Panel";
import TestPage from "./pages/Test";
import NotFound from "./pages/NotFound";

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
        <Route path="/panel" element={<Panel />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
