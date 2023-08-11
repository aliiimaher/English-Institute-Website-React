import "../styles/pages/Login.scss";
import axios from "axios";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import loginSvg from "../assets/Pic/loginSvg.svg";

import { useForm } from "react-hook-form";

import { useState } from "react";

type FormValues = {
  username: string;
  password: string;
};

function Login() {
  // ========== password visibility ==========
  const [pwdShown, setPwdShown] = useState(false);

  const form = useForm<FormValues>();
  const { register, handleSubmit, watch } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  const onclick = function () {
    const api = axios.create({ baseURL: "http://localhost:8000/" });
    api
      // .post("user/token/login/", { username: "@ali", password: "123" })
      .post("user/token/login/", {
        username: watch("username"),
        password: watch("password"),
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data.auth_token);
        console.log(response.data);
        window.location.href = "/panel-dashboard";
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-right-side" onSubmit={handleSubmit(onSubmit)}>
          <form>
            <div className="login-right-side-up">
              <h1 style={{ paddingBottom: "16px" }}>از اینجا وارد شوید!</h1>
              <h3 style={{ paddingBottom: "68px" }}>
                برای دسترسی به خدمات میبایست ابتدا وارد حساب خود شوید.
              </h3>
              <InputBox
                placeHolder="نام کاربری یا ایمیل"
                icon={personSvg}
                reactHookFrom={register("username")}
              />
              <InputBox
                placeHolder="رمز عبور"
                type={pwdShown ? "text" : "password"}
                icon={passwordSvg}
                reactHookFrom={register("password")}
              />
            </div>
            <div className="login-right-side-down">
              <div className="login-under-input-box">
                <div>
                  <input
                    type="checkbox"
                    onClick={() => setPwdShown(!pwdShown)}
                    style={{ marginLeft: "8px" }}
                  />
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
                  <button
                    style={{
                      backgroundColor: "none",
                      border: "none",
                      background: "none",
                      width: "100%",
                    }}
                  >
                    <Button
                      text="ورود"
                      size="large"
                      btn100Width="yes"
                      onclick={onclick}
                    />
                  </button>
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
          </form>
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
