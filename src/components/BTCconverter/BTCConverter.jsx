import React, { useState } from "react";
import {
  Form,
  InputGroup,
  Modal,
  Button,
  FormControl,
} from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const BTCConverter = () => {
  const [btc, setBtc] = useState(0.1);
  const [usd, setUsd] = useState(5654);
  const [showModal, setShowModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    name: "US Dollar",
  });
  const [search, setSearch] = useState("");
  const exchangeRate = 56546;

  const currencies = [
    { code: "USD", name: "US Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "INR", name: "Indian Rupee" },
    { code: "KRW", name: "South Korean Won" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "TWD", name: "New Taiwan Dollar" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "SGD", name: "Singapore Dollar" },
  ];

  const handleBtcChange = (e) => {
    const btcValue = parseFloat(e.target.value) || 0;
    setBtc(btcValue);
    setUsd(btcValue * exchangeRate);
  };

  const handleUsdChange = (e) => {
    const usdValue = parseFloat(e.target.value) || 0;
    setUsd(usdValue);
    setBtc(usdValue / exchangeRate);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setShowModal(false);
  };

  return (
    <section className="currencyConverter">
      <Form className="currencyConverterForm">
        <InputGroup className="py-3 px-2 border-bottom">
          <Form.Control
            className="border-0 bg-transparent currencyInput"
            style={{ boxShadow: "none", fontSize: "14px" }}
            type="text"
            value={btc}
            onChange={handleBtcChange}
          />
          <InputGroup.Text className="currencyInputText">BTC</InputGroup.Text>
        </InputGroup>
        <InputGroup className="py-3 px-2">
          <Form.Control
            className="border-0 bg-transparent currencyInput"
            style={{ boxShadow: "none", fontSize: "14px" }}
            type="text"
            value={usd}
            onChange={handleUsdChange}
          />
          <InputGroup.Text
            onClick={() => setShowModal(!showModal)}
            className="currencyInputText"
          >
            <span className="pe-1">{selectedCurrency.code}</span>
            {showModal ? <FaAngleUp /> : <FaAngleDown />}
          </InputGroup.Text>
        </InputGroup>
      </Form>

      {/* Modal for Currency Selection */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">Select Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            placeholder="Search"
            className="mb-3"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {currencies
              .filter(
                (c) =>
                  c.name.toLowerCase().includes(search.toLowerCase()) ||
                  c.code.toLowerCase().includes(search.toLowerCase())
              )
              .map((currency, index) => (
                <Button
                  key={index}
                  variant="light"
                  block
                  onClick={() => handleCurrencySelect(currency)}
                >
                  {currency.code} - {currency.name}
                </Button>
              ))}
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default BTCConverter;
