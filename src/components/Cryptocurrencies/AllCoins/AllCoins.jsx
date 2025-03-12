import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import CoinList from "../../CoinList/CoinList";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router";

function AllCoins() {
  const [selectedFilters, setSelectedFilters] = useState({
    marketCap: null,
    volume: null,
    change: null,
    price: null,
    category: null,
    exchange: null,
    platform: null,
  });

  const [searchTerms, setSearchTerms] = useState({
    marketCap: "",
    volume: "",
    change: "",
    price: "",
    category: "",
    exchange: "",
    platform: "",
  });

  const filterOptions = {
    marketCap: [
      { label: "All", value: "all" },
      { label: "$100M to $1B", value: "100M_1B" },
      { label: "$1B to $10B", value: "1B_10B" },
    ],
    volume: [
      { label: "All", value: "all" },
      { label: ">$1B", value: "gt_1B" },
      { label: "$100M to $1B", value: "100M_1B" },
    ],
    change: [
      { label: "All", value: "all" },
      { label: ">50%", value: "gt_50" },
      { label: "+10% to +50%", value: "10_50" },
    ],
    price: [
      { label: "All", value: "all" },
      { label: "$0 - $1", value: "0_1" },
      { label: "$1 - $10", value: "1_10" },
    ],
    category: [
      { label: "All", value: "all" },
      { label: "DeFi", value: "defi" },
      { label: "Metaverse", value: "metaverse" },
    ],
    exchange: [
      { label: "All", value: "all" },
      { label: "Binance", value: "binance" },
      { label: "Coinbase", value: "coinbase" },
    ],
    platform: [
      { label: "All", value: "all" },
      { label: "Ethereum", value: "ethereum" },
      { label: "Solana", value: "solana" },
    ],
  };

  const getFilteredOptions = (key) =>
    filterOptions[key].filter((option) =>
      option.label.toLowerCase().includes(searchTerms[key].toLowerCase())
    );

  const handleSelect = (key, option) => {
    setSelectedFilters({ ...selectedFilters, [key]: option });
  };

  const handleSearchChange = (key, value) => {
    setSearchTerms({ ...searchTerms, [key]: value });
  };

  const handleReset = () => {
    setSelectedFilters({
      marketCap: null,
      volume: null,
      change: null,
      price: null,
      category: null,
      exchange: null,
      platform: null,
    });
    setSearchTerms({
      marketCap: "",
      volume: "",
      change: "",
      price: "",
      category: "",
      exchange: "",
      platform: "",
    });
  };

  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <Row>
                  <Col lg={12}>
                    <h4 className="fw-bold">All Cryptocurrencies</h4>
                    <p>View a full list of active cryptocurrencies</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Dropdowns */}
      <section className="allCoin-DropDown-wrapper">
        <Container>
          <div className=" d-flex gap-2 align-items-center pb-4">
            {Object.keys(filterOptions).map((key) => (
              <Dropdown key={key} className="rounded-3 allCoin-DropDown-top">
                <Dropdown.Toggle className="text-dark rounded-3">
                  <span style={{ fontSize: "12px" }}>
                    {selectedFilters[key]
                      ? selectedFilters[key].label
                      : key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-3 allcoinScroll">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    value={searchTerms[key]}
                    onChange={(e) => handleSearchChange(key, e.target.value)}
                    className="rounded-3 mb-2 px-2"
                  />
                  <div className="allCoin-DropDown">
                    {getFilteredOptions(key).map((option) => (
                      <Dropdown.Item
                        key={option.value}
                        onClick={() => handleSelect(key, option)}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <span className="fw-semibold">{option.label}</span>
                        {selectedFilters[key]?.value === option.value && (
                          <FaCheck className="text-success" />
                        )}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            ))}

            {/* Search & Reset Buttons */}
            <Button className="rightTop-section-content-signup">Search</Button>
            <button onClick={handleReset}>Reset</button>
          </div>
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

      {/* News Section */}
      <section className="blog-section">
        <div className="blog-btn text-center mt-4">
          <Link to="/" className="CusBtn">
            See More News
          </Link>
        </div>
      </section>
    </>
  );
}

export default AllCoins;
