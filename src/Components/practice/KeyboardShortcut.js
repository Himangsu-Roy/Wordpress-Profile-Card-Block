import { useState } from 'react';
import { KeyboardShortcuts } from '@wordpress/components';

const MyKeyboardShortcut = () => {
    const [isAllSelected, setIsAllSelected] = useState(false);
    const selectAll = () => {
        setIsAllSelected(true);
    };

    console.log(isAllSelected)

    return (
        <div>
            <KeyboardShortcuts
                shortcuts={{
                    'mod+a': selectAll,
                }}
            />
            [cmd/ctrl + A] Combination pressed? {isAllSelected ? 'Yes' : 'No'}
        </div>
    );
};

export default MyKeyboardShortcut