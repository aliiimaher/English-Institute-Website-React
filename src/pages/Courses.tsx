import { useEffect, useState } from "react";

import "../styles/pages/Courses.scss";
import Loading from "../components/Loading";
import Card from "../components/Card";

import closedMenuToggleSvg from "../assets/Pic/closedMenuToggleSvg.svg";
import openedMenuToggleSvg from "../assets/Pic/openedMenuToggleSvg.svg";

import axios from "axios";

import Course from "../interfaces/Course";

function Courses() {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  // ========== checkbox states ==========
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedFee, setSelectedFee] = useState<string | null>(null);
  const [selectedTechWay, setSelectedTechWay] = useState<string[]>([]);
  const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]);
  const [selectedDiffLevels, setSelectedDiffLevels] = useState<string[]>([]);

  useEffect(() => {
    fetchFilteredCourses();

    // Reload the page when navigating back
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [
    selectedLanguages,
    selectedFee,
    selectedTechWay,
    selectedTeachers,
    selectedDiffLevels,
  ]);

  const fetchFilteredCourses = () => {
    const queryParams = new URLSearchParams();
    selectedLanguages.forEach((lang) => queryParams.append("languages", lang));
    if (selectedFee) {
      queryParams.append("fee", selectedFee);
    }
    selectedTechWay.forEach((techWay) =>
      queryParams.append("techWays", techWay)
    );
    selectedTeachers.forEach((teacher) =>
      queryParams.append("teachers", teacher)
    );
    selectedDiffLevels.forEach((diffLevel) =>
      queryParams.append("diffLevels", diffLevel)
    );

    console.log(queryParams.toString());

    axios
      .get(
        queryParams !== null
          ? `http://localhost:8000/course/filter/?${queryParams.toString()}`
          : `http://localhost:8000/course/`
      )
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // ========== checkbox change handles ==========
  // language
  const handleLanguagesCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLanguages((prevItems) => [...prevItems, value as string]);
    } else {
      setSelectedLanguages((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };
  // fee
  const handleFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedFee(value);
  };
  // tech way
  const handleTechWaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTechWay((prevItems) => [...prevItems, value as string]);
    } else {
      setSelectedTechWay((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };
  // teachers
  const handleTeachersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTeachers((prevItems) => [...prevItems, value as string]);
    } else {
      setSelectedTeachers((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };
  // diff levels
  const handleDiffLevelsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDiffLevels((prevItems) => [...prevItems, value as string]);
    } else {
      setSelectedDiffLevels((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };

  // ========== dropdown menu toggle svg states ==========
  const [isToggle1, setIsToggle1] = useState(true);
  const [isToggle2, setIsToggle2] = useState(true);
  const [isToggle3, setIsToggle3] = useState(true);
  const [isToggle4, setIsToggle4] = useState(true);
  const [isToggle5, setIsToggle5] = useState(true);

  // ========== handles for dropdown menu toggling ==========
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
      {isLoading && <Loading />}
      <div className="courses-page-container">
        <div className="courses-page-container-right">
          {/* ========== languages ========== */}
          <div className="dropdown-language">
            <button
              className="btn dropdown-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLanguage"
              aria-expanded="false"
              aria-controls="collapseLanguage"
              onClick={handleSvgClick1}
            >
              <img
                src={isToggle1 ? closedMenuToggleSvg : openedMenuToggleSvg}
                style={{ marginLeft: "8px" }}
              />
              زبان
            </button>
            <div className="collapse" id="collapseLanguage">
              <hr style={{ borderWidth: "2px", color: "#EAD2B7" }} />
              <div className="form-check-reverse dropdown-language-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="انگلیسی"
                  id="englishCheckbox"
                  checked={selectedLanguages.includes("انگلیسی")}
                  onChange={handleLanguagesCheckboxChange}
                />
                <label className="form-check-label">انگلیسی</label>
              </div>
              <div className="form-check-reverse dropdown-language-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="آلمانی"
                  id="germanCheckbox"
                  checked={selectedLanguages.includes("آلمانی")}
                  onChange={handleLanguagesCheckboxChange}
                />
                <label className="form-check-label">آلمانی</label>
              </div>
              <div className="form-check-reverse dropdown-language-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="اسپانیایی"
                  id="spanishCheckbox"
                  checked={selectedLanguages.includes("اسپانیایی")}
                  onChange={handleLanguagesCheckboxChange}
                />
                <label className="form-check-label">اسپانیایی</label>
              </div>
              <div className="form-check-reverse dropdown-language-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="روسی"
                  id="russianCheckbox"
                  checked={selectedLanguages.includes("روسی")}
                  onChange={handleLanguagesCheckboxChange}
                />
                <label className="form-check-label">روسی</label>
              </div>
              <div
                className="form-check-reverse dropdown-language-item"
                style={{ marginBottom: "0px" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="فرانسوی"
                  id="frenchCheckbox"
                  checked={selectedLanguages.includes("فرانسوی")}
                  onChange={handleLanguagesCheckboxChange}
                />
                <label className="form-check-label">فرانسوی</label>
              </div>
            </div>
          </div>

          {/* ========== Fee ========== */}
          <div className="dropdown-fee">
            <button
              className="btn dropdown-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFee"
              aria-expanded="false"
              aria-controls="collapseFee"
              onClick={handleSvgClick2}
            >
              <img
                src={isToggle2 ? closedMenuToggleSvg : openedMenuToggleSvg}
                style={{ marginLeft: "8px" }}
              />
              نوع آموزش
            </button>
            <div className="collapse" id="collapseFee">
              <hr style={{ borderWidth: "2px", color: "#EAD2B7" }} />
              <div className="form-check-reverse dropdown-fee-item">
                <input
                  className="form-check-input dropdown-fee-radio-btn"
                  type="radio"
                  name="exampleRadios"
                  id="allRadiosButton"
                  value="همه"
                  checked={selectedFee === "همه"}
                  onChange={handleFeeChange}
                />
                <label className="form-check-label">همه</label>
              </div>
              <div className="form-check-reverse dropdown-fee-item">
                <input
                  className="form-check-input dropdown-fee-radio-btn"
                  type="radio"
                  name="exampleRadios"
                  id="freeRadiosButton"
                  value="رایگان"
                  checked={selectedFee === "رایگان"}
                  onChange={handleFeeChange}
                />
                <label className="form-check-label">رایگان</label>
              </div>
              <div
                className="form-check-reverse dropdown-fee-item"
                style={{ marginBottom: 0 }}
              >
                <input
                  className="form-check-input dropdown-fee-radio-btn"
                  type="radio"
                  name="exampleRadios"
                  id="notFreeRadiosButton"
                  value="غیر رایگان"
                  checked={selectedFee === "غیر رایگان"}
                  onChange={handleFeeChange}
                />
                <label className="form-check-label">غیر رایگان</label>
              </div>
            </div>
          </div>

          {/* ========== TechWay ========== */}
          <div className="dropdown-tech-way">
            <button
              className="btn dropdown-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTechWay"
              aria-expanded="false"
              aria-controls="collapseTechWay"
              onClick={handleSvgClick3}
            >
              <img
                src={isToggle3 ? closedMenuToggleSvg : openedMenuToggleSvg}
                style={{ marginLeft: "8px" }}
              />
              نحوه آموزش
            </button>
            <div className="collapse" id="collapseTechWay">
              <hr style={{ borderWidth: "2px", color: "#EAD2B7" }} />
              <div className="form-check-reverse dropdown-tech-way-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="حضوری"
                  id="inPersonCheckbox"
                  checked={selectedTechWay.includes("حضوری")}
                  onChange={handleTechWaysChange}
                />
                <label className="form-check-label">حضوری</label>
              </div>
              <div className="form-check-reverse dropdown-tech-way-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="مجازی"
                  id="majaziCheckbox"
                  checked={selectedTechWay.includes("مجازی")}
                  onChange={handleTechWaysChange}
                />
                <label className="form-check-label">مجازی</label>
              </div>
              <div
                className="form-check-reverse dropdown-tech-way-item"
                style={{ marginBottom: 0 }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="آفلاین"
                  id="offlineCheckbox"
                  checked={selectedTechWay.includes("آفلاین")}
                  onChange={handleTechWaysChange}
                />
                <label className="form-check-label">آفلاین</label>
              </div>
            </div>
          </div>

          {/* ========== teachers ========== */}
          <div className="dropdown-teachers">
            <button
              className="btn dropdown-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTeachers"
              aria-expanded="false"
              aria-controls="collapseTeachers"
              onClick={handleSvgClick4}
            >
              <img
                src={isToggle4 ? closedMenuToggleSvg : openedMenuToggleSvg}
                style={{ marginLeft: "8px" }}
              />
              استاد
            </button>
            <div className="collapse" id="collapseTeachers">
              <hr style={{ borderWidth: "2px", color: "#EAD2B7" }} />
              <div className="form-check-reverse dropdown-teachers-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="دکتر اسفندیاری"
                  id="esiCheckbox"
                  checked={selectedTeachers.includes("دکتر اسفندیاری")}
                  onChange={handleTeachersChange}
                />
                <label className="form-check-label">دکتر اسفندیاری</label>
              </div>
              <div className="form-check-reverse dropdown-teachers-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="دکتر حسنی"
                  id="hasaniCheckbox"
                  checked={selectedTeachers.includes("دکتر حسنی")}
                  onChange={handleTeachersChange}
                />
                <label className="form-check-label">دکتر حسنی</label>
              </div>
              <div
                className="form-check-reverse dropdown-teachers-item"
                style={{ marginBottom: 0 }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="دکتر الکس فرگوسن"
                  id="alexFergosenCheckbox"
                  checked={selectedTeachers.includes("دکتر الکس فرگوسن")}
                  onChange={handleTeachersChange}
                />
                <label className="form-check-label">دکتر الکس فرگوسن</label>
              </div>
            </div>
          </div>

          {/* ========== diff levels ========== */}
          <div className="dropdown-diff-level">
            <button
              className="btn dropdown-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDiffLevel"
              aria-expanded="false"
              aria-controls="collapseDiffLevel"
              onClick={handleSvgClick5}
            >
              <img
                src={isToggle5 ? closedMenuToggleSvg : openedMenuToggleSvg}
                style={{ marginLeft: "8px" }}
              />
              سطح دوره
            </button>
            <div className="collapse" id="collapseDiffLevel">
              <hr style={{ borderWidth: "2px", color: "#EAD2B7" }} />
              <div className="form-check-reverse dropdown-diff-level-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="مقدماتی"
                  id="preliminaryCheckbox"
                  checked={selectedDiffLevels.includes("مقدماتی")}
                  onChange={handleDiffLevelsChange}
                />
                <label className="form-check-label">مقدماتی</label>
              </div>
              <div className="form-check-reverse dropdown-diff-level-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="متوسط"
                  id="intermediateCheckbox"
                  checked={selectedDiffLevels.includes("متوسط")}
                  onChange={handleDiffLevelsChange}
                />
                <label className="form-check-label">متوسط</label>
              </div>
              <div
                className="form-check-reverse dropdown-diff-level-item"
                style={{ marginBottom: 0 }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="پیشرفته"
                  id="advancedCheckbox"
                  checked={selectedDiffLevels.includes("پیشرفته")}
                  onChange={handleDiffLevelsChange}
                />
                <label className="form-check-label">پیشرفته</label>
              </div>
            </div>
          </div>
        </div>

        <div className="courses-page-container-left">
          {courses.map((course, index) => (
            <Card
              key={index}
              courseTitle={course.title}
              shortDescription={course.short_description}
              icon={course.course_image}
              coursePrice={course.price.toString()}
              courseTeacher={course.teacher.fullname}
              onclick={() => (
                setIsLoading(true),
                (location.href = "/course-info/" + course.id + "/")
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
