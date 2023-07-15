import Button from "../components/Button";
import Card from "../components/Card";

import "../styles/pages/Home.scss";

import homePageSvg1 from "../assets/Pic/homePageSvg1.svg";
import homePageSvg2 from "../assets/Pic/homePageSvg2.svg";
import homePageSvg3 from "../assets/Pic/homePageSvg3.svg";
import englishCoursePng from "../assets/Pic/learn-english-language.png";
import leftArrowSvg from "../assets/Pic/leftArrowSvg.svg";

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
          <a href="somewhere">
            <h3>
              سایر دوره‌ها
              <img src={leftArrowSvg} style={{ marginRight: "8px" }} />
            </h3>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "40px",
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
      <div className="home-page-zaban-learn-info">
        <div className="home-page-zaban-learn-info-item">
          تعداد زبان آموزان
          <br />
          ثبت نامی زبان لرن
          <br />
          <div className="home-page-zaban-learn-info-item-numbers">۲۰۰۰+</div>
        </div>
        <div className="home-page-zaban-learn-info-item">
          تعداد استادان
          <br />
          ثبت نامی زبان لرن
          <br />
          <div className="home-page-zaban-learn-info-item-numbers">۳۸</div>
        </div>
        <div className="home-page-zaban-learn-info-item">
          تعداد دوره‌های
          <br /> ثبت شده زبان لرن
          <br />
          <div className="home-page-zaban-learn-info-item-numbers">۴۰۰+</div>
        </div>
      </div>
    </>
  );
}

export default Home;
