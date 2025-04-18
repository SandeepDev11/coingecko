import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const MainArticleCard = ({ article }) => {
  return (
    <Card className="border-0 border-bottom">
      <Link to="/learn/build-crypto-research-ai-agent" className="text-decoration-none">
        <CardImg src={article.image} alt="article" className="rounded-3 img-fluid" />
        <CardBody className="px-0">
          <p className="mb-0 pb-2 fw-semibold">API</p>
          <CardTitle className="fw-semibold">{article.title}</CardTitle>
          <CardText>{article.description}</CardText>
          <div className="pt-4">
            <p className="mb-0 pb-2 fw-semibold">{article.author}</p>
            <p className="mb-0">
              {article.date} • <FaStar className="pb-1 fs-6 starIcon" /> {article.rating} ({article.votes} votes)
            </p>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default MainArticleCard;
