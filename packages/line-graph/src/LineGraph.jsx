import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@splunk/react-ui/Button';
import Line from '@splunk/visualizations/Line';
import { StyledContainer, StyledGreeting } from './LineGraphStyles';

const LineGraph = (props) => {
    const data = props.data
        ? props.data
        : {
              fields: [
                  {
                      name: '_time',
                  },
                  {
                      name: 'count',
                      type_special: 'count',
                  },
                  {
                      name: 'percent',
                      type_special: 'percent',
                  },
              ],
              columns: [
                  [
                      '2018-05-02T18:10:46.000-07:00',
                      '2018-05-02T18:11:47.000-07:00',
                      '2018-05-02T18:12:48.000-07:00',
                      '2018-05-02T18:13:49.000-07:00',
                      '2018-05-02T18:15:50.000-07:00',
                  ],
                  ['600', '525', '295', '213', '122', '19'],
                  ['87.966380', '50.381304', '60.023780', '121.183272', '70.250513', '90.194752'],
              ],
          };

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
    data: PropTypes.object,
};

export default LineGraph;
