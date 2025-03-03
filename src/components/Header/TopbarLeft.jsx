import React from "react";
// import { Link } from "react-router-dom";

const TopbarLeft = ({topbarLeftData}) => {
    const {title,valueNum,urlNum} = topbarLeftData;
  return (
    <>
      <div className="leftTop-section-content">
        <div>
          <span>{title}</span>
        </div>
        <div>
          <p className="mb-0 fw-semibold"><a href={urlNum}>{valueNum}</a></p>
        </div>
      </div>
    </>
  );
};

export default TopbarLeft;
