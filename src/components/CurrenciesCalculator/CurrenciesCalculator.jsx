import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { getCryptoPrice } from "./../../services/cryptoService";

const CurrenciesCalculator = () => {
  const [amount, setAmount] = useState(1);
  const [cryptoFrom, setCryptoFrom] = useState("ethereum");
  const [cryptoTo, setCryptoTo] = useState("tether");
  const [conversionRate, setConversionRate] = useState(null);

  useEffect(() => {
    if (cryptoFrom && cryptoTo) {
      fetchConversionRate();
    }
  }, [cryptoFrom, cryptoTo]);

  const fetchConversionRate = async () => {
    const rate = await getCryptoPrice(cryptoFrom, cryptoTo);
    setConversionRate(rate);
  };

  const handleSwap = () => {
    setCryptoFrom(cryptoTo);
    setCryptoTo(cryptoFrom);
  };

  return (
    <Container className="p-5 border rounded-4">
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Enter Amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              min="0"
              onChange={(e) => setAmount(Math.max(0, e.target.value))}
              className="border rounded-3 py-2"
            />
          </Form.Group>
        </Col>
        <Col md={3} className="pe-0">
          <Form.Group>
            <Form.Label>Select Currency</Form.Label>
            <Dropdown
              onSelect={(eventKey) => setCryptoFrom(eventKey)}
              className="border rounded-3"
            >
              <Dropdown.Toggle
                variant="secondary"
                className="text-dark w-100 text-start py-2"
              >
                {cryptoFrom.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey="bitcoin">Bitcoin (BTC)</Dropdown.Item>
                <Dropdown.Item eventKey="ethereum">
                  Ethereum (ETH)
                </Dropdown.Item>
                <Dropdown.Item eventKey="tether">Tether (USDT)</Dropdown.Item>
                <Dropdown.Item eventKey="solana">Solana (SOL)</Dropdown.Item>
                <Dropdown.Item eventKey="ripple">XRP (XRP)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>
        <Col md={1} className="text-center align-self-center pt-4 px-0">
          <div
            style={{ cursor: "pointer", fontSize: "18px" }}
            className="fw-bold"
            onClick={handleSwap}
          >
            ⇄
          </div>
        </Col>
        <Col md={3} className="ps-0">
          <Form.Group>
            <Form.Label>Select Coin</Form.Label>
            <Dropdown
              onSelect={(eventKey) => setCryptoTo(eventKey)}
              className="border rounded-3"
            >
              <Dropdown.Toggle
                variant="secondary"
                className="text-dark w-100 text-start py-2"
              >
                {cryptoTo.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey="bitcoin">Bitcoin (BTC)</Dropdown.Item>
                <Dropdown.Item eventKey="ethereum">
                  Ethereum (ETH)
                </Dropdown.Item>
                <Dropdown.Item eventKey="tether">Tether (USDT)</Dropdown.Item>
                <Dropdown.Item eventKey="solana">Solana (SOL)</Dropdown.Item>
                <Dropdown.Item eventKey="ripple">XRP (XRP)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>
      </Row>

      <div className="d-flex align-items-center gap-2">
        <p className="fw-bold mb-0" style={{ fontSize: "16px" }}>
          {amount} {cryptoFrom.toUpperCase()} = {" "}
          {conversionRate ? (amount * conversionRate).toFixed(6) : "loading..."}{" "}
          {cryptoTo.toUpperCase()}
        </p>
        <small>Last updated at 08:53AM UTC.</small>
      </div>
    </Container>
  );
};

export default CurrenciesCalculator;
