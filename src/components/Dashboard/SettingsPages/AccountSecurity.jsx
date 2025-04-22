import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const AccountSecurityLight = () => {
  return (
    <>
      <h4 className="profileTitle">Account Security</h4>

      {/* Account Information */}
      <section className="mb-5 border-bottom pb-4">
        <h5 className="mb-3 fw-semibold">Account Information</h5>
        <Row className="align-items-center mb-3">
          <Col md={6}>
            <div className="fw-semibold">E-mail address</div>
            <div className="text-muted">
              If you need to change your e-mail address, please contact{" "}
              <a href="#" className="text-success">
                Customer Service
              </a>
            </div>
          </Col>
          <Col md={6} className="text-end">
            <div className="fw-bold">s***ch@gmail.com</div>
          </Col>
        </Row>
        <Row className="align-items-center mb-3">
          <Col md={6}>
            <div className="fw-semibold">Wallet address</div>
            <div className="text-muted">
              Log in with your preferred wallet address
            </div>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="outline-dark">Set address</Button>
          </Col>
        </Row>
      </section>

      {/* Security Settings */}
      <section className="mb-5 border-bottom pb-4">
        <h5 className="mb-3 fw-semibold">Security settings</h5>

        <Row className="align-items-center mb-3">
          <Col md={6}>
            <div className="fw-semibold">Google Authenticator (2FA)</div>
            <div className="text-muted">
              Use the Authenticator to get verification codes for better
              security.
            </div>
          </Col>
          <Col md={2} className="text-center">
            <div className="text-muted">
              Status: <span className="text-danger">off</span>
            </div>
          </Col>
          <Col md={4} className="text-end">
            <Button variant="outline-dark">Enable</Button>
          </Col>
        </Row>

        <Row className="align-items-center mb-3">
          <Col md={6}>
            <div className="fw-semibold">E-mail address verification (2FA)</div>
            <div className="text-muted">
              If you need to change your e-mail address, please contact{" "}
              <a href="#" className="text-success">
                Customer Service
              </a>
            </div>
          </Col>
          <Col md={2} className="text-center">
            <div className="text-muted">
              Status: <span className="text-success">on</span>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <div className="fw-semibold">Password</div>
            <div className="text-muted">
              Set a unique password for better protection
            </div>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="outline-dark">Set password</Button>
          </Col>
        </Row>
      </section>

      {/* Devices and Activities */}
      <section>
        <h5 className="mb-3 fw-semibold">Devices and activities</h5>

        <Row className="align-items-center mb-3">
          <Col md={6}>
            <div className="fw-semibold">Device Management</div>
            <div className="text-muted">
              Authorize devices with access to your account
            </div>
          </Col>
          <Col md={2} className="text-center">
            <div className="text-muted">In use: Chrome 135</div>
          </Col>
          <Col md={4} className="text-end">
            <Button variant="outline-dark">Manage</Button>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <div className="fw-semibold">Account activity</div>
            <div className="text-muted">
              Check the recent sign-in activity for account
            </div>
          </Col>
          <Col md={6} className="text-end">
            <Button variant="outline-dark">More</Button>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AccountSecurityLight;
