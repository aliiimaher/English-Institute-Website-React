import Button from "./Button";
import "../styles/components/Card.scss";

import teacherSvg from "../assets/Pic/teacher.svg";

interface Props {
  icon?: string;
  courseTitle: string;
  shortDescription?: string;
  courseTeacher: string;
  coursePrice: string;
  className?: string;
  onclick?: () => void;
}

function Card({
  icon,
  courseTitle,
  shortDescription,
  courseTeacher,
  coursePrice,
  className,
  onclick,
}: Props) {
  return (
    <>
      {/* this is a card {courseTitle} and {courseTeacher} */}
      <div className={"card my-card " + className}>
        <img src={icon} className="card-img-top" alt="card image" />
        <div className="card-body-1">
          <h5 className="card-title">{courseTitle}</h5>
          <p className="card-text">{shortDescription}</p>
          <div className="teacher-container">
            <img src={teacherSvg} alt="teacherSvg" />
            <h3>{courseTeacher}</h3>
          </div>
          <div className="btn-price-container">
            {coursePrice} تومان
            <a href="#">
              <Button text="مشاهده دوره" size="large" onclick={onclick} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
