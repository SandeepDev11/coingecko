import React, { useState } from "react";
import { Col, Container, FormCheck, Row } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import redGraph from "../../assets/images/redGraph.svg";
import greenGraph from "../../assets/images/greenGraph.svg";
import trandingIconsImg from "../../assets/images/icons1.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import blogImg from "../../assets/images/blog.webp";
import BoxMarket from "../Home/BoxMarket";
import FaqSection from "../Home/FaqSection";
import BlogCard from "../Blog/BlogCard";
import DataTable from "react-data-table-component";

const nftData = [
  {
    id: 1,
    name: "CryptoPunks",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    blockchain: "Ethereum",
    floorPrice: "38.39 ETH ($73,710)",
    change24h: -0.1,
    change7d: 6.8,
    change30d: 9.7,
    marketCap: "$736,656,492 (383,670 ETH)",
    volume24h: "172.68 ETH ($331,550)",
    sales24h: 3,
    chartImg: greenGraph,
  },
  {
    id: 2,
    name: "Infinex Patrons",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    blockchain: "Ethereum",
    floorPrice: "2.50 ETH ($4,798.15)",
    change24h: 0.0,
    change7d: 13.6,
    change30d: 44.1,
    marketCap: "$479,814,998 (249,900 ETH)",
    volume24h: "12.48 ETH ($23,954)",
    sales24h: 5,
    chartImg: redGraph,
  },
  {
    id: 3,
    name: "Bored Ape Yacht Club",
    logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    blockchain: "Ethereum",
    floorPrice: "12.82 ETH ($24,615)",
    change24h: 3.6,
    change7d: -3.8,
    change30d: -4.6,
    marketCap: "$246,098,361 (128,174 ETH)",
    volume24h: "274.19 ETH ($526,460)",
    sales24h: 21,
    chartImg: redGraph,
  },
  {
    id: 4,
    name: "Pudgy Penguins",
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    blockchain: "Ethereum",
    floorPrice: "9.19 ETH ($17,635.46)",
    change24h: 6.8,
    change7d: 4.8,
    change30d: -7.2,
    marketCap: "$156,743,944 (81,636 ETH)",
    volume24h: "383.36 ETH ($736,068)",
    sales24h: 43,
    chartImg: redGraph,
  },
  {
    id: 5,
    name: "Autoglyphs",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    blockchain: "Ethereum",
    floorPrice: "99.50 ETH ($191,043)",
    change24h: 0.0,
    change7d: 0.0,
    change30d: 0.0,
    marketCap: "$97,813,907 (50,944 ETH)",
    volume24h: "0 ETH ($0)",
    sales24h: 0,
    chartImg: redGraph,
  },
  {
    id: 6,
    name: "Mutant Ape Yacht Club",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    blockchain: "Ethereum",
    floorPrice: "2.12 ETH ($4,070.46)",
    change24h: 2.2,
    change7d: 2.4,
    change30d: -7.0,
    marketCap: "$79,569,340 (41,442 ETH)",
    volume24h: "78.45 ETH ($150,635)",
    sales24h: 35,
    chartImg: redGraph,
  },
  {
    id: 7,
    name: "Chromie Squiggle",
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    blockchain: "Ethereum",
    floorPrice: "3.90 ETH ($7,488.11)",
    change24h: -1.3,
    change7d: -6.9,
    change30d: -20.2,
    marketCap: "$74,881,092 (39,000 ETH)",
    volume24h: "0 ETH ($0)",
    sales24h: 0,
    chartImg: redGraph,
  },
  {
    id: 8,
    name: "Milady Maker",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    blockchain: "Ethereum",
    floorPrice: "3.24 ETH ($6,218.95)",
    change24h: 3.6,
    change7d: -11.9,
    change30d: -24.3,
    marketCap: "$62,052,685 (32,319 ETH)",
    volume24h: "159.62 ETH ($306,473)",
    sales24h: 49,
    chartImg: redGraph,
  },
  {
    id: 9,
    name: "Azuki",
    logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
    blockchain: "Ethereum",
    floorPrice: "7.45 ETH ($14,310)",
    change24h: 1.2,
    change7d: -4.3,
    change30d: 10.5,
    marketCap: "$204,311,892 (109,400 ETH)",
    volume24h: "212.45 ETH ($408,512)",
    sales24h: 18,
    chartImg: redGraph,
  },
  {
    id: 10,
    name: "Moonbirds",
    logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    blockchain: "Ethereum",
    floorPrice: "2.84 ETH ($5,453)",
    change24h: -2.1,
    change7d: 3.2,
    change30d: -5.4,
    marketCap: "$91,453,785 (49,800 ETH)",
    volume24h: "89.62 ETH ($172,325)",
    sales24h: 14,
    chartImg: redGraph,
  },
];

