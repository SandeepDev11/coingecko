import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormCheck,
  Row,
} from "react-bootstrap";
import redGraph from "../../../assets/Images/redGraph.svg";
import greenGraph from "../../../assets/Images/greenGraph.svg";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import BoxMarket from "../../Home/BoxMarket";
import CoinList from "../../CoinList/CoinList";
import TabData from "../../Home/TabData";
import { FaCheck, FaSearch } from "react-icons/fa";

function Chains() {
  const [showSection, setShowSection] = useState(true);
  const [selectedOption, setSelectedOption] = useState("All Chains");

  const options = ["All Chains", "Layer 0", "Layer 1", "Layer 2", "Layer 3"];

  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home-section-content">
                <Row>
                  <Col lg={10}>
                    <h4 className="fw-bold">
                      Top Crypto Categories By Market Cap
                    </h4>
                    <p>
                      This list of cryptocurrency categories ranks the largest
                      sectors by market cap. Note: Some cryptos may overlap
                      across multiple categories.
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
              </Col>
              <Col lg={4} className="px-0">
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
              <Col lg={4}></Col>
            </Row>
          </Container>
        </section>
      )}

      <section className="tabArea-wrapper py-4">
        <Container className="px-0">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <div className="tabArea-left-wrapper d-flex gap-1">
              <TabData />
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="CusBtn px-1 py-0">
                <Dropdown>
                  <DropdownToggle
                    id="dropdown-basic"
                    style={{ color: "var(--dark-color)" }}
                  >
                    <span style={{ fontWeight: "600", fontSize: "13px" }}>
                      {selectedOption}
                    </span>
                  </DropdownToggle>

                  <DropdownMenu>
                    {options.map((option) => (
                      <DropdownItem
                        key={option}
                        onClick={() => setSelectedOption(option)}
                        as={Link}
                        to=""
                      >
                        <div className="categories-dropdown-item">
                          <div className="d-flex align-items-center gap-5">
                            <span>{option}</span>
                            {selectedOption === option && (
                              <span
                                style={{
                                  color: "var(--darkGreen-color)",
                                }}
                              >
                                <FaCheck />
                              </span>
                            )}
                          </div>
                        </div>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="py-2 px-2 CusBtn">
                <FaSearch style={{ fontSize: "14px" }} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CoinList />
    </>
  );
}

export default Chains;
