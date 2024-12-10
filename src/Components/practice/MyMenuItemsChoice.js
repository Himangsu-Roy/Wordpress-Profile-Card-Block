import { useState } from 'react';
import { MenuGroup, MenuItemsChoice } from '@wordpress/components';

const MyMenuItemsChoice = () => {
    const [mode, setMode] = useState('visual');
    const choices = [
        {
            value: 'visual',
            label: 'Visual editor',
        },
        {
            value: 'text',
            label: 'Code editor',
        },
    ];

    console.log(mode)

    return (
        <MenuGroup label="Editor">
            <MenuItemsChoice
                choices={choices}
                value={mode}
                onSelect={(newMode) => setMode(newMode)}
            />
        </MenuGroup>
    );
};

export default MyMenuItemsChoice;