import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
    boxShadow: "1px 1px 5px black",
  });
  const [textArea, setTextArea] = useState({
    height: "200px",
    color: "black",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px black",
  });
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("white");
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setMyStyle({
        color: "white",
        backgroundColor: "#2b3035",
        borderRadius: "5px",
        padding: "5px",
        boxShadow: "1px 1px 5px white",
      });
      setTextArea({
        height: "200px",
        color: "white",
        backgroundColor: "#2b3035",
        boxShadow: "1px 1px 5px white",
      });
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "5px",
        boxShadow: "1px 1px 5px black",
      });
      setTextArea({
        height: "200px",
        color: "black",
        backgroundColor: "white",
        boxShadow: "1px 1px 5px black",
      });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils";
    }
  };
  const chooseColorMode1 = () => {
    if (bgColor === "white") {
      setBgColor("#588157");
      document.body.style.backgroundColor = "#588157";
      document.body.style.color = "white";
    } else {
      setBgColor("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const chooseColorMode2 = () => {
    if (bgColor === "white") {
      setBgColor("#a3b18a");
      document.body.style.backgroundColor = "#a3b18a";
      document.body.style.color = "white";
    } else {
      setBgColor("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  const chooseColorMode3 = () => {
    if (bgColor === "white") {
      setBgColor("#dad7cd");
      document.body.style.backgroundColor = "#dad7cd";
      document.body.style.color = "white";
    } else {
      setBgColor("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        theme={mode}
        chooseColorMode3={chooseColorMode3}
        chooseColorMode2={chooseColorMode2}
        chooseColorMode1={chooseColorMode1}
        handlerMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
          heading="Enter Your Text Below To Analyze !!"
          textArea={textArea}
          myStyle={myStyle}
          showAlert={showAlert}
        />
    </>
  );
}

export default App;
