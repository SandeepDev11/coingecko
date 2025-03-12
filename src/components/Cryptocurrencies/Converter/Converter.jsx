import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CurrenciesCalculator from "../../CurrenciesCalculator/CurrenciesCalculator";
import { Link } from "react-router";

const cryptoPairs = [
    ["BTC to USD", "BTC to GBP", "BTC to CAD", "BTC to AUD", "BTC to INR", "BTC to PHP"],
    ["ETH to USD", "ETH to GBP", "ETH to CAD", "ETH to AUD", "ETH to INR", "ETH to PHP"],
    ["XRP to USD", "XRP to GBP", "XRP to CAD", "XRP to AUD", "XRP to INR", "XRP to PHP"],
    ["BNB to USD", "BNB to GBP", "BNB to CAD", "BNB to AUD", "BNB to INR", "BNB to PHP"],
    ["SOL to USD", "SOL to GBP", "SOL to CAD", "SOL to AUD", "SOL to INR", "SOL to PHP"],
    ["ADA to USD", "ADA to GBP", "ADA to CAD", "ADA to AUD", "ADA to INR", "ADA to PHP"],
    ["DOGE to USD", "DOGE to GBP", "DOGE to CAD", "DOGE to AUD", "DOGE to INR", "DOGE to PHP"],
    ["SLP to PHP", "VIS to PHP", "AXS to PHP", "WEMIX to PHP", "TRX to INR", "BDX to INR", "POX to INR"],
  ];
  
  const popularCurrencies = [
    ["Crypto Price USD", "Crypto Price CAD", "Crypto Price AUD", "Crypto Price GBP", "Crypto Price INR", "Crypto Price PHP"],
    ["Crypto Price NGN", "Crypto Price BDT", "Crypto Price MYR", "Crypto Price ZAR", "Crypto Price SGD", "Crypto Price NZD"],
    ["Crypto Price PKR", "Crypto Price LKR"],
  ];

function Converter() {
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <h4 className="fw-bold">Cryptocurrency Converter Calculator</h4>
                <p>
                  Check the latest cryptocurrency prices against all global
                  currencies. CoinGecko's cryptocurrency converter is simple to
                  use and exchange rates are updated frequently.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-2">
        <Container>
          <CurrenciesCalculator />
        </Container>
      </section>

      <Container className="mt-4">
      {/* Popular Cryptocurrency Pairs */}
      <h5 className="fw-bold mb-3">Popular Cryptocurrency Pairs</h5>
      {cryptoPairs.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-2">
          {row.map((pair, colIndex) => {
            const url = `/convert/${pair.replace(/\s+/g, "-").toLowerCase()}`; // Generate URL
            return (
              <Col key={colIndex} md={2}>
                <Link to={url} className={`text-decoration-none fw-medium ${pair.includes("XRP to USD") ? "text-success" : ""}`}>
                  {pair}
                </Link>
              </Col>
            );
          })}
        </Row>
      ))}

      {/* Crypto Prices in Popular Currencies */}
      <h5 className="fw-bold mb-3">Crypto Prices in Popular Currencies</h5>
      {popularCurrencies.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-2">
          {row.map((currency, colIndex) => {
            const url = `/price/${currency.replace(/\s+/g, "-").toLowerCase()}`; // Generate URL
            return (
              <Col key={colIndex} md={2}>
                <Link to={url} className="text-decoration-none fw-medium">{currency}</Link>
              </Col>
            );
          })}
        </Row>
      ))}
    </Container>
    </>
  );
}

export default Converter;
