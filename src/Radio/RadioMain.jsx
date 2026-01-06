import "./App.css";
import { useState } from "react";
import { RadioGroup, RadioOption } from "./Radio/Radio";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value={"Social_Media"}>Social Media</RadioOption>
        <RadioOption value={"friends"}>Friends</RadioOption>
        <RadioOption value={"advertising"}>Advertising</RadioOption>
        <RadioOption value={"other"}>Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
