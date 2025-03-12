import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Image, Container, Row, Col } from "react-bootstrap";
import TabHome from "../Home/TabHome";
import { FaCubes } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

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
    name: "Uniswap V3 (Ethereum)",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    volume24h: "€1,558,063,263",
    marketShare: "20.9%",
    coinsPairs: "1,368 / 1,951",
    visits: "6,820,377",
    mostTradedPair: "WETH/0XA0B...",
    pairValue: "€570,970,235.24",
  },
  {
    id: 2,
    name: "Uniswap V3 (Arbitrum One)",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    volume24h: "€527,867,351",
    marketShare: "7.1%",
    coinsPairs: "246 / 445",
    visits: "6,820,377",
    mostTradedPair: "USDC/0X82A...",
    pairValue: "€235,571,886.36",
  },
  {
    id: 3,
    name: "Orca",
    logo: "https://cryptologos.cc/logos/orca-orca-logo.png",
    volume24h: "€502,323,575",
    marketShare: "6.7%",
    coinsPairs: "440 / 1,109",
    visits: "580,003",
    mostTradedPair: "SOL/EPJFW...",
    pairValue: "€232,612,503.09",
  },
  {
    id: 4,
    name: "Aerodrome SlipStream",
    logo: "https://cryptologos.cc/logos/aerodrome-aero-logo.png",
    volume24h: "€500,115,442",
    marketShare: "6.7%",
    coinsPairs: "140 / 190",
    visits: "386,650",
    mostTradedPair: "WETH/0X833...",
    pairValue: "€259,561,686.21",
  },
  {
    id: 5,
    name: "Curve (Ethereum)",
    logo: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png",
    volume24h: "€412,120,183",
    marketShare: "5.5%",
    coinsPairs: "200 / 419",
    visits: "196,234",
    mostTradedPair: "USDC/0XDAC...",
    pairValue: "€219,811,780.76",
  },
  {
    id: 6,
    name: "PancakeSwap V3 (BSC)",
    logo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png",
    volume24h: "€400,023,406",
    marketShare: "5.4%",
    coinsPairs: "535 / 919",
    visits: "1,551,956",
    mostTradedPair: "BSC-USD/0X...",
    pairValue: "€115,249,874.22",
  },
  {
    id: 7,
    name: "Meteora",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    volume24h: "€348,255,172",
    marketShare: "4.7%",
    coinsPairs: "614 / 2,422",
    visits: "1,236,153",
    mostTradedPair: "TRUMP/EPJF...",
    pairValue: "€103,869,868.59",
  },
  {
    id: 8,
    name: "SushiSwap",
    logo: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png",
    volume24h: "€290,000,000",
    marketShare: "3.9%",
    coinsPairs: "450 / 850",
    visits: "1,100,000",
    mostTradedPair: "ETH/USDC",
    pairValue: "€98,500,000.75",
  },
  {
    id: 9,
    name: "dYdX",
    logo: "https://cryptologos.cc/logos/dydx-dydx-logo.png",
    volume24h: "€275,500,000",
    marketShare: "3.7%",
    coinsPairs: "100 / 150",
    visits: "920,500",
    mostTradedPair: "BTC/USDT",
    pairValue: "€95,750,000.45",
  },
  {
    id: 10,
    name: "GMX",
    logo: "https://cryptologos.cc/logos/gmx-gmx-logo.png",
    volume24h: "€240,200,000",
    marketShare: "3.2%",
    coinsPairs: "85 / 135",
    visits: "780,000",
    mostTradedPair: "ETH/BTC",
    pairValue: "€85,600,000.20",
  },
  {
    id: 11,
    name: "Balancer",
    logo: "https://cryptologos.cc/logos/balancer-bal-logo.png",
    volume24h: "€190,300,000",
    marketShare: "2.8%",
    coinsPairs: "320 / 580",
    visits: "500,000",
    mostTradedPair: "DAI/ETH",
    pairValue: "€72,500,000.65",
  },
  {
    id: 12,
    name: "Raydium",
    logo: "https://cryptologos.cc/logos/raydium-ray-logo.png",
    volume24h: "€180,500,000",
    marketShare: "2.6%",
    coinsPairs: "150 / 290",
    visits: "480,000",
    mostTradedPair: "SOL/USDT",
    pairValue: "€68,900,000.35",
  },
  {
    id: 13,
    name: "Jupiter",
    logo: "https://cryptologos.cc/logos/jupiter-jup-logo.png",
    volume24h: "€160,200,000",
    marketShare: "2.3%",
    coinsPairs: "180 / 320",
    visits: "450,000",
    mostTradedPair: "USDT/SOL",
    pairValue: "€64,750,000.55",
  },
  {
    id: 14,
    name: "QuickSwap",
    logo: "https://cryptologos.cc/logos/quickswap-quick-logo.png",
    volume24h: "€140,750,000",
    marketShare: "2.0%",
    coinsPairs: "270 / 500",
    visits: "410,000",
    mostTradedPair: "MATIC/USDT",
    pairValue: "€59,200,000.40",
  },
  {
    id: 15,
    name: "Trader Joe",
    logo: "https://cryptologos.cc/logos/trader-joe-joe-logo.png",
    volume24h: "€120,900,000",
    marketShare: "1.7%",
    coinsPairs: "220 / 400",
    visits: "380,000",
    mostTradedPair: "AVAX/USDT",
    pairValue: "€54,600,000.30",
  },
  {
    id: 16,
    name: "Curve (Polygon)",
    logo: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png",
    volume24h: "€110,500,000",
    marketShare: "1.5%",
    coinsPairs: "160 / 310",
    visits: "350,000",
    mostTradedPair: "MATIC/DAI",
    pairValue: "€52,000,000.25",
  },
  {
    id: 17,
    name: "Saber",
    logo: "https://cryptologos.cc/logos/saber-sbr-logo.png",
    volume24h: "€100,000,000",
    marketShare: "1.3%",
    coinsPairs: "140 / 250",
    visits: "320,000",
    mostTradedPair: "SOL/USDC",
    pairValue: "€48,500,000.10",
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
    cell: (row) => (
      <div className="d-flex align-items-center">
        {row.logo && (
          <Image
            src={row.logo}
            alt={row.name}
            width={30}
            height={30}
            className="me-2"
            roundedCircle
          />
        )}
        {row.name}
      </div>
    ),
    sortable: true,
  },
  {
    name: "24h Volume",
    selector: (row) => row.volume24h,
    sortable: true,
    right: true,
  },
  {
    name: "% Market Share",
    selector: (row) => row.marketShare,
    sortable: true,
    right: true,
  },
  {
    name: "# Coins / # Pairs",
    selector: (row) => row.coinsPairs,
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
    name: "Most Traded Pair",
    selector: (row) => row.mostTradedPair,
    sortable: true,
    cell: (row) => (
      <div>
        {row.mostTradedPair}
        <br />
        <small className="text-muted">{row.pairValue}</small>
      </div>
    ),
    right: true,
  },
];

