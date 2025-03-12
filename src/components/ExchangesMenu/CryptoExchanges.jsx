import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Image, Badge, Container, Row, Col } from "react-bootstrap";
import redGraph from "../../assets/Images/redGraph.svg";
import greenGraph from "../../assets/Images/greenGraph.svg";
import TabHome from "../Home/TabHome";
import { FaRankingStar } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";

const exchangeData = [
  {
    id: 1,
    name: "Binance",
    logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    trustScore: 10,
    volumeNormalized: "€13,202,655,149",
    volume24h: "€22,670,014,370",
    visits: "59.3 M",
    trend: redGraph,
  },
  {
    id: 2,
    name: "Coinbase Exchange",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    trustScore: 10,
    volumeNormalized: "€4,156,401,184",
    volume24h: "€4,156,401,184",
    visits: "46.3 M",
    trend: greenGraph,
  },
  {
    id: 3,
    name: "OKX",
    logo: "https://cryptologos.cc/logos/okb-okb-logo.png",
    trustScore: 10,
    volumeNormalized: "€3,867,110,065",
    volume24h: "€3,867,110,065",
    visits: "23 M",
    trend: redGraph,
  },
  {
    id: 4,
    name: "Bitget",
    logo: "https://cryptologos.cc/logos/bitget-token-bgb-logo.png",
    trustScore: 10,
    volumeNormalized: "€3,464,205,501",
    volume24h: "€3,464,205,501",
    visits: "19.7 M",
    trend: redGraph,
  },
  {
    id: 5,
    name: "Bybit",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    trustScore: 10,
    volumeNormalized: "€2,945,195,417",
    volume24h: "€2,945,195,417",
    visits: "19 M",
    trend: greenGraph,
  },
  {
    id: 6,
    name: "Kraken",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    trustScore: 10,
    volumeNormalized: "€1,248,149,853",
    volume24h: "€1,248,149,853",
    visits: "7.75 M",
    trend: redGraph,
  },
  {
    id: 7,
    name: "KuCoin",
    logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png",
    trustScore: 10,
    volumeNormalized: "€822,870,105",
    volume24h: "€1,114,644,358",
    visits: "3.7 M",
    trend: greenGraph,
  },
  {
    id: 8,
    name: "Gate.io",
    logo: "https://cryptologos.cc/logos/gatechain-token-gt-logo.png",
    trustScore: 10,
    volumeNormalized: "€765,432,987",
    volume24h: "€890,654,321",
    visits: "2.5 M",
    trend: redGraph,
  },
  {
    id: 9,
    name: "Bitfinex",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    trustScore: 9,
    volumeNormalized: "€654,321,876",
    volume24h: "€789,654,321",
    visits: "5.6 M",
    trend: greenGraph,
  },
  {
    id: 10,
    name: "Huobi",
    logo: "https://cryptologos.cc/logos/huobi-token-ht-logo.png",
    trustScore: 9,
    volumeNormalized: "€543,210,765",
    volume24h: "€678,543,210",
    visits: "4.2 M",
    trend: redGraph,
  },
  {
    id: 11,
    name: "MEXC",
    logo: "https://cryptologos.cc/logos/mexc-global-mexc-logo.png",
    trustScore: 9,
    volumeNormalized: "€432,109,654",
    volume24h: "€567,432,109",
    visits: "3.1 M",
    trend: greenGraph,
  },
  {
    id: 12,
    name: "Poloniex",
    logo: "https://cryptologos.cc/logos/tron-trx-logo.png",
    trustScore: 8,
    volumeNormalized: "€321,098,543",
    volume24h: "€456,321,098",
    visits: "2.8 M",
    trend: redGraph,
  },
  {
    id: 13,
    name: "Bithumb",
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    trustScore: 8,
    volumeNormalized: "€210,987,432",
    volume24h: "€345,210,987",
    visits: "1.9 M",
    trend: greenGraph,
  },
  {
    id: 14,
    name: "Upbit",
    logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
    trustScore: 8,
    volumeNormalized: "€109,876,321",
    volume24h: "€234,109,876",
    visits: "1.5 M",
    trend: redGraph,
  },
  {
    id: 15,
    name: "Crypto.com",
    logo: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png",
    trustScore: 7,
    volumeNormalized: "€98,765,210",
    volume24h: "€198,765,210",
    visits: "900 K",
    trend: greenGraph,
  },
  {
    id: 16,
    name: "LATOKEN",
    logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    trustScore: 7,
    volumeNormalized: "€87,654,109",
    volume24h: "€176,543,109",
    visits: "850 K",
    trend: redGraph,
  },
  {
    id: 17,
    name: "LBank",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    trustScore: 6,
    volumeNormalized: "€76,543,210",
    volume24h: "€165,432,210",
    visits: "700 K",
    trend: greenGraph,
  },
  {
    id: 18,
    name: "ProBit Global",
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    trustScore: 6,
    volumeNormalized: "€65,432,109",
    volume24h: "€154,321,109",
    visits: "600 K",
    trend: redGraph,
  },
  {
    id: 19,
    name: "Hotbit",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    trustScore: 5,
    volumeNormalized: "€54,321,098",
    volume24h: "€143,210,098",
    visits: "500 K",
    trend: greenGraph,
  },
  {
    id: 20,
    name: "ZB.com",
    logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
    trustScore: 5,
    volumeNormalized: "€43,210,987",
    volume24h: "€132,109,987",
    visits: "400 K",
    trend: redGraph,
  },
];

