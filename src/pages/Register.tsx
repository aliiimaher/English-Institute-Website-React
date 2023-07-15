import InputBox from "../components/InputBox";
import Button from "../components/Button";

import emailSvg from "../assets/Pic/emailSvg.svg";
import personSvg from "../assets/Pic/person.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";
import registerSvg from "../assets/Pic/registerSvg.svg";

function Register() {
  return (
    <>
      <div className="register-container">
        <div className="register-right-side">
          <div className="register-right-side-up">
            <h1>از اینجا ثبت نام کنید!</h1>
            <InputBox placeHolder="ایمیل" icon={emailSvg} />
            <InputBox placeHolder="نام کاربری" icon={personSvg} />
            <InputBox placeHolder="رمز عبور" icon={passwordSvg} />
            <InputBox placeHolder="تکرار رمز عبور" icon={passwordSvg} />
          </div>
          <div className="register-right-side-down">
            <Button text="ثبت نام" size="large" btn100Width="yes" />
            <div>
              حساب کاربری دارید؟
              <a style={{ fontWeight: "700", color: "#58A4BD" }} href="/login">
                ورود به حساب کاربری
              </a>
            </div>
          </div>
        </div>
        <div className="register-left-side">
          <h1>سلام!</h1>
          <h3>
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
