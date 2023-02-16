import React, { useState } from 'react';
import MarketCapNode from '@splunk/market-cap-node';
import CardLayout from '@splunk/react-ui/CardLayout';

const MarketCapList = () => {
    // Future Functionality - Make a panel that allows selection of coins to display
    // eslint-disable-next-line no-unused-vars
    const [coins, setCoins] = useState(['BTC', 'ETH', 'USDT', 'BNB', 'XRP', 'ADA']);

    return (
        <CardLayout>
            {coins.map((coin) => (
                <MarketCapNode coin={coin} key={coin} />
            ))}
        </CardLayout>
    );
};

export default MarketCapList;
