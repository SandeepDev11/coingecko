import React from "react";
import { Link } from "react-router";

function TrendingCategories({ title, iconCoin, iconCoin2, iconCoin3, moreCount, url }) {
  return (
    <Link to={url}>
      <button className="p-3 w-100">
        <h6 className="text-truncate text-start fw-semibold ">{title}</h6>
        <div className="d-flex align-items-center gap-1 position-relative py-3">
          <span className="position-absolute start-0 fs-4">{iconCoin}</span>
          <span className="position-absolute fs-4" style={{left: "10%"}}>{iconCoin2}</span>
          <span className="position-absolute fs-4" style={{left: "20%"}}>{iconCoin3}</span>
          <span className="text-muted position-absolute" style={{left: "40%"}}>+{moreCount} more</span>
        </div>
      </button>
    </Link>
  );
}

export default TrendingCategories;
