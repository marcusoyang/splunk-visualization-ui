import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@splunk/react-ui/Card';
import Heading from '@splunk/react-ui/Heading';
import SearchJob from '@splunk/search-job';
import Text from '@splunk/react-ui/Text';

const MarketCapNode = (props) => {
    const mySearchJob = SearchJob.create({
        // create a search job that searches against our lookup
        search: `index=main symbol=${props.coin} | stats latest(market_cap) as market_cap by name | table market_cap`,
        earliest_time: '-60m@m',
        latest_time: 'now',
    });

    const [coinMarketCap, setCoinMarketCap] = useState(0); // create our state variable to store our data, only need one for this example

    useEffect(() => {
        // fetch data after our first render with a useEffect hook
        const subscription = mySearchJob.getResults().subscribe((results) => {
            // subscribe to our search results, since results.results is in the form we need, no need to do anything else
            const marketCap = results.results[0]['market_cap'];
            setCoinMarketCap(parseInt(marketCap, 10).toLocaleString());
        });

        // clean up function
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <Card style={{ minWidth: 240 }}>
            <Card.Header title={`${props.coin} Market Cap`} />
            <Card.Body>
                <Heading level={1}>
                    <p>USD ${coinMarketCap}</p>
                </Heading>
            </Card.Body>
        </Card>
    );
};

MarketCapNode.propTypes = {
    coin: PropTypes.string.isRequired,
};

export default MarketCapNode;
