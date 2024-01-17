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
    height: "150px",
    color: "black",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px black",
  });
  const [alert, setAlert] = useState(null);
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
        height: "150px",
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
        height: "150px",
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
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        theme={mode}
        handlerMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
          heading="TextUtils - Word Counter, Character Counter, Extra Spaces Remover !!"
          textArea={textArea}
          myStyle={myStyle}
          showAlert={showAlert}
        />
    </>
  );
}

export default App;
