import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  Image,
  ListGroup,
  ListGroupItem,
  OverlayTrigger,
  ProgressBar,
  Row,
  Tooltip,
} from "react-bootstrap";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import coinImg from "../../assets/images/bitcoin.webp";
import { MdInfoOutline } from "react-icons/md";
import graphImg from "../../assets/images/graph.png";
import { Link } from "react-router";
import { RiTwitterXLine } from "react-icons/ri";
import { FaCheck, FaFacebook, FaGithub, FaRegCopy } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import BTCConverter from "../BTCconverter/BTCConverter";
import rocket from "../../assets/images/rocket.svg";
import thumbsDown from "../../assets/images/thumbsDown.svg";
import CoinInfo from "./CoinInfo";

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip-2" {...props} className="custom-tooltip">
      <div className="text-start p-2">
        <h6>How is the price of Bitcoin (BTC) calculated?</h6>
        <p>
          The price of Bitcoin (BTC) is calculated in real-time by aggregating
          the latest data across 212 exchanges and 3703 markets, using a global
          volume-weighted average formula. Learn more about how crypto prices
          are calculated on CoinGecko.
        </p>
      </div>
    </Tooltip>
  );
}

const stats = [
  {
    label: "Market Cap",
    value: "$1,754,044,383,868",
    tooltip: "Total value of the cryptocurrency in circulation.",
  },
  {
    label: "Fully Diluted Valuation",
    value: "$1,754,044,383,868",
    tooltip: "Estimated market cap if all coins were in circulation.",
  },
  {
    label: "24 Hour Trading Vol",
    value: "$60,452,521,645",
    tooltip: "Total volume of this cryptocurrency traded in the last 24 hours.",
  },
  {
    label: "Circulating Supply",
    value: "19,832,371",
    tooltip: "The number of coins that are currently available in the market.",
  },
  {
    label: "Total Supply",
    value: "21,000,000",
    tooltip: "The total number of coins that will ever exist.",
  },
  {
    label: "Max Supply",
    value: "21,000,000",
    tooltip: "The maximum number of coins that will ever exist.",
  },
];

const infoItems = [
  {
    label: "Website",
    links: ["bitcoin.org", "bitcoin.org"],
  },
  {
    label: "Explorers",
    dropdown: ["Arkham", "Blockchair", "Btc", "Tokenview", "Oklink"],
    mainLink: "Mempool",
  },
  {
    label: "Wallets",
    dropdown: ["Arkham", "Blockchair", "Btc", "Tokenview", "Oklink"],
    mainLink: "Ledger",
  },
  {
    label: "Community",
    links: [
      { icon: <RiTwitterXLine />, text: "Twitter" },
      { icon: <FaFacebook />, text: "Facebook" },
      "bitcointalk.org",
    ],
  },
  {
    label: "Search on",
    links: [{ icon: <IoSearchOutline />, text: "Twitter" }],
  },
  {
    label: "Source Code",
    links: [{ icon: <FaGithub />, text: "Github" }],
  },
  {
    label: "API ID",
    copyable: "bitcoin",
  },
  {
    label: "Chains",
    links: ["Bitcoin Ecosystem"],
  },
  {
    label: "Categories",
    dropdown: [
      "Layer 1 (L1)",
      "FTX Holdings",
      "Proof of Work (PoW)",
      "GMCI 30 Index",
      "GMCI Index",
    ],
    mainLink: "Smart Contract Platform",
    moreLabel: "6 more",
  },
];

