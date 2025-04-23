import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const HelpCenter = () => {
  const categories = [
    {
      title: "CoinGecko Request Forms",
      desc: "for coin/token & exchange listing, information update for coins & token supply",
    },
    {
      title: "General",
      desc: "Enquiries on listing, detail updates and general information",
    },
    { title: "CoinGecko Ads" },
    { title: "GeckoTerminal" },
    { title: "CoinGecko API" },
    { title: "CoinGecko Premium" },
    { title: "CoinGecko Learn & Earn" },
    { title: "CoinGecko Store & Rewards" },
    { title: "Announcements" },
  ];

  return (
    <section className="supportCenter">
      <div className="searchBanner mb-5 text-center">
        <div className="position-relative mx-auto" style={{ width: "550px" }}>
          <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control ps-5 py-2"
            placeholder="Search for anything..."
          />
        </div>
      </div>
      <Container>
        <Row className="g-4 mb-5">
          {categories.map((item, idx) => (
            <Col md={4} key={idx}>
              <Card>
                <Card.Body className="text-center py-4 px-5">
                  <Card.Title className="fs-6">{item.title}</Card.Title>
                  {item.desc && (
                    <Card.Text className="mt-2">
                      {item.desc}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="promoted-articles">
          <h5 className="fw-bold mb-3">Promoted articles</h5>
          <p className="mb-0">
            IMPORTANT UPDATE: CoinGecko API Maintenance Rescheduled
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HelpCenter;
