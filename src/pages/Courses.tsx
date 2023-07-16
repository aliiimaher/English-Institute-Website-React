import "../styles/pages/Courses.scss";

import Card from "../components/Card";

import englishCoursePng from "../assets/Pic/learn-english-language.png";

function Courses() {
  return (
    <>
      <div className="courses-page-container">
        <div className="courses-page-container-right">drop-down-lists</div>
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
