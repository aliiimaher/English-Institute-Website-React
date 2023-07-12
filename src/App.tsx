import InputBox from "./components/InputBox";
import Button from "./components/Button";
import Card from "./components/Card";

import personSvg from "./assets/person.svg";

function App() {
  return (
    <div>
      <InputBox placeHolder="یوزنیم" icon={personSvg} />
      <Button text="hello" size="large" />
      <Card
        icon={personSvg}
        courseTitle="english"
        description="the best of all ..."
        courseTeacher="ali"
        coursePrice={20}
      />
    </div>
  );
}

export default App;
