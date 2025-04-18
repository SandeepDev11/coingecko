import React from "react";
import { FaStar } from "react-icons/fa";

const SideArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div className="sideArticals-wrapper" key={index}>
          <div className="sideArtical-item">
            <p className="mb-0 pb-2 fw-semibold">API</p>
            <h5 className="fw-semibold">{article.title}</h5>
            <div className="pt-4">
              <p className="mb-0 pb-2 fw-semibold">{article.author}</p>
              <p>
                {article.date} • <FaStar className="pb-1 fs-6 starIcon" /> {article.rating} ({article.votes} votes)
              </p>
            </div>
          </div>
          <div className="sideArtical-Img">
            <img
              src={article.image}
              alt={`sideArticalImg${index + 1}`}
              className="img-fluid rounded-3"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default SideArticlesList;
