import InputBox from "./components/InputBox";

import personSvg from "./assets/person.svg"

function App() {
  return (
    <div>
      <InputBox placeHolder="یوزنیم" icon={personSvg} />
    </div>
  );
}

export default App;
