import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { Link } from "react-router";

function BlogCard({blogCardData}) {
    const { blogImg, title, tagImg, tagNum, timeStamp, author } = blogCardData;
  return (
    <>
      <div className="blog-card mb-3">
        <Card className="border-0" style={{ width: "18rem" }}>
          <Link to="/">
            <CardImg className="rounded-3 mb-4" variant="top" src={blogImg} />
          </Link>
          <CardBody className="p-0">
            <Link to="/">
              <CardTitle className="fw-bold">
               {title}
              </CardTitle>
            </Link>
            <CardText>
              <div className="blogCard-info pt-2">
                <Link to="/">
                  <div class="blogCardTag align-items-center gap-2 my-2">
                    <img
                      alt="Aave AAVE"
                      width="20px"
                      src={tagImg}
                    />
                    <span style={{ color: "var(--darkGreen-color)" }}>
                      <svg
                        stroke="var(--darkGreen-color)"
                        fill="var(--darkGreen-color)"
                        strokeWidth="0"
                        version="1.2"
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                      </svg>
                     {tagNum}
                    </span>
                  </div>
                </Link>
                <p className="fw-semibold mb-0 pb-1">{author}</p>
                <span className="time-stamp">{timeStamp}</span>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default BlogCard;
