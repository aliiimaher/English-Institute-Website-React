import "../styles/components/CourseInfo.scss";

import Button from "./Button";
import Loading from "./Loading";
import teacherSvg from "../assets/Pic/CourseInfo/teacher_course_info.svg";
import videoSvg from "../assets/Pic/CourseInfo/video_course_info.svg";
import clockSvg from "../assets/Pic/CourseInfo/clock_course_info.svg";
import graduateSvg from "../assets/Pic/CourseInfo/graduate_course_info.svg";
import cartSvg from "../assets/Pic/CourseInfo/cart.svg";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Course from "../interfaces/Course";

function CourseInfo() {
  const { course_id } = useParams();
  const [thisCourse, setThisCourse] = useState<Course>();
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/course/${course_id}/`).then((response) => {
      setThisCourse(response.data);
      console.log(response.data);
    });
  }, []);

  function addToCart() {
    setIsLoading(true)
    axios
      .put(
        `http://localhost:8000/cart/add/${course_id}/`,
        {},
        {
          headers: {
            Authorization: "Token " + window.localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        setMessage({ type: "success", text: "محصول به سبد خرید اضافه شد!" });
        setTimeout(() => {
          setMessage({ type: "", text: "" });
        }, 3000);
        location.reload();
      })
      .catch((error) => {
        setMessage({ type: "error", text: error.response.data.error });
        setTimeout(() => {
          setMessage({ type: "", text: "" });
        }, 3000);
        setIsLoading(false)
      });

  }

  return (
    <>
      {isLoading && <Loading/>}
      <div className="course-info-page-container">
        <div className="course-info-up-side">
          <div className="course-info-up-side-right-hand">
            <img
              src={thisCourse?.course_image}
              alt="course picture"
              style={{ maxWidth: "873px", maxHeight: "575px" }}
            />
            <div style={{ marginTop: "20px" }}>{thisCourse?.description}</div>
          </div>
          <div className="course-info-up-side-left-hand">
            <div className="course-info-up-side-left-hand-price-ticket">
              <div className="course-info-page-ticket-shape">
                <span
                  style={{ backgroundColor: "#3A365E" }}
                  className="half-circle-right"
                ></span>
                <div
                  style={{
                    borderLeft: "1px dashed #3A365E",
                    paddingLeft: "12px",
                    height: "124px",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "-8%",
                  }}
                >
                  قیمت:
                </div>
                <div
                  style={{
                    marginLeft: "-8%",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  {thisCourse?.price}
                </div>
                <span
                  style={{ backgroundColor: "#3A365E" }}
                  className="half-circle-left"
                ></span>
              </div>
              <Button
                text="اضافه کردن به سبد خرید"
                size="large"
                icon={cartSvg}
                onclick={() => addToCart()}
              />
              {message.type === "success" && (
                <p style={{ color: "rgb(3, 255, 3)", marginTop: "10px" }}>
                  {message.text}
                </p>
              )}
              {message.type === "error" && (
                <p style={{ color: "rgb(255, 0, 0)", marginTop: "10px" }}>
                  {message.text}
                </p>
              )}
            </div>
            <div className="course-info-up-side-left-hand-course-sub-info">
              <table style={{ width: "90%" }}>
                <tr>
                  <th>
                    <img src={teacherSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>مدرس دوره:</div>
                  </th>
                  <td>{thisCourse?.teacher.fullname}</td>
                </tr>
                <tr>
                  <th>
                    <img src={videoSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>
                      تعداد ویدیو:
                    </div>
                  </th>
                  <td>{thisCourse?.number_of_sessions}</td>
                </tr>
                <tr>
                  <th>
                    <img src={clockSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>
                      مدت زمان دوره:
                    </div>
                  </th>
                  <td>{thisCourse?.duration}</td>
                </tr>

                <tr>
                  <th>
                    <img src={graduateSvg} style={{ marginLeft: "8px" }} />
                    <div style={{ fontFamily: "KalamehThin" }}>
                      تعداد دانشجو:
                    </div>
                  </th>
                  <td>{thisCourse?.number_of_students}</td>
                </tr>
              </table>
            </div>
            <div className="course-info-up-side-left-hand-teacher-info">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={thisCourse?.teacher.teacher_image}
                  style={{
                    borderRadius: "100%",
                    marginLeft: "16px",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <div>
                  {thisCourse?.teacher.fullname}
                  <br />
                  <div style={{ fontFamily: "KalamehThin" }}>
                    {thisCourse?.teacher.subtitle}
                  </div>
                </div>
              </div>
              <div>{thisCourse?.teacher.description}</div>
            </div>
          </div>
        </div>
        <div className="course-info-down-side">
          <div className="course-info-down-side-right-hand">
            <div className="course-info-down-side-right-hand">
              {thisCourse?.content}
              <div className="course-info-page-preview-part">
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    marginTop: "40px",
                  }}
                >
                  پيش نمايش
                </div>
                {thisCourse
                  ? thisCourse.previews.map((preview, index) => (
                      <div key={index}>
                        <h3>{preview.title}</h3>
                        <video controls>
                          <source src={preview.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseInfo;
