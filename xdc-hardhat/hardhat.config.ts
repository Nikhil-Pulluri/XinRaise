import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";



require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const APOTHEM_NETWORK_URL = process.env.APOTHEM_NETWORK_URL;
const XINFIN_NETWORK_URL = process.env.XINFIN_NETWORK_URL;
const XINFIN_PRIVATE_KEY = process.env.XINFIN_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    xinfin: {
      url: XINFIN_NETWORK_URL,
      accounts: [XINFIN_PRIVATE_KEY],
    },
    apothem:{
      url: APOTHEM_NETWORK_URL,
      accounts: [XINFIN_PRIVATE_KEY],
    },
  },
};

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    xinfin: {
      url: process.env.XINFIN_NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY!]
    },
    apothem: {
      url: process.env.APOTHEM_NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY!]
    }
  }
};


dotenv.config();



export default config;
