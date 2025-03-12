import React, { useState } from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import CoinList from "../../CoinList/CoinList";
import blogImg from "../../../assets/images/blog.webp";
import trandingIconsImg from "../../../assets/images/icons1.webp";
import { Link } from "react-router";
import BlogCard from "../../Blog/BlogCard";
import { FaCheck } from "react-icons/fa";

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

function CryptoGainersLosers() {
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
                title="Top Crypto Gainers and Losers"
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
                  <Col lg={9}>
                    <h4 className="fw-bold">Top Crypto Gainers and Losers</h4>
                    <p>
                      Discover the largest gainers and losers across all major
                      cryptocurrencies listed on CoinGecko, based on price
                      movements in the last 24 hours.
                    </p>
                  </Col>
                  <Col lg={3}>
                    <Row>
                      <Col lg={6}>
                        <div className="CusBtn text-center py-0">
                          <Dropdown>
                            <DropdownToggle
                              id="dropdown-basic"
                              style={{ color: "var(--dark-color)" }}
                            >
                              <span
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
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
                      </Col>
                      <Col lg={6}>
                        <div className="CusBtn text-center py-0">
                          <Dropdown>
                            <DropdownToggle
                              id="dropdown-basic"
                              style={{ color: "var(--dark-color)" }}
                            >
                              <span
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
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
                      </Col>
                    </Row>
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
          <Col lg={6}>
            <CoinList />
          </Col>
          <Col lg={6}>
            <CoinList />
          </Col>
        </Row>
      </Container>

      {/* News section */}
      <section className="blog-section">
        <Container style={{ borderBottom: "1px solid var(--border-color)" }}>
          <div className="blog-title">
            <h4 className="fw-semibold">
              Articles related to Crypto Gainers and Losers
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
          <Link to="/" className="CusBtn">
            See More News
          </Link>
        </div>
      </section>
    </>
  );
}

export default CryptoGainersLosers;
