import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import newsletterImg from "../../../assets/Images/newsletters.webp";

const NewsletterSubscription = () => {
  return (
    <section className="pb-5 text-center bg-white">
      <Container>
        <img
          src={newsletterImg}
          alt="Newsletter"
          className="mb-4"
          style={{ maxWidth: "160px" }}
        />
        <h4 className="fw-bold">
          Interested to stay{" "}
          <span className="text-dark">up-to-date with cryptocurrencies?</span>
        </h4>
        <p className="text-muted">
          Get the latest crypto news, updates, and reports by subscribing to our
          free newsletter.
        </p>

        <Form className="d-flex justify-content-center mt-4 gap-2 flex-wrap">
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            style={{ maxWidth: "320px", borderRadius: "8px" }}
          />
          <Button
            style={{
              background: "var(--darkGreen-color) !important",
              borderColor: "var(--darkGreen-color) !important",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Subscribe Now
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default NewsletterSubscription;
