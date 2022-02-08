import React from "react";
import PropTypes from "prop-types";

// const Alertfun=(message,type)=>{

// }

export default function Alert(props) {
  return (
     <div style={{height:'30px'}}>
     {props.myalert && (   
        <div className={`alert-small alert-${props.myalert.type} text-center height-30px`} role="alert">
          {props.myalert.message}
        </div>)}
      </div>
  );
}
