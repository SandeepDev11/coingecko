import React from "react";
import { Link } from "react-router";

function TabHome({ tabData }) {
  const { icons, title , tabUrl} = tabData;
  return (
    <>
      <Link to={tabUrl} className="tabArea-left active">
        <div>{icons}</div>
        <div>
          <span>{title}</span>
        </div>
      </Link>
    </>
  );
}

export default TabHome;
