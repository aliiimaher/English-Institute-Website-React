import { useForm } from "react-hook-form";
import InputBox from "../components/InputBox";
import axios from "axios";

import passwordSvg from "../assets/Pic/passwordSvg.svg";
import Button from "../components/Button";

import "../styles/pages/ChangePassword.scss";

type FormValues = {
  newPassword: string;
};

function ChangePassword() {
  const form = useForm<FormValues>();
  const { register, watch } = form;

  const onclick = function () {
    const api = axios.create({ baseURL: "http://localhost:8000/" });
    api
      .post("user/password_reset/confirm/", {
        password: watch("newPassword"),
        token: localStorage.getItem("forget_password_token"),
      })
      .then((_response) => {
        window.location.href = "/login";
      });
  };

  return (
    <>
      <div className="changePasswordPage">
        <div className="changePasswordPage-container">
          <InputBox
            placeHolder="رمز جدید"
            icon={passwordSvg}
            reactHookFrom={register("newPassword")}
          />
          <Button
            text="تایید"
            size="large"
            btn100Width="yes"
            onclick={onclick}
          />
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