const DecenterExchange = () => {
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

      <section className="home-section">
        <Container>
          <Row>
            <Col lg={4} className="pe-0">
              <div className="boxMarket mb-2">
                <div className="boxMarket-content-left">
                  <h6 className="fw-bold">$2,843,511,074,602</h6>
                  <p className="mb-0">
                    DEX 24h Trading Volume{" "}
                    <span style={{ color: "var(--textRed)" }}>
                      <TiArrowSortedDown /> 12.5%
                    </span>
                  </p>
                </div>
                {/* <div className="boxMarket-content-right">
                  <div className="boxMarket-content-right-img">
                    <img src={redGraph} alt="" />
                  </div>
                </div> */}
              </div>
            </Col>
            <Col lg={4}>
              <div className="boxMarket">
                <div className="boxMarket-content-left">
                  <h6 className="fw-bold">$2,843,511,074,602</h6>
                  <p className="mb-0">Defi Volume Dominance (vs. Global)</p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="px-0">
              <div className="boxMarket mb-2">
                <div className="boxMarket-content-left">
                  <h6 className="fw-bold">$2,843,511,074,602</h6>
                  <p className="mb-0">Monthly DEX Visits</p>
                </div>
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
          responsive
        />
      </div>
    </>
  );
};

export default DecenterExchange;
