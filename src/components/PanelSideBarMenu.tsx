import "../styles/components/PanelSideBarMenu.scss";

import UserData from "../interfaces/UserData";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../jsFiles/UserContext";
import Loading from "./Loading";
// only for test
import usofPng from "../assets/Pic/CourseInfo/usof.png";

function PanelSideBarMenu() {
  const thisUser: UserData = useContext(UserContext);
  const location = useLocation();
  const [isloading, setIsLoading] = useState(false);
  return (
    <>
      {isloading && <Loading/>}
      <div className="panel-side-bar-menu-container">
        <div className="panel-side-bar-menu-person">
          <img
            // src={thisUser.picSrc}
            src={usofPng}
            width="143px"
            style={{ borderRadius: "100%" }}
          />
          <div className="panel-side-bar-menu-person-name">
            {thisUser.first_name} {thisUser.last_name}
          </div>
        </div>
        <li className="list-item-side-bar-menu">
          <Link to="/panel-dashboard">داشبورد</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/panel-edit-info">ویرایش حساب کاربری</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/...">فاکتورها</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/panel-my-courses">دوره‌های من</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link
            to={location}
            onClick={() => {
              setIsLoading(true)
              window.localStorage.removeItem("token");
              window.location.reload;
              window.location.href = "/";
            }}
          >
            خروج از حساب کاربری
          </Link>
        </li>
      </div>
    </>
  );
}

export default PanelSideBarMenu;
