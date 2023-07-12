import teacherSvg from "../assets/teacher.svg"

interface Props {
  icon?: string;
  courseTitle: string;
  description?: string;
  courseTeacher: string;
  coursePrice: number;
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
      <div className="card" style={{ width: "18rem" }}>
        <img src={icon} className="card-img-top" alt="card image" />
        <div className="card-body">
          <h5 className="card-title" dir="rtl">{courseTitle}</h5>
          <p className="card-text">{description}</p>
          <div className="teacher-container">
            <h3>{courseTeacher}</h3>
            <img src={teacherSvg} alt="teacherSvg" />
          </div>
          <div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            {coursePrice}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
