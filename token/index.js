// const Moralis = require("moralis").default;
import Moralis from "moralis";

async function priceScan() {
  try {
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjEzNDI1OGRmLTUyZTUtNGM2YS1iOWViLTEwMjUyYWMzOTUzOSIsIm9yZ0lkIjoiMzkyMjY5IiwidXNlcklkIjoiNDAzMDczIiwidHlwZUlkIjoiZThmYjkxNmMtZjU3Ny00YmFkLWJkNzItZDAxMzIxZWI3MDk0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTU2ODk1MDMsImV4cCI6NDg3MTQ0OTUwM30.FDZ-4GfMZnuv-2GdhgsxixV_kpO7cA9doJtjE-vJ0YY",
    });

    const response = await Moralis.EvmApi.token.getTokenPrice({
      chain: "0x1",
      include: "percent_change",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    });

    return response.raw.usdPrice;
  } catch (e) {
    console.error(e);
  }
}

// module.exports = priceScan;
export default priceScan;
