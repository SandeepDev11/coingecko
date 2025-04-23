import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Icons
import { GiTwoCoins } from "react-icons/gi";
import { FaEthereum, FaCoins, FaExchangeAlt } from "react-icons/fa";
import { MdOutlineCollections } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { RiTokenSwapLine } from "react-icons/ri";

// Reusable Card Component
const ListingCard = ({ icon: Icon = GiTwoCoins, title, description }) => (
  <div className="newListing-CoinContent border rounded-4 p-3 mb-3">
    <Icon className="fs-3 mb-2" />
    <p className="fw-semibold mb-0 pb-1">{title}</p>
    <p className="mb-0">{description}</p>
  </div>
);

// Section Content
const sections = [
  {
    title: "New Listing Request",
    help: (
      <>
        <p className="pb-2">What is your project type?</p>
        <p className="mb-0 pb-1">Need some help?</p>
        <p>
          Check our <Link to="" className="fw-semibold">FAQ</Link> or{" "}
          <Link to="" className="fw-semibold">Methodology</Link>
        </p>
      </>
    ),
    cards: [
      { icon: FaCoins, title: "Mainnet Coin", description: "Standalone blockchain like Bitcoin or Ethereum." },
      { icon: FaEthereum, title: "Token on Ethereum", description: "ERC-20 token built on Ethereum blockchain." },
      { icon: RiTokenSwapLine, title: "Token on BSC", description: "BEP-20 token on Binance Smart Chain." },
      { icon: MdOutlineCollections, title: "NFT Project", description: "NFT collections on Ethereum, Solana, etc." },
    ],
  },
  {
    title: "Updating Coin Information",
    help: (
      <p className="pb-2">
        Use this form to submit updates for an existing coin on CoinGecko.
      </p>
    ),
    cards: [
      { icon: TbInfoSquareRounded, title: "Logo & Description Update", description: "Submit new logo and project details." },
    ],
  },
  {
    title: "Verify or Update Token Supply Information",
    help: (
      <p className="pb-2">
        Use this form to verify or update token supply (max, total, circulating).
      </p>
    ),
    cards: [
      { icon: FaExchangeAlt, title: "Token Supply", description: "Verify or update token supply info." },
    ],
  },
];

// Main Component
const RequestForm = () => (
  <Container className="py-4">
    {/* Header */}
    <div className="pb-4 border-bottom">
      <h4 className="fw-bold">CoinGecko Request Form</h4>
      <p className="mb-4">
        Kindly fill out the form. If your request isn't covered here,
        please submit a ticket at support.coingecko.com
      </p>
      <h6 className="fw-bold">Submitter:</h6>
      <p>sandeep.asvayuktech@gmail.Community</p>
      <button>View my requests</button>
    </div>

    {/* Section Blocks */}
    {sections.map((section, i) => (
      <div
        key={i}
        className={`newListing-wrappe ${i === 0 ? "py-4" : "pt-4"} ${i !== sections.length - 1 ? "border-bottom" : ""}`}
      >
        <Row>
          {/* Left Column with Heading & Help Text */}
          <Col lg={4} sm={12}>
            <div className="newListing-content">
              <h6 className="fw-bold">{section.title}</h6>
              {section.help}
            </div>
          </Col>

          {/* Cards Split into Two Columns */}
          {[0, 1].map(col => (
            <Col lg={4} sm={12} key={col}>
              {section.cards
                .slice(col * 2, col * 2 + 2)
                .map((card, idx) => (
                  <ListingCard key={idx} {...card} />
                ))}
            </Col>
          ))}
        </Row>
      </div>
    ))}
  </Container>
);

export default RequestForm;
