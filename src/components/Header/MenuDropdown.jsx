import { Link } from "react-router-dom";
const MenuDropdown = ({ title, items }) => (
  <li>
    <span className="menu-title">{title}</span>
    <div className="menu-list-dropdown">
      {items.map(({ to, icon: Icon, label }) => (
        <Link key={to} to={to} className="menu-item">
          <Icon className="menu-icon" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  </li>
);

export default MenuDropdown;
