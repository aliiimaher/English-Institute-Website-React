import { useEffect, useState } from "react";

import PanelSideBarMenu from "../../components/PanelSideBarMenu";
import Course from "../../interfaces/Course";

import "../../styles/pages/userPanel/MyCoursesPage.scss";
import CardH from "../../components/CardH";
import Notif from "../../components/Notif";
import SuccessNotify from "../../components/SuccessNotify";
import DangerSvg from "../../assets/Pic/Cart/DangerSvg.svg";
import axios from "axios";

function MyCoursesPage() {
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [notif, setNotif] = useState(false);

  useEffect(() => {
    const shouldShowReloadNotif = localStorage.getItem("showReloadNotif");
    if (shouldShowReloadNotif === "true") {
      setNotif(true);
      SuccessNotify({ text: "پرداخت شما با موفقیت انجام شد!" });
      localStorage.removeItem("showReloadNotif");
    }
  }, []);

  const header = {
    "Content-Type": "application/json",
    Authorization: "Token " + window.localStorage.getItem("token"),
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/course/thisuser/", {
        headers: header,
      })
      .then((response) => {
        setUserCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {notif && <Notif />}
      <div className="panel-myCoursePage-container">
        <div className="panel-myCoursePage-right-hand">
          <PanelSideBarMenu />
        </div>
        <div className="panel-myCoursePage-left-hand">
          {userCourses === null ? (
            <p>Loading...</p>
          ) : userCourses.length === 0 ? (
            <div className="panel-no-course">
              <img src={DangerSvg} style={{ marginLeft: "8px" }} />
              هیچ دوره‌ای پیدا نشد :(
            </div>
          ) : (
            <div className="panel-myCoursePage-left-hand-cardh-render">
              {userCourses.map((course, index) => (
                <CardH
                  key={index}
                  courseTitle={course.title}
                  courseDescription={course.short_description}
                  picture={course.course_image}
                  coursePrice={course.price.toString()}
                  courseTeacher={course.teacher.fullname}
                  IS_MY_COURSE="yes"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyCoursesPage;
