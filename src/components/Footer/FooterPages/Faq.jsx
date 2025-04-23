import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import faq1 from "../../../assets/images/faq1.webp";
import faq2 from "../../../assets/images/faq2.webp";

const Faq = () => {
  return (
    <Container className="pt-4">
      <h3 className="fw-semibold mb-4">Frequently Asked Questions (FAQ)</h3>
      <h5 style={{ color: "var(--green-color)" }}>Market Data & Charts</h5>

      <h5 className="pt-2">
        <strong>
          1. What are Coin Price, Market Capitalization, Volume, and Trust Score?
        </strong>
      </h5>
      <p>
        Coin Price refers to the current global volume-weighted average price
        of a cryptoasset traded on an active cryptoasset
        <a
          href="https://www.coingecko.com/en/exchanges"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}exchange
        </a>{" "}as tracked by CoinGecko.
      </p>
      <p><strong>Market Capitalization</strong> is one of the metrics used to measure the relative size of a cryptoasset. It is calculated by multiplying Coin Price with Circulating Supply.</p>
      <p><strong>Volume</strong> is the total trading volume of a cryptoasset across all active cryptoasset exchanges tracked by CoinGecko.</p>
      <p><strong>Trust Score</strong> is used to measure liquidity on trading pairs and crypto exchanges. It also measures overall liquidity, scale of operations, and API coverage.</p>
      <p>For a detailed explanation, read more about it on our <Link to="#">Methodology</Link> page.</p>

      <h5 className="mt-4">
        <strong>2. How Does CoinGecko Come Up With All the Different Charts/Data?</strong>
      </h5>
      <p>
        It’s a team effort! The CoinGecko team has been working hard to gather
        data for many cryptoassets from various sources since 2014...
      </p>

      <h5 className="mt-4">
        <strong>3. Why Is Market Capitalization a Dash (-) For Certain Projects?</strong>
      </h5>
      <p>
        An accurate market capitalization takes into account the circulating supply of a cryptoasset...
      </p>

      <h5 className="mt-4">
        <strong>4. How Is the Circulating Supply Calculated on CoinGecko?</strong>
      </h5>
      <p>
        To calculate the circulating supply, we pull information directly from API endpoints provided by respective project teams...
      </p>
      <img src={faq1} alt="faq1" className="img-fluid mb-4" />
      <img src={faq2} alt="faq2" className="img-fluid mb-4" />

      <h5><strong>5. How Frequently Is All the Information Updated?</strong></h5>
      <p>Our bots update our data based on a variable schedule...</p>
      <ul>
        <li>I. Price, trading volume, market capitalization – Updated every 1 to 10 minutes</li>
        <li>II. Circulating supply – Updated once per day</li>
        <li>III. Social, Developer, and Alexa Data – Updated once per day</li>
        <li>IV. Blockchain information – Updated every 1 hour</li>
      </ul>

      <h5 className="mt-4"><strong>6. What is Trust Score on CoinGecko?</strong></h5>
      <p>
        In response to fake trading volumes, we launched <strong>Trust Score</strong> in May 2019...
        <a
          href="https://www.coingecko.com/en/methodology#trust-score"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trust Score 2.0
        </a>{" "}
        in September 2019...
      </p>
      <p>
        On spot cryptocurrency exchanges, Trust Score is computed from multiple components...
        See the <Link to="#">Methodology</Link> page or <Link to="#">CoinGecko Blog</Link> for more.
      </p>

      <h5 className="mt-4" style={{ color: "var(--green-color)" }}><strong>API</strong></h5>

      <h6 className="mt-3"><strong>1. Do You Provide Any API?</strong></h6>
      <p>
        Yes! Access our comprehensive crypto market database...
        Our APIs are used by many services — read more about our API <Link to="#">here</Link>.
      </p>

      <h6 className="mt-3"><strong>2. Can Your API Be Used for Commercial Purposes?</strong></h6>
      <p>
        Absolutely! You can use our API for commercial/web applications...
        For branding use, check out our kit <Link to="#">here</Link>. And read our <Link to="#">TOS</Link>.
      </p>

      <h5 className="mt-4" style={{ color: "var(--green-color)" }}><strong>Project Listings</strong></h5>

      <h6 className="mt-3"><strong>1. How to Get Listed on CoinGecko?</strong></h6>
      <p>
        You may find our listing criteria and other information on the <Link to="#">Methodology</Link> page.
        If your project meets our requirements, apply <Link to="#">here</Link>.
      </p>

      <h6 className="mt-3"><strong>2. My Coin/Project’s Information Is Inaccurate. How Do I Get It Updated?</strong></h6>
      <p>Here’s how to help:</p>
      <ul>
        <li>Email support at <a href="mailto:support@coingecko.com">support@coingecko.com</a> with details</li>
        <li>Or submit a request via our <Link to="#">Application Form</Link></li>
      </ul>

      <h6 className="mt-3"><strong>3. Why Are There Not More Coins Listed?</strong></h6>
      <p>
        We take great care to ensure we list quality projects...
        see our criteria or contact us at <a href="mailto:support@coingecko.com">support@coingecko.com</a>.
      </p>

      <h5 style={{ color: "var(--green-color)" }}><strong>Others</strong></h5>

      <h6 className="mt-4"><strong>1. How to Deposit Money Into CoinGecko?</strong></h6>
      <p>
        CoinGecko is <strong>NOT</strong> a wallet, exchange, or escrow service of any form...
      </p>

      <h6 className="mt-4"><strong>2. What Are the Future Plans of CoinGecko?</strong></h6>
      <p>
        We plan to continue providing excellent service with our free <Link to="#">API</Link>...
      </p>
      <p>
        Drop us a ticket at <a href="mailto:support@coingecko.com">support@coingecko.com</a> with any suggestions or feedback.
      </p>
      <p>
        That’s the end of our FAQ! For more information, check out our <Link to="#">Help Center</Link>.
      </p>
    </Container>
  );
};

export default Faq;