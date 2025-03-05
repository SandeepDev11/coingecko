import { Breadcrumb } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumbs = ({ title, title1 }) => {
  return (
    <Breadcrumb className="pb-2">
      <Breadcrumb.Item href="/" className="fw-medium" >{title1}</Breadcrumb.Item>
      <span className="breadcrumb-icon px-3"><FaAngleRight /></span>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
