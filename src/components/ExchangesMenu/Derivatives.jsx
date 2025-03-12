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

const exchangeData = [
  {
    id: 1,
    name: "Binance (Futures)",
    logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    settlement: "Cash",
    openInterest24h: "€18,159,689,852",
    volume24h: "€77,460,634,903",
    perpetuals: 449,
    futures: 54,
    trend: redGraph,
    trend2: greenGraph,
  },
  {
    id: 2,
    name: "Toobit Futures",
    logo: "https://cryptologos.cc/logos/toobit-logo.png",
    settlement: "Cash",
    openInterest24h: "€11,714,193,232",
    volume24h: "€29,149,622,663",
    perpetuals: 383,
    futures: 0,
    trend: greenGraph,
    trend2: redGraph,
  },
  {
    id: 3,
    name: "Bybit (Futures)",
    logo: "https://cryptologos.cc/logos/bybit-logo.png",
    settlement: "Cash",
    openInterest24h: "€10,898,299,352",
    volume24h: "€28,748,824,229",
    perpetuals: 590,
    futures: 95,
    trend: redGraph,
    trend2: greenGraph,
  },
  {
    id: 4,
    name: "Bitget Futures",
    logo: "https://cryptologos.cc/logos/bitget-logo.png",
    settlement: "Cash",
    openInterest24h: "€10,851,386,844",
    volume24h: "€27,252,378,962",
    perpetuals: 538,
    futures: 0,
    trend: greenGraph,
    trend2: redGraph,
  },
  {
    id: 5,
    name: "Gate.io (Futures)",
    logo: "https://cryptologos.cc/logos/gate-io-logo.png",
    settlement: "Cash",
    openInterest24h: "€10,743,431,071",
    volume24h: "€11,612,617,544",
    perpetuals: 662,
    futures: 0,
    trend: greenGraph,
    trend2: redGraph,
  },
  {
    id: 6,
    name: "Deepcoin (Derivatives)",
    logo: "https://cryptologos.cc/logos/deepcoin-logo.png",
    settlement: "Cash",
    openInterest24h: "€6,890,090,897",
    volume24h: "€69,170,007,902",
    perpetuals: 194,
    futures: 0,
    trend: redGraph,
    trend2: greenGraph,
  },
  {
    id: 7,
    name: "OKX (Futures)",
    logo: "https://cryptologos.cc/logos/okx-logo.png",
    settlement: "Cash",
    openInterest24h: "€5,643,260,978",
    volume24h: "€34,340,360,348",
    perpetuals: 293,
    futures: 105,
    trend: redGraph,
    trend2: greenGraph,
  },
  {
    id: 8,
    name: "MEXC (Futures)",
    logo: "https://cryptologos.cc/logos/mexc-logo.png",
    settlement: "Cash",
    openInterest24h: "€5,638,036,125",
    volume24h: "€22,499,231,323",
    perpetuals: 899,
    futures: 0,
    trend: greenGraph,
    trend2: redGraph,
  },
  {
    id: 9,
    name: "Bitmart Futures",
    logo: "https://cryptologos.cc/logos/bitmart-logo.png",
    settlement: "Cash",
    openInterest24h: "€5,093,637,067",
    volume24h: "€28,612,356,571",
    perpetuals: 403,
    futures: 0,
    trend: greenGraph,
    trend2: redGraph,
  },
];

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    width: "60px",
  },
  {
    name: "Exchange",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <img
          src={row.logo}
          alt={row.name}
          width="30"
          height="30"
          className="me-2"
        />
        {row.name}
      </div>
    ),
    minWidth: "250px",
  },
  {
    name: "Settlement",
    selector: (row) => row.settlement,
    cell: (row) => (
      <div className="px-2 py-1 rounded-3" style={{background: "var(--lightGreen-color)", fontSize: '12px'}} >{row.settlement}</div>
    ),
    width: "120px",
  },
  {
    name: "24h Open Interest",
    selector: (row) => row.openInterest24h,
    sortable: true,
    width: "180px",
    right: true,
  },
  {
    name: "24h Volume",
    selector: (row) => row.volume24h,
    sortable: true,
    width: "180px",
    right: true,
  },
  {
    name: "Perpetuals",
    selector: (row) => row.perpetuals,
    sortable: true,
    width: "120px",
    right: true,
  },
  {
    name: "Futures",
    selector: (row) => row.futures,
    sortable: true,
    width: "120px",
    right: true,
  },
  {
    name: "Open Interest (7d)",
    selector: (row) => row.trend,
    cell: (row) => (
      <img src={row.trend} alt={row.trend} className="img-fluid py-2" />
    ),
    right: true,
  },
  {
    name: "Volume (7d)",
    selector: (row) => row.trend2,
    cell: (row) => (
      <img src={row.trend2} alt={row.trend2} className="img-fluid py-2" />
    ),
    right: true,
  },
];

const Derivatives = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <h4 className="fw-bold">
                  Top Decentralized Exchanges Ranked by 24H Trading Volume
                </h4>
                <p>
                  We track 952 decentralized crypto exchanges with a total 24h
                  trading volume of $8.13 Billion, a -22.35% change in the last
                  24 hours. Currently, the DeFi volume dominance is at 5.8%, and
                  the 3 largest decentralized exchanges by volume are Uniswap V3
                  (Ethereum), Uniswap V3 (Arbitrum One), and Orca.
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

export default Derivatives;
