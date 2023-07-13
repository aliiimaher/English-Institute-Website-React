import { useEffect, useState } from "react";

import teacherSvg from "../assets/Pic/teacher.svg";

interface Props {
  picture: string;
  courseTitle: string;
  courseDescription: string;
  courseTeacher: string;
  coursePrice: string;
  background?: "yes" | "no";
}

function CardH({
  picture,
  courseTitle,
  courseDescription,
  courseTeacher,
  coursePrice,
  background,
}: Props) {
  const [cardBackground, setCardBackground] = useState("background-yes");

  useEffect(() => {
    generateCardBackground();
  }, []);

  const generateCardBackground = () => {
    if (background === "no") {
      setCardBackground("background-no");
    } else {
      setCardBackground("background-yes");
    }
  };

  return (
    <>
      <div
        className={"card mb-3 " + cardBackground}
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={picture}
              className="img-fluid rounded-start"
              alt="card picture"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{courseTitle}</h5>
              <p className="card-text">{courseDescription}</p>
              <div>
                <div className="text-body-secondary teacher-container">
                  <img src={teacherSvg} alt="teacherSvg" />
                  <h3 style={{ marginRight: "8px" }}>{courseTeacher}</h3>
                </div>
                {coursePrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardH;
