import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <section className="sidebarWrapper">
      <h4 className="fw-semibold mb-0 pb-4">Account Details</h4>
      <div className="d-flex flex-column gap-2">
        <button
          onClick={() => setActiveSection("profile")}
          className={`sidebarLink border-0 shadow-none text-start ${activeSection === "profile" ? "active" : ""}`}
        >
          <div className="sidebarText">
            <span className="p-3">Profile</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSection("account-security")}
          className={`sidebarLink border-0 shadow-none text-start ${activeSection === "account-security" ? "active" : ""}`}
        >
          <div className="sidebarText">
            <span className="p-3">Account Security</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSection("notifications")}
          className={`sidebarLink border-0 shadow-none text-start ${activeSection === "notifications" ? "active" : ""}`}
        >
          <div className="sidebarText">
            <span className="p-3">Notifications</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
