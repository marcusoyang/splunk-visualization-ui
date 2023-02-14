import React, { useState, useEffect } from 'react';
import { LabelList, Funnel, FunnelChart, Tooltip } from 'recharts';
import SearchJob from '@splunk/search-job';
import Card from '@splunk/react-ui/Card';
import Heading from '@splunk/react-ui/Heading';

const mySearchJob = SearchJob.create({
    // create a search job that searches against our lookup
    search: 'index=main | stats latest(market_cap) as market_cap by name | dedup name | eval total_market_cap=market_cap | stats sum(total_market_cap) as total_market_cap | table total_market_cap ',
    earliest_time: '-60m@m',
    latest_time: 'now',
});

const TotalMarketCap = () => {
    const [totalMarketCap, setTotalMarketCap] = useState(0); // create our state variable to store our data, only need one for this example

    useEffect(() => {
        // fetch data after our first render with a useEffect hook
        const subscription = mySearchJob.getResults().subscribe((results) => {
            // subscribe to our search results, since results.results is in the form we need, no need to do anything else
            const marketCap = results.results[0]['total_market_cap'];
            setTotalMarketCap(parseInt(marketCap, 10).toLocaleString());
        });

        // clean up function
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <Card>
            <Card.Header title="Total Market Cap" />
            <Card.Body>
                <Heading level={1}>USD ${totalMarketCap}</Heading>
            </Card.Body>
        </Card>
    );
};

export default TotalMarketCap;
