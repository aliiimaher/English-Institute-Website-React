import "../styles/pages/Home.scss";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Loading from "../components/Loading";
import homePageSvg1 from "../assets/Pic/homePageSvg1.svg";
import homePageSvg2 from "../assets/Pic/homePageSvg2.svg";
import homePageSvg3 from "../assets/Pic/homePageSvg3.svg";
import leftArrowSvg from "../assets/Pic/leftArrowSvg.svg";
import { useState } from "react";
function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <Loading />}
      <div className="home-main-container">
        <div className="home-page-ads-1">
          <div style={{ maxWidth: "572px" }}>
            <h1>زبان را با ما بیاموزید!</h1>
            <h2 style={{ fontSize: "28px", marginBottom: "56px" }}>
              آکادمی زبان لرن با بیش از 5 سال سابقه حرفه‌ای در آموزش زبان‌های
              زنده دنیا شما را همراهی می‌کند.
            </h2>
            <Button
              text="مشاهده دوره‌های آموزشی"
              size="large"
              onclick={() => {
                setIsLoading(true);
                window.location.href = "courses/";
              }}
            />
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
            <a href="courses/">
              <h3>
                سایر دوره‌ها
                <img src={leftArrowSvg} style={{ marginRight: "8px" }} />
              </h3>
            </a>
          </div>
          <div>
            <Slider />
          </div>
        </div>
        <div>
          <div className="home-page-zaban-learn-info">
            <div className="home-page-zaban-learn-info-item">
              تعداد زبان آموزان
              <br />
              ثبت نامی زبان لرن
              <br />
              <div className="home-page-zaban-learn-info-item-numbers">
                ۲۰۰۰+
              </div>
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
              <div className="home-page-zaban-learn-info-item-numbers">
                ۴۰۰+
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-end-part">
          <div className="home-page-end-part-title">
            <hr className="home-page-line-before-title" />
            خدمات زبان آموزان و استادان
            <hr className="home-page-line-after-title" />
          </div>
          <div className="home-page-ads-2">
            <div className="home-page-ads-2-right-side">
              <h1 style={{ marginBottom: "12%" }}>زبان لرن برای زبان آموزان</h1>
              <h4
                style={{
                  marginBottom: "6%",
                  fontWeight: "700",
                  lineHeight: "160%",
                }}
              >
                آکادمی زبان لرن برای زبان آموزان گرامی تسهیلات فراوانی نظیر
                دوره‌ها قرار داده است. زبان آموزان برای دسترسی به این تسهیلات
                میبایست ابتدا در سایت ثبت نام کنند. برای ثبت نام میتوانید از
                دکمه زیر استفاده کنید.
              </h4>
              <Button
                text="ثبت نام به عنوان زبان آموز"
                size="large"
                onclick={() => (window.location.href = "login/")}
              />
            </div>
            <div className="home-page-ads-2-left-side">
              <img src={homePageSvg2} alt="home page svg 2" />
            </div>
          </div>
          <div className="home-page-ads-3">
            <div className="home-page-ads-3-right-side">
              <img src={homePageSvg3} alt="home page svg 3" />
            </div>
            <div className="home-page-ads-3-left-side">
              <h1 style={{ marginBottom: "12%" }}>
                زبان لرن برای زبان استادان
              </h1>
              <h4
                style={{
                  marginBottom: "6%",
                  fontWeight: "700",
                  lineHeight: "160%",
                }}
              >
                آکادمی زبان لرن برای استادان گرامی تسهیلات فراوانی نظیر دوره‌ و
                اطلاعیه کلاس آنلاین و حضوری قرار داده است. استادان برای دسترسی
                به این تسهیلات میبایست ابتدا در سایت ثبت نام کنند. برای ثبت نام
                میتوانید از دکمه زیر استفاده کنید.
              </h4>
              <Button text="ثبت نام به عنوان استاد" size="large" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
