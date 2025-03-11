import React from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import CoinList from "../../CoinList/CoinList";
import blogImg from "../../../assets/images/blog.webp";
import trandingIconsImg from "../../../assets/images/icons1.webp";
import { Link } from "react-router";
import BlogCard from "../../Blog/BlogCard";

const blogCardData = [
  {
    blogImg: blogImg,
    title:
      "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
    tagImg: trandingIconsImg,
    tagNum: "12.5%",
    timeStamp: "22 minutes ago",
    author: "Decrypt",
  },
  {
    blogImg: blogImg,
    title:
      "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
    tagImg: trandingIconsImg,
    tagNum: "12.5%",
    timeStamp: "22 minutes ago",
    author: "Decrypt",
  },
  {
    blogImg: blogImg,
    title:
      "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
    tagImg: trandingIconsImg,
    tagNum: "12.5%",
    timeStamp: "22 minutes ago",
    author: "Decrypt",
  },
  {
    blogImg: blogImg,
    title:
      "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
    tagImg: trandingIconsImg,
    tagNum: "12.5%",
    timeStamp: "22 minutes ago",
    author: "Decrypt",
  },
];

function NewCryptocurrencies() {
  return (
    <>
      <section className="categories-section pt-4">
        <Container>
          <Row>
            <Col>
              <Breadcrumbs
                title1="Cryptocurrencies"
                title="New Cryptocurrencies"
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
                    <h4 className="fw-bold">New Cryptocurrencies</h4>
                    <p>
                      Discover new cryptocurrencies that were recently added to
                      CoinGecko. Sort by trading volume and the latest price to
                      identify new tokens that are gaining popularity in the
                      market. Among all cryptocurrencies listed in the last 30
                      days, you might be interested to know that BROCCOLI and
                      FRACTRADE have the highest trading volume over the last 24
                      hours.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Coin List Section */}
      <CoinList />

      {/* News section */}
      <section className="blog-section">
        <Container style={{ borderBottom: "1px solid var(--border-color)" }}>
          <div className="blog-title">
            <h4 className="fw-semibold">
              Articles related to New Cryptocurrencies
            </h4>
          </div>
          <Row className="py-3">
            {blogCardData.map((item, index) => (
              <Col lg={3} key={index}>
                <BlogCard blogCardData={item} />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="blog-btn text-center mt-4">
          <Link to="/" className="CusBtn">
            See More News
          </Link>
        </div>
      </section>
    </>
  );
}

export default NewCryptocurrencies;
