import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import DataTable from "react-data-table-component";

function CoinDataList({ data }) {
  const columns = [
    {
      name: "Coin",
      selector: (row) => row.name,
      sortable: true,
      className: "text-nowrap",
      cell: (row) => (
        <div className="d-flex align-items-center gap-2 text-nowrap py-2">
          <img src={row.imgSrc} alt={row.name} width="20px" />
          {row.name}
        </div>
      ),
      width: "150px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      className: "text-nowrap text-end",
      right: true,
      cell: (row) => <div className="text-end text-nowrap w-100">{row.price}</div>,
    },
    {
      name: "24h",
      selector: (row) => row.change,
      sortable: true,
      className: "text-nowrap text-end",
      right: true,
      cell: (row) => {
        const isPositive = !row.change.includes("-");
        return (
          <div className="text-end text-nowrap w-100" style={{ color: isPositive ? "green" : "red" }}>
            {isPositive ? <TiArrowSortedUp /> : <TiArrowSortedDown />} {row.change}
          </div>
        );
      },
    },
  ];

  // Custom styles to remove bottom border from rows
  const customStyles = {
    rows: {
      style: {
        borderBottom: "none !important", // Remove bottom border from table rows
      },
    },
    cells: {
      style: {
        borderBottom: "none !important", // Remove bottom border from table cells
      },
    },
  };

  return (
    <div className="boxMarketWrapper-list border p-4 rounded-4">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h6 className="fw-bold">🔥 Trending Coins</h6>
        <Link to="/">
          more <FaChevronRight style={{ fontSize: "10px" }} />
        </Link>
      </div>
      <DataTable columns={columns} data={data} noHeader dense hover  customStyles={customStyles} />
    </div>
  );
}

export default CoinDataList;
