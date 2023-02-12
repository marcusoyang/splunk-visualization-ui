import React from 'react';

import layout from '@splunk/react-page';
import TotalMarketCap from '@splunk/total-market-cap';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <StyledGreeting>Hello, from inside CryptoSplunkApp!</StyledGreeting>
                <div>Your component will appear below.</div>
                <TotalMarketCap name="from inside TotalMarketCap" />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
