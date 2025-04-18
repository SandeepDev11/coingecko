import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import chartImg from "../../assets/images/greenGraph.svg";
import chartImg2 from "../../assets/images/redGraph.svg";
import coinimg from "../../assets/Images/bitcoin.webp"

// ChangeIndicator Component
const ChangeIndicator = ({ value, isPositive }) => {
  const arrowColor = isPositive ? "var(--darkGreen-color)" : "var(--textRed)";
  return (
    <span style={{ color: arrowColor, textWrap: "nowrap" }}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
      </svg>
      {` ${value}%`}
    </span>
  );
};

const cryptoData = Array.from({ length: 30 }, (_, i) => {
  const names = [
    "Bitcoin BTC",
    "Ethereum ETH",
    "Binance Coin BNB",
    "Solana SOL",
    "Cardano ADA",
    "XRP",
    "Dogecoin DOGE",
    "Polygon MATIC",
    "Polkadot DOT",
    "Litecoin LTC",
    "Chainlink LINK",
    "Avalanche AVAX",
    "Uniswap UNI",
    "Stellar XLM",
    "Cosmos ATOM",
    "Filecoin FIL",
    "TRON TRX",
    "VeChain VET",
    "Monero XMR",
    "Theta THETA",
    "Tezos XTZ",
    "Aave AAVE",
    "EOS EOS",
    "Maker MKR",
    "Algorand ALGO",
    "Elrond EGLD",
    "Dash DASH",
    "Zcash ZEC",
    "Synthetix SNX",
    "Compound COMP",
  ];

  const price = (Math.random() * (65000 - 0.1) + 0.1).toFixed(2);
  const volume24h = `$${(Math.random() * 1000000000).toFixed(0)}`;
  const marketCap = `$${(Math.random() * 1000000000000).toFixed(0)}`;
  const fdv = `$${(Math.random() * 1500000000000).toFixed(0)}`;

  return {
    id: i + 1,
    fullName: names[i],
    price: `$${price}`,
    change1h: {
      value: (Math.random() * 2 - 1).toFixed(2),
      isPositive: Math.random() > 0.5,
    },
    change24h: {
      value: (Math.random() * 5 - 2.5).toFixed(2),
      isPositive: Math.random() > 0.5,
    },
    change7d: {
      value: (Math.random() * 10 - 5).toFixed(2),
      isPositive: Math.random() > 0.5,
    },
    change30d: {
      value: (Math.random() * 20 - 10).toFixed(2),
      isPositive: Math.random() > 0.5,
    },
    volume24h,
    marketCap,
    fdv,
    chartImg: i % 2 === 0 ? chartImg2 : chartImg,
    coinImg: `https://cryptologos.cc/logos/${names[i]
      .toLowerCase()
      .replace(/ /g, "-")}-logo.png`,
  };
});

function CoinList() {
  const [filledStars, setFilledStars] = useState({});

  const toggleStar = (id) => {
    setFilledStars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Define columns
  const columns = [
    {
      name: "",
      cell: (row) => (
        <div
          className="align-middle"
          onClick={() => toggleStar(row.id)}
          style={{ cursor: "pointer" }}
        >
          {filledStars[row.id] ? <FaStar color="gold" /> : <FaRegStar />}
        </div>
      ),
      width: "50px",
    },
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "50px",
    },
    {
      name: "Coin",
      cell: (row) => (
        <div className="d-flex align-items-center gap-2 text-nowrap coin-col">
          <img src={row.coinImg} alt={row.fullName} width="20px" />
          {row.fullName}
        </div>
      ),
      width: "150px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      right: true,
    },
    {
      name: "1h",
      cell: (row) => <ChangeIndicator {...row.change1h} />,
      right: true,
    },
    {
      name: "24h",
      cell: (row) => <ChangeIndicator {...row.change24h} />,
      right: true,
    },
    {
      name: "7d",
      cell: (row) => <ChangeIndicator {...row.change7d} />,
      right: true,
    },
    {
      name: "30d",
      cell: (row) => <ChangeIndicator {...row.change30d} />,
      right: true,
    },
    {
      name: "24h Volume",
      selector: (row) => row.volume24h,
      sortable: true,
      right: true,
    },
    {
      name: "FDV",
      selector: (row) => row.fdv,
      sortable: true,
      right: true,
    },
    {
      name: "Market Cap",
      selector: (row) => row.marketCap,
      sortable: true,
      right: true,
    },
    {
      name: "Last 7 Days",
      cell: (row) => (
        <Link to="/singlepage">
          <img src={row.chartImg} alt="Chart" className="img-fluid" />
        </Link>
      ),
      right: true,
    },
  ];

  const customPaginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  return (
    <section className="coinList-section">
      <Container>
        <Row>
          <Col lg={12} className="px-0">
            <DataTable
              columns={columns}
              data={cryptoData}
              pagination
              paginationPerPage={15}
              paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
              paginationComponentOptions={customPaginationOptions}
              highlightOnHover
              responsive
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CoinList;
