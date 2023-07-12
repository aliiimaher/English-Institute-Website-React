import InputBox from "./components/InputBox";
import Button from "./components/Button";
import Card from "./components/Card";

import "./App.css";

import personSvg from "./assets/Pic/person.svg";
import englishCoursePng from "./assets/Pic/learn-english-language.png";

function App() {
  return (
    <div>
      <InputBox placeHolder="یوزنیم" icon={personSvg} />
      <Button text="hello" size="large" />
      <Card
        icon={englishCoursePng}
        courseTitle="آموزش مکالمه زبان انگلیسی"
        description="در سرتاسر دنیا، چه شرق چه ..."
        courseTeacher="مهدی وکیلی"
        coursePrice=" ۲۰۰۰۰ تومان"
      />
    </div>
  );
}

export default App;
