import "../styles/pages/Register.scss";
import dangerSvg from "../assets/Pic/Cart/DangerSvg.svg";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import emailSvg from "../assets/Pic/emailSvg.svg";
import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import registerSvg from "../assets/Pic/registerSvg.svg";
import axios from "axios";
import ErrorNotify from "../components/ErrorNotify";
import Notif from "../components/Notif";

function Register() {
  // Reload the page when navigating back
  useEffect(() => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [isNotif, setIsNotif] = useState(false);

  const submitForm = (data: any) => {
    setLoading(true);
    axios
      .post("http://localhost:8000/user/signup/", data)
      .then((response) => {
        localStorage.setItem("token", response.data.auth_token);
        window.location.href = "/panel-dashboard";
      })
      .catch((error) => {
        setLoading(false);
        setIsNotif(true);
        if (error.response.data.username) {
          ErrorNotify({ text: error.response.data.username[0] });
        } else if (error.response.data.email) {
          ErrorNotify({ text: error.response.data.email[0] });
        } else if (error.response.data.non_field_errors) {
          ErrorNotify({ text: error.response.data.non_field_errors[0] });
        }
      });
  };

  return (
    <>
      {loading && <Loading />}
      {isNotif && <Notif />}
      <div className="register-container">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="register-right-side">
            <h1>از اینجا ثبت نام کنید!</h1>
            <div className="register-right-side-up">
              <InputBox
                placeHolder="ایمیل"
                icon={emailSvg}
                reactHookFrom={register("email", {
                  required: "وارد کردن ایمیل الزامی است",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "آدرس ایمیل معتبر وارد کنید",
                  },
                })}
              />
              {errors.email && (
                <div className="register-wrong-input-alarm-container">
                  <img src={dangerSvg} />
                  <p className="formError">
                    {errors.email.message?.toString()}
                  </p>
                </div>
              )}
              <InputBox
                placeHolder="نام کاربری"
                icon={personSvg}
                reactHookFrom={register("username", {
                  required: "وارد کردن نام کاربری الزامی است",
                  pattern: {
                    value: /^[a-zA-Z0-9_]{3,20}$/,
                    message:
                      "نام کاربری باید از حروف کوچک، حروف بزرگ، اعداد و آندرلاین تشکیل شده باشد و بین ۳ تا ۲۰ کاراکتر باشد",
                  },
                })}
              />
              {errors.username && (
                <div className="register-wrong-input-alarm-container">
                  <img src={dangerSvg} />
                  <p className="formError">
                    {errors.username.message?.toString()}
                  </p>
                </div>
              )}
              <InputBox
                placeHolder="رمز عبور"
                icon={passwordSvg}
                reactHookFrom={register("password", {
                  required: "وارد کردن رمز عبور الزامی است",
                  minLength: {
                    value: 8,
                    message: "رمز عبور باید حداقل شامل ۸ حرف باشد",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "رمز عبور باید شامل حروف کوچک، حروف بزرگ، اعداد و کاراکترهای ویژه باشد",
                  },
                })}
              />
              {errors.password && (
                <div className="register-wrong-input-alarm-container">
                  <img src={dangerSvg} />
                  <p className="formError">
                    {errors.password.message?.toString()}
                  </p>
                </div>
              )}
              <InputBox
                placeHolder="تکرار رمز عبور"
                icon={passwordSvg}
                reactHookFrom={register("confirm_password", {
                  required: "وارد کردن تکرار رمز عبور الزامی است",
                })}
              />
              {errors.confirm_password && (
                <div className="register-wrong-input-alarm-container">
                  <img src={dangerSvg} />
                  <p className="formError">
                    {errors.confirm_password.message?.toString()}
                  </p>
                </div>
              )}
            </div>
            <div className="register-right-side-down">
              <Button
                text="ثبت نام"
                size="large"
                btn100Width="yes"
                type="submit"
              />
              <div style={{ marginTop: "16px" }}>
                حساب کاربری دارید؟
                <a
                  style={{ fontWeight: "700", color: "#58A4BD" }}
                  href="/login"
                >
                  ورود به حساب کاربری
                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="register-left-side">
          <h1 style={{ paddingBottom: "16px" }}>سلام!</h1>
          <h3 style={{ marginBottom: "68px" }}>
            به جمع زبان لرنی‌ها خیلی خوش اومدی!
            <br />
            اینجا قراره با هم مثل آب خوردن هر زبونی رو یاد بگیریم!
          </h3>
          <img src={registerSvg} alt="register-svg" />
        </div>
      </div>
    </>
  );
}

export default Register;
