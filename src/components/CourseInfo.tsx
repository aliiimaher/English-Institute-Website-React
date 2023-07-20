import "../styles/components/CourseInfo.scss";

import CourseData from "../interfaces/CourseData";

function CourseInfo(thisCourse: CourseData) {
  return (
    <>
      <div className="course-info-up-side">
        <div className="course-info-up-side-right-hand">
          <img src={thisCourse.picturePath} alt="course picture" />
          <div style={{}}>{thisCourse.description}</div>
        </div>
        <div className="course-info-up-side-left-hand"></div>
      </div>
      <div className="course-info-down-side"></div>
    </>
  );
}

export default CourseInfo;
