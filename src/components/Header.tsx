import Button from "./Button";
import "../styles/components/Header.scss";
import {useState} from 'react';
import Loading from "./Loading";
import logoPng from "../assets/Pic/Frame.png";

function Header() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {isLoading && <Loading/>}
      <nav className="navbar navbar-expand-lg">
        <div
          className="container-fluid header-links"
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
                <a className="nav-link" aria-current="page" href="/">
                  خانه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  دوره‌های آموزشی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="us">
                  درباره ما
                </a>
              </li>
            </ul>
            {window.localStorage.getItem("token") ? (
              <>
                <div style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <Button
                    text="سبد خرید"
                    size="large"
                    onclick={() => {setIsLoading(true);window.location.href = "/cart"}}
                  />
                </div>
                <Button
                  text="پروفایل"
                  size="large"
                  onclick={() => {setIsLoading(true);window.location.href = "/panel-dashboard"}}
                />
              </>
            ) : (
              <>
                <Button
                  text="ثبت نام"
                  size="large"
                  onclick={() => {setIsLoading(true);window.location.href = "/register"}}
                />
                <div style={{ marginRight: "40px" }}>
                  <Button
                    text="ورود"
                    size="large"
                    backgroundColor="no"
                    onclick={() => {setIsLoading(true);window.location.href = "/login"}}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
