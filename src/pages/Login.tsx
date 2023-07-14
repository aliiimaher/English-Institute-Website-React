import "../styles/pages/Login.scss";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import loginSvg from "../assets/Pic/loginSvg.svg";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-right-side">
          <h1>از اینجا وارد شوید!</h1>
          <h3>برای دسترسی به خدمات میبایست ابتدا وارد حساب خود شوید.</h3>
          <InputBox placeHolder="نام کاربری یا ایمیل" icon={personSvg} />
          <InputBox placeHolder="رمز عبور" icon={passwordSvg} />
          <Button text="ورود" size="large" />
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
