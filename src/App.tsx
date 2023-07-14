import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TestPage from "./pages/Test";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
      عرض ادب
      <br />
      طول ادب
      <Footer />
    </>
  );
}

export default App;
