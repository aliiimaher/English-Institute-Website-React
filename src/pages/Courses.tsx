import { useState } from "react";

import "../styles/pages/Courses.scss";

import Card from "../components/Card";

import englishCoursePng from "../assets/Pic/learn-english-language.png";
import closedMenuToggleSvg from "../assets/Pic/closedMenuToggleSvg.svg";
import openedMenuToggleSvg from "../assets/Pic/openedMenuToggleSvg.svg";

function Courses() {
  const [isToggle1, setIsToggle1] = useState(true);
  const [isToggle2, setIsToggle2] = useState(true);
  const [isToggle3, setIsToggle3] = useState(true);
  const [isToggle4, setIsToggle4] = useState(true);
  const [isToggle5, setIsToggle5] = useState(true);

  const handleSvgClick1 = () => {
    setIsToggle1(!isToggle1);
  };
  const handleSvgClick2 = () => {
    setIsToggle2(!isToggle2);
  };
  const handleSvgClick3 = () => {
    setIsToggle3(!isToggle3);
  };
  const handleSvgClick4 = () => {
    setIsToggle4(!isToggle4);
  };
  const handleSvgClick5 = () => {
    setIsToggle5(!isToggle5);
  };
  return (
    <>
      <div className="courses-page-container">
        <div className="courses-page-container-right">
          drop-down-lists
          <div className="drop-down-language">
          <p>
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLanguage"
              aria-expanded="false"
              aria-controls="collapseLanguage"
              onClick={handleSvgClick1}
            >
              <img src={isToggle1 ? closedMenuToggleSvg : openedMenuToggleSvg} />
              زبان
            </button>
          </p>
          <div className="collapse" id="collapseLanguage">
            <div className="form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                انگلیسی
              </label>
            </div>
            <div className="form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                آلمانی
              </label>
            </div>
            <div className="form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                اسپانیایی
              </label>
            </div>
            <div className="form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                روسی
              </label>
            </div>
            <div className="form-check-reverse">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                فرانسوی
              </label>
            </div>
          </div>
          </div>
          <div className="drop-down-fee"></div>
          <div className="drop-down-tech-way"></div>
          <div className="drop-down-teachers"></div>
          <div className="drop-down-diff-level"></div>
        </div>
        <div className="courses-page-container-left">
          <Card
            icon={englishCoursePng}
            courseTitle="آموزش مکالمه زبان انگلیسی"
            description="در سرتاسر دنیا، چه شرق چه ..."
            courseTeacher="مهدی وکیلی"
            coursePrice=" ۲۰,۰۰۰ تومان"
          />
          <Card
            icon={englishCoursePng}
            courseTitle="آموزش مکالمه زبان انگلیسی"
            description="در سرتاسر دنیا، چه شرق چه ..."
            courseTeacher="مهدی وکیلی"
            coursePrice=" ۲۰,۰۰۰ تومان"
          />
          <Card
            icon={englishCoursePng}
            courseTitle="آموزش مکالمه زبان انگلیسی"
            description="در سرتاسر دنیا، چه شرق چه ..."
            courseTeacher="مهدی وکیلی"
            coursePrice=" ۲۰,۰۰۰ تومان"
          />
        </div>
      </div>
    </>
  );
}

export default Courses;
