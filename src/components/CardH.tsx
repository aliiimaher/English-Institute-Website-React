import { useEffect, useState } from "react";

import "../styles/components/CardH.scss";

import teacherSvg from "../assets/Pic/teacher.svg";
import closeSvg from "../assets/Pic/closeTicket.svg";

interface Props {
  picture: string;
  courseTitle: string;
  courseDescription: string;
  courseTeacher: string;
  coursePrice: string;
  onClick?: () => void;
  background?: "yes" | "no";
}

function CardH({
  picture,
  courseTitle,
  courseDescription,
  courseTeacher,
  coursePrice,
  onClick,
  background,
}: Props) {
  const [cardBackground, setCardBackground] = useState("card-h-background-yes");

  useEffect(() => {
    generateCardBackground();
  }, []);

  const generateCardBackground = () => {
    if (background === "no") {
      setCardBackground("card-h-background-no");
    } else {
      setCardBackground("card-h-background-yes");
    }
  };

  return (
    <>
      <div
        className={"card mb-3 my-card-h " + cardBackground}
        style={{ maxWidth: "890px", maxHeight: "170px" }}
      >
        <div
          className="row g-0"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-3">
            <img
              src={picture}
              className="img-fluid rounded-end"
              alt="card picture"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body text-part-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 className="card-title">{courseTitle}</h5>
                <img src={closeSvg} style={{ margin: "2px" }} onClick={onClick} />
              </div>
              <p className="card-text">{courseDescription}</p>
              <div className="price-teacher-container">
                <div className="card-h-teacher-container">
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
