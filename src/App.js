import { useState } from "react";
import "./App.css";
import Big from "./components/big";
import Small from "./components/small";

function App() {
  const [imageLink, setImageUrl] = useState("");
  const [name, setName] = useState("Parv Sehgal");
  const [Dob, setDob] = useState("13/01/2004");
  const [Age, setAge] = useState("19");
  const [mail, setMail] = useState("");
  return (
    <div className="App">
      <div className="whole">
        <Big
          imageLink={imageLink}
          name={name}
          Dob={Dob}
          Age={Age}
          mail={mail}
        ></Big>
        <Small
          setAge={setAge}
          setDob={setDob}
          setImageUrl={setImageUrl}
          setName={setName}
          setMail={setMail}
        ></Small>
      </div>
    </div>
  );
}

export default App;
