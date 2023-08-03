import PanelSideBarMenu from "../../components/PanelSideBarMenu";

import "../../styles/pages/userPanel/Dashboard.scss";

import personSvg from "../../assets/Pic/Panel/PersonSvg.svg";
import callSvg from "../../assets/Pic/Panel/CallSvg.svg";
import locationSvg from "../../assets/Pic/Panel/LocationSvg.svg";
import sexSvg from "../../assets/Pic/Panel/SexSvg.svg";
import mailSvg from "../../assets/Pic/Panel/MailSvg.svg";
import UserData from "../../interfaces/UserData";
import { useContext } from "react";
import { UserContext } from "../../jsFiles/UserContext";

function Dashboard() {
  const thisUser: UserData = useContext(UserContext);
  return (
    <>
      <div className="panel-dashboard">
        <div className="panel-dashboard-right-side">
          <PanelSideBarMenu />
        </div>
        <div className="panel-dashboard-left-side">
          <div className="panel-dashboard-personal-info">
            اطلاعات حساب کاربری
            <hr />
            <table width="1000px">
              <tr>
                <th className="dashboard-th">
                  <img src={personSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>
                    نام و نام خانوادگی:
                  </div>
                </th>
                <td>
                  <strong>
                    {thisUser.first_name} {thisUser.last_name}
                  </strong>
                </td>

                <th className="dashboard-th"  >
                  <img src={sexSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>جنسیت:</div>
                </th>
                <td>
                  <strong>{thisUser.sex}</strong>
                </td>
              </tr>
              <tr>
                <th className="dashboard-th">
                  <img src={callSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>شماره تماس:</div>
                </th>
                <td>
                  <strong>{thisUser.phone_number}</strong>
                </td>

                <th className="dashboard-th">
                  <img src={mailSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>ایمیل:</div>
                </th>
                <td>
                  <strong>{thisUser.email}</strong>
                </td>
              </tr>
              <tr>
                <th className="dashboard-th">
                  <img src={locationSvg} style={{ marginLeft: "8px" }} />
                  <div style={{ fontFamily: "KalamehThin" }}>محل سکونت:</div>
                </th>
                <td>
                  <strong>{thisUser.location}</strong>
                </td>
              </tr>
            </table>
          </div>
          {/* <div>
            دوره‌های مورد علاقه شما
            <hr />
            render fav list here
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
