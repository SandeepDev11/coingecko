import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Fixed import
// import logo from "../../assets/images/logo.webp";
import logo from "../../assets/images/logo.png";
import googlePlay from "../../assets/images/google_play_store.svg";
import appStore from "../../assets/images/apple_app_store.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        "Crypto News",
        "Bitcoin Treasury",
        "Crypto Heatmap",
        "Crypto API",
      ],
    },
    {
      title: "Support",
      links: [
        "Request Form",
        "Advertising",
        "Candy Rewards Listing",
        "Help Center",
        "Bug Bounty",
        "FAQ",
      ],
    },
    {
      title: "About CoinGecko",
      links: [
        "About Us",
        { text: "Careers", badge: "Join Us" },
        "Company Blog",
        "Branding Guide",
        "Methodology",
        "Disclaimer",
        "Terms of Service",
        "Privacy Policy",
        "Ad Policy",
        "Cookie Preferences",
      ],
    },
    {
      title: "Community",
      links: [
        "X/Twitter",
        "Telegram Chat",
        "Telegram News",
        "Instagram",
        "Reddit",
        "Discord",
        "Facebook",
        "YouTube",
        "TikTok",
      ],
    },
  ];

  return (
    <footer className="py-5 mt-5" style={{borderTop: "1px solid var(--border-color)"}}>
      <Container>
        <Row className="gy-4" style={{borderBottom: "1px solid var(--border-color)"}}>
          <Col lg={5}>
            <h5 className="fw-bold">
              <img src={logo} alt="CoinGecko" width="150" className="pb-2" />
            </h5>
            <p style={{color: "#64748b"}}>
              CoinGecko provides a fundamental analysis of the crypto market. In
              addition to tracking price, volume, and market capitalization,
              CoinGecko tracks community growth, open-source code development,
              major events, and on-chain metrics.
            </p>
          </Col>

          {footerLinks.map((section, index) => (
            <Col key={index} className="footerCol">
              <h6 className="pb-2">{section.title}</h6>
              <ul className="list-unstyled footer-links">
                {section.links.map((link, i) =>
                  typeof link === "string" ? (
                    <li key={i}>
                      <Link to="/">{link}</Link>
                    </li>
                  ) : (
                    <li key={i}>
                      <Link to="/" className="">
                        {link.text}{" "}
                        {link.badge && (
                          <span className="badge bg-success" style={{background: "var(--darkGreen-color) !important"}}>{link.badge}</span>
                        )}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col lg={6}>
            <h6 className="fw-bold">
              Interested in staying up-to-date with cryptocurrencies?
            </h6>
            <p style={{color: "#64748b"}}>Get the latest crypto news, updates, and reports.</p>
          </Col>
          <Col lg={6} className="d-flex align-items-center">
            <Form className="w-100 d-flex justify-content-end">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className="me-2 subscribeInput" 
              />
              <Button variant="success" style={{background: "var(--darkGreen-color) !important", borderColor: "var(--darkGreen-color) !important", fontSize: "14px", fontWeight: "600"}}>Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4 align-items-center">
          <Col className="text-start">
            <p>© 2025 CoinGecko. All Rights Reserved.</p>
          </Col>
          <Col>
            <div className="d-flex justify-content-end pb-4">
              <Link to="/">
                <img src={googlePlay} alt="googlePlay" width="150" />
              </Link>
              <Link to="/">
                <img src={appStore} alt="appStore" width="150" />
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <p className="text-muted">
              <strong>IMPORTANT DISCLAIMER:</strong> All content provided herein
              our website, hyperlinked sites, associated applications, forums,
              blogs, social media accounts, and other platforms ("Site") is for
              your general information only, procured from third-party sources.
              We make no warranties of any kind in relation to our content,
              including but not limited to accuracy and up-to-dateness. No part
              of the content that we provide constitutes financial advice, legal
              advice, or any other form of advice. Trading is a highly risky
              activity that can lead to major losses. Please consult your
              financial advisor before making any decision.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
