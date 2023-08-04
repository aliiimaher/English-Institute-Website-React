import PanelSideBarMenu from "../../components/PanelSideBarMenu";
import UserData from "../../interfaces/UserData";

import personSvg from "../../assets/Pic/Panel/PersonSvg.svg";
import callSvg from "../../assets/Pic/Panel/CallSvg.svg";
import locationSvg from "../../assets/Pic/Panel/LocationSvg.svg";
import sexSvg from "../../assets/Pic/Panel/SexSvg.svg";
import mailSvg from "../../assets/Pic/Panel/MailSvg.svg";
import editSvg from "../../assets/Pic/Panel/editSvg.svg";
import plusSvg from "../../assets/Pic/Panel/plusSvg.svg";

import { useContext, useState } from "react";
import { UserContext } from "../../jsFiles/UserContext";
import { useForm } from "react-hook-form";

import "../../styles/pages/userPanel/EditInfoPage.scss";
import Button from "../../components/Button";

type FormValues = {
  fullName: string;
  phoneNumber: string;
  email: string;
  location: string;
  sex: "مرد" | "زن";
  username: string;
  password: string;
};

function EditInfoPage() {
  const thisUser: UserData = useContext(UserContext);

  // ========== filled or unfilled status ==========
  const [filledStatusName, setFilledStatusName] = useState(true);
  const [filledStatusPhoneNumber, setFilledStatusPhoneNumber] = useState(true);
  const [filledStatusEmail, setFilledStatusEmail] = useState(true);
  const [filledStatusLocation, setFilledStatusLocation] = useState(true);
  const [filledStatusSex, setFilledStatusSex] = useState(true);
  // ....

  // ========== handles for filled status ==========
  const handleFilledStatusName = () => {
    setFilledStatusName(!filledStatusName);
  };
  const handleFilledStatusPhoneNumber = () => {
    setFilledStatusPhoneNumber(!filledStatusPhoneNumber);
  };
  const handleFilledStatusEmail = () => {
    setFilledStatusEmail(!filledStatusEmail);
  };
  const handleFilledStatusLocation = () => {
    setFilledStatusLocation(!filledStatusLocation);
  };
  const handleFilledStatusSex = () => {
    setFilledStatusSex(!filledStatusSex);
  };

  // ========== form handling ==========
  const form = useForm<FormValues>();
  const { register, handleSubmit, watch } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  // ========== combined handle for the save edited info btn ==========
  const handleCombinedClick = () => {
    setFilledStatusName(true);
    setFilledStatusPhoneNumber(true);
    setFilledStatusEmail(true);
    setFilledStatusLocation(true);
    setFilledStatusSex(true);
    console.log(
      watch("fullName"),
      watch("phoneNumber"),
      watch("email"),
      watch("location"),
      watch("sex")
    );
  };

  return (
    <>
      <div className="panel-edit-info">
        <div className="panel-edit-info-right-side">
          <PanelSideBarMenu />
        </div>
        <div className="panel-edit-info-left-side">
          <div className="panel-dashboard-personal-info">
            اطلاعات حساب کاربری
            <hr />
            <table className="panel-edit-info-table">
              <tr>
                <th>
                  <img src={personSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>
                    نام و نام خانوادگی:
                  </div>
                </th>
                <td>
                  <strong>
                    {filledStatusName ? (
                      thisUser.first_name + " " + thisUser.last_name
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("fullName")}
                          placeholder={
                            thisUser.first_name + " " + thisUser.last_name
                          }
                        />
                      </form>
                    )}
                    {thisUser.first_name && thisUser.last_name ? (
                      <img
                        src={editSvg}
                        width="24px"
                        onClick={handleFilledStatusName}
                      />
                    ) : (
                      <img src={plusSvg} onClick={handleFilledStatusName} />
                    )}
                  </strong>
                </td>
              </tr>

              <tr>
                <th>
                  <div style={{ fontFamily: "KalamehThin" }}>
                    <img src={callSvg} style={{ marginLeft: "8px" }} />
                    شماره تماس:
                  </div>
                </th>
                <td>
                  <strong>
                    {filledStatusPhoneNumber ? (
                      thisUser.phone_number
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("phoneNumber")}
                          placeholder={thisUser.phone_number}
                        />
                      </form>
                    )}
                    {thisUser.phone_number ? (
                      <img
                        src={editSvg}
                        width="24px"
                        onClick={handleFilledStatusPhoneNumber}
                      />
                    ) : (
                      <img
                        src={plusSvg}
                        onClick={handleFilledStatusPhoneNumber}
                      />
                    )}
                  </strong>
                </td>
              </tr>

              <tr>
                <th>
                  <img src={mailSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>ایمیل:</div>
                </th>
                <td>
                  <strong>
                    {filledStatusEmail ? (
                      thisUser.email
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("email")}
                          placeholder={thisUser.email}
                        />
                      </form>
                    )}
                    {thisUser.email ? (
                      <img
                        src={editSvg}
                        width="24px"
                        onClick={handleFilledStatusEmail}
                      />
                    ) : (
                      <img src={plusSvg} onClick={handleFilledStatusEmail} />
                    )}
                  </strong>
                </td>
              </tr>

              <tr>
                <th>
                  <img src={locationSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>محل سکونت:</div>
                </th>
                <td>
                  <strong>
                    {filledStatusLocation ? (
                      thisUser.location
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("location")}
                          placeholder={thisUser.location}
                        />
                      </form>
                    )}
                    {thisUser.location ? (
                      <img
                        src={editSvg}
                        width="24px"
                        onClick={handleFilledStatusLocation}
                      />
                    ) : (
                      <img src={plusSvg} onClick={handleFilledStatusLocation} />
                    )}
                  </strong>
                </td>
              </tr>

              <tr>
                <th>
                  <img src={sexSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>جنسیت:</div>
                </th>
                <td>
                  <strong>
                    {filledStatusSex ? (
                      thisUser.sex
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("sex")}
                          placeholder={thisUser.sex}
                        />
                      </form>
                    )}
                    {thisUser.sex ? (
                      <img
                        src={editSvg}
                        width="24px"
                        onClick={handleFilledStatusSex}
                      />
                    ) : (
                      <img src={plusSvg} onClick={handleFilledStatusSex} />
                    )}
                  </strong>
                </td>
              </tr>
            </table>
            <hr />
            <div>
              <Button
                text="ذخيره"
                onclick={handleCombinedClick}
                size="large"
                btn100Width="yes"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditInfoPage;
