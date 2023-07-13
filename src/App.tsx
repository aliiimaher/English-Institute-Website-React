import InputBox from "./components/InputBox";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardH from "./components/CardH";

import "./App.css";

import personSvg from "./assets/Pic/person.svg";
import englishCoursePng from "./assets/Pic/learn-english-language.png";
import englishCoursePngH from "./assets/Pic/learn-english-design-cardh.png";

function App() {
  return (
    <>
      <Header />
      <Button text="hello" size="large" />
      <InputBox placeHolder="یوزنیم" icon={personSvg} />
      <Card
        icon={englishCoursePng}
        courseTitle="آموزش مکالمه زبان انگلیسی"
        description="در سرتاسر دنیا، چه شرق چه ..."
        courseTeacher="مهدی وکیلی"
        coursePrice=" ۲۰۰۰۰ تومان"
      />
      <CardH
        picture={englishCoursePngH}
        courseTitle="آموزش مکالمه زبان انگلیسی"
        courseDescription="در سرتاسر دنیا، چه شرق چه ..."
        courseTeacher="مهدی وکیلی"
        coursePrice=" ۲۰۰۰۰ تومان"
      />
      <Footer />
    </>
  );
}

export default App;
