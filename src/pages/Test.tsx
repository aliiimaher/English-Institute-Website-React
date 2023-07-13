import Button from "../components/Button";
import Card from "../components/Card";
import CardH from "../components/CardH";
import InputBox from "../components/InputBox";

import englishCoursePng from "../assets/Pic/learn-english-language.png";
import englishCoursePngH from "../assets/Pic/learn-english-design-cardh.png";
import personSvg from "../assets/Pic/person.svg";

function Test() {
  return (
    <>
      <div>
        <h1>this is test page</h1>
        <h3>here you can see all components that are used in project</h3>

        <Button text="hello" size="large" backgroundColor="yes" />
        <Card
          icon={englishCoursePng}
          courseTitle="آموزش مکالمه زبان انگلیسی"
          description="در سرتاسر دنیا، چه شرق چه ..."
          courseTeacher="مهدی وکیلی"
          coursePrice=" ۲۰,۰۰۰ تومان"
        />
        <CardH
          picture={englishCoursePngH}
          courseTitle="آموزش مکالمه زبان انگلیسی"
          courseDescription="در سرتاسر دنیا، چه شرق چه ..."
          courseTeacher="مهدی وکیلی"
          coursePrice=" ۲۰,۰۰۰ تومان"
          background="no"
        />
        <CardH
          picture={englishCoursePngH}
          courseTitle="آموزش مکالمه زبان انگلیسی"
          courseDescription="در سرتاسر دنیا، چه شرق چه ..."
          courseTeacher="مهدی وکیلی"
          coursePrice=" ۲۰,۰۰۰ تومان"
          background="yes"
        />
        <InputBox placeHolder="یوزنیم" icon={personSvg} />
      </div>
    </>
  );
}

export default Test;
