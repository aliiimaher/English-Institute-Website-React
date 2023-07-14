import InputBox from "../components/InputBox";
import Button from "../components/Button";

import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import loginSvg from "../assets/Pic/loginSvg.svg";

function Login() {
  return (
    <>
      <div
        className="login-container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
          backgroundColor: "#1C1A2D",
        }}
      >
        <div
          className="login-right-side"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "120px",
            backgroundColor: "#1C1A2D",
            color: "#EAD2B7",
            paddingRight: "20%",
          }}
        >
          <h1>از اینجا وارد شوید!</h1>
          <h3>برای دسترسی به خدمات میبایست ابتدا وارد حساب خود شوید.</h3>
          <InputBox placeHolder="نام کاربری یا ایمیل" icon={personSvg} />
          <InputBox placeHolder="رمز عبور" icon={passwordSvg} />
          <Button text="ورود" size="large" />
        </div>
        <div
          className="login-left-side"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingRight: "120px",
            // paddingLeft: "120px",
            backgroundColor: "#3A365E",
            paddingLeft: "20%",
            color: "#EAD2B7",
          }}
        >
          <h1>سلام دوباره!</h1>
          <h3>وبسایت زبان لرن شامل آموزش‌های زیادی هست.</h3>
          <h3>ما انواع آموزش‌های آفلاین، آنلاین و حضوری رو داریم.</h3>
          <img src={loginSvg} alt="login-svg" />
        </div>
      </div>
    </>
  );
}

export default Login;
