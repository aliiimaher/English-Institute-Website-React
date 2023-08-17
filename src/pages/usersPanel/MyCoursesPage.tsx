import { useState } from "react";

import PanelSideBarMenu from "../../components/PanelSideBarMenu";
import CourseData from "../../interfaces/CourseData";

import "../../styles/pages/userPanel/MyCoursesPage.scss";
import CardH from "../../components/CardH";

import DangerSvg from "../../assets/pic/Cart/DangerSvg.svg";

function MyCoursesPage() {
  const [userCourses, _setUserCourses] = useState<CourseData[]>([]);

  //  here we need some api for get the courses

  return (
    <>
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
            <div>
              {userCourses.map((item, index) => (
                <CardH
                  key={index}
                  picture={item.picturePath}
                  courseTitle={item.title}
                  courseDescription={item.description}
                  courseTeacher={item.teacher}
                  coursePrice={item.price}
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
