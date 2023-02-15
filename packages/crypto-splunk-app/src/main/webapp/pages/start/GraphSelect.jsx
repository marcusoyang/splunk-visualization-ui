import React, { useEffect, useState } from 'react';
import Card from '@splunk/react-ui/Card';
import LineGraphCard from './LineGraphCard';
import SearchSymbol from './SearchSymbol';
import CardLayout from '@splunk/react-ui/CardLayout';

const GraphSelect = () => {
    const [coin, setCoin] = useState('BTC');

    return (
        <>
            <Card.Header style={{ minWidth: 60, maxWidth: 350 }}>
                <SearchSymbol setCoin={setCoin} />
            </Card.Header>
            <Card.Body>
                <CardLayout>
                    <LineGraphCard coin={coin} type="market_cap" />
                    <LineGraphCard coin={coin} type="current_price" />
                </CardLayout>
            </Card.Body>
        </>
    );
};

export default GraphSelect;
