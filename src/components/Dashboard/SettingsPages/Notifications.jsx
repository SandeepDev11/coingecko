import React, { useState } from "react";
import { Card, Form, Row, Col, ButtonGroup, Button } from "react-bootstrap";

const NotificationSettings = () => {
  const [threshold, setThreshold] = useState("5%");

  const renderSwitch = () => <Form.Check type="switch" defaultChecked />;

  return (
    <>
      <h4 className="profileTitle">Notification Settings</h4>

      {/* Global */}
      <section className="border-bottom pb-4 mb-4">
        <h5 className="fw-semibold mb-3">Global</h5>

        <Row className="mb-3 align-items-center">
          <Col md={10}>
            <div className="fw-semibold">Bitcoin and Ethereum Movement</div>
            <div className="text-muted">
              You’ll be notified of important price milestones for Bitcoin and
              Ethereum.
            </div>
          </Col>
          <Col md={2} className="text-end">
            {renderSwitch()}
          </Col>
        </Row>

        <Row className="mb-2 align-items-center">
          <Col md={10}>
            <div className="fw-semibold">Watchlist</div>
            <div className="text-muted">
              You’ll be notified of significant increase & decrease of coins in
              your watchlist.
            </div>
          </Col>
          <Col md={2} className="text-end">
            {renderSwitch()}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={12}>
            <div className="text-muted mb-2">Price movement threshold</div>
            <ButtonGroup>
              {["5%", "8%", "10%"].map((val) => (
                <Button
                  key={val}
                  variant={threshold === val ? "dark" : "outline-dark"}
                  onClick={() => setThreshold(val)}
                  className="me-2"
                >
                  {val}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={10}>
            <div className="fw-semibold">Updates & Promotions</div>
            <div className="text-muted">
              Receive important CoinMarketCap promotions and updates.
            </div>
          </Col>
          <Col md={2} className="text-end">
            {renderSwitch()}
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={10}>
            <div className="fw-semibold">DEX Pair trade alerts</div>
            <div className="text-muted">
              You’ll be notified of significant trades on pairs you’ve
              subscribed to.
            </div>
          </Col>
          <Col md={2} className="text-end">
            {renderSwitch()}
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={10}>
            <div className="fw-semibold">Quest progress updates</div>
            <div className="text-muted">
              You’ll be notified of important updates of quests you have joined.
            </div>
          </Col>
          <Col md={2} className="text-end">
            {renderSwitch()}
          </Col>
        </Row>
      </section>

      {/* Community */}
      <section>
        <h5 className="fw-semibold mb-3">Community</h5>

        {[
          {
            title: "Follows",
            desc: "You’ll be notified when someone follows your account",
          },
          {
            title: "Likes",
            desc: "You’ll be notified when someone likes your post",
          },
          {
            title: "Replies",
            desc: "You’ll be notified of comments on your post or replies to your comment",
          },
          {
            title: "Mentions",
            desc: "You’ll be notified when someone mentions your username in a post",
          },
          {
            title: "Reposts",
            desc: "You’ll be notified someone reposts your post",
          },
          {
            title: "Polls",
            desc: "You’ll be notified when someone votes on your poll",
          },
        ].map((item, idx) => (
          <Row className="mb-3 align-items-center" key={idx}>
            <Col md={10}>
              <div className="fw-semibold">{item.title}</div>
              <div className="text-muted">{item.desc}</div>
            </Col>
            <Col md={2} className="text-end">
              {renderSwitch()}
            </Col>
          </Row>
        ))}
      </section>
    </>
  );
};

export default NotificationSettings;
