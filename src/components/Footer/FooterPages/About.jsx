import React from "react";
import aboutBanner from "../../../assets/Images/aboutBanner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import MilestoneTimeline from "./MilestoneTimeline";

const About = () => {
  const items = [
    "CoinDesk",
    "CoinTelegraph",
    "Bloomberg",
    "Reuters",
    "Yahoo Finance",
    "The Guardian",
    "Forbes",
  ];
  return (
    <>
      <Container className="pt-4">
        <div className="aboutBanner-wrapper">
          <div className="aboutBannerImg">
            <img
              src={aboutBanner}
              alt="aboutBanner"
              className="img-fluid rounded-4"
            />
          </div>
          <div className="aboutContent pt-5 text-center">
            <h3 className="fw-bold mb-3">The ProCoinMaster Story</h3>
            <p className="fs-6">
              TM (CEO) and Bobby (COO) founded CoinGecko on April 8, 2014, with
              the mission to democratize access to cryptocurrency data and
              empower users with actionable insights. Since then, we have
              equipped millions of users globally with the tools and knowledge
              to succeed in the world of cryptocurrency.
            </p>
            <p className="fs-6">
              We provide users with a comprehensive 360-degree view of the
              market and deliver accurate, reliable and in-depth information
              from thousands of data points – including price, trading volume,
              market capitalization, contract addresses, community statistics
              and more.
            </p>
          </div>
        </div>

        <div className="impactNumber-wrapper text-center pt-3">
          <h3 className="fw-bold">Our Impact in Numbers</h3>
          <p className="fs-6">
            CoinGecko is the world’s largest independent cryptocurrency data
            aggregator with over 16,000+ different cryptoassets tracked across
            more than 1,000+ exchanges worldwide.
          </p>
          <div className="numberContent-wrapper pt-4">
            <Row>
              <Col lg={4}>
                <div className="numberContent pb-4">
                  <h1
                    className="fw-bold"
                    style={{ color: "var(--green-color)" }}
                  >
                    200 million +
                  </h1>
                  <p className="mb-0">Monthly Page Views</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="numberContent pb-4">
                  <h1
                    className="fw-bold"
                    style={{ color: "var(--green-color)" }}
                  >
                    10 million +
                  </h1>
                  <p className="mb-0">Average Monthly Users</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="numberContent pb-4">
                  <h1
                    className="fw-bold"
                    style={{ color: "var(--green-color)" }}
                  >
                    1 million +
                  </h1>
                  <p className="mb-0">Total App Downloads</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="numberContent pb-4">
                  <h1
                    className="fw-bold"
                    style={{ color: "var(--green-color)" }}
                  >
                    4.8
                  </h1>
                  <p className="mb-0">Average App Rating</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="numberContent pb-4">
                  <h1
                    className="fw-bold"
                    style={{ color: "var(--green-color)" }}
                  >
                    10 billion +
                  </h1>
                  <p className="mb-0">Monthly API Calls</p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="numberContent pb-4">
                  <h1
                    className="fw-bold"
                    style={{ color: "var(--green-color)" }}
                  >
                    8 years +
                  </h1>
                  <p className="mb-0">Historical Crypto Data</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="impactNumber-wrapper text-center pt-3">
          <h3 className="fw-bold">Trusted by Top Industry Publishers</h3>
          <p className="fs-6">
            CoinGecko provides neutral, unbiased, and reliable cryptocurrency
            data often cited by top industry publishers. Our data has been
            featured on:
          </p>
          <div className="marqueeDiv">
            <div className="marquee">
              <div className="marqueeContent">
                {[...items, ...items].map((item, index) => (
                  <div key={index} className="marqueeItem">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <MilestoneTimeline/>
      </Container>
    </>
  );
};

export default About;
