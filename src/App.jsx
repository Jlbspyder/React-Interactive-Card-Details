import { useState } from "react";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import Form from "./components/Form";
import Comfirmation from "./components/Comfirmation";
import Footer from "./components/Footer";

function App() {
  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState("");
  const [digits, setDigits] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="container">
      <div className="showcase">
        <img src="./images/bg-main-desktop.png" alt="bg" className="bg" />
        <FrontCard name={name} digits={digits} month={month} year={year} />
        <BackCard cvc={cvc} />
        <Form
          name={name}
          setName={setName}
          digits={digits}
          setDigits={setDigits}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
          confirm={confirm}
          setConfirm={setConfirm}
        />
        {confirm && (
          <Comfirmation
            confirm={confirm}
            setConfirm={setConfirm}
            setName={setName}
            setDigits={setDigits}
            setMonth={setMonth}
            setYear={setYear}
            setCvc={setCvc}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
