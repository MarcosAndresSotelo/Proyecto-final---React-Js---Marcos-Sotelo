import React from "react";
import "./Spinner.css"

const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;