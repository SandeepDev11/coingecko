import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TabData from "../../Home/TabData";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";
import graphImg11 from "../../../assets/Images/graphImg11.png";

function GlobalCharts() {
  const [showSection, setShowSection] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Market Cap");
  const [key, setKey] = useState("all-categories");

  const options = [
    "Market Cap",
    "24H Volume",
    "24H Gainers",
    "24H Looser",
    "Tranding",
  ];

  const boxMarketData = [
    {
      trandingIcons: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      trandingIconsAlt: "Bitcoin",
      trandingIconsName: "Bitcoin",
      valueTranding: "$62,345",
      valueTrandingPercent: "5.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      trandingIconsAlt: "Ethereum",
      trandingIconsName: "Ethereum",
      valueTranding: "$3,450",
      valueTrandingPercent: "2.8%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/solana-sol-logo.png",
      trandingIconsAlt: "Solana",
      trandingIconsName: "Solana",
      valueTranding: "$145.23",
      valueTrandingPercent: "7.1%",
    },
  ];

  const boxMarketData2 = [
    {
      trandingIcons: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      trandingIconsAlt: "Binance Coin",
      trandingIconsName: "Binance Coin",
      valueTranding: "$410.45",
      valueTrandingPercent: "3.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      trandingIconsAlt: "XRP",
      trandingIconsName: "XRP",
      valueTranding: "$0.64",
      valueTrandingPercent: "4.5%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      trandingIconsAlt: "Cardano",
      trandingIconsName: "Cardano",
      valueTranding: "$0.78",
      valueTrandingPercent: "6.8%",
    },
  ];

  const data = [
    { name: "All Categories", change: -5.1, marketCap: "€2,581,084,678,113" },
    { name: "Stablecoins", change: -0.5, marketCap: "€216,392,274,823" },
    {
      name: "Exchange-based Tokens",
      change: -4.7,
      marketCap: "€110,747,444,788",
    },
    {
      name: "Decentralized Finance (DeFi)",
      change: -5.4,
      marketCap: "€83,995,267,208",
    },
    { name: "Meme", change: -8.1, marketCap: "€47,639,477,671" },
    {
      name: "Real World Assets (RWA)",
      change: -6.5,
      marketCap: "€29,140,454,512",
    },
    {
      name: "Artificial Intelligence (AI)",
      change: -7.7,
      marketCap: "€20,927,092,311",
    },
    { name: "Layer 2 (L2)", change: -5.7, marketCap: "€13,367,550,574" },
    { name: "Gaming (GameFi)", change: -6.6, marketCap: "€10,567,562,143" },
  ];

  const getColor = (change) => (change < 0 ? "red" : "green");

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "24h",
      selector: (row) => row.change,
      sortable: true,
      right: true,
      cell: (row) => (
        <span
          style={{
            color: getColor(row.change),
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <FaCaretDown style={{ color: "red", marginRight: "5px" }} />
          {Math.abs(row.change)}%
        </span>
      ),
    },
    {
      name: "Market Cap",
      selector: (row) => row.marketCap,
      sortable: true,
      right: true,
    },
  ];
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <Row>
                  <Col lg={12}>
                    <h4 className="fw-bold">
                      Global Cryptocurrency Market Cap Charts
                    </h4>
                    <p>
                      The global cryptocurrency market cap today is $2.77
                      Trillion, a -0.43% change in the last 24 hours and -1.59%
                      change one year ago. As of today, the market cap of
                      Bitcoin (BTC) is at $1.64 Trillion, representing a Bitcoin
                      dominance of 59.19%. Meanwhile, Stablecoins' market cap is
                      at $235 Billion and has a 8.48% share of the total crypto
                      market cap.
                    </p>
                  </Col>
                  <Col lg={12} className="pt-3">
                    <h5 className="fw-bold">Total Crypto Market Cap Chart</h5>
                    <p>
                      The chart below shows the total market cap & volume of
                      cryptocurrencies globally, a result of 16,697
                      cryptocurrencies tracked across 1,282 exchanges.
                      Crypto-backed tokens such as wrapped, bridged, and staked
                      tokens are excluded from global market cap to avoid
                      double-counting of value.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className="mb-3">
          <Col lg={4} className="px-0">
            <div className="border p-3 rounded-4">
              <h6 className="fw-bold">16,697</h6>
              <p className="mb-0 text-muted fw-semibold">Total Coins Tracked</p>
            </div>
          </Col>
          <Col lg={4} className="">
            <div className="border p-3 rounded-4">
              <h6 className="fw-bold">16,697</h6>
              <p className="mb-0 text-muted fw-semibold">
                Total Exchanges Tracked
              </p>
            </div>
          </Col>
          <Col lg={4} className="px-0">
            <div className="border p-3 rounded-4">
              <h6 className="fw-bold">16,697</h6>
              <p className="mb-0 text-muted fw-semibold">
                Total Categories Tracked
              </p>
            </div>
          </Col>
        </Row>

        <section className="mb-4">
          <Row className="p-4 border rounded-4">
            <Col>
              <img src={graphImg11} alt="graphImg11" className="img-fluid" />
            </Col>
          </Row>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold">Crypto Sectors Market Cap Chart</h5>
          <p>
            The chart below shows the market capitalization and dominance across
            major crypto sectors including Stablecoins, Exchange-based Tokens,
            Decentralized Finance (DeFi), and others over a period of time.
          </p>
          <Row className="p-4 border rounded-4">
            <Col>
              <img src={graphImg11} alt="graphImg11" className="img-fluid" />
            </Col>
          </Row>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold">Major Crypto Sectors Performance Chart</h5>
          <p>
            The chart below shows the relative performance of major sectors over
            time, tracking their percentage gains and losses in-terms of market
            capitalization across different time periods.
          </p>
          <Row className="p-4 border rounded-4">
            <Col>
              <img src={graphImg11} alt="graphImg11" className="img-fluid" />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}

export default GlobalCharts;
