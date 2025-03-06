import React, { useState } from "react";
import { Col, Container, FormCheck, NavDropdown, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TopbarLeft from "./TopbarLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear } from "@fortawesome/free-solid-svg-icons";
// import logo from "../../assets/images/logo.webp";
import logo from "../../assets/images/logo.png";
// import candy from "../../assets/images/candy.svg";
import { Link } from "react-router";
import Login from "../Auth/Login";
import { IoSettingsOutline } from "react-icons/io5";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const topbarLeftData = [
    { title: "Coins:", valueNum: 17204, urlNum: "/" },
    { title: "Exchanges:", valueNum: 17204, urlNum: "/" },
    { title: "Market Cap:", valueNum: 17204, urlNum: "/" },
    { title: "24h Volume:", valueNum: 17204, urlNum: "/" },
    { title: "BTC Dominance:", valueNum: 17204, urlNum: "/" },
    { title: "BTC Dominance:", valueNum: 17204, urlNum: "/" },
    { title: "BTC Dominance:", valueNum: 17204, urlNum: "/" },
  ];
  return (
    <>
      <header>
        <section className="top-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={10}>
                <div className="leftTop-section">
                  {topbarLeftData.map((data, index) => {
                    return <TopbarLeft key={index} topbarLeftData={data} />;
                  })}
                </div>
              </Col>
              <Col lg={2}>
                <div className="rightTop-section">
                  <button className="rightTop-section-content">
                    <NavDropdown
                      style={{ fontSize: "12px" }}
                      title={<IoSettingsOutline />}
                    >
                      <NavDropdown.Item to="/#">
                        <div className="d-flex justify-content-between align-items-center gap-5">
                          <div>Language</div>
                          <div>English</div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item to="/#">
                        <div className="d-flex justify-content-between align-items-center gap-5">
                          <div>Currency</div>
                          <div>USD</div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item to="/#">
                        <div className="d-flex justify-content-between align-items-center gap-5">
                          <div>Dark Mode</div>
                          <div>
                            <Form>
                              <FormCheck type="switch" id="custom-switch" />
                            </Form>
                          </div>
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </button>
                  <button onClick={() => setShowModal(true)}>
                    <div
                      className="fw-semibold"
                      style={{ fontSize: "12px", letterSpacing: "0.04rem" }}
                    >
                      Login
                    </div>
                    <Login
                      show={showModal}
                      handleClose={() => setShowModal(false)}
                    />
                  </button>
                  <button className="rightTop-section-content-signup">
                    <div
                      className="fw-semibold"
                      style={{ fontSize: "12px", letterSpacing: "0.04rem" }}
                    >
                      Sign Up
                    </div>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="header-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="header-left-section">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={logo} alt="logo" width="140px" />
                    </Link>
                  </div>
                  <div className="menu-list">
                    <ul>
                      <li>
                        <Link to="/">Cryptocurrencies</Link>
                        <div className="menu-list-dropdown">
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="/">Exchanges</Link>
                        <div className="menu-list-dropdown">
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="/">NFT</Link>
                        <div className="menu-list-dropdown">
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="/">Learn</Link>
                        <div className="menu-list-dropdown">
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                        </div>
                      </li>
                      {/* <li>
                        <Link to="/">Products</Link>
                        <div className="menu-list-dropdown">
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link to="/">API</Link>
                        <div className="menu-list-dropdown">
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </Link>
                          <Link to="/">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </Link>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="pe-0">
                <div className="menu-list">
                  <ul className="justify-content-end align-items-center">
                    {/* <li>
                      <Link to="/">
                        <div className="d-flex align-items-center gap-2">
                          <img src={candy} alt="candy" width="10px" />
                          <p className="mb-0">Candy</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="protfolioIcons d-flex align-items-center gap-2">
                          <FontAwesomeIcon icon={faStar} />
                          <p className="mb-0">Portfolio</p>
                        </div>
                      </Link>
                    </li> */}
                    <li>
                      <div className="searchBar d-flex align-items-center">
                        <input
                          placeholder="Search"
                          type="search"
                          className="mr-sm-2 form-control"
                          style={{ border: "unset !important" }}
                        />
                        <div className="searchIcon">
                          <svg
                            fill="#000"
                            height="20"
                            viewBox="0 -960 960 960"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="search"
                          >
                            <title>Search</title>
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
                          </svg>
                        </div>
                        <div className="searchLink">
                          <span>/</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
};

export default Home;
