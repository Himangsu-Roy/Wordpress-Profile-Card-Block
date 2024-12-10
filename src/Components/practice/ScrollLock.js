import { useState } from 'react';
import { ScrollLock, Button } from '@wordpress/components';

const MyScrollLock = () => {
    const [isScrollLocked, setIsScrollLocked] = useState(false);

    console.log(isScrollLocked)

    const toggleLock = () => {
        setIsScrollLocked((locked) => !locked);
    };

    return (
        <div>
            <Button variant="secondary" onClick={toggleLock}>
                Toggle scroll lock
            </Button>
            {isScrollLocked && <ScrollLock />}
            <p>
                Scroll locked:
                <strong>{isScrollLocked ? 'Yes' : 'No'}</strong>
            </p>
        </div>
    );
};

export default MyScrollLock;