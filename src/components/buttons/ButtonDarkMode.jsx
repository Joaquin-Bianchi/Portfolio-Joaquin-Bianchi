import React from "react";

function ButtonDarkMode() {
  return (
    <>
      <label className="ui-switch z-20">
        <input type="checkbox" />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </>
  );
}

export default ButtonDarkMode;
