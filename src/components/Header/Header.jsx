import React, { useState } from "react";
import { Col, Container, FormCheck, NavDropdown, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TopbarLeft from "./TopbarLeft";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";
import { IoSettingsOutline } from "react-icons/io5";
import AuthModal from "../Auth/AuthModal";
import SearchComponent from "../SearchComponent/SearchComponent";
import {
  RiBarChartFill,
  RiStackFill,
  RiShareBoxFill,
  RiFireFill,
  RiStarFill,
  RiAddCircleFill,
  RiArrowUpDownFill,
  RiToolsFill,
  RiCoinFill,
  RiScales3Fill,
  RiExchangeDollarFill,
  RiGlobalFill,
  RiSwapFill,
  RiLineChartFill,
  RiHeartFill,
  RiCoinsFill,
  RiPriceTag3Fill,
  RiBookOpenFill,
  RiSearchFill,
  RiNewspaperFill,
  RiFileTextFill,
  RiMoneyDollarCircleFill,
  RiVideoFill,
  RiMailFill,
  RiListCheck2,
} from "react-icons/ri";
import { MenuDropdown } from "..";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const topbarLeftData = [
    { title: "Coins:", valueNum: 17204, urlNum: "/" },
    { title: "Exchanges:", valueNum: 17204, urlNum: "/" },
    { title: "Market Cap:", valueNum: 17204, urlNum: "/" },
    { title: "24h Volume:", valueNum: 17204, urlNum: "/" },
    { title: "BTC Dominance:", valueNum: 17204, urlNum: "/" },
    { title: "BTC Dominance:", valueNum: 17204, urlNum: "/" },
    { title: "BTC Dominance:", valueNum: 17204, urlNum: "/" },
  ];

  const menuData = [
    {
      title: "Cryptocurrencies",
      items: [
        { to: "/", icon: RiBarChartFill, label: "By Market Cap" },
        { to: "/categories", icon: RiStackFill, label: "Categories" },
        { to: "/chains", icon: RiShareBoxFill, label: "Chains" },
        { to: "/highlights", icon: RiStarFill, label: "Highlights" },
        {
          to: "/new-cryptocurrencies",
          icon: RiAddCircleFill,
          label: "New Cryptocurrencies",
        },
        {
          to: "/gainers-losers",
          icon: RiArrowUpDownFill,
          label: "Gainers & Losers",
        },
        { to: "/all-coins", icon: RiCoinFill, label: "All Coins" },
        {
          to: "/compare-coins-nft",
          icon: RiScales3Fill,
          label: "Compare Coins and NFT",
        },
        { to: "/converter", icon: RiExchangeDollarFill, label: "Converter" },
        { to: "/global-chart", icon: RiGlobalFill, label: "Global Chart" },
      ],
    },
    {
      title: "Exchanges",
      items: [
        {
          to: "/crypto-exchanges",
          icon: RiExchangeDollarFill,
          label: "Crypto Exchanges",
        },
        {
          to: "/decentralized-exchanges",
          icon: RiSwapFill,
          label: "Decentralized Exchanges",
        },
        { to: "/derivatives", icon: RiLineChartFill, label: "Derivatives" },
      ],
    },
    {
      title: "NFT",
      items: [
        {
          to: "/nft-floor-price",
          icon: RiPriceTag3Fill,
          label: "NFT Floor Price",
        },
        {
          to: "/nft-related-coins",
          icon: RiCoinsFill,
          label: "NFT Related Coins",
        },
        { to: "/nft-watchlist", icon: RiHeartFill, label: "NFT Watchlist" },
        {
          to: "/nft-global-chart",
          icon: RiBarChartFill,
          label: "NFT Global Chart",
        },
      ],
    },
    {
      title: "Learn",
      items: [
        { to: "/learn-crypto", icon: RiBookOpenFill, label: "Learn Crypto" },
        {
          to: "/research-insights",
          icon: RiSearchFill,
          label: "Research Insights",
        },
        { to: "/news", icon: RiNewspaperFill, label: "News" },
        { to: "/reports", icon: RiFileTextFill, label: "Reports" },
        {
          to: "/learn-earn",
          icon: RiMoneyDollarCircleFill,
          label: "Learn & Earn",
        },
        { to: "/videos", icon: RiVideoFill, label: "Videos" },
        { to: "/newsletter", icon: RiMailFill, label: "Newsletter" },
        { to: "/glossary", icon: RiListCheck2, label: "Glossary" },
      ],
    },
  ];

  return (
    <>
      <header>
        <section className="top-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={10}>
                <div className="leftTop-section">
                  {topbarLeftData.map((data, index) => {
                    return <TopbarLeft key={index} topbarLeftData={data} />;
                  })}
                </div>
              </Col>
              <Col lg={2}>
                <div className="rightTop-section">
                  <button className="rightTop-section-content">
                    <NavDropdown
                      style={{ fontSize: "12px" }}
                      title={<IoSettingsOutline />}
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
                      <NavDropdown.Item
                        as="div"
                        className="d-flex justify-content-between align-items-center "
                      >
                        <Link
                          to="/#"
                          className="text-decoration-none text-dark flex-grow-1"
                        >
                          <div className="d-flex justify-content-between align-items-center gap-5">
                            <span>Dark Mode</span>
                          </div>
                        </Link>
                        <Form
                          className="d-inline-block"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FormCheck type="switch" id="custom-switch" />
                        </Form>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </button>
                  <button onClick={() => setShowModal(true)}>
                    <div
                      className="fw-semibold"
                      style={{ fontSize: "12px", letterSpacing: "0.04rem" }}
                    >
                      Login
                    </div>
                  </button>
                  <button
                    className="rightTop-section-content-signup"
                    onClick={() => setShowModal(true)}
                  >
                    <div
                      className="fw-semibold"
                      style={{ fontSize: "12px", letterSpacing: "0.04rem" }}
                    >
                      Sign Up
                    </div>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <AuthModal show={showModal} handleClose={() => setShowModal(false)} />
        </section>

        <section className="header-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="header-left-section">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={logo} alt="logo" width="140px" />
                    </Link>
                  </div>
                  <div className="menu-list">
                    <ul>
                      {menuData.map((menu) => (
                        <MenuDropdown
                          key={menu.title}
                          title={menu.title}
                          items={menu.items}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="pe-0">
                <div className="menu-list">
                  <ul className="justify-content-end align-items-center">
                    <li>
                      <SearchComponent />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};

export default Home;
