// import PanelSideBarMenu from "../../components/PanelSideBarMenu";

import "../../styles/pages/userPanel/Dashboard.scss";

import personSvg from "../../assets/Pic/Panel/PersonSvg.svg";
import callSvg from "../../assets/Pic/Panel/CallSvg.svg";
import locationSvg from "../../assets/Pic/Panel/LocationSvg.svg";
import sexSvg from "../../assets/Pic/Panel/SexSvg.svg";
import mailSvg from "../../assets/Pic/Panel/MailSvg.svg";
// import { useSelector } from "react-redux";
// import UserData from "../../interfaces/UserData";
import { useContext } from "react";
import { UserContext } from "../../jsFiles/UserContext";

function Dashboard() {
  const thisUser: any = useContext(UserContext);
  // const thisUser:UserData = useSelector((thisUser:UserData) => thisUser);
  return (
    <>
      {/* <PanelSideBarMenu thisUser={thisUser} /> */}
      <div className="panel-dashboard">
        <div>
          اطلاعات حساب کاربری
          <hr />
          <table width="800px">
            <tr>
              <th>
                <img src={personSvg} style={{ marginLeft: "8px" }} />
                <div style={{ fontFamily: "KalamehThin" }}>
                  نام و نام خانوادگی:
                </div>
              </th>
              <td>
                <strong>{thisUser.username}</strong>
              </td>

              <th>
                <img src={sexSvg} style={{ marginLeft: "8px" }} />
                <div style={{ fontFamily: "KalamehThin" }}>جنسیت:</div>
              </th>
              <td>
                <strong>{thisUser.full_name}</strong>
              </td>
            </tr>
            <tr>
              <th>
                <img src={callSvg} style={{ marginLeft: "8px" }} />
                <div style={{ fontFamily: "KalamehThin" }}>شماره تماس:</div>
              </th>
              <td>
                <strong> تومان</strong>
              </td>

              <th>
                <img src={mailSvg} style={{ marginLeft: "8px" }} />
                <div style={{ fontFamily: "KalamehThin" }}>ایمیل:</div>
              </th>
              <td>
                <strong> تومان</strong>
              </td>
            </tr>
            <tr>
              <th>
                <img src={locationSvg} style={{ marginLeft: "8px" }} />
                <div style={{ fontFamily: "KalamehThin" }}>شماره تماس:</div>
              </th>
              <td>
                <strong> تومان</strong>
              </td>
            </tr>
          </table>
        </div>
        <div>
          دوره‌های مورد علاقه شما
          <hr />
          {/* render fav list */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
