import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handlerOnChange = (event) => {
    setText(event.target.value);
  };
  const handlerUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handlerLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handlerClearClick = () => {
    setText("");
    props.showAlert("Cleared all text!", "success");
  };
  const handlerCopyToClip = () => {
    // if(copySuccess === 'Copy Text'){
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    // setCopySuccess('Copied!!');
    props.showAlert("Copied to Clipboard!", "success");
    // }
    // else{
    //     setCopySuccess('Copy Text');
    // }
  };
  const handlerRemoveExtraSpaces = () => {
    setText(text.replace(/[ ]+/g, " "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handlerRemoveAllExtraSpaces = () =>{
    setText(text.replace(/\s+/g, " "));
    props.showAlert("All spaces removed!", "success");
  }
  return (
    <>
      <div className="container">
        <div className="form-floating">
          <h1 className="mb-3" style={{fontSize: '36px'}}>{props.heading}</h1>
          <textarea
            className="form-control mb-2"
            value={text}
            onChange={handlerOnChange}
            id="myBox"
            style={props.textArea}
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handlerUpClick}>
            Upper Case
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-1 mx-1"
            onClick={handlerLoClick}
          >
            Lower Case
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handlerClearClick}>
            Clear Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-1 mx-1"
            onClick={handlerCopyToClip}
          >
            Copy Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-1 mx-1"
            onClick={handlerRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-1 mx-1"
            onClick={handlerRemoveAllExtraSpaces}
          >
            Remove All Extra Spaces
          </button>
        </div>
        <div style={props.myStyle} className="mt-2">
          <h2>Your Summary</h2>
          <p>
            {text === "" ? 0 : text.trim().split(/\s+/).length} Words and{" "}
            {text.replace(/\s/g, "").length} Characters
          </p>
          <p>
            {text === "" ? 0 : 0.008 * text.trim().split(/\s+/).length} Minutes
            read
          </p>
        </div>
        <div className="my-3" style={props.myStyle}>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something to preview !!"}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    textArea: PropTypes.object.isRequired,
    myStyle: PropTypes.object.isRequired,
};

TextForm.defaultProps = {
  textArea: {
    height: "200px",
    color: "black",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px black",
  },
  myStyle: {
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "5px",
    boxShadow: "1px 1px 5px black",
  },
  heading: "Enter your text below to analyze !!",
};
