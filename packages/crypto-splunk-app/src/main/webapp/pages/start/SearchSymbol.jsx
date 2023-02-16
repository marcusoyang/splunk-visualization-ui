import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { _ } from '@splunk/ui-utils/i18n';
import SearchJob from '@splunk/search-job';
import Select from '@splunk/react-ui/Select';

const SearchSymbol = (props) => {
    const [fullCount, setFullCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [val, setVal] = useState('');

    const mySearchJob = SearchJob.create({
        // create a search job for every unique symbol
        search: `index=main | stats count by symbol`,
        latest_time: 'now',
    });

    useEffect(() => {
        // updateOptions();
        setIsLoading(true);
        const subscription = mySearchJob.getResults().subscribe((results) => {
            // subscribe to our search results, since results.results is in the form we need, no need to do anything else
            const symbols = results.results.map((result) => result.symbol.toUpperCase());
            setFullCount(symbols.length);
            setIsLoading(false);
            setOptions(symbols);
            setFilteredOptions(symbols);
        });

        // clean up function
        return () => {
            subscription.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // when the user selects a symbol
    const handleChange = (e, { value }) => {
        props.setCoin(value);
        setVal(value);
    };

    // when the user types in the search box
    const handleFilterChange = (e, { keyword }) => {
        setVal(keyword);
        setIsLoading(true);
        const filtered = options.filter((symbol) =>
            symbol.toUpperCase().startsWith(keyword.toUpperCase())
        );
        setFilteredOptions(filtered);
        setIsLoading(false);
    };

    // create selectable options
    const createOption = (symbol, isSelected = false) => (
        <Select.Option
            label={symbol}
            value={symbol}
            key={isSelected ? 'selected' : symbol}
            hidden={!!isSelected}
            matchRanges={symbol.matchRanges}
        />
    );

    const generateOptions = () => {
        let selectedOption;
        if (val && options.includes(val)) {
            selectedOption = createOption(val, true);
        }

        if (isLoading) {
            // Only return the selected item
            return selectedOption;
        }

        return filteredOptions.map((symbol) => createOption(symbol));
    };

    const footerMessage = () => {
        if (fullCount > options.length && !isLoading) {
            return _('%1 of %2 movies')
                .replace('%1', options.length.toString())
                .replace('%2', fullCount.toString());
        }
        return null;
    };

    const displayOptions = generateOptions();
    const footerMessageValue = footerMessage();

    return (
        <Select
            value={val}
            filter="controlled"
            placeholder={_('Select a cryptocurrency...')}
            menuStyle={{ width: 300 }}
            onChange={handleChange}
            onFilterChange={handleFilterChange}
            isLoadingOptions={isLoading}
            footerMessage={footerMessageValue}
        >
            {displayOptions}
        </Select>
    );
};

SearchSymbol.propTypes = {
    setCoin: PropTypes.func.isRequired,
};

export default SearchSymbol;
