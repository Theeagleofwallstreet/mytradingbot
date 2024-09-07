// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TradingBotFactory {

    // Struct to define a Trading Bot's strategy parameters
    struct BotConfig {
        address owner;
        uint256 maxSpread;
        uint256 tradeFrequency;
        uint256 risk;
        uint256 startLots;
        uint256 maxAllowedDD;
        bool showInfoPanel;
        string assetPair;
    }

    // Store all the bots created
    mapping(address => BotConfig) public bots;
    mapping(address => bool) public hasBot;

    event BotCreated(address indexed owner, address botAddress);
    event TradeExecuted(address indexed botAddress, string tradeType, uint256 amount, uint256 price);

    // Modifier to restrict access to bot owner
    modifier onlyBotOwner() {
        require(hasBot[msg.sender], "You don't own a bot.");
        _;
    }

    // Function to create a new trading bot
    function createBot(
        uint256 _maxSpread,
        uint256 _tradeFrequency,
        uint256 _risk,
        uint256 _startLots,
        uint256 _maxAllowedDD,
        bool _showInfoPanel,
        string memory _assetPair
    ) public {
        require(!hasBot[msg.sender], "Bot already exists for this address.");
        
        BotConfig memory newBot = BotConfig({
            owner: msg.sender,
            maxSpread: _maxSpread,
            tradeFrequency: _tradeFrequency,
            risk: _risk,
            startLots: _startLots,
            maxAllowedDD: _maxAllowedDD,
            showInfoPanel: _showInfoPanel,
            assetPair: _assetPair
        });

        bots[msg.sender] = newBot;
        hasBot[msg.sender] = true;

        emit BotCreated(msg.sender, address(this));
    }

    // Function to execute a trade
    function executeTrade(string memory tradeType, uint256 amount, uint256 price) public onlyBotOwner {
        // Trading logic based on bot configuration and input parameters
        // For simplicity, we simulate a trade execution here
        emit TradeExecuted(msg.sender, tradeType, amount, price);
    }

    // Function to get bot details
    function getBotDetails() public view returns (BotConfig memory) {
        require(hasBot[msg.sender], "No bot found for this address.");
        return bots[msg.sender];
    }

    // Function to display bot's performance (dummy implementation)
    function getPerformance() public view onlyBotOwner returns (string memory) {
        // In real implementation, this would return actual performance data
        return "Performance data is not implemented yet.";
    }
}