function SinglePage() {
  const [copied, setCopied] = useState(false);
  const [animateRocket, setAnimateRocket] = useState(false);
  const [animateThumbsDown, setAnimateThumbsDown] = useState(false);

  const triggerAnimation = (type) => {
    if (type === "rocket") {
      setAnimateRocket(true);
      setTimeout(() => setAnimateRocket(false), 1000); // Reset animation
    } else {
      setAnimateThumbsDown(true);
      setTimeout(() => setAnimateThumbsDown(false), 1000);
    }
  };
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const coinData = [
    {
      eventKey: "about",
      title: "About",
      content: [
        {
          title: "About Bitcoin (BTC)",
          text: "Bitcoin (BTC) is the first cryptocurrency built on blockchain technology, also known as a decentralized digital currency that is based on cryptography. Unlike government-issued or fiat currencies such as US Dollars or Euro which are controlled by central banks, Bitcoin can operate without the need of a central authority like a central bank or a company. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.",
        },
        {
          title: "Who created Bitcoin?",
          text: "The creator is an unknown individual or group that goes by the name Satoshi Nakamoto with the idea of an electronic peer-to-peer cash system as it is written in a whitepaper. Until today, the true identity of Satoshi Nakamoto has not been verified though there has been speculation and rumor as to who Satoshi might be. What we do know is that officially, the first genesis block of BTC was mined on 9th January 2009, defining the start of cryptocurrencies.",
        },
        {
          title: "How does Bitcoin work?",
          text: "While the general public perceives Bitcoin as a physical looking coin, it is actually far from that. Under the hood, it is a distributed accounting ledger that is stored as a chain of blocks - hence the name blockchain.\n\nLet's compare how Bitcoin is different from a commercial bank, which operates as a centralized system. Given a situation where Alice wants to transact with Bob, the bank is the only entity that holds the ledger that describes how much balance Alice and Bob has. As the bank maintains the ledger, they will do the verification as to whether Alice has enough funds to send to Bob. Finally when the transaction successfully takes place, the Bank will deduct Alice’s account and credit Bob’s account with the latest amount.\n\nBitcoin conversely works in a decentralized manner. Since there is no central figure like a bank to verify the transactions and maintain the ledger, a copy of the ledger is distributed across Bitcoin nodes. A node is a piece of software that anybody can download and run to participate in the network. With that, everybody has a copy of how much balance Alice and Bob has, and there will be no dispute of fund balance.\n\nNow, if Alice were to transact with Bob using bitcoin. Alice will have to broadcast her transaction to the network that she intends to send $1 to Bob in equivalent amount of bitcoin. So how does the system determine if Alice has enough bitcoin to execute the transaction? This is where mining takes place.",
        },
        {
          title: "Bitcoin Mining",
          text: "A Bitcoin miner will use his or her computer rigs to validate Alice’s transaction to be added into the ledger. In order to stop a miner from adding any arbitrary transactions, they will need to solve a complex puzzle. Only if the miner is able to solve the puzzle (called the Proof of Work), which happens at random, then he or she is able to add the transactions into the ledger and the record is final.\n\nSince running computer rigs cost money due to capital expenditure, which includes the cost of the rigs and the cost of electricity, miners are rewarded with new supply of bitcoins. This is the monetary system behind Bitcoin, where the fees for validating transactions on the network is paid by the person who wishes to transact (in this case it is Alice).\n\nThis makes the Bitcoin ledger resilient against fraud in a trustless manner. While it is resilient, there are still some risks associated with the system such as the 51% attack whereby miners control more than 51% of the total computation power and also there can be security risks outside of the control of the Bitcoin protocol.",
        },
        {
          title: "How to keep your Bitcoin safe?",
          text: "When transacting coins, you would typically be doing it on your personal computer. Since your personal computer is connected to the internet, it has the potential to be infected by malware or spywares which could compromise your funds.\n\nHardware wallets such as Trezor and Ledger are strongly encouraged in mitigating that risk. These are external devices that look like USB sticks. A hardware wallet secures your private key that holds your Bitcoin into an external device outside of your personal computer. When you intend to transact, you would connect the hardware wallet into your personal computer, and all the key signing in order to transact would be done in the hardware itself outside of your computer.\n\nHowever, if you physically lose your hardware wallet without a key phrase backup, there is no other way of recovering your funds ever. As such when setting up your hardware wallet, always remember to keep a copy of the key phrase and put it somewhere safe from fire or flood.",
        },
        {
          title: "Bitcoin Halving",
          text: "Bitcoin Halving or sometimes also known as the Halvening, refers to the reduction of block reward to miners by half. This is part of its built-in monetary policy, in which after every approximately 4 years, the mining reward will be halved towards the limited capped supply of 21 million Bitcoin. Once 21 million of Bitcoin have been minted, there will no longer be new supply of it rewarded to miners, and miners are expected to earn revenue by way of transaction fees.\n\nThis is seen as a significant event for a couple of reasons. Firstly, traders may speculate on the possible scarcity of Bitcoin making way to high volatility. Secondly, as miners' rewards will be reduced, we may see some miners exiting the market as they could not sustain the lower profitability. This in turn may cause the hashing rate to reduce and mining pools may consolidate. Due to this, the bitcoin network may be a little unstable during the halving period.",
        },
        {
          title: "Bitcoin FAQs",
          text: "Where can you buy Bitcoin?\nBTC tokens can be traded on centralized crypto exchanges. The most popular exchange to buy and trade Bitcoin is Binance, where the most active trading pair BTC/USDT has a trading volume of €3,239,246,059 in the last 24 hours. Other popular options include WEEX and Crypto.com Exchange.\n\nWhat is the daily trading volume of Bitcoin (BTC)?\nThe trading volume of Bitcoin (BTC) is €48,565,508,290 in the last 24 hours, representing a -15.60% decrease from one day ago and signalling a recent fall in market activity.\n\nWhat is the highest and lowest price for Bitcoin (BTC)?\nBitcoin (BTC) reached an all-time high of €105,495 and an all-time low of €51.30. It’s now trading 19.84% below that peak and 164,747.01% above its lowest price.\n\nWhat is the market cap of Bitcoin (BTC)?\nMarket capitalization of Bitcoin (BTC) is €1,683,606,049,265 and is ranked #1 on CoinGecko today. Market cap is measured by multiplying token price with the circulating supply of BTC tokens (20 Million tokens are tradable on the market today).\n\nWhat is the fully diluted valuation of Bitcoin (BTC)?\nThe fully diluted valuation (FDV) of Bitcoin (BTC) is €1,683,606,813,269. This is a statistical representation of the maximum market cap, assuming the maximum number of 21 Million BTC tokens are in circulation today.\n\nHow does the price performance of Bitcoin compare against its peers?\nWith a price increase of 6.50% in the last 7 days, Bitcoin (BTC) is underperforming the global cryptocurrency market which is up 6.70%.",
        },
      ],
    },
    {
      eventKey: "tokenomics",
      title: "Tokenomics",
      content: [
        {
          title: "Bitcoin (BTC) Tokenomics",
          text: "Learn more about Bitcoin (BTC) tokenomics and view project details below.",
        },
        {
          title: "What is the allocation for Bitcoin (BTC)?",
          text: "There is no allocation of Bitcoin as newly minted Bitcoin is awarded to whichever miner that mines a new block. That being said, it is worth noting that there had been speculation for years on 'Satoshi's Bitcoin Holding' based on their alleged mining activity in the early onset of the Bitcoin Network's existence. Despite that, there is no concrete proof of their actual ownership of the coins and claims remain highly speculated. All currently mined Bitcoin is considered circulating with the arguable exception of certain provably burned bitcoin addresses.",
        },
        {
          title: "What is the supply schedule for Bitcoin (BTC)?",
          text: "Bitcoin's supply is programmed to be capped at 21,000,000 coins. On 3rd January 2009, The Genesis Block started the Bitcoin Network. Miners' reward is halved every 210,000 blocks or every 4 years. Halving is the process where the block rewards given to miners for successfully mining each block is cut in half. The halving process will continue every 210,000 blocks until all 21 million bitcoins have been mined completely - with the last sats expected to be rewarded in 2142. Once 21 million Bitcoin have been minted, there will no longer be a new supply. Miners are expected to earn revenue through transaction fees.",
        },
        {
          title: "What are the funding rounds for Bitcoin (BTC)?",
          text: "There are no funding rounds for Bitcoin.",
        },
        {
          title: "Additional Information",
          text: "Check out some other coins that currently do have Tokenomics data here!\n\nAny suggestions for us to improve further? Please tell us how we can do it better!",
        },
      ],
    },
    {
      eventKey: "security",
      title: "Security",
      content: [
        {
          title: "Bitcoin Security",
          text: "Bitcoin transactions are secured using cryptography and the decentralized nature of blockchain.",
        },
        {
          title: "Network Protection",
          text: "The Bitcoin network is protected by miners using a proof-of-work consensus mechanism.",
        },
      ],
    },
  ];
  return (
    <section className="single-page-section py-3">
      <Container>
        <Row>
          <Col lg={4} className="pe-4">
            <div className="singlePage-left">
              <Breadcrumbs title="Bitcoin Price" title1="Cryptocurrencies" />
              <div className="coinInfo">
                <div className="d-flex align-items-center gap-2">
                  <Image src={coinImg} alt="Bitcoin" width="25" />
                  <h5 className="mb-0 fw-bold">Bitcoin</h5>
                  <p className="fw-medium mb-0">BTC Price</p>
                  <span
                    className="badge text-dark"
                    style={{ backgroundColor: "var(--inputColor)" }}
                  >
                    #1
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 py-2">
                  <p className="fw-bold fs-2 mb-0">$90,311.00</p>
                  <p
                    className="mb-0 fs-5 fw-semibold text-nowrap "
                    style={{ color: "var(--green-color)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                    </svg>{" "}
                    15.2%
                  </p>
                  <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                    <span className="d-inline-flex align-items-center cursor-pointer">
                      <MdInfoOutline />
                    </span>
                  </OverlayTrigger>
                </div>
                <div className="">
                  <div className="pb-2">
                    <span>1.0000 BTC</span>
                    <span style={{ color: "var(--textRed)" }}>
                      {" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        version="1.2"
                        baseProfile="tiny"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                      </svg>{" "}
                      24.8%
                    </span>
                  </div>
                  <ProgressBar now={95} />
                  <div className="d-flex justify-content-between pt-2 fw-semibold">
                    <div>
                      <span>$81,688.43</span>
                    </div>
                    <div>
                      <span>$88,895.65</span>
                    </div>
                    <div>
                      <span>$88,895.65</span>
                    </div>
                  </div>
                  <div className="py-3">
                    <Button
                      variant="light"
                      className="d-flex align-items-center mb-3 w-100"
                    >
                      <span className="me-auto">Add to Portfolio</span>
                      <small className="text-muted">1,956,637 added</small>
                    </Button>

                    <ListGroup variant="flush">
                      {stats.map((stat, index) => (
                        <ListGroup.Item
                          key={index}
                          className="d-flex justify-content-between py-3 border-bottom px-0"
                          style={{
                            borderColor: "var(--border-color) !important",
                          }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            {stat.label}
                            <OverlayTrigger
                              placement="bottom"
                              overlay={
                                <Tooltip id={`tooltip-${index}`}>
                                  <div className="text-start">
                                    {stat.tooltip}
                                  </div>
                                </Tooltip>
                              }
                            >
                              <span className="d-inline-flex align-items-center cursor-pointer">
                                <MdInfoOutline style={{ cursor: "pointer" }} />
                              </span>
                            </OverlayTrigger>
                          </div>
                          <strong>{stat.value}</strong>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </div>
                <div className="infoWrapper">
                  <h5 className="fw-bold">Info</h5>
                  <ListGroup variant="flush">
                    {infoItems.map(
                      (
                        {
                          label,
                          links,
                          dropdown,
                          mainLink,
                          copyable,
                          moreLabel,
                        },
                        index
                      ) => (
                        <ListGroupItem
                          key={index}
                          className="d-flex justify-content-between py-3 border-bottom px-0"
                        >
                          <div className="d-flex align-items-center gap-2">
                            {label}
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            {links &&
                              links.map((link, i) =>
                                typeof link === "string" ? (
                                  <Link key={i} to="/" className="CusBtn">
                                    {link}
                                  </Link>
                                ) : (
                                  <Link
                                    key={i}
                                    to="/"
                                    className="CusBtn d-flex align-items-center gap-1"
                                  >
                                    {link.icon}
                                    <span>{link.text}</span>
                                  </Link>
                                )
                              )}
                            {dropdown && (
                              <Dropdown as={ButtonGroup} className="CusBtn">
                                <Link to="/">
                                  <div>{mainLink}</div>
                                </Link>
                                <Dropdown.Toggle split className="CusBtnDark" />
                                <Dropdown.Menu className="Explorer-dropdown">
                                  {dropdown.map((item, i) => (
                                    <Dropdown.Item key={i} href="#">
                                      {item}
                                    </Dropdown.Item>
                                  ))}
                                </Dropdown.Menu>
                              </Dropdown>
                            )}
                            {moreLabel && (
                              <Dropdown as={ButtonGroup} className="CusBtn">
                                <Link>
                                  <div>{moreLabel}</div>
                                </Link>
                                <Dropdown.Toggle
                                  split
                                  className="CusBtnDark border-0"
                                />
                                <Dropdown.Menu className="Explorer-dropdown">
                                  {dropdown.map((item, i) => (
                                    <Dropdown.Item key={i} href="#">
                                      {item}
                                    </Dropdown.Item>
                                  ))}
                                </Dropdown.Menu>
                              </Dropdown>
                            )}
                            {copyable && (
                              <div
                                onClick={handleCopy}
                                className="CusBtn d-flex gap-1 align-items-center"
                              >
                                <span>bitcoin</span>
                                {copied ? (
                                  <FaRegCheckCircle className="text-success" />
                                ) : (
                                  <FaRegCopy />
                                )}
                              </div>
                            )}
                          </div>
                        </ListGroupItem>
                      )
                    )}
                  </ListGroup>
                </div>
                <div className="infoWrapper py-4">
                  <h5 className="fw-bold">BTC Converter</h5>
                  <BTCConverter />
                </div>
                <div className="infoWrapper">
                  <h5 className="fw-bold">BTC Historical Price</h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between px-0 py-3 border-bottom">
                      <div className="d-flex align-items-center gap-2">
                        24h Range
                      </div>
                      <strong>€81,452.23 – €85,554.39</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0 py-3 border-bottom">
                      <div className="d-flex align-items-center gap-2">
                        7d Range
                      </div>
                      <strong>€75,887.81 – €91,117.38</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0 py-3 border-bottom">
                      <div className="d-flex align-items-center gap-2">
                        All-Time High
                      </div>
                      <div className="d-flex flex-column align-items-end gap-2">
                        <div className="fw-bold d-flex align-items-center gap-1">
                          <span>€105,495</span>
                          <span style={{ color: "var(--textRed)" }}>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              version="1.2"
                              baseProfile="tiny"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                            </svg>{" "}
                            24.8%
                          </span>
                        </div>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Jan 20, 2025 (about 1 month)
                        </p>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between px-0 py-3 border-bottom">
                      <div className="d-flex align-items-center gap-2">
                        All-Time Low
                      </div>
                      <div className="d-flex flex-column align-items-end gap-2">
                        <div className="fw-bold d-flex align-items-center gap-1">
                          <span>€105,495</span>
                          <span style={{ color: "var(--green-color)" }}>
                            {" "}
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              version="1.2"
                              baseProfile="tiny"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"></path>
                            </svg>{" "}
                            24.8%
                          </span>
                        </div>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          Jul 06, 2013 (over 11 years)
                        </p>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                <div className="infoWrapper py-4">
                  <h5 className="fw-bold">How do you feel about BTC today?</h5>
                  <p className="mb-0 text-muted" style={{ fontSize: "12px" }}>
                    The community is bullish about Bitcoin (BTC) today.
                  </p>
                  <div className="feelAboutBTC d-flex align-items-center gap-2 pt-2">
                    <button
                      className="btn d-flex align-items-center justify-content-center gap-1"
                      onClick={() => triggerAnimation("rocket")}
                    >
                      <span>
                        <img
                          src={rocket}
                          alt="rocket"
                          width="20px"
                          className={animateRocket ? "animateImg" : ""}
                        />
                      </span>
                      <span>80%</span>
                    </button>
                    <button
                      className="btn d-flex align-items-center justify-content-center gap-1"
                      onClick={() => triggerAnimation("thumbsDown")}
                    >
                      <span>
                        <img
                          src={thumbsDown}
                          alt="thumbsDown"
                          width="20px"
                          className={animateThumbsDown ? "animateImg" : ""}
                        />
                      </span>
                      <span>20%</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} className="border-start">
            <div className="singlePage-right">
              <img src={graphImg} alt="graph" />
              <CoinInfo coinData={coinData} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SinglePage;
