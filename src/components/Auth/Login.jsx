import React from "react";
import { Modal, Button } from "react-bootstrap";

function Login({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">
            By continuing, you agree to CoinGecko{" "}
            <a href="#">Terms of Service</a> and acknowledge you’ve read our{" "}
            <a href="#">Privacy Policy</a>.
          </p>
          <Button
            variant="light"
            className="w-100 d-flex align-items-center gap-2 mb-2"
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              width="20"
            />
            Continue with Google
          </Button>
          <Button
            variant="light"
            className="w-100 d-flex align-items-center gap-2 mb-2"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
              alt="Apple"
              width="20"
            />
            Continue with Apple
          </Button>
          <div className="text-center my-2">or</div>
          <Button variant="light" className="w-100">
            Continue with email
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
