import Button from "./Button";
import "../styles/components/Header.scss";

import logoPng from "../assets/Pic/Frame.png";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#3a365e" }}
      >
        <div
          className="container-fluid"
          style={{ marginLeft: "40px", marginRight: "40px" }}
        >
          <a className="navbar-brand" href="#">
            <img src={logoPng} alt="Logo" width="80" height="63" />
          </a>
          <div
            className="collapse navbar-collapse menu-items"
            style={{ justifyContent: "flex-end" }}
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0 menu-items"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  خانه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  دوره‌های آموزشی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>
          <Button text="ثبت نام" size="large" />
          <Button text="ورود" size="large" backgroundColor="no" />
        </div>
      </nav>
    </>
  );
}

export default Header;
