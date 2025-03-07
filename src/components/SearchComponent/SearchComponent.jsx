import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router";
import BoxMarket from "../Home/BoxMarket";
import { FaFire, FaRegImage, FaShapes } from "react-icons/fa";
import greenGraph from "../../assets/images/greenGraph.svg";
import PiStatsCard from "./PiStatsCard";
import { IoMdArrowDropdown } from "react-icons/io";

const SearchComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const boxMarketData = [
    {
      trandingIcons: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      trandingIconsAlt: "Bitcoin",
      trandingIconsName: "Bitcoin",
      valueTranding: "$62,345",
      valueTrandingPercent: "5.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      trandingIconsAlt: "Ethereum",
      trandingIconsName: "Ethereum",
      valueTranding: "$3,450",
      valueTrandingPercent: "2.8%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/solana-sol-logo.png",
      trandingIconsAlt: "Solana",
      trandingIconsName: "Solana",
      valueTranding: "$145.23",
      valueTrandingPercent: "7.1%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
      trandingIconsAlt: "Avalanche",
      trandingIconsName: "Avalanche",
      valueTranding: "$52.67",
      valueTrandingPercent: "3.9%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      trandingIconsAlt: "Cardano",
      trandingIconsName: "Cardano",
      valueTranding: "$0.75",
      valueTrandingPercent: "4.3%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      trandingIconsAlt: "XRP",
      trandingIconsName: "XRP",
      valueTranding: "$0.65",
      valueTrandingPercent: "1.5%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
      trandingIconsAlt: "Polkadot",
      trandingIconsName: "Polkadot",
      valueTranding: "$8.90",
      valueTrandingPercent: "6.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      trandingIconsAlt: "Dogecoin",
      trandingIconsName: "Dogecoin",
      valueTranding: "$0.12",
      valueTrandingPercent: "9.4%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/chainlink-link-logo.png",
      trandingIconsAlt: "Chainlink",
      trandingIconsName: "Chainlink",
      valueTranding: "$18.76",
      valueTrandingPercent: "3.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
      trandingIconsAlt: "Litecoin",
      trandingIconsName: "Litecoin",
      valueTranding: "$92.50",
      valueTrandingPercent: "2.0%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
      trandingIconsAlt: "Shiba Inu",
      trandingIconsName: "Shiba Inu",
      valueTranding: "$0.000027",
      valueTrandingPercent: "8.1%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/polygon-matic-logo.png",
      trandingIconsAlt: "Polygon",
      trandingIconsName: "Polygon",
      valueTranding: "$1.34",
      valueTrandingPercent: "5.6%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
      trandingIconsAlt: "Cosmos",
      trandingIconsName: "Cosmos",
      valueTranding: "$10.89",
      valueTrandingPercent: "4.7%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
      trandingIconsAlt: "Arbitrum",
      trandingIconsName: "Arbitrum",
      valueTranding: "$2.16",
      valueTrandingPercent: "3.3%",
    },
    {
      trandingIcons:
        "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
      trandingIconsAlt: "Optimism",
      trandingIconsName: "Optimism",
      valueTranding: "$3.05",
      valueTrandingPercent: "6.5%",
    },
  ];

  const piStats = [
    { label: "Rank", value: "19" },
    { label: "Price", value: "€0.9439" },
    {
      label: "24h%",
      value: (
        <span className="text-danger">
          <IoMdArrowDropdown /> 24.8%
        </span>
      ),
      className: "text-danger",
    },
    { label: "Market Cap", value: "€161,119,601" },
    { label: "24h Trading Volume", value: "€486,591,822" },
  ];

  return (
    <div className="search-container" ref={searchRef}>
      <div className="searchBar d-flex align-items-center position-relative">
        <input
          placeholder="Search"
          type="search"
          className="mr-sm-2 form-control"
          style={{ border: "unset !important" }}
          onFocus={() => setShowDropdown(true)}
        />
        <div className="searchIcon">
          <svg
            fill="#000"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="search"
          >
            <title>Search</title>
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
          </svg>
        </div>
        <div className="searchLink">
          <span>/</span>
        </div>
      </div>

      {showDropdown && (
        <div className="search-dropdown position-absolute bg-white shadow">
          <Container className="px-4">
            <div className="search-dropdown-input position-relative border-bottom p-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="position-absolute top-50 start-0 translate-middle ms-3"
              />
              <input
                type="search"
                placeholder="Search Token, Dex Pairs, NFT, Exchanges..."
                className="w-100 ps-5 py-2 border-0 rounded-0 bg-transparent"
                style={{ outline: "none" }}
              />
              {/* <FontAwesomeIcon icon={faTimes} className="position-absolute top-50 end-0 translate-middle me-3" style={{ cursor: "pointer" }} /> */}
            </div>
            <Row className="py-4">
              <Col lg={7} className="border-end">
                <Tabs className="mb-3 border-0 search-dropdown-tabs">
                  <Tab
                    eventKey="about"
                    title={
                      <span>
                        <FaFire /> Trending
                      </span>
                    }
                    className="fw-semibold"
                  >
                    <Card className="border-0">
                      <Card.Body className="px-0 search-dropdown-card">
                        <div className="py-2 small text-muted">
                          Trending Search 🔥
                        </div>
                        {boxMarketData.map((item, index) => (
                          <BoxMarket key={index} boxMarketData={item} />
                        ))}
                      </Card.Body>
                    </Card>
                  </Tab>

                  <Tab
                    eventKey="market"
                    title={
                      <span>
                        <FaRegImage /> NFTs
                      </span>
                    }
                    className="fw-semibold"
                  >
                    <Card className="border-0">
                      <Card.Body className="px-0 search-dropdown-card">
                        <div className="py-2 small text-muted">
                          Trending NFT 💎
                        </div>
                        {boxMarketData.map((item, index) => (
                          <BoxMarket key={index} boxMarketData={item} />
                        ))}
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab
                    eventKey="categories"
                    title={
                      <span>
                        <FaShapes /> Categories
                      </span>
                    }
                    className="fw-semibold"
                  >
                    <Card className="border-0">
                      <Card.Body className="px-0 search-dropdown-card">
                        <div className="py-2 small text-muted">
                          Trending Categories ✨
                        </div>
                        {boxMarketData.map((item, index) => (
                          <BoxMarket
                            key={index}
                            boxMarketData={item}
                            onMouseEnter={() => setHoveredBoxMarket(item)}
                          />
                        ))}
                      </Card.Body>
                    </Card>
                  </Tab>
                </Tabs>
              </Col>
              <Col lg={5}>
                <PiStatsCard
                  title="PI Stats"
                  stats={piStats}
                  graph={greenGraph}
                  description={{
                    title: "What Is Pi Network?",
                    text: "Pi Network is a social cryptocurrency with real-world utility.",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
