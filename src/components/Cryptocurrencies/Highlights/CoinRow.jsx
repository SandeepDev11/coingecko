import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

function CoinRow({ coin }) {
  const isPositive = !coin.change.includes("-");

  return (
    <div className="d-flex align-items-center gap-2 text-nowrap py-2">
      <img src={coin.imgSrc} alt={coin.name} width="20px" />
      {coin.name}
      <div className="ms-auto text-end w-100">{coin.price}</div>
      <div className="text-end w-100" style={{ color: isPositive ? "green" : "red" }}>
        {isPositive ? <TiArrowSortedUp /> : <TiArrowSortedDown />} {coin.change}
      </div>
    </div>
  );
}

export default CoinRow;
