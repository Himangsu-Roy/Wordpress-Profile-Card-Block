import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { SearchControl } from '@wordpress/components';

function MySearchControl({ className, setState }) {
    const [searchInput, setSearchInput] = useState('');
    console.log(searchInput)

    return (
        <SearchControl
            __nextHasNoMarginBottom
            label={__('Search posts')}
            value={searchInput}
            onChange={setSearchInput}
        />
    );
}

export default MySearchControl;