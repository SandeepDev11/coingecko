import React, { useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import webPage from "../../../assets/images/web-page.png";
import add from "../../../assets/images/add.png";
import user from "../../../assets/images/user.png";
import language from "../../../assets/images/language.png";
import advertisement from "../../../assets/images/advertisement.png";
import logoDesign1 from "../../../assets/images/logoDesign1.png";
import logoDesign2 from "../../../assets/images/logoDesign2.png";
import logoDesign3 from "../../../assets/images/logoDesign3.png";
import logoDesign4 from "../../../assets/images/logoDesign4.png";
import logoDesign5 from "../../../assets/images/logoDesign5.png";
import logoDesign6 from "../../../assets/images/logoDesign6.png";
import sol1 from "../../../assets/images/solutions.png";
// import sol2 from "../../../assets/images/solution2.png";
// import sol3 from "../../../assets/images/solution3.png";
// import sol4 from "../../../assets/images/solution4.png";
// import sol5 from "../../../assets/images/solution5.png";
// import sol6 from "../../../assets/images/solution6.png";

const adStats = [
  { img: webPage, value: "110 million +", label: "Monthly Page Views" },
  { img: user, value: "35 million +", label: "Average Monthly Users" },
  { img: add, value: "2.5 million +", label: "Total App Users" },
  { img: language, value: "#34", label: "Languages" },
  { img: advertisement, value: "#1", label: "For Crypto Investors" },
];

const clientLogos = [
  logoDesign1,
  logoDesign2,
  logoDesign3,
  logoDesign4,
  logoDesign5,
  logoDesign6,
  logoDesign3,
  logoDesign4,
  logoDesign3,
  logoDesign4,
];

const displayBanners = [
  {
    title: "Top Leaderboard Banner",
    details: "(970×90, 728×90, 320x50px)",
    img: sol1,
  },
  { title: "MPU Banner", details: "(970×90, 728×90, 320x50px)", img: sol1 },
  {
    title: "Bottom Leaderboard Banner",
    details: "(970×90, 728×90, 320x50px)",
    img: sol1,
  },
];

const nativeButtons = [
  {
    title: "Homepage Buy Button",
    details: "(Title, Description, Banner, CTA & URL)",
    img: sol1,
  },
  {
    title: "Buy/Sell, Long/Short, Earn Crypto Buttons",
    details: "(Title, Description, Logo & URL)",
    img: sol1,
  },
  {
    title: "Sponsored Search",
    details: "(Title, Description, Logo & URL)",
    img: sol1,
  },
];

const engagements = [
  {
    title: "Sponsored Newsletter",
    details: "(Banner, 80 words write up, CTA & URL)",
    img: sol1,
  },
];

const faqs = [
  {
    question: "Can I advertise my project on CoinGecko?",
    answer:
      "As per our Advertising Policy, we currently only accept advertisements from exchanges and projects that are currently listed on CoinGecko. If your project is not listed on CoinGecko yet, do refer to the following guide for adding new tokens and exchanges.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "CoinGecko accepts ETH, BTC, USDC/USDT/BUSD (ERC20) or USD Bank Transfer. We do not accept credit card payments.",
  },
  {
    question: "Can I get a report of my ad performance?",
    answer:
      "CoinGecko can provide a report of ad performance upon request. Daily or weekly automated email reporting can also be arranged directly from our ad server.",
  },
  {
    question: "How fast can an ad be served or changed on CoinGecko?",
    answer:
      "We require 2 working days to serve an ad or to make any ad changes on CoinGecko. That being said, we strive to fulfill all requests as fast as possible and in most situations, we can complete the requests within 12 hours on a weekday.",
  },
  {
    question: "What are the targeting types?",
    answer:
      "Geographical location, language and device targeting options are available upon request.",
  },
  {
    question:
      "Are there additional costs to target the banner ads for different coins or countries?",
    answer:
      "We have different pricing tiers for the geo-location and coin targeting. Please submit your inquiry via the form above, our sales representative will reach out to you soon.",
  },
  {
    question: "How can I publish Press Releases or Guest Postings?",
    answer:
      "CoinGecko does not accept Press Releases at this moment. For other advertising options please reach out to ads@coingecko.com",
  },
];

const Advertising = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
  
      ["contactName", "email", "jobTitle", "website", "companyName", "countries", "objective", "campaignPeriod"].forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "This field is required";
        }
      });
  
      if (!formData.budget) {
        newErrors.budget = "Please select a budget";
      }
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        alert("Form submitted successfully!");
      }
    };
  
  return (
    <section className="advertisingWrapper pt-3">
      <Container>
        <h3
          className="fw-bold text-center"
          style={{ color: "var(--darkGreen-color)" }}
        >
          Engage your audience with ProCoinMaster Ads
        </h3>
        <p className="fs-5 text-center">
          Discover and inspire the crypto community to drive action for your
          brand at the most popular crypto data aggregation platform.
        </p>

        <Row className="gy-5 mt-4 px-0 mx-0 px-lg-5 mx-lg-5 px-md-5 mx-md-5">
          {adStats.map(({ img, value, label }, idx) => (
            <Col lg={adStats.length > 3 && idx > 2 ? 6 : 4} key={idx}>
              <div className="adsDetails-wrapper text-center">
                <img src={img} alt={label} />
                <h4 className="fw-bold">{value}</h4>
                <p className="fs-6">{label}</p>
              </div>
            </Col>
          ))}
        </Row>

        <h3
          className="fw-bold text-center pt-4"
          style={{ color: "var(--darkGreen-color)" }}
        >
          Our success starts with our clients
        </h3>

        <Row>
          {clientLogos.map((logo, idx) => (
            <Col key={idx}>
              <div className="clientsImg">
                <img src={logo} alt={`client-logo-${idx + 1}`} />
              </div>
            </Col>
          ))}
        </Row>

        <div className="ourSolutions-wrapper">
          <h3
            className="fw-bold text-center pt-5"
            style={{ color: "var(--darkGreen-color)" }}
          >
            Explore our advertising solutions
          </h3>
          <h4
            className="pt-3 fw-semibold"
            style={{ color: "var(--darkGreen-color)" }}
          >
            Display Banners
          </h4>
          <p className="mb-0">
            Boost brand awareness through impression-based banner ads.
          </p>
          <p>
            <i>*Available on desktop and mobile web.</i>
          </p>
          <Row>
            {displayBanners.map((item, idx) => (
              <Col lg={4} key={idx}>
                <div className="solutionBanner-wrapper">
                  <div className="solutionBanner-img">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="solutionContnet text-center pt-2">
                    <p className="mb-0 fw-bold">{item.title}</p>
                    <p className="mb-0">{item.details}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="ourSolutions-wrapper">
          <h4
            className="fw-semibold pt-5"
            style={{ color: "var(--darkGreen-color)" }}
          >
            Native Buttons
          </h4>
          <p className="mb-0">
            Generate website visits and convert users with sponsored button ads.
          </p>
          <p>
            <i>*Available on desktop and mobile web.</i>
          </p>
          <Row>
            {nativeButtons.map((item, idx) => (
              <Col lg={4} key={idx}>
                <div className="solutionBanner-wrapper">
                  <div className="solutionBanner-img">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="solutionContnet text-center pt-2">
                    <p className="mb-0 fw-bold">{item.title}</p>
                    <p className="mb-0">{item.details}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="ourSolutions-wrapper">
          <h4
            className="fw-semibold pt-5"
            style={{ color: "var(--darkGreen-color)" }}
          >
            Engagement
          </h4>
          <p className="mb-0">
            Engage your target audiences with your brand’s messaging in the
            sponsored newsletter.
          </p>
          <p>
            <i>*Available on desktop and mobile web.</i>
          </p>
          <Row>
            {engagements.map((item, idx) => (
              <Col lg={4} key={idx}>
                <div className="solutionBanner-wrapper">
                  <div className="solutionBanner-img">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="solutionContnet text-center pt-2">
                    <p className="mb-0 fw-bold">{item.title}</p>
                    <p className="mb-0">{item.details}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="advertisingFAQWrapper py-5">
          <Container>
            <h3
              className="fw-bold mb-4"
              style={{ color: "var(--darkGreen-color)" }}
            >
              Frequently Asked Questions
            </h3>
            <Accordion
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
            >
              {faqs.map((faq, idx) => (
                <Accordion.Item
                  eventKey={idx.toString()}
                  key={idx}
                  className="mb-2 advertisingFAQItem"
                >
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </div>

        <div className="advertisingContact">
            <h3
              className="fw-bold "
              style={{ color: "var(--darkGreen-color)" }}
            >
              Get in touch with us
            </h3>
            <p className="mb-4">
              Ready to connect with your users? Fill out the form and we will be
              in touch to discuss the advertisement opportunities.
            </p>
            <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Contact Name<span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="contactName"
              placeholder="Enter your name"
              value={formData.contactName || ""}
              onChange={handleChange}
              isInvalid={!!errors.contactName}
            />
            <Form.Control.Feedback type="invalid">{errors.contactName}</Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Work email address<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="jobTitle">
                <Form.Label>Job title<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.jobTitle}
                />
                <Form.Control.Feedback type="invalid">{errors.jobTitle}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="website">
                <Form.Label>Company website URL<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="url"
                  name="website"
                  value={formData.website || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.website}
                />
                <Form.Control.Feedback type="invalid">{errors.website}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="companyName">
                <Form.Label>Company name<span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.companyName}
                />
                <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>What is your advertising budget?<span className="text-danger">*</span></Form.Label>
            {['Less than $5,000', '$5,000 - $20,000', '$20,000 - $40,000', '$40,000 - $50,000', 'Others'].map((budget, idx) => (
              <Form.Check
                key={idx}
                type="radio"
                name="budget"
                id={`budget-${idx}`}
                label={budget}
                value={budget}
                checked={formData.budget === budget}
                onChange={handleChange}
                isInvalid={!!errors.budget}
              />
            ))}
            {errors.budget && <div className="text-danger mt-1">{errors.budget}</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="countries">
            <Form.Label>Which countries are you planning on targeting?<span className="text-danger">*</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="countries"
              value={formData.countries || ""}
              onChange={handleChange}
              isInvalid={!!errors.countries}
            />
            <Form.Control.Feedback type="invalid">{errors.countries}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="objective">
            <Form.Label>What is your marketing objective?<span className="text-danger">*</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="objective"
              value={formData.objective || ""}
              onChange={handleChange}
              isInvalid={!!errors.objective}
            />
            <Form.Control.Feedback type="invalid">{errors.objective}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="campaignPeriod">
            <Form.Label>When is your campaign period (Start/End)?<span className="text-danger">*</span></Form.Label>
            <Form.Control
              type="text"
              name="campaignPeriod"
              value={formData.campaignPeriod || ""}
              onChange={handleChange}
              isInvalid={!!errors.campaignPeriod}
            />
            <Form.Control.Feedback type="invalid">{errors.campaignPeriod}</Form.Control.Feedback>
          </Form.Group>

          <button className="rightTop-section-content-signup px-4 py-2" type="submit">
            Submit
          </button>
        </Form>
        </div>
      </Container>
    </section>
  );
};

export default Advertising;
