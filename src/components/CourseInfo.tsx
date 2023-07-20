import "../styles/components/CourseInfo.scss";

import CourseData from "../interfaces/CourseData";
import Button from "./Button";

interface CoursesPageProps {
  thisCourse: CourseData;
}

function CourseInfo({ thisCourse }: CoursesPageProps) {
  return (
    <>
      <div className="course-info-page-container">
        <div className="course-info-up-side">
          <div className="course-info-up-side-right-hand">
            <img src={thisCourse.picturePath} alt="course picture" style={{ width: "800px" }} />
            <div style={{}}>{thisCourse.description}</div>
          </div>
          <div className="course-info-up-side-left-hand">
            <div className="course-info-up-side-left-hand-price-ticket">
              <div>قیمت: {thisCourse.price}</div>
              <Button text="اضافه کردن به سبد خرید" size="large" />
            </div>
            <div className="course-info-up-side-left-hand-course-sub-info"></div>
            <div className="course-info-up-side-left-hand-teacher-info"></div>
          </div>
        </div>
        <div className="course-info-down-side"></div>
      </div>
    </>
  );
}

export default CourseInfo;
