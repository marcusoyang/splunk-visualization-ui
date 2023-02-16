import React from 'react';

import layout from '@splunk/react-page';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import CardLayout from '@splunk/react-ui/CardLayout';
import Card from '@splunk/react-ui/Card';

import { StyledContainer, StyledGreeting } from './StartStyles';
import TotalMarketCap from './TotalMarketCap';
import LineGraphList from './LineGraphList';
import MarketCapList from './MarketCapList';
import GraphSelect from './GraphSelect';

getUserTheme()
    .then((theme) => {
        layout(
            <SplunkThemeProvider family="enterprise" colorScheme="light" density="comfortable">
                <StyledContainer>
                    <StyledGreeting>Welcome to the cryptocurrency dashboard!</StyledGreeting>
                    {/* <div>Your component will appear below.</div> */}
                    <CardLayout style={{ maxWidth: 1600 }}>
                        <Card style={{ minWidth: 300 }}>
                            <TotalMarketCap />
                        </Card>
                        <MarketCapList />
                        <LineGraphList />
                        <Card style={{ minWidth: 300 }}>
                            <GraphSelect />
                        </Card>
                    </CardLayout>
                </StyledContainer>
            </SplunkThemeProvider>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        layout(<div>{e.message}</div>);
    });
