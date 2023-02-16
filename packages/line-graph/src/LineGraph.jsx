import React from 'react';
import PropTypes from 'prop-types';
import Line from '@splunk/visualizations/Line';

const LineGraph = (props) => {
    const { data } = props;
    return (
        <Line
            options={{ legendDisplay: 'off' }}
            dataSources={{
                primary: {
                    data,
                },
            }}
        />
    );
};

LineGraph.propTypes = {
    data: PropTypes.object.isRequired,
};

export default LineGraph;
