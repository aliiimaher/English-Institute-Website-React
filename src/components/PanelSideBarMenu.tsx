import "../styles/components/PanelSideBarMenu.scss";

import UserData from "../interfaces/UserData";
import { Link } from "react-router-dom";

interface PanelSideBarMenuProps {
  thisUser: UserData;
}

function PanelSideBarMenu({ thisUser }: PanelSideBarMenuProps) {
  return (
    <>
      <div className="panel-side-bar-menu-container">
        <div className="panel-side-bar-menu-person">
          <img
            src={thisUser.picSrc}
            width="143px"
            style={{ borderRadius: "100%" }}
          />
          <div className="panel-side-bar-menu-person-name">
            {thisUser.f_name} {thisUser.l_name}
          </div>
        </div>
        <li className="list-item-side-bar-menu">
          <Link to="/...">داشبورد</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/...">ویرایش حساب کاربری</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/...">فاکتورها</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/...">دوره‌های من</Link>
        </li>
        <li className="list-item-side-bar-menu">
          <Link to="/">خروج از حساب کاربری</Link>
        </li>
      </div>
    </>
  );
}

export default PanelSideBarMenu;
