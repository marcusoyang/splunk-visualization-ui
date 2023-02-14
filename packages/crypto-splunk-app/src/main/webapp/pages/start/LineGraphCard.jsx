import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import { LabelList, Funnel, FunnelChart, Tooltip } from 'recharts';
import Markdown from '@splunk/react-ui/Markdown';
import Table from '@splunk/react-ui/Table';
import Card from '@splunk/react-ui/Card';
import SearchJob from '@splunk/search-job';
import LineGraph from '@splunk/line-graph';
import { StyledContainer } from './StartStyles';

const LineGraphCard = (props) => {
    const mySearchJob = SearchJob.create({
        // create a search job that searches against our lookup
        search: `index=main symbol=${props.coin}`,
        latest_time: 'now',
    });

    const [columns, setColumns] = useState([]);

    const name = props.type === 'market_cap' ? 'Market Cap' : 'Price';

    const fields = [
        {
            name: 'Time',
        },
        {
            name,
            type_special: props.type,
        },
    ];

    useEffect(() => {
        // fetch data after our first render with a useEffect hook
        const subscription = mySearchJob.getResults().subscribe((results) => {
            // subscribe to our search results, since results.results is in the form we need, no need to do anything else
            const times = results.results.map((result) => result._time).reverse();
            const marketCap = results.results
                .map((result) => JSON.parse(result._raw)[props.type])
                .reverse();

            setColumns([times, marketCap]);
        });

        // clean up function
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <Card style={{ minWidth: 700 }}>
            <Card.Header title={`${props.coin} ${name}`} />
            <LineGraph data={{ fields, columns }} />
        </Card>
    );
};

LineGraphCard.propTypes = {
    coin: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default LineGraphCard;