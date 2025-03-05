import React from "react";
import {
  Button,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  ProgressBar,
  Row,
  Tooltip,
} from "react-bootstrap";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import coinImg from "../../assets/images/bitcoin.webp";
import { MdInfoOutline } from "react-icons/md";
import graphImg from "../../assets/images/graph.png";


function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip-2" {...props} className="custom-tooltip">
      <div className="text-start p-2">
        <h6>How is the price of Bitcoin (BTC) calculated?</h6>
        <p>
          The price of Bitcoin (BTC) is calculated in real-time by aggregating
          the latest data across 212 exchanges and 3703 markets, using a global
          volume-weighted average formula. Learn more about how crypto prices
          are calculated on CoinGecko.
        </p>
      </div>
    </Tooltip>
  );
}

const stats = [
  {
    label: "Market Cap",
    value: "$1,754,044,383,868",
    tooltip: "Total value of the cryptocurrency in circulation.",
  },
  {
    label: "Fully Diluted Valuation",
    value: "$1,754,044,383,868",
    tooltip: "Estimated market cap if all coins were in circulation.",
  },
  {
    label: "24 Hour Trading Vol",
    value: "$60,452,521,645",
    tooltip: "Total volume of this cryptocurrency traded in the last 24 hours.",
  },
  {
    label: "Circulating Supply",
    value: "19,832,371",
    tooltip: "The number of coins that are currently available in the market.",
  },
  {
    label: "Total Supply",
    value: "21,000,000",
    tooltip: "The total number of coins that will ever exist.",
  },
  {
    label: "Max Supply",
    value: "21,000,000",
    tooltip: "The maximum number of coins that will ever exist.",
  },
];

function SinglePage() {
  return (
    <section className="single-page-section py-3">
      <Container>
        <Row>
          <Col lg={4} className="pe-4">
            <div className="singlePage-left">
              <Breadcrumbs title="Bitcoin Price" title1="Cryptocurrencies" />
              <div className="coinInfo">
                <div className="d-flex align-items-center gap-2">
                  <Image src={coinImg} alt="Bitcoin" width="25" />
                  <h5 className="mb-0 fw-bold">Bitcoin</h5>
                  <p className="fw-medium mb-0">BTC Price</p>
                  <span
                    className="badge text-dark"
                    style={{ backgroundColor: "var(--inputColor)" }}
                  >
                    #1
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 py-2">
                  <p className="fw-bold fs-2 mb-0">$90,311.00</p>
                  <p className="mb-0 fs-5 fw-semibold text-nowrap text-success">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                    </svg>{" "}
                    15%
                  </p>
                  <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                    <span className="d-inline-flex align-items-center cursor-pointer">
                      <MdInfoOutline />
                    </span>
                  </OverlayTrigger>
                </div>
                <div className="">
                  <div className="pb-2">
                    <span>1.0000 BTC</span>
                    <span style={{ color: "var(--textRed)" }}>
                      {" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        version="1.2"
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                      </svg>{" "}
                      24.8%
                    </span>
                  </div>
                  <ProgressBar now={95} />
                  <div className="d-flex justify-content-between pt-2 fw-semibold">
                    <div>
                      <span>$81,688.43</span>
                    </div>
                    <div>
                      <span>$88,895.65</span>
                    </div>
                    <div>
                      <span>$88,895.65</span>
                    </div>
                  </div>
                  <div className="py-3">
                    <Button
                      variant="light"
                      className="d-flex align-items-center mb-3 w-100"
                    >
                      <span className="me-auto">Add to Portfolio</span>
                      <small className="text-muted">1,956,637 added</small>
                    </Button>

                    <ListGroup variant="flush">
                      {stats.map((stat, index) => (
                        <ListGroup.Item
                          key={index}
                          className="d-flex justify-content-between px-0 py-3"
                        >
                          <div className="d-flex align-items-center gap-2">
                            {stat.label}
                            <OverlayTrigger
                              placement="bottom"
                              overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                  <div className="text-start">
                                    {stat.tooltip}
                                  </div>
                                </Tooltip>
                              }
                            >
                              <span className="d-inline-flex align-items-center cursor-pointer">
                                <MdInfoOutline style={{ cursor: "pointer" }} />
                              </span>
                            </OverlayTrigger>
                          </div>
                          <strong>{stat.value}</strong>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </div>
                <div className="infoWrapper">
                  <h5 className="fw-bold">Info</h5>
                  <ListGroup variant="flush">
                  <ListGroupItem className="d-flex justify-content-between py-3 px-0">
                        <div className="d-flex align-items-center gap-2">
                          Market Cap
                        </div>
                        <strong>$1,754,044,383,868</strong>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between py-3 px-0">
                        <div className="d-flex align-items-center gap-2">
                          Market Cap
                        </div>
                        <strong>$1,754,044,383,868</strong>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between py-3 px-0">
                        <div className="d-flex align-items-center gap-2">
                          Market Cap
                        </div>
                        <strong>$1,754,044,383,868</strong>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between py-3 px-0">
                        <div className="d-flex align-items-center gap-2">
                          Market Cap
                        </div>
                        <strong>$1,754,044,383,868</strong>
                      </ListGroupItem>
                    </ListGroup>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} className="border-start">
            <div className="singlePage-right">
              <img src={graphImg} alt="graph" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SinglePage;
