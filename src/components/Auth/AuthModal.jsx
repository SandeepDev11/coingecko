import React, { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AuthModal({ show, handleClose }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="border-0 px-3 py-3"></Modal.Header>
      <Modal.Body className="text-start pt-0 px-4">
        <div className="mb-3 border-bottom">
          <Nav variant="tabs" className="w-100 border-0">
            <Nav.Item className="text-center border-0 w-50 p-0">
              <Nav.Link
                eventKey="login"
                active={activeTab === "login"}
                onClick={() => setActiveTab("login")}
                className={
                  activeTab === "login"
                    ? "fw-bold border-0 border-bottom border-success"
                    : "text-muted"
                }
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center border-0 w-50 p-0">
              <Nav.Link
                eventKey="signup"
                active={activeTab === "signup"}
                onClick={() => setActiveTab("signup")}
                className={
                  activeTab === "signup"
                    ? "fw-bold border-0 border-bottom border-success"
                    : "text-muted"
                }
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <h5 className="fw-bold">
          {activeTab === "login" ? "Log in" : "Sign Up"}
        </h5>
        <p className="text-muted small">
          By continuing, you agree to CoinGecko{" "}
          <a href="#" className="fw-bold">
            Terms of Service
          </a>{" "}
          and acknowledge you’ve read our{" "}
          <a href="#" className="fw-bold">
            Privacy Policy
          </a>
          .
        </p>
        <Button
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-between gap-2 py-2 px-3 mb-2 rounded"
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            width="20"
          />
          <div>Continue with Google</div>
          <div></div>
        </Button>
        <Button
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-between gap-2 py-2 px-3 mb-2 rounded mt-3"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
            alt="Apple"
            width="20"
          />
          <div>Continue with Apple</div>
          <div></div>
        </Button>
        <div className="text-muted small d-flex align-items-center justify-content-center my-2">
          <span className="w-100 border-bottom"></span>
          <span className="px-2 py-2">or</span>
          <span className="w-100 border-bottom"></span>
        </div>
        <Button
          variant="light"
          className="w-100 p-2"
        >
          Continue with email
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;