const getChangeIndicator = (value) => {
  if (value > 0) {
    return (
      <span className="" style={{ color: "var(--green-color)" }}>
        <TiArrowSortedDown /> {value}%
      </span>
    );
  } else if (value < 0) {
    return (
      <span className="" style={{ color: "var(--textRed)" }}>
        <TiArrowSortedDown /> {Math.abs(value)}%
      </span>
    );
  }
  return <span className="text-warning">{value}%</span>;
};

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    width: "50px",
  },
  {
    name: "NFT",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <img src={row.logo} alt={row.name} width="20" className="me-2" />
        <div>
          <div className="pb-1 fw-semibold">{row.name}</div>
          <div
            className="px-2 py-1 d-inline rounded-2"
            style={{ background: "var(--inputColor)", fontSize: "11px" }}
          >
            {row.blockchain}
          </div>
        </div>
      </div>
    ),
    minWidth: "250px",
  },
  {
    name: "Floor Price",
    selector: (row) => row.floorPrice,
    sortable: true,
    width: "150px",
  },
  {
    name: "24h",
    selector: (row) => row.change24h,
    sortable: true,
    width: "100px",
    cell: (row) => getChangeIndicator(row.change24h),
  },
  {
    name: "7d",
    selector: (row) => row.change7d,
    sortable: true,
    width: "100px",
    cell: (row) => getChangeIndicator(row.change7d),
  },
  {
    name: "30d",
    selector: (row) => row.change30d,
    sortable: true,
    width: "100px",
    cell: (row) => getChangeIndicator(row.change30d),
  },
  {
    name: "Last 7 Days",
    cell: (row) => (
      <Link to="/singlepage">
        <img src={row.chartImg} alt="Chart" className="img-fluid" />
      </Link>
    ),
    right: true,
  },
  {
    name: "Market Cap",
    selector: (row) => row.marketCap,
    sortable: true,
    width: "200px",
  },
  {
    name: "24h Volume",
    selector: (row) => row.volume24h,
    sortable: true,
    width: "180px",
  },
  {
    name: "24h Sales",
    selector: (row) => row.sales24h,
    sortable: true,
    width: "100px",
  },
];

