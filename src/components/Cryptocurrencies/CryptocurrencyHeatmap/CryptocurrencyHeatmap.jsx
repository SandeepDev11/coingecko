import React, { useState } from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import CryptoHeatmap from "./CryptoHeatmap";
import { Link } from "react-router";

function CryptocurrencyHeatmap() {
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col>
              <Breadcrumbs
                title1="Cryptocurrencies"
                title="Cryptocurrency Heatmap"
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
                  <Col lg={12}>
                    <h4 className="fw-bold">Live Cryptocurrency Heatmap</h4>
                    <p>
                      View a live visualization of the cryptocurrency market
                      below. The heatmap shows the current share of market for
                      the top cryptocurrencies, alongside live prices and the
                      24h change in price.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <CryptoHeatmap />
        <p className="pt-2 mb-0">Looking to add this heatmap on your website? Use our <Link className="fw-semibold" to="">Crypto Heatmap Widget</Link>.</p>
      </Container>
    </>
  );
}

export default CryptocurrencyHeatmap;
