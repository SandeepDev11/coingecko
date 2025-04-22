import React from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import reportImg from "../../assets/Images/CG_Report_Thumbnail.webp";

const reportData = {
  "2025": [
    {
      title: "2025 Q1 Crypto Industry Report",
      images: 1,
    },
    {
      title: "State of Crypto Perpetuals Market",
      images: 1,
    },
  ],
  "2024": [
    {
      title: "2024 Annual Crypto Industry Report",
      images: 4,
    },
    {
      title: "GeckoCon 2024 Keynote: The Current State of Web3 Games",
      images: 1,
    },
    {
      title: "2024 Q3 Crypto Industry Report",
      images: 4,
    },
  ],
  "2023": [
    {
      title: "2024 Annual Crypto Industry Report",
      images: 4,
    },
    {
      title: "GeckoCon 2024 Keynote: The Current State of Web3 Games",
      images: 1,
    },
    {
      title: "2024 Q3 Crypto Industry Report",
      images: 4,
    },
  ],
};

const Reportsarticals = () => {
  return (
    <main>
      <Container>
        <h4 className="py-3 fw-bold">CoinGecko Cryptocurrency Reports</h4>
        <Tabs className="mb-3 border-0 search-dropdown-tabs">
          {Object.entries(reportData).map(([year, reports]) => (
            <Tab
              key={year}
              eventKey={year}
              title={<span>{year}</span>}
              className="fw-semibold"
            >
              <Card className="border-0">
                <Card.Body className="px-0">
                  {reports.map((report, index) => (
                    <div
                      key={index}
                      className={`cryptoIndustry-wrapper ${
                        report.isMuted ? "py-2 small text-muted" : ""
                      }`}
                    >
                      <h5 className={`${report.isMuted ? "" : "py-3 fw-bold"}`}>
                        {report.title}
                      </h5>
                      {!report.isMuted && (
                        <div className="d-flex gap-3 flex-wrap pb-4">
                          {Array.from({ length: report.images }).map((_, i) => (
                            <div key={i} style={{ maxWidth: "150px" }}>
                              <img
                                src={reportImg}
                                alt="reportImg"
                                className="img-fluid w-100 h-100"
                              />
                              <div className="text-center py-1">
                                <small className="text-muted">English</small>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </Container>
    </main>
  );
};

export default Reportsarticals;
