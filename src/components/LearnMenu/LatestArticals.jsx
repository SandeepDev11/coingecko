import React, { useState } from "react";
import TabHome from "../Home/TabHome";
import { Col, Container, Row } from "react-bootstrap";
import articalImg from "../../assets/Images/articals.webp";
import { Link } from "react-router";
import MainArticleCard from "./LearnTabs/MainArticleCard";
import SideArticlesList from "./LearnTabs/SideArticlesList";
import NewsletterSubscription from "./LearnTabs/NewsletterSubscription";


const LatestArticals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabData = [
    { title: "All", tabUrl: "/learn" },
    { title: "Latest", tabUrl: "/latest" },
    { title: "Airdrops", tabUrl: "/airdrop-guides" },
    { title: "Coins And Tokens", tabUrl: "/coins-and-tokens" },
    { title: "Guides", tabUrl: "/guides" },
    { title: "Wallets And Bridges", tabUrl: "/wallets-and-bridges" },
    { title: "API", tabUrl: "/api" },
    { title: "Reviews", tabUrl: "/reviews" },
  ];

  const sideArticles = [
    {
      title: "How to Build a Crypto Research AI Agent with Chromia's Vector DB",
      author: "CJ",
      date: "December 01, 2024",
      rating: "4.23",
      votes: "60",
      image: articalImg,
    },
    {
      title: "How to Build a Simple AI Model for Crypto Price Prediction",
      author: "Roxait",
      date: "March 27, 2025",
      rating: "4.5",
      votes: "6",
      image: articalImg,
    },
    {
      title: "How to Build Your Own Crypto AI Agent",
      author: "Roxait",
      date: "April 11, 2025",
      rating: "4.0",
      votes: "9",
      image: articalImg,
    },
  ];

  const mainArticle = {
    title: "How to Build a Crypto Research AI Agent with Chromia's Vector DB",
    author: "CJ",
    date: "December 01, 2024",
    rating: "4.23",
    votes: "60",
    image: articalImg,
    description:
      "Learn how to build a Crypto Research AI Agent that fetches information and insights on any cryptocurrency, using Chromia’s Vector DB and the API"
  };

  return (
    <main>
      <section className="tabArea-wrapper py-4">
        <Container>
          <div className="d-flex gap-1">
            {tabData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`tabArea-left ${activeIndex === index ? "active" : ""}`}
                style={{
                  color: activeIndex === index ? "var(--darkGreen-color)" : "var(--dark-color)",
                  background: activeIndex === index ? "var(--lightGreen-color)" : "transparent",
                  fontSize: "14px",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "0.5rem",
                }}
              >
                <TabHome tabData={item} activeIndex={activeIndex} index={index} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="tabArea-content-wrapper py-1">
        <Container className="pe-1 pe-lg-0">
          <div className="learnBg p-4 rounded-3">
            <Row>
              <div className="col-lg-6">
                <h4 className="fw-semibold">Latest Articles</h4>
                <p className="mb-0">
                Stay up-to-date with our newest beginner-friendly content.
                </p>
              </div>
            </Row>
          </div>
        </Container>
      </section>

      <section className="featured-articles-wrapper py-4">
        <Container>
          <div className="articles-wrappper">
            <Row>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
              <Col lg={4} sm={12} className="mb-4"><MainArticleCard article={mainArticle} /></Col>
            </Row>
          </div>
        </Container>
      </section>

      <NewsletterSubscription />
    </main>
  );
};

export default LatestArticals;
