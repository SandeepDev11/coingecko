import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import Layout from "./Layout";
import { Home, SinglePage, Categories, Chains, Highlights, NewCryptocurrencies, CryptoGainersLosers } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/singlepage" element={<SinglePage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/new-cryptocurrencies" element={<NewCryptocurrencies />} />
      <Route path="/crypto-gainers-losers" element={<CryptoGainersLosers />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
