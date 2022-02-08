// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });
  // const handlemode = () => {
  //   if ((mystyle.color == "black")) {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black"
  //     });
  //     setmyMode("Lightmode");
  //   }
  //   else{
  //       setmystyle({
  //           color: "black",
  //   backgroundColor: "white"
  //         });
  //         setmyMode("Darkmode");
  //   }

  // };

  // const [myMode, setmyMode] = useState("Darkmode");
  return (
    <>
      {/* <div className="container" style={mystyle}> */}
      <div className="container">
        <h1 className="my-5">About</h1>

        {/* <div className="accordion-body" style={mystyle}> */}
        {/* <div className={`bg-${props.mode==='dark'?'green':'white'} text-${props.mode==='dark'?'white':'dark'}`} > */}
        <div>
          <strong>This is a utility based text application</strong> .It can be
          used to manipulate and analyze text at your fingertips.Get your hands
          dirty by trying it out right now!
        </div>
      </div>
      {/* <div className="container" style={mystyle}>
        <button type="button" className="btn btn-primary" onClick={handlemode}>
          {myMode}
        </button>
      </div> */}
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide fixed-bottom"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="d-block w-100 text-center bg-info text-dark">
              Browser Compatable
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-block w-100 text-center bg-info text-dark">
              User Friendly
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-block w-100 text-center bg-info text-dark">
              React Application
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
