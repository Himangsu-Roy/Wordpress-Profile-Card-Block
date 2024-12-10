import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import { formatLowercase, formatUppercase } from '@wordpress/icons';
import { useState } from 'react';

function MyToggleGroupControlOptionIcon() {
    // Step 1: Add a state variable to track the selected value
    const [selectedValue, setSelectedValue] = useState(null);


    // Step 2: Handle change in the selected value
    const handleSelect = (newValue) => {
        setSelectedValue(newValue);
        console.log('Selected Value:', newValue); // Log the selected value
    };

    return (
        <ToggleGroupControl __nextHasNoMarginBottom __next40pxDefaultSize>
            <ToggleGroupControlOptionIcon
                value="uppercase"
                icon={formatUppercase}
                label="Uppercase"
                // Step 3: Add the onChange handler
                onChange={() => handleSelect('uppercase')}
            />
            <ToggleGroupControlOptionIcon
                value="lowercase"
                icon={formatLowercase}
                label="Lowercase"
                // Step 3: Add the onChange handler
                onChange={() => handleSelect('lowercase')}
            />
        </ToggleGroupControl>
    );
}

export default MyToggleGroupControlOptionIcon;
