import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@splunk/react-ui/Card';
import Heading from '@splunk/react-ui/Heading';
import SearchJob from '@splunk/search-job';
import ArrowUp from '@splunk/react-icons/ArrowUp';
import ArrowDown from '@splunk/react-icons/ArrowDown';

const MarketCapNode = (props) => {
    const marketCapSearch = SearchJob.create({
        // create a search job for market cap
        search: `index=main symbol=${props.coin} | stats latest(market_cap) as market_cap by name | table market_cap`,
        latest_time: 'now',
    });

    const marketCapChangeSearch = SearchJob.create({
        // create a search job for percentage change 24hr
        search: `index=main symbol=${props.coin} | stats latest(market_cap_change_percentage_24h) as percentage_change`,
        latest_time: 'now',
    });

    const [coinMarketCap, setCoinMarketCap] = useState(0);
    const [marketCapChange, setMarketCapChange] = useState(0);

    useEffect(() => {
        // fetch data after our first render with a useEffect hook
        const marketCapSearchSub = marketCapSearch.getResults().subscribe((results) => {
            const marketCap = results.results[0].market_cap;
            setCoinMarketCap(parseInt(marketCap, 10).toLocaleString());
        });

        const marketCapChangeSearchSub = marketCapChangeSearch.getResults().subscribe((results) => {
            const marketCapChangeRes = results.results[0].percentage_change;
            setMarketCapChange(parseFloat(marketCapChangeRes, 10).toFixed(3));
        });

        // clean up function
        return () => {
            marketCapSearchSub.unsubscribe();
            marketCapChangeSearchSub.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Card style={{ minWidth: 240 }}>
            <Card.Header
                title={
                    <>
                        {`${props.coin} Market Cap `}
                        {marketCapChange > 0 ? (
                            <ArrowUp style={{ color: 'green' }} />
                        ) : (
                            <ArrowDown style={{ color: 'red' }} />
                        )}

                        {marketCapChange > 0 ? (
                            <p style={{ color: 'green' }}>{marketCapChange}%</p>
                        ) : (
                            <p style={{ color: 'red' }}>{marketCapChange}%</p>
                        )}
                    </>
                }
            />
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
