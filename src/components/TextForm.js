import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const [WordCount, setWordCount] = useState(0);
  const [CharCount, setCharCount] = useState(0);
  const Handleonchange = (event) => {
    //console.log("on change");
    setText(event.target.value);
    setCharCount(event.target.value.length);
    let currtext = event.target.value;
    setWordCount(countWords(currtext));
  };
  const Handleupclick = () => {
    // console.log("clicked");
    let newtext = Text.toUpperCase();
    setText(newtext);
    (props.firealert)('Changed the text into uppercase','success');
    // console.log(props.firealert)
  };
  const Handlelwclick = () => {
    // console.log("clicked");
    let newtext = Text.toLowerCase();
    setText(newtext);
    (props.firealert)('Changed the text into lowercase','success');
  };
  const Handleclrclick = () => {
    // console.log("clicked");
    let newtext = "";
    setText(newtext);
    setCharCount(0);
    setWordCount(0);
    (props.firealert)('Cleared the text!','danger');
  };
  const Handlecpyclick = () => {
    let cpy = document.getElementById("floatingTextarea");
    cpy.select();
    navigator.clipboard.writeText(cpy.value);
    (props.firealert)('Copied the text!','success');
  };
  const Handlermvclick = () => {
    let newText=Text.split(/[ ]+/);
    setText(newText.join(" "));
    setCharCount(newText.join(" ").length);
    (props.firealert)('Removed extra-spaces in the text','success');
  };
  function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return (str.split(" ").filter((element)=>{return element.length!=0}).length);
  }
  return (
    <>
      <form className="mt-5">
        <div className={`w-50 m-auto`}  style={{backgroundColor:props.mode==='dark'?'#000033':'white',
         color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control mb-3 bg-${props.mode==='dark'?'secondary':'white'} text-${props.mode==='dark'?'white':'dark'}`}
            id="floatingTextarea"
            rows="8"
            onChange={Handleonchange}
            value={Text}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={Handleupclick}
          >
            To uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={Handlelwclick}
          >
            To lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={Handleclrclick}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={Handlecpyclick}
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={Handlermvclick}
          >
            Remove Extraspace
          </button>
          <h3 className="mt-4">Summary</h3>
          <div>
            Character count:{CharCount}, Word count:{WordCount}
          </div>
        </div>
      </form>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Heading",
};

TextForm.prototype = {
  heading: PropTypes.string,
};
