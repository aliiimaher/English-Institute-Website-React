import { useState } from "react";
import Button from "./Button";

import "../styles/components/PopUpLogin.scss";

interface Props {
  email: string;
  onclick?: () => void;
}

function PopUpLogin({ email, onclick }: Props) {
  const [nextPage, setNextPage] = useState(false);

  const handleForForgetPassword = () => {
    // send request to backend
  };

  return (
    <>
      <div className="popUpLogin">
        {nextPage ? (
          <>
            <div className="popUpLogin-layout-two">
              <h3>رمز عبور جدید شما به آدرس {email} ارسال شد.</h3>
              <Button
                text="باش"
                size="large"
                btn100Width="yes"
                onclick={onclick}
              />
            </div>
          </>
        ) : (
          <>
            <div className="popUpLogin-layout-one">
              <h3>آیا نسبت به فراموشی رمز عبور خود اطمینان دارید؟</h3>
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
