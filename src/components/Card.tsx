import Button from "./Button";
import "../styles/components/Card.scss";

import teacherSvg from "../assets/teacher.svg";

interface Props {
  icon?: string;
  courseTitle: string;
  description?: string;
  courseTeacher: string;
  coursePrice: string;
}

function Card({
  icon,
  courseTitle,
  description,
  courseTeacher,
  coursePrice,
}: Props) {
  return (
    <>
      {/* this is a card {courseTitle} and {courseTeacher} */}
      <div className="card my-card">
        <img src={icon} className="card-img-top" alt="card image" />
        <div className="card-body">
          <h5 className="card-title" dir="rtl">
            {courseTitle}
          </h5>
          <p className="card-text">{description}</p>
          <div className="teacher-container" style={{ fontFamily: "KalamehRegular" }}>
            <img src={teacherSvg} alt="teacherSvg" />
            <h3 style={{ marginRight: "8px" }}>{courseTeacher}</h3>
          </div>
          <div className="btn-price-container" style={{ fontFamily: "KalamehExtraBold" }}>
            {coursePrice}
            <a href="#">
              <Button text="مشاهده دوره" size="large" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
