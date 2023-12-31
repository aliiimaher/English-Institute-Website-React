import PanelSideBarMenu from "../../components/PanelSideBarMenu";
import UserData from "../../interfaces/UserData";
import Notif from "../../components/Notif";
import personSvg from "../../assets/Pic/Panel/PersonSvg.svg";
import callSvg from "../../assets/Pic/Panel/CallSvg.svg";
import locationSvg from "../../assets/Pic/Panel/LocationSvg.svg";
import sexSvg from "../../assets/Pic/Panel/SexSvg.svg";
import mailSvg from "../../assets/Pic/Panel/MailSvg.svg";
import editSvg from "../../assets/Pic/Panel/editSvg.svg";
import plusSvg from "../../assets/Pic/Panel/plusSvg.svg";
import Loading from "../../components/Loading";
import { useContext, useState, useEffect, ChangeEvent } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import SuccessNotify from "../../components/SuccessNotify";
import ErrorNotify from "../../components/ErrorNotify";
import "../../styles/pages/userPanel/EditInfoPage.scss";
import Button from "../../components/Button";
import axios from "axios";

type FormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  location: string;
  sex: "مرد" | "زن";
  username: string;
  password: string;
};

function EditInfoPage() {
  const [isNotif, setIsNotif] = useState(false);
  const thisUser: UserData = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const shouldShowReloadNotif = localStorage.getItem("showReloadNotif");
    if (shouldShowReloadNotif === "true") {
      setIsNotif(true);
      SuccessNotify({ text: "ویرایش حساب کاربری با موفقیت انجام شد!" });
      localStorage.removeItem("showReloadNotif");
    }

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

  const onclick = function () {
    setIsLoading(true);
    axios
      .put(
        "/user/edit/",
        {
          email: watch("email") || thisUser.email,
          first_name: watch("firstName") || thisUser.first_name,
          last_name: watch("lastName") || thisUser.last_name,
          sex: watch("sex") || thisUser.sex,
          location: watch("location") || thisUser.location,
          phone_number: watch("phoneNumber") || thisUser.phone_number,
        },
        {
          headers: {
            Authorization: "Token " + window.localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        localStorage.setItem("showReloadNotif", "true");
        window.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);
        setIsNotif(true);
        if (error.response.data.phone_number) {
          ErrorNotify({ text: error.response.data.phone_number[0] });
          setFilledStatusPhoneNumber(false);
        } else if (error.response.data.email) {
          ErrorNotify({ text: error.response.data.email[0] });
          setFilledStatusEmail(false);
        }
      });
  };

  // ========== filled or unfilled status ==========
  const [filledStatusFName, setFilledStatusFName] = useState(true);
  const [filledStatusLName, setFilledStatusLName] = useState(true);
  const [filledStatusPhoneNumber, setFilledStatusPhoneNumber] = useState(true);
  const [filledStatusEmail, setFilledStatusEmail] = useState(true);
  const [filledStatusLocation, setFilledStatusLocation] = useState(true);
  const [filledStatusSex, setFilledStatusSex] = useState(true);
  // ....

  // ========== handles for filled status ==========
  const handleFilledStatusFName = () => {
    setFilledStatusFName(!filledStatusFName);
  };
  const handleFilledStatusLName = () => {
    setFilledStatusLName(!filledStatusLName);
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
    setFilledStatusFName(true);
    setFilledStatusLName(true);
    setFilledStatusPhoneNumber(true);
    setFilledStatusEmail(true);
    setFilledStatusLocation(true);
    setFilledStatusSex(true);
    console.log(
      watch("firstName"),
      watch("lastName"),
      watch("phoneNumber"),
      watch("email"),
      watch("location"),
      watch("sex")
    );
    onclick();
  };

  // ========== photo edit ==========
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    setIsLoading(true)
    // Here you can use the selectedFile to upload the image to the server
    if (selectedFile) {
      const formData = new FormData();
      formData.append("profile_image", selectedFile);

      console.log(formData);

      // Use axios or fetch to send the formData to the server
      // Example using axios:
      // axios.post("/upload", formData).then(response => { ... }).catch(error => { ... });
      axios
        .put("/user/edit/", formData, {
          headers: {
            Authorization: "Token " + window.localStorage.getItem("token"),
          },
        })
        .then(()=>{
          localStorage.setItem("showReloadNotif", "true");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false)
        });
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {isNotif && <Notif />}
      <div className="panel-edit-info">
        <div className="panel-edit-info-right-side">
          <PanelSideBarMenu />
        </div>
        <div className="panel-edit-info-left-side">
          <div className="panel-dashboard-personal-info">
            <strong>اطلاعات حساب کاربری</strong>
            <hr />
            <table className="panel-edit-info-table">
              <tr>
                <th>
                  <div className="panel-edit-info-item">
                    <img src={personSvg} style={{ marginLeft: "8px" }} />
                    نام:
                  </div>
                </th>
                <td>
                  <strong>
                    {filledStatusFName ? (
                      thisUser.first_name
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("firstName")}
                          placeholder={thisUser.first_name}
                        />
                      </form>
                    )}
                  </strong>
                </td>
                <td>
                  {thisUser.first_name ? (
                    <img
                      src={editSvg}
                      width="24px"
                      onClick={handleFilledStatusFName}
                    />
                  ) : (
                    <img src={plusSvg} onClick={handleFilledStatusFName} />
                  )}
                </td>
              </tr>

              <tr>
                <th>
                  <div className="panel-edit-info-item">
                    <img src={personSvg} style={{ marginLeft: "8px" }} />
                    نام خانوادگی:
                  </div>
                </th>
                <td>
                  <strong>
                    {filledStatusLName ? (
                      thisUser.last_name
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("lastName")}
                          placeholder={thisUser.last_name}
                        />
                      </form>
                    )}
                  </strong>
                </td>
                <td>
                  {thisUser.last_name ? (
                    <img
                      src={editSvg}
                      width="24px"
                      onClick={handleFilledStatusLName}
                    />
                  ) : (
                    <img src={plusSvg} onClick={handleFilledStatusLName} />
                  )}
                </td>
              </tr>

              <tr>
                <th>
                  <div className="panel-edit-info-item">
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
                  </strong>
                </td>
                <td>
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
                </td>
              </tr>

              <tr>
                <th>
                  <img src={mailSvg} style={{ marginLeft: "8px" }} />
                  <div className="panel-edit-info-item">ایمیل:</div>
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
                  </strong>
                </td>
                <td>
                  {thisUser.email ? (
                    <img
                      src={editSvg}
                      width="24px"
                      onClick={handleFilledStatusEmail}
                    />
                  ) : (
                    <img src={plusSvg} onClick={handleFilledStatusEmail} />
                  )}
                </td>
              </tr>

              <tr>
                <th>
                  <img src={locationSvg} style={{ marginLeft: "8px" }} />
                  <div className="panel-edit-info-item">محل سکونت:</div>
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
                  </strong>
                </td>
                <td>
                  {thisUser.location ? (
                    <img
                      src={editSvg}
                      width="24px"
                      onClick={handleFilledStatusLocation}
                    />
                  ) : (
                    <img src={plusSvg} onClick={handleFilledStatusLocation} />
                  )}
                </td>
              </tr>

              <tr>
                <th>
                  <img src={sexSvg} style={{ marginLeft: "8px" }} />
                  <div className="panel-edit-info-item">جنسیت:</div>
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
                  </strong>
                </td>
                <td>
                  {thisUser.sex ? (
                    <img
                      src={editSvg}
                      width="24px"
                      onClick={handleFilledStatusSex}
                    />
                  ) : (
                    <img src={plusSvg} onClick={handleFilledStatusSex} />
                  )}
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
            <hr />
            <div className="edit-info-page-upload-pic">
              <div className="edit-info-page-upload-pic-inner">
                عکس پروفایل:
                <label className="upload-pic-btn">
                  <input type="file" onChange={handleFileChange} />
                  <span>Choose a file</span>
                </label>
              </div>
              <Button
                text="آپلود کن"
                size="large"
                btn100Width="yes"
                onclick={handleUpload}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditInfoPage;
