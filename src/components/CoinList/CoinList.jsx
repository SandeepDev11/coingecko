import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import chartImg from "../../assets/images/greenGraph.svg";
import chartImg2 from "../../assets/images/redGraph.svg";
import icon1 from "../../assets/images/icons1.webp";

// Component to display percentage change with an arrow icon
const ChangeIndicator = ({ value, isPositive }) => {
  const arrowColor = isPositive ? "var(--darkGreen-color)" : "var(--textRed)";
  return (
    <span style={{ color: arrowColor, textWrap: "nowrap" }}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.2"
        baseProfile="tiny"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
      </svg>
      {` ${value}%`}
    </span>
  );
};

const cryptoData = [
  {
    id: 43,
    fullName: "Artificial Superintelligence Alliance FET",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: false },
    change24h: { value: 15, isPositive: true },
    change7d: { value: 12, isPositive: false },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg2,
  },
  {
    id: 44,
    fullName: "Aave AAVE",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: false },
    change24h: { value: 15, isPositive: false },
    change7d: { value: 12, isPositive: true },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg,
  },
  {
    id: 45,
    fullName: "Artificial Superintelligence Alliance FET",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: true },
    change24h: { value: 15, isPositive: true },
    change7d: { value: 12, isPositive: false },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg2,
  },
  {
    id: 46,
    fullName: "Artificial Superintelligence Alliance FET",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: true },
    change24h: { value: 15, isPositive: false },
    change7d: { value: 12, isPositive: true },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg,
  },
  {
    id: 47,
    fullName: "Artificial Superintelligence Alliance FET",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: false },
    change24h: { value: 15, isPositive: true },
    change7d: { value: 12, isPositive: false },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg2,
  },
  {
    id: 48,
    fullName: "Aave AAVE",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: false },
    change24h: { value: 15, isPositive: false },
    change7d: { value: 12, isPositive: true },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg,
  },
  {
    id: 49,
    fullName: "Artificial Superintelligence Alliance FET",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: true },
    change24h: { value: 15, isPositive: true },
    change7d: { value: 12, isPositive: false },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg2,
  },
  {
    id: 50,
    fullName: "Artificial Superintelligence Alliance FET",
    price: "$175.07",
    change1h: { value: 10.2, isPositive: true },
    change24h: { value: 15, isPositive: false },
    change7d: { value: 12, isPositive: true },
    volume24h: "$409,344,880",
    marketCap: "$2,642,361,974",
    chartImg: chartImg,
  },
];

function CoinList() {
  return (
    <section className="coinList-section">
      <Container>
        <Row>
          <Col lg={12}>
            <Table responsive hover>
              <thead>
                <tr>
                  <th className="align-middle fw-medium"></th>
                  <th className="align-middle fw-medium">#</th>
                  <th className="align-middle fw-medium">Coin</th>
                  <th className="align-middle fw-medium text-end">Price</th>
                  <th className="align-middle fw-medium text-end">1h</th>
                  <th className="align-middle fw-medium text-end">24h</th>
                  <th className="align-middle fw-medium text-end">7d</th>
                  <th className="align-middle fw-medium text-end">24h Volume</th>
                  <th className="align-middle fw-medium text-end">Market Cap</th>
                  <th className="align-middle fw-medium text-end">Last 7 Days</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((coin) => (
                  <tr key={coin.id} className="py-3">
                    <td className="align-middle">
                      <FaRegStar />
                    </td>
                    <td className="align-middle">{coin.id}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center gap-2 text-nowrap">
                        <img src={icon1} alt={coin.fullName} width="20px" />
                        {coin.fullName}
                      </div>
                    </td>
                    <td className="align-middle text-end">{coin.price}</td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change1h} />
                    </td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change24h} />
                    </td>
                    <td className="align-middle text-end">
                      <ChangeIndicator {...coin.change7d} />
                    </td>
                    <td className="align-middle text-end">{coin.volume24h}</td>
                    <td className="align-middle text-end">{coin.marketCap}</td>
                    <td className="align-middle text-end">
                      <Link to="singlepage">
                        <img src={coin.chartImg} alt="Chart" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CoinList;
