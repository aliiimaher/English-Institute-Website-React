import Button from "../components/Button";
import Card from "../components/Card";

import "../styles/pages/Home.scss";

import homePageSvg1 from "../assets/Pic/homePageSvg1.svg";
import homePageSvg2 from "../assets/Pic/homePageSvg2.svg";
import homePageSvg3 from "../assets/Pic/homePageSvg3.svg";
import englishCoursePng from "../assets/Pic/learn-english-language.png";

function Home() {
  return (
    <>
      <div className="home-page-ads-1">
        <div style={{ maxWidth: "572px" }}>
          <h1>زبان را با ما بیاموزید!</h1>
          <h2 style={{ fontSize: "28px", marginBottom: "56px" }}>
            آکادمی زبان لرن با بیش از 5 سال سابقه حرفه‌ای در آموزش زبان‌های زنده
            دنیا شما را همراهی می‌کند.
          </h2>
          <Button text="مشاهده دوره‌های آموزشی" size="large" />
        </div>
        <img src={homePageSvg1} alt="home page svg 1" />
      </div>
      <div className="home-page-courses-in-row">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <h1>دوره‌های ویژه</h1>
          <h3>سایر دوره‌ها --</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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

export default Home;
