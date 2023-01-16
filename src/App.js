import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Form from "./components/Form";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [dmode, setDmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const colorObj = {
    whiteText: "#fcfdff",
    blackText: "#000505",
    whiteBackground: "#fff",
    blueBackground: "#030c37",
    darkBlueBackground: "#000523",
    lightBlueBackground: "#0C2340",
  };

  const toggleMode = () => {
    if (dmode === "light") {
      setDmode("dark");
      document.body.style.background = "#030c37";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setDmode("light");
      document.body.style.background = "#fcfcff";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar mode={dmode} color={colorObj} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Form showAlert={showAlert} color={colorObj} mode={dmode} />
              </>
            }
          />

          <Route
            path="/About"
            element={
              <>
                <Navbar mode={dmode} color={colorObj} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <About color={colorObj} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
