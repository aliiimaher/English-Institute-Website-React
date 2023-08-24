import { useEffect, useState } from "react";

import "../styles/components/CardH.scss";

import teacherSvg from "../assets/Pic/teacher.svg";
import closeSvg from "../assets/Pic/closeTicket.svg";
import Button from "./Button";

interface Props {
  picture?: string;
  courseTitle: string;
  courseDescription?: string;
  courseTeacher?: string;
  coursePrice?: string;
  onClick?: () => void;
  IS_MY_COURSE?: "yes" | "no";
}

function CardH({
  picture,
  courseTitle,
  courseDescription,
  courseTeacher,
  coursePrice,
  onClick,
  IS_MY_COURSE = "no",
}: Props) {
  const [cardBackground, setCardBackground] = useState("card-h-background-yes");

  useEffect(() => {
    generateCardBackground();
  }, []);

  const generateCardBackground = () => {
    if (IS_MY_COURSE === "no") {
      setCardBackground("card-h-background-no");
    } else {
      setCardBackground("card-h-background-yes");
    }
  };

  return (
    <>
      <div className={"card mb-3 my-card-h " + cardBackground}>
        <div
          className="row g-0"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-4">
            <img
              src={picture}
              className="img-fluid rounded-end"
              alt="card picture"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-part-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 className="card-title">{courseTitle}</h5>
                {IS_MY_COURSE === "no" ? (
                  <>
                    <img
                      src={closeSvg}
                      style={{ margin: "2px" }}
                      onClick={onClick}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <p className="card-text">{courseDescription}</p>
              <div className="price-teacher-container">
                <div className="card-h-teacher-container">
                  <img src={teacherSvg} alt="teacherSvg" />
                  <h3>{courseTeacher}</h3>
                </div>
                {IS_MY_COURSE === "no" ? (
                  coursePrice
                ) : (
                  <>
                    <div style={{ marginTop: "-20px" }}>
                      <Button text="برو به دوره" size="large" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardH;
