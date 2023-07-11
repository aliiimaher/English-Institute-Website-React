import InputBox from "./components/InputBox";
import Button from "./components/Button"

import personSvg from "./assets/person.svg"

function App() {
  return (
    <div>
      <InputBox placeHolder="یوزنیم" icon={personSvg} />
      <Button text="hello" size="large" />
    </div>
  );
}

export default App;
