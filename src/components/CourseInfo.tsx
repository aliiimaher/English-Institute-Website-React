import "../styles/components/CourseInfo.scss";

import CourseData from "../interfaces/CourseData";
import Button from "./Button";

import teacherSvg from "../assets/Pic/CourseInfo/teacher_course_info.svg";
import videoSvg from "../assets/Pic/CourseInfo/video_course_info.svg";
import clockSvg from "../assets/Pic/CourseInfo/clock_course_info.svg";
import graduateSvg from "../assets/Pic/CourseInfo/graduate_course_info.svg";

interface CoursesPageProps {
  thisCourse: CourseData;
}

function CourseInfo({ thisCourse }: CoursesPageProps) {
  return (
    <>
      <div className="course-info-page-container">
        <div className="course-info-up-side">
          <div className="course-info-up-side-right-hand">
            <img src={thisCourse.picturePath} alt="course picture" />
            <div>{thisCourse.description}</div>
          </div>
          <div className="course-info-up-side-left-hand">
            <div className="course-info-up-side-left-hand-price-ticket">
              <div>قیمت: {thisCourse.price}</div>
              <Button text="اضافه کردن به سبد خرید" size="large" />
            </div>
            <div className="course-info-up-side-left-hand-course-sub-info">
              <table style={{ width: "60%" }}>
                <tr>
                  <th>
                    <img src={teacherSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>مدرس دوره:</div>
                  </th>
                  <td>{thisCourse.teacher}</td>
                </tr>
                <tr>
                  <th>
                    <img src={videoSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>
                      تعداد ویدیو:
                    </div>
                  </th>
                  <td>{thisCourse.numberOfSessions}</td>
                </tr>
                <tr>
                  <th>
                    <img src={clockSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>
                      مدت زمان دوره:
                    </div>
                  </th>
                  <td>{thisCourse.duration}</td>
                </tr>

                <tr>
                  <th>
                    <img src={graduateSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>
                      تعداد دانشجو:
                    </div>
                  </th>
                  <td>{thisCourse.numberOfStudents}</td>
                </tr>
              </table>
            </div>
            <div className="course-info-up-side-left-hand-teacher-info">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={thisCourse.teacherPicturePath}
                  style={{ borderRadius: "100%", marginLeft: "16px" }}
                />
                <div>
                  {thisCourse.teacher}
                  <br />
                  <div style={{ fontFamily: "KalamehThin" }}>
                    طراح وب و توسعه گر فرانت-اند
                  </div>
                </div>
              </div>
              <div>{thisCourse.teacherDescription}</div>
            </div>
          </div>
        </div>
        <div className="course-info-down-side"></div>
      </div>
    </>
  );
}

export default CourseInfo;
