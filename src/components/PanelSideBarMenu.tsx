import "../styles/components/PanelSideBarMenu.scss";

import UserData from "../interfaces/UserData";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../jsFiles/UserContext";
import Loading from "./Loading";
import axios from "axios";

function PanelSideBarMenu() {
  const thisUser: UserData = useContext(UserContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  var image_url = "http://localhost:8000/" + thisUser.profile_image;

  // ========== logout api ==========
  function handleLogout() {
    axios.post("http://localhost:8000/user/token/logout/", null, {
      headers: {
        Authorization: "Token " + window.localStorage.getItem("token"),
      },
    });
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className="panel-side-bar-menu-container">
        <div className="panel-side-bar-menu-person">
          <img src={image_url} width="143px" style={{ borderRadius: "100%" }} />
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
              setIsLoading(true);
              handleLogout();
              window.localStorage.removeItem("token");
              //window.location.reload;
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
