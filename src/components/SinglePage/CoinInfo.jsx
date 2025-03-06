import React, { useState } from "react";
import { Container, Tab, Tabs, Card, Alert } from "react-bootstrap";
import thumbsUp from "../../assets/images/thumbsUp.svg";
import thumbsDown from "../../assets/images/thumbsDown.svg";

const CoinInfo = ({ coinData }) => {
  const [key, setKey] = useState("about");
  const [feedback, setFeedback] = useState(null);
  return (
    <Container className="mt-4">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {coinData.map((section) => (
          <Tab
            key={section.eventKey}
            eventKey={section.eventKey}
            title={section.title}
          >
            {section.content.map((item, index) => (
              <Card className="border-0" key={index}>
                <Card.Body className="px-0">
                  <Card.Title className="fs-6 fw-semibold">
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Tab>
        ))}
      </Tabs>
      <div className="CusBtn d-inline-block">Read more</div>
      <Alert variant="light" className="mt-3">
        <div className="d-flex align-items-center gap-2">
          {!feedback && (
            <p className="mb-0">Do you find the content above helpful?</p>
          )}

          {!feedback ? (
            <>
              <button className="CusBtn" onClick={() => setFeedback("up")}>
                <img src={thumbsUp} alt="Thumbs Up" width="20px" />
              </button>
              <button className="CusBtn" onClick={() => setFeedback("down")}>
                <img src={thumbsDown} alt="Thumbs Down" width="20px" />
              </button>
            </>
          ) : (
            <span className="text-success fw-semibold">
              {feedback === "up"
                ? "Thanks for your positive feedback! 😊"
                : "We appreciate your input! 🙏"}
            </span>
          )}
        </div>
      </Alert>
    </Container>
  );
};

export default CoinInfo;
