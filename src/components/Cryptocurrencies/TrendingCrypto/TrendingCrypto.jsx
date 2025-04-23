import React, { useState } from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import CoinList from "../../CoinList/CoinList";
import blogImg from "../../../assets/images/blog.webp";
import trandingIconsImg from "../../../assets/images/icons1.webp";
import { Link } from "react-router";
import BlogCard from "../../Blog/BlogCard";
import { FaBitcoin, FaBtc, FaEthereum } from "react-icons/fa6";
import { SiDogecoin, SiLitecoin } from "react-icons/si";
import TrendingCategories from "../Highlights/TrendingCategories";

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

const categories = [
  {
    title: "Binance HODLer Airdrop",
    icon1: <FaBitcoin />,
    icon2: <FaEthereum />,
    icon3: <SiDogecoin />,
    moreCount: 8,
    url: "/categories",
  },
  {
    title: "Ethereum Staking Rewards",
    icon1: <FaEthereum />,
    icon2: <SiLitecoin />,
    icon3: <FaBitcoin />,
    moreCount: 5,
    url: "/categories",
  },
  {
    title: "Dogecoin Lucky Draw",
    icon1: <SiDogecoin />,
    icon2: <FaBtc />,
    icon3: <SiLitecoin />,
    moreCount: 12,
    url: "/categories",
  },
  {
    title: "Litecoin Halving Event",
    icon1: <SiLitecoin />,
    icon2: <FaBitcoin />,
    icon3: <FaEthereum />,
    moreCount: 7,
    url: "/categories",
  },
  {
    title: "Solana NFT Drop",
    icon1: <SiDogecoin />,
    icon2: <FaEthereum />,
    icon3: <FaBtc />,
    moreCount: 6,
    url: "/categories",
  },
  {
    title: "Polkadot Staking",
    icon1: <SiLitecoin />,
    icon2: <SiDogecoin />,
    icon3: <FaBitcoin />,
    moreCount: 9,
    url: "/categories",
  },
  {
    title: "Avalanche Rewards",
    icon1: <FaBtc />,
    icon2: <FaEthereum />,
    icon3: <SiLitecoin />,
    moreCount: 4,
    url: "/categories",
  },
  {
    title: "Cardano Delegation",
    icon1: <SiDogecoin />,
    icon2: <SiLitecoin />,
    icon3: <FaEthereum />,
    moreCount: 10,
    url: "/categories",
  },
];


function TrendingCrypto() {
  const [selectedOption, setSelectedOption] = useState("Market Cap");

  const options = [
    "Market Cap",
    "24H Volume",
    "24H Gainers",
    "24H Looser",
    "Tranding",
  ];
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col>
              <Breadcrumbs
                title1="Cryptocurrencies"
                title="Top Trending Cryptocurrencies Today"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="categories-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <Row>
                  <Col lg={12}>
                    <h4 className="fw-bold">
                      Top Trending Cryptocurrencies Today
                    </h4>
                    <p>
                      Discover the top trending cryptocurrencies on CoinGecko.
                      This list is sorted by coins that are most searched for in
                      the last 3 hours. MANTRA, Arcblock, and DeepBook are the
                      top 3 trending crypto now. In the past 24 hours, the price
                      of MANTRA changed by
                      <span style={{ color: "var(--darkGreen-color)" }}>
                        {" "}
                        7.5%
                      </span>
                      , Arcblock price changed by{" "}
                      <span style={{ color: "var(--darkGreen-color)" }}>
                        {" "}
                        29.0%
                      </span>
                      , and DeepBook price changed by{" "}
                      <span style={{ color: "var(--darkGreen-color)" }}>
                        {" "}
                        24.9%
                      </span>
                      .
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Coin List Section */}
      <Container>
        <Row>
          <Col lg={12}>
            <CoinList />
          </Col>
        </Row>
      </Container>

      <section className="">
        <Container>
          <h4 className="fw-bold mb-4">Trending Cryptocurrencies by Country</h4>
          <Row className="row-cols-2 row-cols-md-4 row-cols-lg-5">
            {categories.map((category, index) => (
              <Col key={index} className="mb-4">
                <TrendingCategories
                  title={category.title}
                  iconCoin={category.icon1}
                  iconCoin2={category.icon2}
                  iconCoin3={category.icon3}
                  moreCount={category.moreCount}
                  url={category.url}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* News section */}
      <section className="blog-section">
        <Container style={{ borderBottom: "1px solid var(--border-color)" }}>
          <div className="blog-title">
            <h4 className="fw-semibold">
            Articles related to Top Trending Cryptocurrencies Today
            </h4>
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
          <Link to="" className="CusBtn">
            See More News
          </Link>
        </div>
      </section>
    </>
  );
}

export default TrendingCrypto;
