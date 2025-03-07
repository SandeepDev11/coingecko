import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const PiStatsCard = ({ title, stats, graph, description }) => {
  return (
    <Card className="border-0 p-0">
      <p>
        <span>{title}</span>
      </p>
      <ListGroup variant="flush">
        {stats.map((stat, index) => (
          <ListGroupItem
            key={index}
            className="d-flex justify-content-between py-3 border-bottom px-0"
            style={{ borderColor: "var(--border-color) !important" }}
          >
            <div>{stat.label}</div>
            <div className={stat.className || ""}>{stat.value}</div>
          </ListGroupItem>
        ))}
        {graph && (
          <ListGroupItem className="d-flex flex-column gap-5 justify-content-between py-3 border-bottom px-0">
            <div>Last 7 Days</div>
            <div className="text-center">
              <img src={graph} alt="Graph" />
            </div>
          </ListGroupItem>
        )}
        {description && (
          <ListGroupItem className="d-flex flex-column gap-1 justify-content-between py-3 border-bottom px-0">
            <h6>{description.title}</h6>
            <p className="mb-0">{description.text}</p>
          </ListGroupItem>
        )}
      </ListGroup>
    </Card>
  );
};

export default PiStatsCard;