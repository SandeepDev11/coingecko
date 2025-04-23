import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import TabData from "../../Home/TabData";
import CoinDataList from "./CoinDataList";
import CryptoCategories from "./TrendingCategories";
import TrendingCategories from "./TrendingCategories";
import { FaBitcoin, FaBtc, FaEthereum } from "react-icons/fa6";
import { SiDogecoin, SiLitecoin } from "react-icons/si";

const trendingCoins = [
  {
    imgSrc: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
    name: "Bitcoin",
    price: "€75,083.79",
    change: "-0.6%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
    name: "Ethereum",
    price: "€3,567.45",
    change: "+2.3%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
    name: "BNB",
    price: "€517.35",
    change: "0.0%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
    name: "Solana",
    price: "€140.12",
    change: "+5.6%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=025",
    name: "XRP",
    price: "€0.72",
    change: "-1.2%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=025",
    name: "Cardano",
    price: "€0.58",
    change: "+3.8%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=025",
    name: "Dogecoin",
    price: "€0.14",
    change: "-4.5%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=025",
    name: "Polkadot",
    price: "€6.43",
    change: "+2.1%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=025",
    name: "Avalanche",
    price: "€32.56",
    change: "-0.9%",
  },
  {
    imgSrc: "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=025",
    name: "Shiba Inu",
    price: "€0.000021",
    change: "+7.2%",
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

function Highlights() {
  const numLists = 9;

  return (
    <>
      {/* Crypto Highlights Section */}
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <h4 className="fw-bold">Crypto Highlights</h4>
                <p>
                  Which cryptocurrencies are people more interested in? Track
                  and discover the most interesting cryptocurrencies based on
                  market and CoinGecko activity.
                </p>
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
              <TabData />
            </div>
          </div>
        </Container>
      </section>

      {/* Trending Coins Section */}
      <section className="py-4">
        <Container>
          <Row>
            {Array.from({ length: numLists }).map((_, index) => (
              <Col key={index} lg={4} className="mb-3 px-2">
                <CoinDataList data={trendingCoins} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <h4 className="fw-bold mb-4">Trending Categories</h4>
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
    </>
  );
}

export default Highlights;
