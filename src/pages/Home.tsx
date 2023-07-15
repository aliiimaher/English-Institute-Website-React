import Button from "../components/Button";

import homePageSvg1 from "../assets/Pic/homePageSvg1.svg";
import homePageSvg2 from "../assets/Pic/homePageSvg2.svg";
import homePageSvg3 from "../assets/Pic/homePageSvg3.svg";

function Home() {
  return (
    <>
      <div className="home-page-ads-1">
        <img src={homePageSvg1} alt="home page svg 1" />
        <div>
          <h1>زبان را با ما بیاموزید!</h1>
          <h3>
            آکادمی زبان لرن با بیش از 5 سال سابقه حرفه‌ای در آموزش زبان‌های زنده
            دنیا شما را همراهی می‌کند.
          </h3>
          <Button text="مشاهده دوره‌های آموزشی" size="large" />
        </div>
      </div>
    </>
  );
}

export default Home;
