import React from "react";
import { Container } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <>
      <Container className="py-4">
        <h3 className="fw-bold">CoinGecko Disclaimer</h3>
        <p>
          IMPORTANT DISCLAIMER: All content provided herein our website,
          hyperlinked sites, associated applications, forums, blogs, social
          media accounts and other platforms (“Site”) is for your general
          information only, procured primarily from third party sources. We make
          no warranties of any kind in relation to our content and services
          (such as token swap functionalities), including but not limited to
          accuracy, security and updatedness. No part of the content and
          services that we provide constitutes financial advice, legal advice or
          any other form of advice meant for your specific reliance for any
          purpose, nor any dealing in (or promotion of) securities for which a
          licence is required from the Monetary Authority of Singapore. Any use
          or reliance on our content and services is solely at your own risk and
          discretion. You should conduct your own research, review, analyse and
          verify our content and services before relying on or using them.
          Trading is a highly risky activity that can lead to major losses,
          please therefore consult your financial advisor before making any
          decision. No content on our Site is meant to be a solicitation or
          offer.
        </p>
      </Container>
    </>
  );
};

export default Disclaimer;
