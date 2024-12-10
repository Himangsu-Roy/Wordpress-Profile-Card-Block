import { useState } from 'react';
import { MenuItem } from '@wordpress/components';

const MyMenuItem = () => {
    const [isActive, setIsActive] = useState(true);
    console.log(isActive)

    return (
        <MenuItem
            icon={isActive ? 'yes' : 'no'}
            isSelected={isActive}
            onClick={() => setIsActive((state) => !state)}
        >
            Toggle
        </MenuItem>
    );
};

export default MyMenuItem;