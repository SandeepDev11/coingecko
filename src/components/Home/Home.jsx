import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormCheck,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import BoxMarket from "./BoxMarket";
import redGraph from "../../assets/images/redGraph.svg";
import greenGraph from "../../assets/images/greenGraph.svg";
import trandingIconsImg from "../../assets/images/icons1.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-router";
import { Link } from "react-router-dom";
import { FaFire, FaRankingStar, FaShapes } from "react-icons/fa6";
import TabHome from "./TabHome";
import { HiMiniNumberedList, HiNumberedList, HiOutlineSparkles } from "react-icons/hi2";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoinList from "../CoinList/CoinList";

const Home = () => {
  const [showDesc, setShowDesc] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleDesc = (e) => {
    e.preventDefault();
    setShowDesc(!showDesc);
  };

  const boxMarketData = [
    {
      trandingIcons: trandingIconsImg,
      trandingIconsAlt: "trandingIcons",
      trandingIconsName: "Hyperliquid",
      valueTranding: "$0.5406",
      valueTrandingPercent: "24.8%",
    },
    {
      trandingIcons: trandingIconsImg,
      trandingIconsAlt: "trandingIcons",
      trandingIconsName: "Hyperliquid",
      valueTranding: "$0.5406",
      valueTrandingPercent: "24.8%",
    },
    {
      trandingIcons: trandingIconsImg,
      trandingIconsAlt: "trandingIcons",
      trandingIconsName: "Hyperliquid",
      valueTranding: "$0.5406",
      valueTrandingPercent: "24.8%",
    },
  ];

  const tabData = [
    {
      icons: <FaRankingStar />,
      title: "All",
      tabUrl: "/",
    },
    {
      icons: <HiMiniNumberedList />,
      title: "Highlights",
      tabUrl: "/",
    },
    {
      icons: <FaShapes />,
      title: "Categories",
      tabUrl: "/",
    },
    {
      icons: <FaFire />,
      title: "World Liberty Financial Portfolio",
      tabUrl: "/",
    },
    {
      icons: <FaFire />,
      title: "Polkadot Ecosystem",
      tabUrl: "/",
    },
    {
      icons: <HiMiniNumberedList />,
      title: "Highlights",
      tabUrl: "/",
    },
  ];

  return (
    <>
      <main>
        {/* Home Section */}
        <section className="home-section py-4">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="home-section-content">
                  <Row>
                    <Col lg={10}>
                      <h4 className="fw-bold">
                        Cryptocurrency Prices by Market Cap
                      </h4>
                      <p>
                        The global cryptocurrency market cap today is $2.85
                        Trillion, a
                        <span style={{ color: "var(--textRed)" }}>
                          <TiArrowSortedDown /> 12.5%
                        </span>
                        change in the last 24 hours.
                        <Link onClick={toggleDesc} className="fw-semibold">
                          {showDesc ? " Read more" : " Hide Details"}
                        </Link>
                      </p>
                    </Col>
                    <Col lg={2}>
                      <FormCheck
                        reverse
                        type="switch"
                        id="custom-switch"
                        label="Highlights"
                        className="fw-semibold"
                      />
                    </Col>
                  </Row>
                  {!showDesc && (
                    <p>
                      Total cryptocurrency trading volume in the last day is at
                      $216 Billion. Bitcoin dominance is at 58.5%, and Ethereum
                      dominance is at 8.77%. CoinGecko is now tracking 17,195
                      cryptocurrencies. The largest gainers in the industry
                      right now are
                      <Link to="/" className="fw-semibold">
                        {" "}
                        Polkadot Ecosystem{" "}
                      </Link>{" "}
                      and
                      <Link to="/" className="fw-semibold">
                        {" "}
                        XRP Ledger Ecosystem{" "}
                      </Link>{" "}
                      cryptocurrencies.
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Box Market Section */}
        <section className="home-section">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="boxMarket mb-2">
                  <div className="boxMarket-content-left">
                    <h5 className="fw-semibold">$2,843,511,074,602</h5>
                    <p className="mb-0">
                      Market Cap{" "}
                      <span style={{ color: "var(--textRed)" }}>
                        <TiArrowSortedDown /> 12.5%
                      </span>
                    </p>
                  </div>
                  <div className="boxMarket-content-right">
                    <div className="boxMarket-content-right-img">
                      <img src={redGraph} alt="" />
                    </div>
                  </div>
                </div>
                <div className="boxMarket">
                  <div className="boxMarket-content-left">
                    <h5 className="fw-semibold">$2,843,511,074,602</h5>
                    <p className="mb-0">24h Trading Volume</p>
                  </div>
                  <div className="boxMarket-content-right">
                    <div className="boxMarket-content-right-img">
                      <img src={greenGraph} alt="" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="px-0">
                <div className="boxMarketWrapper">
                  <div className="d-flex justify-content-between align-items-center px-1">
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
                  <div className="d-flex justify-content-between align-items-center px-1">
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

        {/* Tab Area Section */}
        <section className="tabArea-wrapper py-4">
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
                        activeIndex === index
                          ? "0.4rem 0.8rem"
                          : "0.4rem 0.8rem",
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
              <div className="tabArea-right-wrapper">
                <div className="rightTop-section-content">
                  <NavDropdown
                    title={
                      <span className="d-flex align-items-center gap-2 fw-bold">
                        <HiOutlineSparkles />
                        <span>Customise</span>
                      </span>
                    }
                  >
                    <NavDropdown.Item to="/#">
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div>Language</div>
                        <div>English</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item to="/#">
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div>Currency</div>
                        <div>USD</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item to="/#">
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <div>Dark Mode</div>
                        <div>
                          <Form>
                            <FormCheck type="switch" id="custom-switch" />
                          </Form>
                        </div>
                      </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Coin List Section */}
        <CoinList />
      </main>
    </>
  );
};

export default Home;
