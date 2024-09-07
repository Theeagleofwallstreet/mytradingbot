import React, { useState } from 'react';
import Contract from './Contract';

function App() {
    const { createBot, executeTrade, account } = Contract();
    const [params, setParams] = useState({
        maxSpread: 0,
        tradeFrequency: 0,
        risk: 0,
        startLots: 0,
        maxAllowedDD: 0
    });
    const [tradeType, setTradeType] = useState('');
    const [price, setPrice] = useState(0);

    const handleCreateBot = () => {
        createBot(params);
    };

    const handleExecuteTrade = () => {
        executeTrade(tradeType, price);
    };

    return (
        <div className="App">
            <h1>Trading Bot Manager</h1>
            <p>Connected Account: {account}</p>

            <h2>Create Trading Bot</h2>
            <input type="number" placeholder="Max Spread" onChange={(e) => setParams({ ...params, maxSpread: e.target.value })} />
            <input type="number" placeholder="Trade Frequency" onChange={(e) => setParams({ ...params, tradeFrequency: e.target.value })} />
            <input type="number" placeholder="Risk" onChange={(e) => setParams({ ...params, risk: e.target.value })} />
            <input type="number" placeholder="Start Lots" onChange={(e) => setParams({ ...params, startLots: e.target.value })} />
            <input type="number" placeholder="Max Allowed DD" onChange={(e) => setParams({ ...params, maxAllowedDD: e.target.value })} />
            <button onClick={handleCreateBot}>Create Bot</button>

            <h2>Execute Trade</h2>
            <input type="text" placeholder="Trade Type (BUY/SELL)" onChange={(e) => setTradeType(e.target.value)} />
            <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleExecuteTrade}>Execute Trade</button>
        </div>
    );
}

export default App;
