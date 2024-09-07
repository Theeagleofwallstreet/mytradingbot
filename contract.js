import Web3 from 'web3';
import { useState, useEffect } from 'react';
import contractABI from './contractABI.json'; // Import your contract's ABI

const CONTRACT_ADDRESS = "0xYourContractAddressHere";

const Contract = () => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            window.ethereum.enable().then((accounts) => {
                setAccount(accounts[0]);
                const contractInstance = new web3Instance.eth.Contract(contractABI, CONTRACT_ADDRESS);
                setContract(contractInstance);
            });
        } else {
            console.log('Non-Ethereum browser detected. Please install MetaMask!');
        }
    }, []);

    const createBot = async (params) => {
        await contract.methods.createBot(
            params.maxSpread, params.tradeFrequency, params.risk, params.startLots, params.maxAllowedDD
        ).send({ from: account });
    };

    const executeTrade = async (tradeType, price) => {
        await contract.methods.executeTrade(tradeType, price).send({ from: account });
    };

    return { createBot, executeTrade, account };
};

export default Contract;

