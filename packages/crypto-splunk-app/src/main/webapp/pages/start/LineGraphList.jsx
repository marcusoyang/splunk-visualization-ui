import React, { useEffect, useState } from 'react';
import MarketCapNode from '@splunk/market-cap-node';
import CardLayout from '@splunk/react-ui/CardLayout';
import LineGraphCard from './LineGraphCard';

const LineGraphList = () => {
    const [coins, setCoins] = useState(['BTC', 'ETH', 'BNB']);

    return (
        <CardLayout>
            {coins.map((coin) => (
                <>
                    <LineGraphCard coin={coin} type="market_cap" />
                    <LineGraphCard coin={coin} type="current_price" />
                </>
            ))}
        </CardLayout>
    );
};

export default LineGraphList;
