import React, { useState } from "react";
import MarketCapCalculator from "../../MarketCapCalculator/MarketCapCalculator";
import { Container, Tab, Tabs } from "react-bootstrap";

function CompareCryptocurrencies() {
  const [key, setKey] = useState("all-categories");
  return (
    <>
      <Container className="ComCryto text-center">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="border-0 categories-tabs my-4"
        >
          <Tab eventKey="all-categories" title="Market Cap">
            <div className="">
              <h3 className="text-center fw-semibold mt-3">
                Calculate the price of A <br /> with the{" "}
                <span style={{ color: "var(--darkGreen-color)" }}>
                  market cap
                </span>{" "}
                of B
              </h3>
              <MarketCapCalculator />
            </div>
          </Tab>
          <Tab eventKey="key-statistics" title="Fully Diluted Valuation">
            <div className="">
              <h3 className="text-center fw-semibold mt-3">
                Calculate the price of A <br /> with the{" "}
                <span style={{ color: "var(--darkGreen-color)" }}>
                  fully diluted valuation
                </span>{" "}
                of B
              </h3>
              <MarketCapCalculator />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default CompareCryptocurrencies;
