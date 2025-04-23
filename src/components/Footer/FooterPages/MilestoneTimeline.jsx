import React from "react";
import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2014",
    events: [
      <p><span className='fw-bold'>April:</span> CoinGecko launches to provide a 360 overview on the crypto market.</p>
    ]
  },
  {
    year: "2017",
    events: [
      <p><span className='fw-bold'>October:</span> CoinGecko launches its quarterly <Link to="/reports" className="fw-bold">cryptocurrency report</Link></p>
    ]
  },
  {
    year: "2018",
    events: [
      <p><span className='fw-bold'>April:</span> CoinGecko launches its <Link to="/newsletter" className="fw-bold">daily newsletter</Link> to provide curated crypto news</p>,
      <p><span className='fw-bold'>May:</span> CoinGecko launches its <Link to="/api" className="fw-bold">free public API</Link> with over 20 endpoints available</p>,
      <p><span className='fw-bold'>July:</span> CoinGecko launches its <Link to="/mobile-apps" className="fw-bold">official iOS and Android app</Link></p>
    ]
  },
  {
    year: "2019",
    events: [
      <p><span className='fw-bold'>May:</span> CoinGecko launches <Link to="/trust-score" className="fw-bold">Trust Score</Link> to combat fake exchange volume data</p>,
      <p><span className='fw-bold'>October:</span> CoinGecko launches its <Link to="/derivatives" className="fw-bold">Derivatives section</Link></p>
    ]
  },
  {
    year: "2020",
    events: [
      <p><span className='fw-bold'>Jan:</span> CoinGecko launches its <Link to="/podcast" className="fw-bold">podcast</Link></p>,
      <p><span className='fw-bold'>March:</span> CoinGecko launches world-first <Link to="/how-to-defi" className="fw-bold">DeFi book</Link> and <Link to="/earn" className="fw-bold">Earn</Link> section</p>,
      <p><span className='fw-bold'>June:</span> CoinGecko launches <Link to="/candy" className="fw-bold">CoinGecko Candy</Link> – be rewarded for using CoinGecko!</p>,
      <p><span className='fw-bold'>August:</span> CoinGecko launches <Link to="/portfolio" className="fw-bold">Portfolio</Link></p>,
      <p><span className='fw-bold'>September:</span> CoinGecko launches new <Link to="/defi" className="fw-bold">DeFi</Link> page</p>
    ]
  },
  {
    year: "2021",
    events: [
      <p><span className='fw-bold'>February:</span> CoinGecko releases its second book, <Link to="/how-to-bitcoin" className="fw-bold">How To Bitcoin</Link> and <Link to="/category" className="fw-bold">Category</Link> section</p>,
      <p><span className='fw-bold'>March:</span> CoinGecko releases its <Link to="/enterprise-api" className="fw-bold">Enterprise API</Link></p>,
      <p><span className='fw-bold'>April:</span> CoinGecko launches <Link to="/premium" className="fw-bold">Premium</Link> and <Link to="/premium-plus" className="fw-bold">Premium+ Subscription</Link> and NFT Spotlight</p>,
      <p><span className='fw-bold'>July:</span> CoinGecko releases <Link to="/how-to-defi-advanced" className="fw-bold">How to DeFi: Advanced</Link></p>,
      <p><span className='fw-bold'>August:</span> CoinGecko launches <Link to="/geckoterminal" className="fw-bold">GeckoTerminal</Link> for live on-chain price charts</p>,
      <p><span className='fw-bold'>November:</span> CoinGecko hosts its first conference <Link to="/geckocon-2021" className="fw-bold">GeckoCon: NFTs Gone Wild</Link></p>
    ]
  },
  {
    year: "2022",
    events: [
      <p><span className='fw-bold'>January:</span> CoinGecko releases <Link to="/how-to-nft" className="fw-bold">How to NFT</Link> book</p>,
      <p><span className='fw-bold'>February:</span> CoinGecko releases <Link to="/mobile-app-v2" className="fw-bold">Mobile App V2</Link></p>,
      <p><span className='fw-bold'>May:</span> CoinGecko revamps its <Link to="/premium" className="fw-bold">Premium Subscription</Link></p>,
      <p><span className='fw-bold'>July:</span> CoinGecko hosts <Link to="/geckocon-2022" className="fw-bold">GeckoCon: The Decentralized Future</Link></p>
    ]
  },
  {
    year: "2023",
    events: [
      <p><span className='fw-bold'>April:</span> 100,000 subscribers on our <Link to="/youtube" className="fw-bold">Youtube channel</Link></p>,
      <p><span className='fw-bold'>June:</span> CoinGecko releases <Link to="/nft-floor-price" className="fw-bold">NFT floor price tracker</Link></p>,
      <p><span className='fw-bold'>October:</span> CoinGecko expands Crypto Data API with <Link to="/zash-acquisition" className="fw-bold">Zash acquisition</Link></p>
    ]
  },
  {
    year: "2024",
    events: [
      <p><span className='fw-bold'>April:</span> CoinGecko API launches 20 new <Link to="/dex-data" className="fw-bold">on-chain DEX data</Link> endpoints</p>,
      <p><span className='fw-bold'>April:</span> CoinGecko celebrates its <Link to="/10th-anniversary" className="fw-bold">10th Anniversary</Link></p>
    ]
  }
];

const MilestoneTimeline = () => {
  return (
    <div className="timeline-container">
      <h3 className="text-center fw-bold">Celebrate Our Milestones</h3>
      <p className="text-center fs-6">
        Journey through our significant milestones, since our inception in 2014.
      </p>
      <div className="timeline">
        {milestones.map((milestone, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" />
            <div>
              <h4 className="fw-bold">{milestone.year}</h4>
              <ul className="mb-4 ml-0">
                {milestone.events.map((event, i) => (
                  <li key={i} className="fs-6 mb-2 list-unstyled ">{event}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTimeline;
