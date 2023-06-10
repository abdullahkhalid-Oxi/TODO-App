import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter here :");
  console.log(text);

  const handleUpperCase = () => {
    console.log("On Click Called");
    let newstr = text.toUpperCase();
    setText(newstr)
  };
  const handleLowerCase = () => {
    console.log("On Click Called");
    let newstr = text.toLowerCase();
    setText(newstr)
  };

  const handleOnChange = (event) => {
    console.log("On Change Called");
    setText(event.target.value)
  };

  return (
    <>
      {text + 1}
      <h3>{props.string}</h3>
      <div className="container">
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              // value="val"
              // value={text+"+place"}
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-danger" onClick={handleUpperCase}>Convert to UpperCase</button>
          <button className="btn btn-success mb-3" onClick={handleLowerCase}>Convert to LowerCase</button>
        </form>
      </div>
      <div className="container my-3">
        <h1>Words Counter</h1>
        <p>550{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  );
}
