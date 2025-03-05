import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className="faq-section">
      <Container>
        <Row>
          <p className="text-start">
            Frequently Asked Questions
            <span
              className="fw-semibold"
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => setShowContent(!showContent)}
            >
              {showContent ? "Hide" : "Show"}
            </span>
          </p>
          {showContent && (
            <Col>
              <FaqItem
                title="Your All-in-One Platform For Cryptocurrency Market Data"
                content="Welcome to CoinGecko! As crypto traders and investors
                ourselves, we understand the hassle of browsing multiple
                websites and exchanges to find reliable information and market
                data for a coin. That’s why we built CoinGecko – so you can
                access all crypto information in one place."
              />
              <FaqItem
                title="Get Reliable Live Cryptocurrency Prices"
                content="Crypto prices and market data have always been at the core of
                our product – it’s what we do best. We provide unbiased
                cryptocurrency data for the community, whether to help you
                make an investment decision or check the value of your crypto
                assets."
              />
              <FaqItem
                title="We Offer Market Data, Crypto Charts & Latest News"
                content="Crypto prices alone don’t mean much, so we’ve included data
                like market cap and fully diluted value. It’s only when you
                pair current prices with historical data, statistics, news,
                and more that you get a full picture of a coin’s performance."
              />
              <FaqItem
                title="Crypto Prices in Global Currencies"
                content="If you’re looking for crypto prices in your local
                currencies, check out our cryptocurrency pairs:"
              />
              <ul className="ps-3">{renderCryptoPairs()}</ul>
              <FaqItem
                title="How To Compare Crypto Market Cap?"
                content="Crypto market cap can be divided into three categories:"
              />
              <ul className="ps-3">
                <li>
                  Large-cap cryptocurrencies like Bitcoin and Ethereum have
                  market caps above $10 billion.
                </li>
                <li>
                  Mid-cap cryptocurrencies have market caps between $1 billion
                  and $10 billion.
                </li>
                <li>
                  Small-cap cryptocurrencies have market caps below $1 billion.
                </li>
              </ul>
              <FaqItem
                title="List of Top Ranking Cryptocurrencies"
                content="Our cryptocurrency list features the top cryptocurrencies
                today, including Bitcoin, Ethereum, and over ten thousand
                altcoins. Our team curates the cryptocurrency list, vetting
                each coin to reduce the risk of scams and remove inactive
                projects."
              />
              <FaqItem
                title="Get The Most Value Out Of CoinGecko"
                content="Getting into crypto can be daunting. But our beginner-friendly
                articles and videos are there to help you take your first
                steps into the decentralized internet."
              />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

const FaqItem = ({ title, content }) => (
  <>
    <h6 className="fw-semibold">{title}</h6>
    <p>{content}</p>
  </>
);

const renderCryptoPairs = () => {
  const pairs = [
    {
      region: "Overall most popular",
      links: ["BTC-USD", "ETH-USD", "XRP-USD"],
    },
    {
      region: "Australia",
      links: ["BTC-AUD", "ETH-AUD", "XRP-AUD", "SOL-AUD", "DOGE-AUD"],
    },
    { region: "Canada", links: ["BTC-CAD", "XRP-CAD", "SOL-CAD", "USDT-CAD"] },
    {
      region: "United Kingdom",
      links: ["BTC-GBP", "ETH-GBP", "XRP-GBP", "SOL-GBP", "USDT-GBP"],
    },
    {
      region: "India",
      links: ["BTC-INR", "ETH-INR", "USDT-INR", "SOL-INR", "XRP-INR"],
    },
  ];

  return pairs.map(({ region, links }) => (
    <li key={region}>
      {region}:{" "}
      {links.map((link, index) => (
        <span key={link}>
          <Link to="/" className="fw-semibold">
            {link}
          </Link>
          {index < links.length - 1 && ", "}
        </span>
      ))}
    </li>
  ));
};

export default FaqSection;
