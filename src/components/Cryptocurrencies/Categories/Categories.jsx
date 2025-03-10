import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormCheck,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import BoxMarket from "../../Home/BoxMarket";
import CoinList from "../../CoinList/CoinList";
import TabData from "../../Home/TabData";
import { TiArrowSortedDown } from "react-icons/ti";
import redGraph from "../../../assets/Images/redGraph.svg";
import greenGraph from "../../../assets/Images/greenGraph.svg";
import { FaCaretDown, FaCheck, FaSearch } from "react-icons/fa";
import CryptoTreemap from "./CryptoTreemap";
import DataTable from "react-data-table-component";
import graphImg11 from "../../../assets/Images/graphImg11.png";

function Categories() {
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
                  <Col lg={10}>
                    <h4 className="fw-bold">
                      Top Crypto Categories By Market Cap
                    </h4>
                    <p>
                      This list of cryptocurrency categories ranks the largest
                      sectors by market cap. Note: Some cryptos may overlap
                      across multiple categories.
                    </p>
                  </Col>
                  <Col lg={2}>
                    <FormCheck
                      reverse
                      type="switch"
                      id="custom-switch"
                      label="Highlights"
                      className="fw-semibold"
                      onChange={() => setShowSection((prev) => !prev)}
                      checked={showSection}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="border-0 categories-tabs"
        >
          <Tab eventKey="all-categories" title="All Categories">
            {/* Box Market Section */}
            {showSection && (
              <section className="home-section pt-4">
                <Container>
                  <Row>
                    <Col lg={4} className="px-0">
                      <div className="boxMarketWrapper">
                        <div className="d-flex justify-content-between align-items-center px-1 boxHeading">
                          <h6 className="fw-semibold">🔥 Trending</h6>
                          <p className="mb-0">
                            <Link to="/">
                              View All <MdKeyboardArrowRight />
                            </Link>
                          </p>
                        </div>
                        {boxMarketData.map((item, index) => (
                          <BoxMarket key={index} boxMarketData={item} />
                        ))}
                      </div>
                    </Col>

                    <Col lg={4}>
                      <div className="boxMarketWrapper">
                        <div className="d-flex justify-content-between align-items-center px-1 boxHeading">
                          <h6 className="fw-semibold">🚀 Top Gainers</h6>
                          <p className="mb-0">
                            <Link to="/">
                              View All <MdKeyboardArrowRight />
                            </Link>
                          </p>
                        </div>
                        {boxMarketData2.map((item, index) => (
                          <BoxMarket key={index} boxMarketData={item} />
                        ))}
                      </div>
                    </Col>

                    <Col lg={4} className="px-0">
                      <div className="boxMarketWrapper">
                        <div className="d-flex justify-content-between align-items-center px-1 boxHeading">
                          <h6 className="fw-semibold">🔥 Trending</h6>
                          <p className="mb-0">
                            <Link to="/">
                              View All <MdKeyboardArrowRight />
                            </Link>
                          </p>
                        </div>
                        {boxMarketData.map((item, index) => (
                          <BoxMarket key={index} boxMarketData={item} />
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            )}

            {/* Tab Area Section */}
            <section className="tabArea-wrapper py-4">
              <Container className="px-0">
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <div className="tabArea-left-wrapper d-flex gap-1">
                    <TabData />
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="CusBtn px-1 py-0">
                      <Dropdown>
                        <DropdownToggle
                          id="dropdown-basic"
                          style={{ color: "var(--dark-color)" }}
                        >
                          <span style={{ fontWeight: "600", fontSize: "13px" }}>
                            {selectedOption}
                          </span>
                        </DropdownToggle>

                        <DropdownMenu>
                          {options.map((option) => (
                            <DropdownItem
                              key={option}
                              onClick={() => setSelectedOption(option)}
                              as={Link}
                              to=""
                            >
                              <div className="categories-dropdown-item">
                                <div className="d-flex align-items-center gap-5">
                                  <span>{option}</span>
                                  {selectedOption === option && (
                                    <span
                                      style={{
                                        color: "var(--darkGreen-color)",
                                      }}
                                    >
                                      <FaCheck />
                                    </span>
                                  )}
                                </div>
                              </div>
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div className="py-2 px-2 CusBtn">
                      <FaSearch style={{ fontSize: "14px" }} />
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            <CoinList />
          </Tab>
          <Tab eventKey="key-statistics" title="Key Statistics">
            {/* Tab Area Section */}
            <section className="tabArea-wrapper py-4">
              <Container className="px-0">
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <div className="tabArea-left-wrapper d-flex gap-1">
                    <TabData />
                  </div>
                  <div className="py-2 px-2 CusBtn">
                    <FaSearch style={{ fontSize: "14px" }} />
                  </div>
                </div>
              </Container>
            </section>

            <section className="border rounded-4 p-4 mb-4">
              <Row>
                <Col lg={6}>
                  <h5 className="fw-bold border-bottom pb-3">
                    Top Categories by Market Cap
                  </h5>
                  <div className="container mt-4">
                    <DataTable
                      columns={columns}
                      data={data}
                      noHeader
                      dense
                      striped
                      highlightOnHover
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <h5 className="fw-bold">All Categories</h5>
                  <CryptoTreemap />
                </Col>
              </Row>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">Crypto Sectors Market Cap Chart</h5>
              <p>
                The chart below shows the market capitalization and dominance
                across major crypto sectors including Stablecoins,
                Exchange-based Tokens, Decentralized Finance (DeFi), and others
                over a period of time.
              </p>
              <Row className="p-4 border rounded-4">
                <Col>
                  <img
                    src={graphImg11}
                    alt="graphImg11"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">
                Major Crypto Sectors Performance Chart
              </h5>
              <p>
                The chart below shows the relative performance of major sectors
                over time, tracking their percentage gains and losses in-terms
                of market capitalization across different time periods.
              </p>
              <Row className="p-4 border rounded-4">
                <Col>
                  <img
                    src={graphImg11}
                    alt="graphImg11"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </section>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Categories;
