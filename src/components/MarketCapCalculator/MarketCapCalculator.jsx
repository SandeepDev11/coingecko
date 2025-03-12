import React, { useState } from "react";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";
import { FaExchangeAlt } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 81692,
    marketCap: 1623779253097,
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 1871.75,
    marketCap: 226319104939,
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    marketCap: 96000000000,
    image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 0.6,
    marketCap: 32000000000,
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: 320,
    marketCap: 50000000000,
    image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 160,
    marketCap: 70000000000,
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
];

const MarketCapCalculator = () => {
  const [selectedA, setSelectedA] = useState(null);
  const [selectedB, setSelectedB] = useState(null);

  const swapSelections = () => {
    setSelectedA(selectedB);
    setSelectedB(selectedA);
  };

  const calculatePrice = () => {
    if (selectedA && selectedB) {
      return (
        (selectedA.price * selectedB.marketCap) /
        selectedA.marketCap
      ).toFixed(2);
    }
    return null;
  };

  return (
    <Container className="text-center">
      {/* Dropdowns */}
      <Row className="justify-content-center align-items-center mt-4 w-75 mx-auto">
        <Col xs={5}>
          <Dropdown className="border rounded p-2">
            <Dropdown.Toggle className="w-100 text-start text-dark">
              {selectedA ? (
                <>
                  <img
                    src={selectedA.image}
                    alt={selectedA.name}
                    width="20"
                    className="me-1"
                  />
                  {selectedA.name} ${selectedA.price.toLocaleString()}
                </>
              ) : (
                "e.g. Bitcoin, Ethereum"
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {cryptoData.map((item) => (
                <Dropdown.Item
                  key={item.symbol}
                  onClick={() => setSelectedA(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="20"
                    className="me-1"
                  />
                  {item.name} (${item.price.toLocaleString()})
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xs="auto">
          <div style={{ cursor: "pointer" }} onClick={swapSelections}>
            <FaExchangeAlt />
          </div>
        </Col>

        <Col xs={5}>
          <Dropdown className="border rounded p-2">
            <Dropdown.Toggle className="w-100 text-start text-dark">
              {selectedB ? (
                <>
                  <img
                    src={selectedB.image}
                    alt={selectedB.name}
                    width="20"
                    className="me-1"
                  />
                  {selectedB.name} ${selectedB.price.toLocaleString()}
                </>
              ) : (
                "e.g. Ethereum, BNB"
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {cryptoData.map((item) => (
                <Dropdown.Item
                  key={item.symbol}
                  onClick={() => setSelectedB(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="20"
                    className="me-1"
                  />
                  {item.name} (${item.price.toLocaleString()})
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Calculation Result */}
      <Row className="justify-content-center">
        <Col lg={4}>
          {/* Calculation Result */}
          {selectedA && selectedB && (
            <div className="border rounded-3 p-4 mt-4">
              <div className="d-flex align-items-center justify-content-center px-4 flex-wrap mb-3">
                <img
                  src={selectedA.image}
                  alt={selectedA.name}
                  width="20"
                  className="me-1"
                />
                <span className="fw-bold">{selectedA.name}</span>
                <span className="ms-2 text-muted">
                  price with the market cap of
                </span>
                <img
                  src={selectedB.image}
                  alt={selectedB.name}
                  width="20"
                  className="ms-2 me-1"
                />
                <span className="fw-bold">{selectedB.name}</span>
              </div>

              <h4 className="mt-2 text-center fw-bold">
                ${calculatePrice()}{" "}
                <span style={{ color: "red" }}>
                  ({(calculatePrice() / selectedA.price).toFixed(2)}x)
                </span>
              </h4>

              <div className="my-4">
                <div className="d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom">
                  <div className="d-flex gap-3">
                    <span className="fw-medium">{selectedA.name} mcap</span>{" "}
                    <span
                      className="text-muted p-1 rounded fw-semibold"
                      style={{
                        background: "var(--inputColor)",
                        fontSize: "12px",
                      }}
                    >
                      #{cryptoData.indexOf(selectedA) + 1}
                    </span>
                  </div>
                  <div className="fw-bold">
                    ${selectedA.marketCap.toLocaleString()}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 mt-3 border-bottom">
                  <div className="d-flex gap-3">
                    <span className="fw-medium">{selectedB.name} mcap</span>{" "}
                    <span
                      className="text-muted p-1 rounded fw-semibold"
                      style={{
                        background: "var(--inputColor)",
                        fontSize: "12px",
                      }}
                    >
                      #{cryptoData.indexOf(selectedB) + 1}
                    </span>
                  </div>
                  <div className="fw-bold">
                    {" "}
                    ${selectedB.marketCap.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="text-muted text-start">
                <img
                  src={logo}
                  alt="proCoinMaster"
                  width="120"
                  className="me-1"
                />
              </div>
            </div>
          )}
        </Col>
      </Row>

      {/* Popular Comparisons */}
      <Row className="justify-content-center">
        <Col lg={4}>
          <div className="border rounded-3 p-4 mt-4">
            <h5 className="mb-4 fw-bold">Popular comparisons</h5>
            {[
              {
                a: "Bitcoin",
                aLogo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
                b: "Ethereum",
                bLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
              },
              {
                a: "Solana",
                aLogo: "https://cryptologos.cc/logos/solana-sol-logo.png",
                b: "BNB",
                bLogo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
              },
              {
                a: "XRP",
                aLogo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
                b: "Tether",
                bLogo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
              },
            ].map((pair, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center my-4"
              >
                {/* Left Side Coin List (Sets selectedA) */}
                <div
                  className="d-flex gap-2 align-items-center leftSideCoinList"
                  style={{ width: "40%", cursor: "pointer" }}
                  onClick={() =>
                    setSelectedA(
                      cryptoData.find((coin) => coin.name === pair.a)
                    )
                  }
                >
                  <img
                    src={pair.aLogo}
                    alt={pair.a}
                    width="20"
                    className="me-1"
                  />
                  <span className="fw-semibold">{pair.a}</span>
                </div>

                <div className="text-center" style={{ width: "20%" }}>
                  <FaExchangeAlt />
                </div>

                {/* Right Side Coin List (Sets selectedB) */}
                <div
                  className="d-flex gap-2 align-items-center RightSideCoinList"
                  style={{ width: "40%", cursor: "pointer" }}
                  onClick={() =>
                    setSelectedB(
                      cryptoData.find((coin) => coin.name === pair.b)
                    )
                  }
                >
                  <img
                    src={pair.bLogo}
                    alt={pair.b}
                    width="20"
                    className="ms-1 me-1"
                  />
                  <span className="fw-semibold">{pair.b}</span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketCapCalculator;
