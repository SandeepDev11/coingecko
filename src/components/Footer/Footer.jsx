import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import googlePlay from "../../assets/images/google_play_store.svg";
import appStore from "../../assets/images/apple_app_store.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Resources",
      links: [
        { text: "Crypto News", path: "/news" },
        // { text: "Bitcoin Treasury", path: "/bitcoin-treasury" },
        { text: "Crypto Heatmap", path: "/cryptocurrency-heatmap" },
        // { text: "Crypto API", path: "/api" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Request Form", path: "/request-form" },
        { text: "Advertising", path: "/advertising" },
        // { text: "Candy Rewards Listing", path: "/support/candy-rewards" },
        { text: "Help Center", path: "/help-center" },
        // { text: "Bug Bounty", path: "/support/bug-bounty" },
        { text: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "X/Twitter", path: "/twitter" },
        { text: "Telegram Chat", path: "/telegram-chat" },
        // { text: "Telegram News", path: "/telegram-news" },
        { text: "Instagram", path: "/instagram" },
        // { text: "Reddit", path: "/reddit" },
        { text: "Discord", path: "/discord" },
        { text: "Facebook", path: "/facebook" },
        { text: "YouTube", path: "/youtube" },
        // { text: "TikTok", path: "/tiktok" },
      ],
    },
    {
      title: "About ProCoinMaster",
      links: [
        { text: "About Us", path: "/about" },
        { text: "Careers", path: "/careers", badge: "Join Us" },
        { text: "Company Blog", path: "/blog" },
        { text: "Branding Guide", path: "/branding" },
        { text: "Methodology", path: "/methodology" },
        { text: "Disclaimer", path: "/disclaimer" },
        { text: "Terms of Service", path: "/terms" },
        { text: "Privacy Policy", path: "/privacy" },
        { text: "Ad Policy", path: "/ad-policy" },
        { text: "Cookie Preferences", path: "/cookie-preferences" },
      ],
    },
  ];

  return (
    <footer
      className="py-5 mt-5"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <Container>
        <Row
          className="gy-4"
          style={{ borderBottom: "1px solid var(--border-color)" }}
        >
          <Col lg={5}>
            <h5 className="fw-bold">
              <img
                src={logo}
                alt="procoinmaster"
                width="150"
                className="pb-2"
              />
            </h5>
            <p style={{ color: "#64748b" }}>
              ProCoinMaster provides a fundamental analysis of the crypto
              market. In addition to tracking price, volume, and market
              capitalization, ProCoinMaster tracks community growth, open-source
              code development, major events, and on-chain metrics.
            </p>
          </Col>

          {footerLinks.map((section, index) => (
            <Col key={index} className="footerCol">
              <h6 className="pb-2">{section.title}</h6>
              <ul className="list-unstyled footer-links">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path || "/"}>
                      {link.text || link}
                      {link.badge && (
                        <span
                          className="badge bg-success"
                          style={{
                            background: "var(--darkGreen-color) !important",
                            marginLeft: "5px",
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col lg={6}>
            <h6 className="fw-bold">
              Interested in staying up-to-date with cryptocurrencies?
            </h6>
            <p style={{ color: "#64748b" }}>
              Get the latest crypto news, updates, and reports.
            </p>
          </Col>
          <Col lg={6} className="d-flex align-items-center">
            <Form className="w-100 d-flex justify-content-end">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className="me-2 subscribeInput"
              />
              <Button
                variant="success"
                style={{
                  background: "var(--darkGreen-color) !important",
                  borderColor: "var(--darkGreen-color) !important",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4 align-items-center">
          <Col className="text-start">
            <p>© 2025 ProCoinMaster. All Rights Reserved.</p>
          </Col>
          <Col>
            <div className="d-flex justify-content-end pb-4">
              <Link to="/download/google-play">
                <img src={googlePlay} alt="googlePlay" width="150" />
              </Link>
              <Link to="/download/app-store">
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
