import "../styles/pages/Login.scss";
import axios from "axios";

import InputBox from "../components/InputBox";
import Button from "../components/Button";
import Notif from "../components/Notif";
import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import loginSvg from "../assets/Pic/loginSvg.svg";
import ErrorNotify from "../components/ErrorNotify";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import PopUpLogin from "../components/PopUpLogin";

type FormValues = {
  username: string;
  password: string;
};

function Login() {
  const [notif, setNotif] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  // ========== loading ==========
  const [loading, setLoading] = useState(false);

  // ========== forget password ==========
  const [forgetPasswordPopUp, setForgetPasswordPopUp] = useState(false);

  // ========== password visibility ==========
  const [pwdShown, setPwdShown] = useState(false);

  // ========== remember me ==========
  const [remember, setRemember] = useState(
    localStorage.getItem("remember") ? true : false
  );

  useEffect(() => {
    const shouldShowReloadNotif = localStorage.getItem("showReloadNotif");
    if (shouldShowReloadNotif === "true") {
      setNotif(true); // Show the notification
      ErrorNotify({ text: "لطفا ابتدا وارد حساب کاربری خود شوید!" });
      localStorage.removeItem("showReloadNotif"); // Remove the value from localStorage
    }
  }, []);

  const form = useForm<FormValues>({
    defaultValues: {
      username:
        localStorage.getItem("username") !== null
          ? localStorage.getItem("username")!
          : "",
      password:
        localStorage.getItem("password") !== null
          ? localStorage.getItem("password")!
          : "",
    },
  });
  const { register, handleSubmit, watch } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  const onclick = () => {
    setLoading(true);
    const api = axios.create({
      baseURL: "http://localhost:8000/",
    });
    api
      .post("user/token/login/", {
        username: watch("username"),
        password: watch("password"),
      })
      .then((response) => {
        window.localStorage.setItem("token", response.data.auth_token);
        localStorage.setItem("showReloadNotif", "true");
        remember
          ? (localStorage.setItem("username", watch("username")),
            localStorage.setItem("password", watch("password")),
            localStorage.setItem("remember", "true"))
          : (localStorage.removeItem("username"),
            localStorage.removeItem("password"),
            localStorage.removeItem("remember"));
        window.location.href = "/panel-dashboard";
      })
      .catch(() => {
        setLoading(false);
        setErrorLogin(true);
        ErrorNotify({ text: "نام کاربری یا رمز عبور اشتباه است!" });
      });
  };

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
      {loading && <Loading />}
      {errorLogin && <Notif />}
      {notif && <Notif />}
      <>
        {forgetPasswordPopUp ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PopUpLogin onclick={() => setForgetPasswordPopUp(false)} />
          </div>
        ) : (
          <>
            <div className="login-container">
              <div
                className="login-right-side"
                onSubmit={handleSubmit(onSubmit)}
              >
                <form>
                  <div className="login-right-side-up">
                    <h1 style={{ paddingBottom: "16px" }}>
                      از اینجا وارد شوید!
                    </h1>
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
                      <a onClick={() => setForgetPasswordPopUp(true)}>
                        رمز عبور خود را فراموش کرده‌اید؟
                      </a>
                    </div>
                    <div className="login-remember-btn">
                      <div style={{ display: "flex", justifyContent: "right" }}>
                        <input
                          type="checkbox"
                          onClick={() => setRemember(!remember)}
                          style={{ marginLeft: "8px" }}
                          checked={remember ? true : false}
                        />
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
                            onclick={() => onclick()}
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
        )}
      </>
    </>
  );
}

export default Login;