const NftFloorPrice = () => {
  const [showDesc, setShowDesc] = useState(true);
  const [showSection, setShowSection] = useState(true);

  const toggleDesc = (e) => {
    e.preventDefault();
    setShowDesc(!showDesc);
  };

  const boxMarketData = [
    {
      trandingIcons: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      trandingIconsAlt: "Bitcoin",
      trandingIconsName: "Bitcoin",
      valueTranding: "$62,345",
      valueTrandingPercent: "5.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      trandingIconsAlt: "Ethereum",
      trandingIconsName: "Ethereum",
      valueTranding: "$3,450",
      valueTrandingPercent: "2.8%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/solana-sol-logo.png",
      trandingIconsAlt: "Solana",
      trandingIconsName: "Solana",
      valueTranding: "$145.23",
      valueTrandingPercent: "7.1%",
    },
  ];

  const boxMarketData2 = [
    {
      trandingIcons: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      trandingIconsAlt: "Binance Coin",
      trandingIconsName: "Binance Coin",
      valueTranding: "$410.45",
      valueTrandingPercent: "3.2%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      trandingIconsAlt: "XRP",
      trandingIconsName: "XRP",
      valueTranding: "$0.64",
      valueTrandingPercent: "4.5%",
    },
    {
      trandingIcons: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      trandingIconsAlt: "Cardano",
      trandingIconsName: "Cardano",
      valueTranding: "$0.78",
      valueTrandingPercent: "6.8%",
    },
  ];

  const blogCardData = [
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
    {
      blogImg: blogImg,
      title:
        "Former Girlfriend of LA 'Godfather' Agrees to Plead Guilty Over $2.6M Tax Fraud",
      tagImg: trandingIconsImg,
      tagNum: "12.5%",
      timeStamp: "22 minutes ago",
      author: "Decrypt",
    },
  ];

  return (
    <>
      <main>
        {/* Home Section */}
        <section className="home-section py-4">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="home-section-content">
                  <Row>
                    <Col lg={10}>
                      <h4 className="fw-bold">
                        Top NFT Collection Prices Ranked by Market Cap
                      </h4>
                      <p className="text-wrap">
                        The global NFT market cap today is $3.3 Billion, a{" "}
                        <span style={{ color: "var(--textRed)" }}>
                          <TiArrowSortedDown /> 12.5%{" "}
                        </span>
                        change in the last 24 hours. Total NFT sales volume in
                        the last day is $7.79 Million, representing a{" "}
                        <span style={{ color: "var(--green-color)" }}>
                          <TiArrowSortedDown /> 12.5%{" "}
                        </span>
                        change.
                        <Link onClick={toggleDesc} className="fw-semibold">
                          {showDesc ? " Read more" : " Hide Details"}
                        </Link>
                      </p>
                    </Col>
                    <Col lg={2}>
                      <FormCheck
                        reverse
                        type="switch"
                        id="custom-switch"
                        label="Highlights"
                        className="fw-semibold"
                        onChange={() => setShowSection((prev) => !prev)}
                        checked={showSection}
                      />
                    </Col>
                  </Row>
                  {!showDesc && (
                    <p>
                      Discover the top NFT collections from various blockchains
                      such as Ethereum, Solana, Bitcoin, Polygon, Base, and
                      more.
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Box Market Section */}
        {showSection && (
          <section className="home-section">
            <Container>
              <Row>
                <Col lg={4}>
                  <div className="boxMarket mb-2">
                    <div className="boxMarket-content-left">
                      <h5 className="fw-semibold">$2,843,511,074,602</h5>
                      <p className="mb-0">
                        Market Cap{" "}
                        <span style={{ color: "var(--textRed)" }}>
                          <TiArrowSortedDown /> 12.5%
                        </span>
                      </p>
                    </div>
                    <div className="boxMarket-content-right">
                      <div className="boxMarket-content-right-img">
                        <img src={redGraph} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="boxMarket">
                    <div className="boxMarket-content-left">
                      <h5 className="fw-semibold">$2,843,511,074,602</h5>
                      <p className="mb-0">24h Trading Volume</p>
                    </div>
                    <div className="boxMarket-content-right">
                      <div className="boxMarket-content-right-img">
                        <img src={greenGraph} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} className="px-0">
                  <div className="boxMarketWrapper">
                    <div className="d-flex justify-content-between align-items-center px-1 boxHeading">
                      <h6 className="fw-semibold">🔥 Trending</h6>
                      <p className="mb-0">
                        <Link to="/">
                          View All <MdKeyboardArrowRight />
                        </Link>
                      </p>
                    </div>

                    {boxMarketData.map((item, index) => (
                      <BoxMarket key={index} boxMarketData={item} />
                    ))}
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="boxMarketWrapper">
                    <div className="d-flex justify-content-between align-items-center px-1 boxHeading">
                      <h6 className="fw-semibold">🚀 Top Gainers</h6>
                      <p className="mb-0">
                        <Link to="/">
                          View All <MdKeyboardArrowRight />
                        </Link>
                      </p>
                    </div>

                    {boxMarketData2.map((item, index) => (
                      <BoxMarket key={index} boxMarketData={item} />
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        {/* Coin List Section */}
        <section className="pt-4 container">
          {/* <CoinList />0 */}
          <DataTable
            columns={columns}
            data={nftData}
            pagination
            highlightOnHover
            responsive
          />
        </section>

        {/* Faq section */}
        <FaqSection />

        {/* News section */}
        <section className="blog-section">
          <Container style={{ borderBottom: "1px solid var(--border-color)" }}>
            <div className="blog-title">
              <h4 className="fw-semibold">Latest Crypto News</h4>
            </div>
            <Row className="py-3">
              {blogCardData.map((item, index) => (
                <Col lg={3} key={index}>
                  <BlogCard blogCardData={item} />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="blog-btn text-center mt-4">
            <Link to="/" className="CusBtn">
              See More News
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default NftFloorPrice;
