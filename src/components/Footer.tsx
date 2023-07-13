import "../styles/components/Footer.scss";

import eNamadSvg from "../assets/Pic/ENamad.svg";
import sabtSvg from "../assets/Pic/Sabt.svg";
import instagramSvg from "../assets/Pic/instagram.svg";
import youtbubeSvg from "../assets/Pic/youtube.svg";
import telegramSvg from "../assets/Pic/telegram.svg";

function Footer() {
  return (
    <>
      <>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#3a365e" }}
        >
          <div
            className="container-fluid"
            style={{ marginLeft: "40px", marginRight: "40px" }}
          >
            <div
              className="collapse navbar-collapse menu-items"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 footer-col-3">
                <li className="nav-item">
                  <a className="nav-link subtitle" aria-current="page" href="#">
                    شهر‌های زبان لرن
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    شیراز
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    تهران
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    اصفهان
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    مشهد
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 footer-col-3">
                <li className="nav-item">
                  <a className="nav-link subtitle" aria-current="page" href="#">
                    درباره ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    مشاوره تلفنی
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    سوالات متداول
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    قوانین و مقررات
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    تماس با ما
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 footer-col-3">
                <li className="nav-item">
                  <a className="nav-link subtitle" aria-current="page" href="#">
                    تلفن‌های تماس
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ۰۹۱۶-۴۵۱-۶۴۳۲
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ۰۹۱۰-۶۶۶-۳۵۳۰
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link subtitle" href="#">
                    پشتیبانی
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    support@zabanlearn.com
                  </a>
                </li>
              </ul>
              <div className="follow-us-in-social">
                <h5>ما را در شبکه‌های اجتماعی دنبال کنيد!</h5>
                <div className="follow-us-in-social-logos">
                  <a className="navbar-brand logo" href="#">
                    <img src={telegramSvg} alt="Logo" width="45" height="45" />
                  </a>
                  <a className="navbar-brand logo" href="#">
                    <img src={youtbubeSvg} alt="Logo" width="45" height="30" />
                  </a>
                  <a className="navbar-brand logo" href="#">
                    <img src={instagramSvg} alt="Logo" width="45" height="45" />
                  </a>
                </div>
              </div>
              <div className="security-logo">
                <a className="navbar-brand" href="#">
                  <img src={sabtSvg} alt="Logo" width="80" height="63" />
                  <img src={eNamadSvg} alt="Logo" width="80" height="63" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}
export default Footer;
