import React, { useState } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { HiMiniNumberedList } from "react-icons/hi2";
import { FaFire, FaShapes } from "react-icons/fa";
import TabHome from "./TabHome";

function TabData() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabData = [
    {
      icons: <FaRankingStar />,
      title: "All",
      tabUrl: "/",
    },
    {
      icons: <HiMiniNumberedList />,
      title: "Highlights",
      tabUrl: "/highlights",
    },
    {
      icons: <FaShapes />,
      title: "Categories",
      tabUrl: "/categories",
    },
    {
      icons: <FaFire />,
      title: "World Liberty Financial Portfolio",
      tabUrl: "/",
    },
    {
      icons: <FaFire />,
      title: "Polkadot Ecosystem",
      tabUrl: "/",
    },
  ];
  return (
    <>
      {tabData.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`tabArea-left ${activeIndex === index ? "active" : ""}`}
          style={{
            color:
              activeIndex === index
                ? "var(--darkGreen-color)"
                : "var(--dark-color)",
            background:
              activeIndex === index ? "var(--lightGreen-color)" : "transparent",
            fontSize: activeIndex === index ? "14px" : "14px",
            padding: activeIndex === index ? "0.4rem 0.8rem" : "0.4rem 0.8rem",
            borderRadius: activeIndex === index ? "0.5rem" : "0.5rem",
          }}
        >
          <TabHome tabData={item} activeIndex={activeIndex} index={index} />
        </div>
      ))}
    </>
  );
}

export default TabData;
