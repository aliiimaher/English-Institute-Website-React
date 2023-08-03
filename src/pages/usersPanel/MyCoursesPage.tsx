import { useState } from "react";

import PanelSideBarMenu from "../../components/PanelSideBarMenu";
import CourseData from "../../interfaces/CourseData";

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
            <p>No courses found</p>
          ) : (
            <p>{userCourses[0].title}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MyCoursesPage;