const tabData = [
  {
    icons: <RiExchangeLine />,
    title: "Exchanges",
    tabUrl: "/exchanges",
  },
  {
    icons: <FaCubes />,
    title: "Decentralized Exchanges",
    tabUrl: "/decentralized",
  },
  {
    icons: <BsGraphUpArrow />,
    title: "Derivatives",
    tabUrl: "/derivatives",
  },
];

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    width: "60px",
  },
  {
    name: "Exchange",
    selector: (row) => row.name,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <Image
          src={row.logo}
          alt={row.name}
          width="30"
          height="30"
          className="me-2"
        />
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    name: "Trust Score",
    selector: (row) => row.trustScore,
    cell: (row) => (
      <div
        className="py-1 px-2 rounded-2 text-dark"
        style={{ background: "var(--lightGreen-color)", fontSize: "11px" }}
      >
        {row.trustScore}/10
      </div>
    ),
    width: "120px",
  },
  {
    name: "24h Volume (Normalized)",
    selector: (row) => row.volumeNormalized,
    sortable: true,
    right: true,
  },
  {
    name: "24h Volume",
    selector: (row) => row.volume24h,
    sortable: true,
    right: true,
  },
  {
    name: "Monthly Visits",
    selector: (row) => row.visits,
    sortable: true,
    right: true,
  },
  {
    name: "Last 7 Days",
    selector: (row) => row.trend,
    cell: (row) => (
      <img src={row.trend} alt={row.trend} className="img-fluid py-2" />
    ),
    right: true,
  },
];

const CryptoExchanges = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <h4 className="fw-bold">
                  Top Crypto Exchanges Ranked by Trust Score
                </h4>
                <p>
                  As of today, we track 216 crypto exchanges with a total 24h
                  trading volume of $133 Billion, a -23.8% change in the last 24
                  hours. Currently, the 3 largest cryptocurrency exchanges are
                  Binance, Coinbase Exchange, and OKX. Total tracked crypto
                  exchange reserves currently stands at $227 Billion.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <div className="tabArea-left-wrapper d-flex gap-1">
              {tabData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`tabArea-left ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{
                    color:
                      activeIndex === index
                        ? "var(--darkGreen-color)"
                        : "var(--dark-color)",
                    background:
                      activeIndex === index
                        ? "var(--lightGreen-color)"
                        : "transparent",
                    fontSize: activeIndex === index ? "14px" : "14px",
                    padding:
                      activeIndex === index ? "0.4rem 0.8rem" : "0.4rem 0.8rem",
                    borderRadius: activeIndex === index ? "0.5rem" : "0.5rem",
                  }}
                >
                  <TabHome
                    tabData={item}
                    activeIndex={activeIndex}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <div className="container">
        <DataTable
          columns={columns}
          data={exchangeData}
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default CryptoExchanges;
