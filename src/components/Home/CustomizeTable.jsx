import React from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import { HiOutlineSparkles } from "react-icons/hi2";

const ToggleOption = ({ label }) => (
  <div className="d-flex justify-content-between align-items-center py-3">
    <span>{label}</span>
    <Form.Check type="switch" id={`switch-${label}`} />
  </div>
);

const RowSelection = () => (
  <div className="d-flex justify-content-between align-items-center py-2 pt-3">
    <span>Rows</span>
    <div className="d-flex gap-2">
      {[50, 100, 300].map((num) => (
        <Button
          key={num}
          variant={num === 100 ? "primary" : "light"}
          size="sm"
          className="fw-bold px-2"
        >
          {num}
        </Button>
      ))}
    </div>
  </div>
);

function CustomizeTable() {
  return (
    <button className="rightTop-section-content position-relative px-3">
      <NavDropdown
        title={
          <span className="d-flex align-items-center gap-2 fw-bold">
            <HiOutlineSparkles />
            <span>Customise</span>
          </span>
        }
      >
        <small>Price Change</small>
        <ToggleOption label="30d" />

        <small>Metrics</small>
        <ToggleOption label="FDV" />
        <ToggleOption label="Market Cap / FDV" />

        <small>Others</small>
        <RowSelection />
      </NavDropdown>
    </button>
  );
}

export default CustomizeTable;
