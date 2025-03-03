import React from "react";
import {
  Button,
  Col,
  Container,
  FormCheck,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavDropdown,
  NavLink,
  Row,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TopbarLeft from "./TopbarLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.webp";

const Home = () => {
  const topbarLeftData = [
    { title: "Coins:", valueNum: 17204, urlNum: "/" },
    { title: "Exchanges:", valueNum: 17204, urlNum: "/" },
    { title: "Market Cap:", valueNum: 17204, urlNum: "/" },
    { title: "24h Volume:", valueNum: 17204, urlNum: "/" },
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
                  <div className="rightTop-section-content">
                    <NavDropdown title={<FontAwesomeIcon icon={faGear} />}>
                      <NavDropdown.Item href="#">
                        <div className="d-flex justify-content-between align-items-center gap-5">
                          <div>Language</div>
                          <div>English</div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <div className="d-flex justify-content-between align-items-center gap-5">
                          <div>Currency</div>
                          <div>USD</div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
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
                  </div>
                  <div className="rightTop-section-content-login">
                    <a href="">Login</a>
                  </div>
                  <div className="rightTop-section-content-signup">
                    <a href="">Sign Up</a>
                  </div>
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
                    <img src={logo} alt="logo" width="140px" />
                  </div>
                  <div className="menu-list">
                    <ul>
                      <li>
                        <a href="">Cryptocurrencies</a>
                        <div className="menu-list-dropdown">
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">Exchanges</a>
                        <div className="menu-list-dropdown">
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">NFT</a>
                        <div className="menu-list-dropdown">
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">Learn</a>
                        <div className="menu-list-dropdown">
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">Products</a>
                        <div className="menu-list-dropdown">
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a href="">API</a>
                        <div className="menu-list-dropdown">
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Categories</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>By Market Cap</div>
                          </a>
                          <a href="">
                            <div>
                              <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div>Cryptocurrencies</div>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="menu-list">
                  <ul className="justify-content-end">
                    <li>
                      <a href="">Candy</a>
                    </li>
                    <li>
                      <a href="">Portfolio</a>
                    </li>
                    <li>
                      <input type="text" placeholder="Search" />
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
