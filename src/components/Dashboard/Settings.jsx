import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./SidebarDashboard/Sidebar";
import Profile from "./SettingsPages/Profile";
import AccountSecurity from "./SettingsPages/AccountSecurity";
import NotificationSettings from "./SettingsPages/Notifications";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <main>
      <section className="settingWrapper">
        <Container>
          <Row>
            <Col lg={3}>
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            </Col>
            <Col lg={9} className="ps-5">
              {activeSection === "profile" && <Profile />}
              {activeSection === "account-security" && <AccountSecurity />}
              {activeSection === "notifications" && <NotificationSettings />}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Settings;
