import api from "./api";

export const getCryptoPrice = async (cryptoFrom, cryptoTo) => {
  try {
    const response = await api.get(`/simple/price?ids=${cryptoFrom},${cryptoTo}&vs_currencies=usd`);
    const fromPrice = response.data[cryptoFrom]?.usd || 0;
    const toPrice = response.data[cryptoTo]?.usd || 0;

    return fromPrice && toPrice ? toPrice / fromPrice : null;
  } catch (error) {
    console.error("Error fetching conversion rate:", error);
    return null;
  }
};