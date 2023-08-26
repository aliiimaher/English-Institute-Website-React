import "../styles/pages/Register.scss";
import Loading from "../components/Loading";
import {useState} from "react"
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import emailSvg from "../assets/Pic/emailSvg.svg";
import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import registerSvg from "../assets/Pic/registerSvg.svg";
import axios from "axios";

function Register() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const submitform = (data: any) => {
    setLoading(true);
    axios
      .post("http://localhost:8000/user/signup/", data)
      .then((response) => {
        localStorage.setItem("token", response.data.auth_token)
        window.location.href = "/panel-dashboard";
      });
  };

  return (
    <>
      {loading && <Loading />}
      <div className="register-container">
        <form onSubmit={handleSubmit(submitform)}>
          <div className="register-right-side">
            <div className="register-right-side-up">
              <h1>از اینجا ثبت نام کنید!</h1>
              <InputBox
                placeHolder="ایمیل"
                icon={emailSvg}
                reactHookFrom={register("email")}
              />
              <InputBox
                placeHolder="نام کاربری"
                icon={personSvg}
                reactHookFrom={register("username")}
              />
              <InputBox
                placeHolder="رمز عبور"
                icon={passwordSvg}
                reactHookFrom={register("password")}
              />
              <InputBox
                placeHolder="تکرار رمز عبور"
                icon={passwordSvg}
                reactHookFrom={register("confirm_password")}
              />
            </div>
            <div className="register-right-side-down">
              <Button
                text="ثبت نام"
                size="large"
                btn100Width="yes"
                type="submit"
              />
              {/* <button type="submit" value="ثبت" /> */}
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
