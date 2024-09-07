![screenshot from deployment](https://github.com/user-attachments/assets/949c28f1-f830-451c-9ef7-757622fb7991)
# Mytradingbot
mytradingbot is a decentralized trading bot built for crypto markets, allowing users to create customizable bots on Ethereum. It features adjustable risk settings, trade frequency, and supports assets like ETH and ERC-20 tokens, providing transparent and secure trade execution through blockchain technology
# mytradingbot

## Overview

**mytradingbot** is a decentralized trading bot that allows users to create and deploy their own customizable trading bots directly on the Ethereum blockchain. This project was built as part of a Web3 Hackathon and supports multiple crypto assets, including ETH and ERC-20 tokens.

The platform provides transparency and auditability for all trades, ensuring every transaction is recorded on-chain. The bot's parameters can be fine-tuned by users to match their trading strategies, whether conservative or aggressive.

## Key Features

- **Customizable Trading Bots:** Users can deploy bots with adjustable risk settings, trade frequency, and more.
- **Blockchain-Based:** Built using Solidity and deployed on Ethereum, ensuring all trades are fully transparent and immutable.
- **Supports Multiple Assets:** Users can trade ETH and ERC-20 tokens with the bot.
- **User-Friendly Interface:** The bot configuration can be managed through a front-end interface built with React, enabling easy deployment and trade management.
- **No Centralized Control:** Fully decentralized, all trade data is handled via smart contracts, removing the need for centralized platforms.

## Tech Stack

- **Solidity:** For writing the smart contract that handles bot logic and trade execution.
- **React.js:** Front-end interface for interacting with the smart contract.
- **web3.js:** For connecting the front end to the Ethereum network.
- **MetaMask:** Wallet integration for user interaction with Ethereum.
- **Ethereum Blockchain (Testnet):** Used for deploying the smart contract during development and Hackathon testing.
  
## Project Structure

- `contracts/`: Contains the Solidity smart contract code.
- `frontend/`: The React front-end application for interacting with the bot.
- `scripts/`: Deployment scripts for deploying the smart contract to Ethereum.
- `README.md`: This file, explaining the project's purpose and setup.

## How to Run the Project

1. **Smart Contract Deployment**
    - The smart contract can be deployed using Remix IDE or Hardhat.
    - Ensure you have MetaMask installed with some testnet ETH for gas fees.
    - Use Rinkeby or Goerli testnet for testing.

2. **Front-End Application**
    - Clone the repository:
      ```bash
      git clone https://github.com/theeagleofwallstreet/mytradingbot.git
      ```
    - Navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the front-end:
      ```bash
      npm start
      ```
    - Make sure your MetaMask wallet is connected to the Ethereum testnet.

3. **Interact with the Bot**
    - Use the front-end to configure your bot (adjust risk, set trade frequency, etc.).
    - Deposit ETH or ERC-20 tokens to start live trading.
    - View transaction history and bot performance, all logged on-chain.

## Screenshots![mytradingbot](https://github.com/user-attachments/assets/0778f15e-1fe4-45a2-b8a0-90e3d6b3b311)


_Add screenshots here showing the front-end interface._

## Demo Video

Link to a demo video showcasing the setup and functionality of the bot.

## Contributing

If you'd like to contribute, please submit a pull request with detailed changes and explanations. All contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
