import React, { useState } from 'react';
import CardLayout from '@splunk/react-ui/CardLayout';
import LineGraphCard from './LineGraphCard';

const LineGraphList = () => {
    // Future Functionality - Make a panel that allows selection of default coins to display
    // eslint-disable-next-line no-unused-vars
    const [coins, setCoins] = useState(['BTC', 'ETH', 'BNB']);

    return (
        <CardLayout>
            {coins.map((coin) => (
                <>
                    <LineGraphCard coin={coin} type="market_cap" key={`${coin}_market_cap`} />
                    <LineGraphCard coin={coin} type="current_price" key={`${coin}_price`} />
                </>
            ))}
        </CardLayout>
    );
};

export default LineGraphList;
