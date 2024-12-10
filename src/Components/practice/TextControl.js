import { useState } from 'react';
import { TextControl } from '@wordpress/components';

const MyTextControl = () => {
    const [className, setClassName] = useState('');
    console.log(className)

    return (
        <TextControl
            __nextHasNoMarginBottom
            __next40pxDefaultSize
            label="Additional CSS Class"
            value={className}
            onChange={(value) => setClassName(value)}
        />
    );
};

export default MyTextControl;