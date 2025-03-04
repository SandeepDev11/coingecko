import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router";

function BoxMarket({ boxMarketData }) {
  const {
    trandingIcons,
    trandingIconsAlt,
    trandingIconsName,
    valueTranding,
    valueTrandingPercent,
  } = boxMarketData;
  return (
    <>
      <div className="boxMarketWrapper-list">
        <ul className="list-unstyled mb-0">
          <li>
            <Link to="/">
              <div className="trandingList d-flex justify-content-between align-items-center mt-1">
                <div className="d-flex gap-2 align-items-center">
                  <div className="trandingList-img">
                    <img
                      src={trandingIcons}
                      alt={trandingIconsAlt}
                      width="20px"
                    />
                  </div>
                  <div className="fw-medium">{trandingIconsName}</div>
                </div>
                <div className="d-flex gap-1 align-items-center">
                  <div className="">{valueTranding}</div>
                  <div className="fw-medium">
                    <span style={{ color: "var(--textRed)" }}>
                      {" "}
                      <TiArrowSortedDown /> {valueTrandingPercent}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BoxMarket;
