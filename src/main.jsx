import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router";

import Layout from "./Layout";
import { 
  Home, SinglePage, Categories, Chains, Highlights, NewCryptocurrencies, 
  CryptoGainersLosers, AllCoins, CompareCryptocurrencies, Converter, 
  GlobalCharts, CryptoExchanges, DecenterExchange, 
  Derivatives,
  NftFloorPrice
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="singlepage" element={<SinglePage />} />
      <Route path="categories" element={<Categories />} />
      <Route path="chains" element={<Chains />} />
      <Route path="highlights" element={<Highlights />} />
      <Route path="new-cryptocurrencies" element={<NewCryptocurrencies />} />
      <Route path="crypto-gainers-losers" element={<CryptoGainersLosers />} />
      <Route path="all-cryptocurrencies" element={<AllCoins />} />
      <Route path="compare-cryptocurrencies" element={<CompareCryptocurrencies />} />
      <Route path="converter" element={<Converter />} />
      <Route path="global-charts" element={<GlobalCharts />} />
      <Route path="exchanges" element={<CryptoExchanges />} />
      <Route path="derivatives" element={<Derivatives />} />
      <Route path="decentralized" element={<DecenterExchange />} />
      <Route path="nft" element={<NftFloorPrice />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
