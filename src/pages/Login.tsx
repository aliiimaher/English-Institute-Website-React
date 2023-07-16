import "../styles/pages/Login.scss";
import axios from "axios";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import loginSvg from "../assets/Pic/loginSvg.svg";

function Login() {
  axios
    .get("http://localhost:8000/get/")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <>
      <div className="login-container">
        <div className="login-right-side">
          <div className="login-right-side-up">
            <h1 style={{ paddingBottom: "16px" }}>از اینجا وارد شوید!</h1>
            <h3 style={{ paddingBottom: "68px" }}>
              برای دسترسی به خدمات میبایست ابتدا وارد حساب خود شوید.
            </h3>
            <InputBox placeHolder="نام کاربری یا ایمیل" icon={personSvg} />
            <InputBox placeHolder="رمز عبور" icon={passwordSvg} />
          </div>
          <div className="login-right-side-down">
            <div className="login-under-input-box">
              <div>
                <input type="checkbox" style={{ marginLeft: "8px" }} />
                نمایش رمز عبور
              </div>
              <div>رمز عبور خود را فراموش کرده‌اید؟</div>
            </div>
            <div className="login-remember-btn">
              <div style={{ display: "flex", justifyContent: "right" }}>
                <input type="checkbox" style={{ marginLeft: "8px" }} />
                مرا به خاطر بسپار
              </div>
              <div className="login-btn">
                <Button text="ورود" size="large" btn100Width="yes" />
              </div>
              <div>
                حساب کاربری ندارید؟
                <a
                  style={{ fontWeight: "700", color: "#58A4BD" }}
                  href="/register"
                >
                  عضویت در زبان لرن
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login-left-side">
          <h1>سلام دوباره!</h1>
          <h3>
            وبسایت زبان لرن شامل آموزش‌های زیادی هست.
            <br />
            ما انواع آموزش‌های آفلاین، آنلاین و حضوری رو داریم.
          </h3>
          <img src={loginSvg} alt="login-svg" />
        </div>
      </div>
    </>
  );
}

export default Login;
