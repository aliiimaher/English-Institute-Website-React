import { useState } from "react";
import Button from "./Button";

import "../styles/components/PopUpLogin.scss";
import { useForm } from "react-hook-form";
import InputBox from "./InputBox";

import emailSvg from "../assets/Pic/emailSvg.svg";
import passwordSvg from "../assets/Pic/passwordSvg.svg";

import axios from "axios";

interface Props {
  onclick?: () => void;
}

type FormValue = {
  email: string;
  passCode: string;
};

function PopUpLogin({ onclick }: Props) {
  const form = useForm<FormValue>();
  const { register, watch } = form;

  const [nextPage, setNextPage] = useState(false);

  const handleForForgetPassword = () => {
    // send request to backend
    const api = axios.create({
      baseURL: "https://zabanlearner.iran.liara.run/",
    });
    api.post("user/password_reset/", {
      email: watch("email"),
    });
  };

  const sendPassCode = () => {
    const api = axios.create({
      baseURL: "https://zabanlearner.iran.liara.run/",
    });
    api
      .post("user/password_reset/validate_token/", {
        token: watch("passCode"),
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          localStorage.setItem("forget_password_token", watch("passCode"));
          window.location.href = "/change-password";
        } else {
          alert("کد وارد شده اشتباه است.");
        }
      });
  };

  return (
    <>
      <div className="popUpLogin">
        {nextPage ? (
          <>
            <div className="popUpLogin-layout-two">
              <h3>کد تایید به ایمیل شما ارسال شد.</h3>
              <InputBox
                placeHolder="کد تایید را وارد کنید."
                icon={passwordSvg}
                reactHookFrom={register("passCode")}
              />
              <Button
                text="تایید"
                size="large"
                btn100Width="yes"
                onclick={sendPassCode}
              />
            </div>
          </>
        ) : (
          <>
            <div className="popUpLogin-layout-one">
              <h3>آیا نسبت به فراموشی رمز عبور خود اطمینان دارید؟</h3>
              <div style={{ marginTop: "16px", width: "100%" }}>
                <InputBox
                  placeHolder="ایمیل خود را وارد کنید."
                  icon={emailSvg}
                  reactHookFrom={register("email")}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Button
                  text="بلی"
                  size="large"
                  btn100Width="yes"
                  onclick={() => {
                    setNextPage(true), handleForForgetPassword();
                  }}
                />
                <div style={{ width: "20px" }}> </div>
                <Button
                  text="دستم خورد :=)"
                  size="large"
                  btn100Width="yes"
                  onclick={onclick}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default PopUpLogin;
