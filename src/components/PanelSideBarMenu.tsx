import "../styles/components/PanelSideBarMenu.scss";

import plusSvg from "../assets/Pic/Panel/plusSvg.svg";
import UserData from "../interfaces/UserData";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";
import axios from "axios";

function PanelSideBarMenu() {
  const thisUser: UserData = useContext(UserContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  var image_url = axios.defaults.baseURL + thisUser.profile_image;

  // ========== logout api ==========
  function handleLogout() {
    axios.post("/user/token/logout/", null, {
      headers: {
        Authorization: "Token " + window.localStorage.getItem("token"),
      },
    });
  }

  useEffect(() => {
    // Reload the page when navigating back
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div className="panel-side-bar-menu-container">
        <div className="panel-side-bar-menu-person">
          <img
            src={
              image_url !== `${axios.defaults.baseURL}null`
                ? image_url
                : plusSvg
            }
            onClick={() => (window.location.href = "/panel-edit-info")}
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
              setIsLoading(true);
              handleLogout();
              window.localStorage.removeItem("token");
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
