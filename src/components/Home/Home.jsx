import React, { useState } from "react";
import {
  Button,
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
import { Link } from "react-router-dom";
import CoinList from "../CoinList/CoinList";
import FaqSection from "./FaqSection";
import blogImg from "../../assets/images/blog.webp";
import BlogCard from "../Blog/BlogCard";
import CustomizeTable from "./CustomizeTable";
import TabData from "./TabData";
import coinimg from "../../assets/Images/bitcoin.webp"
const Home = () => {
  const [showDesc, setShowDesc] = useState(true);
  const [showSection, setShowSection] = useState(true);

  const toggleDesc = (e) => {
    e.preventDefault();
    setShowDesc(!showDesc);
  };

  const boxMarketData = [
    {
      trandingIcons: coinimg,
      trandingIconsAlt: "Bitcoin",
      trandingIconsName: "Bitcoin",
      valueTranding: "$62,345",
      valueTrandingPercent: "5.2%",
    },
    {
      trandingIcons: coinimg,
      trandingIconsAlt: "Ethereum",
      trandingIconsName: "Ethereum",
      valueTranding: "$3,450",
      valueTrandingPercent: "2.8%",
    },
    {
      trandingIcons: coinimg,
      trandingIconsAlt: "Solana",
      trandingIconsName: "Solana",
      valueTranding: "$145.23",
      valueTrandingPercent: "7.1%",
    },
  ];

  const boxMarketData2 = [
    {
      trandingIcons: coinimg,
      trandingIconsAlt: "Binance Coin",
      trandingIconsName: "Binance Coin",
      valueTranding: "$410.45",
      valueTrandingPercent: "3.2%",
    },
    {
      trandingIcons: coinimg,
      trandingIconsAlt: "XRP",
      trandingIconsName: "XRP",
      valueTranding: "$0.64",
      valueTrandingPercent: "4.5%",
    },
    {
      trandingIcons: coinimg  ,
      trandingIconsAlt: "Cardano",
      trandingIconsName: "Cardano",
      valueTranding: "$0.78",
      valueTrandingPercent: "6.8%",
    },
  ];

  const blogCardData = [
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
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
                        onChange={() => setShowSection((prev) => !prev)}
                        checked={showSection}
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
        {showSection && (
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
              </Row>
            </Container>
          </section>
        )}

        {/* Tab Area Section */}
        <section className="tabArea-wrapper py-4">
          <Container className="pe-0">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <div className="tabArea-left-wrapper d-flex gap-1">
                <TabData />
              </div>
              <div className="tabArea-right-wrapper">
                <CustomizeTable />
              </div>
            </div>
          </Container>
        </section>

        {/* Coin List Section */}
        <CoinList />

        {/* Faq section */}
        <FaqSection />

        {/* News section */}
        <section className="blog-section">
          <Container style={{ borderBottom: "1px solid var(--border-color)" }}>
            <div className="blog-title">
              <h4 className="fw-semibold">Latest Crypto News</h4>
            </div>
            <Row className="py-3">
              {blogCardData.map((item, index) => (
                <Col lg={3} key={index}>
                  <BlogCard blogCardData={item} />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="blog-btn text-center mt-4">
            <Link to="/" className="CusBtn">
              See More News
            </Link>
          </div>
        </section>

        {/* Articles section */}
        <section className="blog-section pt-4">
          <Container style={{ borderBottom: "1px solid var(--border-color)" }}>
            <div className="blog-title">
              <h4 className="fw-semibold">Featured Articles</h4>
            </div>
            <Row className="py-3">
              {blogCardData.map((item, index) => (
                <Col lg={3} key={index}>
                  <BlogCard blogCardData={item} />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="blog-btn text-center mt-4">
            <Link to="/" className="CusBtn">
              See More Articles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
