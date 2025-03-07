import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import chartImg from "../../assets/images/greenGraph.svg";
import chartImg2 from "../../assets/images/redGraph.svg";

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

const cryptoData = [
  {
    id: 1,
    fullName: "Bitcoin BTC",
    price: "$64,320.15",
    change1h: { value: 0.5, isPositive: true },
    change24h: { value: 3.2, isPositive: false },
    change7d: { value: 5.6, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$32,540,982,124",
    marketCap: "$1,250,000,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    id: 2,
    fullName: "Ethereum ETH",
    price: "$3,472.80",
    change1h: { value: 0.3, isPositive: false },
    change24h: { value: 2.5, isPositive: true },
    change7d: { value: 6.1, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$18,750,962,345",
    marketCap: "$415,000,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg,
    coinImg: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    id: 3,
    fullName: "Solana SOL",
    price: "$135.22",
    change1h: { value: 1.2, isPositive: true },
    change24h: { value: 4.1, isPositive: true },
    change7d: { value: 8.9, isPositive: false },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$6,342,876,543",
    marketCap: "$58,900,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
  {
    id: 4,
    fullName: "Cardano ADA",
    price: "$0.64",
    change1h: { value: 0.8, isPositive: true },
    change24h: { value: 1.5, isPositive: false },
    change7d: { value: 2.4, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$2,123,876,543",
    marketCap: "$20,400,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg,
    coinImg: "https://cryptologos.cc/logos/cardano-ada-logo.png",
  },
  {
    id: 5,
    fullName: "XRP",
    price: "$0.54",
    change1h: { value: 0.7, isPositive: false },
    change24h: { value: 2.1, isPositive: true },
    change7d: { value: 4.5, isPositive: false },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$1,876,234,567",
    marketCap: "$29,540,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
  },
  {
    id: 6,
    fullName: "Polkadot DOT",
    price: "$8.25",
    change1h: { value: 0.4, isPositive: false },
    change24h: { value: 2.9, isPositive: false },
    change7d: { value: 5.1, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$980,456,789",
    marketCap: "$11,320,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg,
    coinImg: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
  },
  {
    id: 7,
    fullName: "Dogecoin DOGE",
    price: "$0.14",
    change1h: { value: 1.5, isPositive: true },
    change24h: { value: 3.8, isPositive: true },
    change7d: { value: 7.2, isPositive: false },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$2,456,987,654",
    marketCap: "$19,000,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
  },
  {
    id: 8,
    fullName: "Polygon MATIC",
    price: "$1.12",
    change1h: { value: 0.9, isPositive: true },
    change24h: { value: 2.3, isPositive: false },
    change7d: { value: 5.4, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$780,345,678",
    marketCap: "$10,850,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg,
    coinImg: "https://cryptologos.cc/logos/polygon-matic-logo.png",
  },
  {
    id: 9,
    fullName: "Litecoin LTC",
    price: "$92.34",
    change1h: { value: 0.5, isPositive: false },
    change24h: { value: 1.8, isPositive: true },
    change7d: { value: 4.7, isPositive: false },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$1,234,567,890",
    marketCap: "$6,520,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
  },
  {
    id: 10,
    fullName: "Chainlink LINK",
    price: "$17.45",
    change1h: { value: 1.1, isPositive: true },
    change24h: { value: 3.2, isPositive: false },
    change7d: { value: 6.3, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$780,234,567",
    marketCap: "$10,200,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg,
    coinImg: "https://cryptologos.cc/logos/chainlink-link-logo.png",
  },
  {
    id: 11,
    fullName: "Avalanche AVAX",
    price: "$25.18",
    change1h: { value: 0.9, isPositive: false },
    change24h: { value: 4.5, isPositive: true },
    change7d: { value: 7.8, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$654,987,321",
    marketCap: "$9,800,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
  },
  {
    id: 12,
    fullName: "Uniswap UNI",
    price: "$8.75",
    change1h: { value: 0.6, isPositive: true },
    change24h: { value: 2.7, isPositive: false },
    change7d: { value: 5.5, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$432,109,876",
    marketCap: "$5,320,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg,
    coinImg: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
  },
  {
    id: 13,
    fullName: "Stellar XLM",
    price: "$0.12",
    change1h: { value: 1.4, isPositive: true },
    change24h: { value: 3.9, isPositive: false },
    change7d: { value: 8.1, isPositive: true },
    change30d: { value: 10.2, isPositive: true },
    volume24h: "$209,765,432",
    marketCap: "$4,200,000,000",
    fdv: "$1,250,000,000,000",
    chartImg: chartImg2,
    coinImg: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
  },
];

function CoinList() {
  const [filledStars, setFilledStars] = useState({});

  const toggleStar = (id) => {
    setFilledStars((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle only the clicked star
    }));
  };
  const tableHeaders = [
    "",
    "#",
    "Coin",
    "Price",
    "1h",
    "24h",
    "7d",
    "30d",
    "24h Volume",
    "FDV",
    "Market Cap",
    "Last 7 Days",
  ];

  return (
    <section className="coinList-section">
      <Container>
        <Row>
          <Col lg={12}>
            <Table responsive hover>
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className={`align-middle fw-medium ${
                        index > 2 ? "text-end" : ""
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((coin) => (
                  <tr key={coin.id} className="py-3">
                    <td
                      className="align-middle"
                      onClick={() => toggleStar(coin.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {filledStars[coin.id] ? (
                        <FaStar color="gold" />
                      ) : (
                        <FaRegStar />
                      )}
                    </td>
                    <td className="align-middle">{coin.id}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center gap-2 text-nowrap">
                        <img
                          src={coin.coinImg}
                          alt={coin.fullName}
                          width="20px"
                        />
                        {coin.fullName}
                      </div>
                    </td>
                    <td className="align-middle text-end">{coin.price}</td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change1h} />
                    </td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change24h} />
                    </td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change7d} />
                    </td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change30d} />
                    </td>
                    <td className="align-middle text-end">{coin.volume24h}</td>
                    <td className="align-middle text-end">{coin.fdv}</td>
                    <td className="align-middle text-end">{coin.marketCap}</td>
                    <td className="align-middle text-end">
                      <Link to="singlepage">
                        <img src={coin.chartImg} alt="Chart" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CoinList;
