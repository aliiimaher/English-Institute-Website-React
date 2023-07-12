import Button from "./Button"

import logoPng from "../assets/Pic/Frame.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#3a365e" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logoPng} alt="Logo" width="80" height="63" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
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
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
          <Button text="ثبت نام" size="large"/>
          <Button text="ورود" size="large"/>
        </div>
      </nav>
    </>
  );
}

export default Header;
