import React, { useEffect, useState } from 'react';
import MarketCapNode from '@splunk/market-cap-node';
import CardLayout from '@splunk/react-ui/CardLayout';

const MarketCapList = () => {
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
